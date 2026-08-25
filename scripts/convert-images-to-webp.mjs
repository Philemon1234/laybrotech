import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const projectRoot = process.cwd();
const assetsRoot = path.join(projectRoot, 'src', 'assets');
const deleteOriginals = process.argv.includes('--delete-originals');
const rasterExtensions = new Set(['.png', '.jpg', '.jpeg']);
const skipNames = new Set(['LaybroTech-Logo.png']);

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

function percentSaved(before, after) {
  if (!before) return '0%';
  return `${Math.round(((before - after) / before) * 100)}%`;
}

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

function maxWidthFor(relativePath, width) {
  const normal = relativePath.replaceAll('\\', '/');

  if (normal.includes('/Brands/') || normal.includes('/technologies/')) return Math.min(width, 700);
  if (normal.includes('/Portfolio/')) return Math.min(width, 1400);
  if (normal.includes('/services/')) return Math.min(width, 1400);
  if (normal.includes('hero')) return Math.min(width, 2000);
  if (normal.includes('Website Redesign') || normal.includes('Business Websites') || normal.includes('E-commerce') || normal.includes('Landing Pages')) return Math.min(width, 1600);
  if (normal.includes('Performance') || normal.includes('Small Businesses') || normal.includes('Online Stores') || normal.includes('Schools') || normal.includes('Agencies') || normal.includes('Growing')) return Math.min(width, 1600);

  return Math.min(width, 1400);
}

function qualityFor(relativePath) {
  const normal = relativePath.replaceAll('\\', '/');
  if (normal.includes('/Portfolio/') || normal.includes('/technologies/') || normal.includes('/Brands/')) return 88;
  if (normal.includes('Website Redesign') || normal.includes('Business Websites') || normal.includes('E-commerce') || normal.includes('Landing Pages')) return 90;
  if (normal.endsWith('.png')) return 88;
  return 86;
}

const files = (await walk(assetsRoot)).filter((file) => {
  const extension = path.extname(file).toLowerCase();
  return rasterExtensions.has(extension) && !skipNames.has(path.basename(file));
});

const results = [];
let totalBefore = 0;
let totalAfter = 0;
let resizedCount = 0;

for (const file of files) {
  const relativePath = path.relative(projectRoot, file);
  const parsed = path.parse(file);
  const output = path.join(parsed.dir, `${parsed.name}.webp`);
  const stats = await fs.stat(file);
  const image = sharp(file, { animated: false });
  const metadata = await image.metadata();
  const sourceWidth = metadata.width ?? 0;
  const sourceHeight = metadata.height ?? 0;
  const maxWidth = maxWidthFor(relativePath, sourceWidth || Number.MAX_SAFE_INTEGER);
  const shouldResize = sourceWidth > maxWidth;
  const quality = qualityFor(relativePath);

  let pipeline = sharp(file, { animated: false }).rotate();
  if (shouldResize) {
    pipeline = pipeline.resize({ width: maxWidth, withoutEnlargement: true });
    resizedCount += 1;
  }

  await pipeline.webp({ quality, effort: 5 }).toFile(output);
  const outputStats = await fs.stat(output);

  if (deleteOriginals) {
    await fs.rm(file);
  }

  totalBefore += stats.size;
  totalAfter += outputStats.size;

  results.push({
    source: relativePath.replaceAll('\\', '/'),
    output: path.relative(projectRoot, output).replaceAll('\\', '/'),
    width: sourceWidth,
    height: sourceHeight,
    resized: shouldResize,
    maxWidth,
    quality,
    before: stats.size,
    after: outputStats.size,
    saved: stats.size - outputStats.size,
  });
}

results.sort((a, b) => b.before - a.before);

const reportDir = path.join(projectRoot, 'scripts', '.cache');
await fs.mkdir(reportDir, { recursive: true });
await fs.writeFile(path.join(reportDir, 'webp-conversion-report.json'), JSON.stringify({ totalBefore, totalAfter, resizedCount, convertedCount: results.length, results }, null, 2));

console.log(`Converted ${results.length} images to WebP.`);
console.log(`Resized ${resizedCount} oversized images.`);
console.log(`Before: ${formatBytes(totalBefore)}`);
console.log(`After:  ${formatBytes(totalAfter)}`);
console.log(`Saved:  ${formatBytes(totalBefore - totalAfter)} (${percentSaved(totalBefore, totalAfter)})`);
console.log('Largest savings:');
for (const item of results.slice(0, 15)) {
  console.log(`- ${item.source}: ${formatBytes(item.before)} -> ${formatBytes(item.after)} (${percentSaved(item.before, item.after)})${item.resized ? ` resized to ${item.maxWidth}px` : ''}`);
}