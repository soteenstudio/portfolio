import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

const ROOT_DIR = process.cwd();
const EXTENSIONS = new Set([".ts", ".tsx"]);
const IGNORED_DIRS = new Set([
  "node_modules",
  ".next",
  ".git",
  ".vercel",
  ".turbo",
  "dist",
  "out",
  "build",
  "coverage",
  "scripts",
]);

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (IGNORED_DIRS.has(entry.name) || entry.name.startsWith(".")) {
        continue;
      }
      walk(path.join(dir, entry.name), files);
    } else if (
      EXTENSIONS.has(path.extname(entry.name)) &&
      !entry.name.endsWith(".d.ts")
    ) {
      files.push(path.join(dir, entry.name));
    }
  }
  return files;
}

function stripCommentsFromCode(code, filePath) {
  const printer = ts.createPrinter({
    removeComments: true,
    newLine: ts.NewLineKind.LineFeed,
  });

  const sourceFile = ts.createSourceFile(
    filePath,
    code,
    ts.ScriptTarget.Latest,
    true,
    filePath.endsWith(".tsx") ? ts.ScriptKind.TSX : ts.ScriptKind.TS
  );

  return printer.printFile(sourceFile);
}

const files = walk(ROOT_DIR);
let changedCount = 0;

for (const file of files) {
  const original = fs.readFileSync(file, "utf8");
  const cleaned = stripCommentsFromCode(original, file);
  const normalized = cleaned.replace(/\n{3,}/g, "\n\n").trimStart();

  if (normalized !== original) {
    fs.writeFileSync(file, normalized, "utf8");
    changedCount++;
    console.log("Cleaned:", path.relative(ROOT_DIR, file));
  }
}

console.log(`Done. Scanned ${files.length} file(s), updated ${changedCount} file(s).`);