const baseUrl = process.env.VERIFY_LOCAL_URL || "http://localhost:3000";

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

const page = await fetchText(baseUrl);

if (!page.ok) {
  fail(`HTML returned HTTP ${page.status}`);
}

if (!page.text.includes("DIMICH DIGITAL")) {
  fail("HTML does not contain DIMICH DIGITAL");
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
  fail("CSS asset does not contain DIMICH DIGITAL custom dark theme styles");
}

console.log("HTML OK");
console.log("CSS OK");
console.log("Site OK");
