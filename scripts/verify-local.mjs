const configuredUrl = new URL(
  process.env.VERIFY_LOCAL_URL || "http://localhost:3000",
);
const origin = configuredUrl.origin;
const rootUrl = `${origin}/`;
const baseUrl = `${origin}/de`;

async function fetchText(url) {
  const response = await fetch(url);
  const text = await response.text();

  return {
    ok: response.ok,
    status: response.status,
    text,
    url: response.url,
  };
}

function fail(message) {
  console.error(`VERIFY FAILED: ${message}`);
  process.exit(1);
}

function requireHeader(response, name, expected) {
  const value = response.headers.get(name);

  if (!value) {
    fail(`Missing security header: ${name}`);
  }

  if (expected && !expected.test(value)) {
    fail(`Unexpected ${name} value: ${value}`);
  }

  return value;
}

function findCssAssets(html) {
  const assets = new Set();
  const hrefPattern = /href=["']([^"']+\.css(?:\?[^"']*)?)["']/gi;
  const nextCssPattern = /\/_next\/static\/css\/[^"'<> ]+\.css(?:\?[^"'<> ]*)?/gi;

  for (const match of html.matchAll(hrefPattern)) {
    assets.add(match[1]);
  }

  for (const match of html.matchAll(nextCssPattern)) {
    assets.add(match[0]);
  }

  return [...assets];
}

function toAbsoluteUrl(asset) {
  return new URL(asset.replace(/&amp;/g, "&"), baseUrl).toString();
}

const rootResponse = await fetch(rootUrl, { redirect: "manual" });
const rootLocation = rootResponse.headers.get("location");

if (![307, 308].includes(rootResponse.status)) {
  fail(`Root route returned HTTP ${rootResponse.status} instead of a redirect`);
}

if (!rootLocation || new URL(rootLocation, rootUrl).pathname !== "/de") {
  fail(`Root route does not redirect to /de: ${rootLocation ?? "no location"}`);
}

requireHeader(rootResponse, "content-security-policy", /default-src 'self'/);
requireHeader(rootResponse, "strict-transport-security", /max-age=63072000/);
requireHeader(rootResponse, "x-content-type-options", /^nosniff$/i);
requireHeader(rootResponse, "x-frame-options", /^DENY$/i);

const localeChecks = [
  ["de", "Websites, die"],
  ["en", "Websites that"],
  ["ru", "Сайты, которые"],
];

for (const [locale, expectedCopy] of localeChecks) {
  const localePage = await fetchText(`${origin}/${locale}`);

  if (!localePage.ok) {
    fail(`/${locale} returned HTTP ${localePage.status}`);
  }

  if (!localePage.text.includes(expectedCopy)) {
    fail(`/${locale} does not contain its localized hero copy`);
  }
}

const page = await fetchText(baseUrl);

if (!page.ok) {
  fail(`HTML returned HTTP ${page.status}`);
}

if (!page.text.includes("KPTS WERK")) {
  fail("HTML does not contain KPTS WERK");
}

const pageResponse = await fetch(baseUrl, { redirect: "manual" });
const contentSecurityPolicy = requireHeader(
  pageResponse,
  "content-security-policy",
  /default-src 'self'/,
);

for (const requiredDirective of [
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "upgrade-insecure-requests",
]) {
  if (!contentSecurityPolicy.includes(requiredDirective)) {
    fail(`CSP is missing required directive: ${requiredDirective}`);
  }
}

if (contentSecurityPolicy.includes("'unsafe-eval'")) {
  fail("CSP must not allow unsafe-eval");
}

requireHeader(pageResponse, "strict-transport-security", /max-age=63072000/);
requireHeader(pageResponse, "x-content-type-options", /^nosniff$/i);
requireHeader(
  pageResponse,
  "referrer-policy",
  /^strict-origin-when-cross-origin$/i,
);
requireHeader(pageResponse, "permissions-policy", /camera=\(\)/);
requireHeader(pageResponse, "x-frame-options", /^DENY$/i);
requireHeader(pageResponse, "cross-origin-opener-policy", /^same-origin$/i);
requireHeader(pageResponse, "cross-origin-resource-policy", /^same-origin$/i);

if (pageResponse.headers.has("x-powered-by")) {
  fail("X-Powered-By must not be exposed");
}

for (const sensitivePath of [
  "/.env",
  "/.git/config",
  "/package.json",
  "/package-lock.json",
  "/next.config.mjs",
  "/backup.zip",
]) {
  const response = await fetch(`${origin}${sensitivePath}`, {
    redirect: "manual",
  });

  if (response.status !== 404) {
    fail(`${sensitivePath} returned HTTP ${response.status} instead of 404`);
  }
}

for (const assetPath of [
  "/videos/kpts-werk-office-mobile.mp4",
  "/videos/kpts-werk-office-desktop.mp4",
  "/icon.svg",
]) {
  const response = await fetch(`${origin}${assetPath}`, { method: "HEAD" });

  if (!response.ok) {
    fail(`${assetPath} returned HTTP ${response.status}`);
  }

  requireHeader(response, "x-content-type-options", /^nosniff$/i);
}

const cssAssets = findCssAssets(page.text);

if (cssAssets.length === 0) {
  fail("HTML does not reference any CSS assets");
}

const firstCssUrl = toAbsoluteUrl(cssAssets[0]);
const css = await fetchText(firstCssUrl);

if (!css.ok) {
  fail(`CSS asset returned HTTP ${css.status}: ${firstCssUrl}`);
}

const hasTailwindUtilities =
  css.text.includes(".min-h-screen") ||
  css.text.includes("min-height:100vh") ||
  css.text.includes("min-height: 100vh");
const hasCustomTheme =
  css.text.includes("#05070b") ||
  css.text.includes(".hero-core") ||
  css.text.includes(".content-panel");

if (!hasTailwindUtilities) {
  fail("CSS asset does not appear to contain Tailwind utilities");
}

if (!hasCustomTheme) {
  fail("CSS asset does not contain KPTS WERK custom dark theme styles");
}

console.log("HTML OK");
console.log("CSS OK");
console.log("Locales OK");
console.log("Security headers OK");
console.log("Sensitive paths OK");
console.log("Static assets OK");
console.log("Site OK");
