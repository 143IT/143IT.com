import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const scanDirs = ["app", "components"];
const extensions = new Set([".tsx", ".ts", ".mdx", ".md"]);
const ignoredPrefixes = [
  "http://",
  "https://",
  "mailto:",
  "tel:",
  "#",
  "/api/",
  "/_next/",
];
const publicAssetExtensions = new Set([
  ".avif",
  ".css",
  ".gif",
  ".ico",
  ".jpeg",
  ".jpg",
  ".js",
  ".json",
  ".png",
  ".svg",
  ".webp",
  ".xml",
]);

function walk(dir) {
  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      return walk(fullPath);
    }
    return extensions.has(path.extname(entry.name)) ? [fullPath] : [];
  });
}

function routeExists(routePath) {
  if (routePath === "/") {
    return fs.existsSync(path.join(root, "app", "page.tsx"));
  }

  const cleanPath = routePath.split("#")[0].split("?")[0].replace(/\/$/, "");
  const extension = path.extname(cleanPath);

  if (publicAssetExtensions.has(extension)) {
    return fs.existsSync(path.join(root, "public", cleanPath));
  }

  const appPath = path.join(root, "app", cleanPath);

  return [
    path.join(appPath, "page.tsx"),
    path.join(appPath, "page.mdx"),
    path.join(appPath, "route.ts"),
  ].some((candidate) => fs.existsSync(candidate));
}

function extractLinks(source) {
  const patterns = [
    /href=["']([^"']+)["']/g,
    /canonical:\s*["']([^"']+)["']/g,
    /url:\s*["'](https:\/\/143it\.com[^"']*)["']/g,
  ];

  return patterns.flatMap((pattern) => {
    const matches = [];
    let match;
    while ((match = pattern.exec(source)) !== null) {
      matches.push(match[1]);
    }
    return matches;
  });
}

const files = scanDirs.flatMap((dir) => walk(path.join(root, dir)));
const missing = [];
const checked = new Set();

for (const file of files) {
  const source = fs.readFileSync(file, "utf8");
  for (const rawLink of extractLinks(source)) {
    const normalized = rawLink.startsWith("https://143it.com")
      ? rawLink.replace("https://143it.com", "") || "/"
      : rawLink;

    if (!normalized.startsWith("/")) {
      continue;
    }
    if (ignoredPrefixes.some((prefix) => normalized.startsWith(prefix))) {
      continue;
    }

    const routePath = normalized.split("#")[0].split("?")[0] || "/";
    checked.add(routePath);

    if (!routeExists(routePath)) {
      missing.push({
        file: path.relative(root, file),
        link: rawLink,
      });
    }
  }
}

if (missing.length > 0) {
  console.error("Missing internal routes:");
  for (const item of missing) {
    console.error(`- ${item.file}: ${item.link}`);
  }
  process.exit(1);
}

console.log(`Checked ${checked.size} internal routes. No missing routes found.`);
