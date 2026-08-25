import fs from 'node:fs/promises';
import path from 'node:path';

const projectRoot = process.cwd();
const srcRoot = path.join(projectRoot, 'src');
const textExtensions = new Set(['.ts', '.tsx', '.js', '.jsx', '.css', '.scss']);
const rasterExtensions = ['.png', '.jpg', '.jpeg'];

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const absolute = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await walk(absolute));
    if (entry.isFile()) files.push(absolute);
  }
  return files;
}

const files = (await walk(srcRoot)).filter((file) => textExtensions.has(path.extname(file).toLowerCase()));
const assetFiles = (await walk(path.join(projectRoot, 'src', 'assets'))).filter((file) => path.extname(file).toLowerCase() === '.webp');
const replacements = new Map();

for (const webp of assetFiles) {
  const parsed = path.parse(webp);
  for (const extension of rasterExtensions) {
    const original = path.join(parsed.dir, parsed.name + extension);
    try {
      await fs.stat(original);
      const oldRelative = path.relative(srcRoot, original).replaceAll('\\', '/');
      const newRelative = path.relative(srcRoot, webp).replaceAll('\\', '/');
      replacements.set(`@/${oldRelative}`, `@/${newRelative}`);
      replacements.set(oldRelative, newRelative);
    } catch {}
  }
}

let changed = 0;
for (const file of files) {
  let text = await fs.readFile(file, 'utf8');
  let next = text;
  for (const [from, to] of replacements) {
    next = next.split(from).join(to);
  }
  if (next !== text) {
    await fs.writeFile(file, next);
    changed += 1;
    console.log(`Updated ${path.relative(projectRoot, file).replaceAll('\\', '/')}`);
  }
}

console.log(`Updated ${changed} source files.`);