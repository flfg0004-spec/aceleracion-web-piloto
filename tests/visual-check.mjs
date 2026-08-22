// Design-Target Loop — gate determinista (pixel-diff impl vs target).
// Uso: node tests/visual-check.mjs [dashboard]
// Salida: reports/visual-report.json + shots/{target,impl,diff}.png
import { chromium } from '@playwright/test';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(here, '..');
const pageName = process.argv[2] || 'dashboard';

const TARGET = path.join(root, 'design', 'targets', pageName, 'target.html');
const IMPL = path.join(root, 'design', 'impl.html');
const SHOTS = path.join(root, 'design', 'shots');
const REPORTS = path.join(root, 'reports');
fs.mkdirSync(SHOTS, { recursive: true });
fs.mkdirSync(REPORTS, { recursive: true });

const THRESHOLD_MATCH_PCT = 95; // convergencia >= 95% pixels iguales
const PIXEL_THRESHOLD = 0.12;   // tolerancia anti-antialias

async function shot(browser, file) {
  const page = await browser.newPage({ viewport: { width: 1536, height: 1024 } });
  await page.goto('file:///' + file.replace(/\\/g, '/'));
  await page.waitForTimeout(250);
  const png = await page.screenshot();
  await page.close();
  return PNG.sync.read(png);
}

const browser = await chromium.launch();
const imgTarget = await shot(browser, TARGET);
const imgImpl = await shot(browser, IMPL);
await browser.close();

const { width, height } = imgTarget;
if (imgImpl.width !== width || imgImpl.height !== height) {
  console.error(`FAIL dimensiones: target ${width}x${height} vs impl ${imgImpl.width}x${imgImpl.height}`);
  process.exit(1);
}
const diff = new PNG({ width, height });
const diffPixels = pixelmatch(imgTarget.data, imgImpl.data, diff.data, width, height, {
  threshold: PIXEL_THRESHOLD,
});
const total = width * height;
const matchPct = +(100 * (1 - diffPixels / total)).toFixed(2);

fs.writeFileSync(path.join(SHOTS, 'target.png'), PNG.sync.write(imgTarget));
fs.writeFileSync(path.join(SHOTS, 'impl.png'), PNG.sync.write(imgImpl));
fs.writeFileSync(path.join(SHOTS, 'diff.png'), PNG.sync.write(diff));

// Regiones divergentes (grilla 8x8 para localizar deltas)
const cols = 8, rows = 8;
const cw = Math.floor(width / cols), ch = Math.floor(height / rows);
const regions = [];
for (let ry = 0; ry < rows; ry++) {
  for (let rx = 0; rx < cols; rx++) {
    let bad = 0;
    for (let y = ry * ch; y < (ry + 1) * ch; y++) {
      for (let x = rx * cw; x < (rx + 1) * cw; x++) {
        const i = (y * width + x) * 4;
        if (Math.abs(imgTarget.data[i] - imgImpl.data[i]) > 24 ||
            Math.abs(imgTarget.data[i+1] - imgImpl.data[i+1]) > 24 ||
            Math.abs(imgTarget.data[i+2] - imgImpl.data[i+2]) > 24) bad++;
      }
    }
    if (bad / (cw * ch) > 0.05) regions.push({ region: `${rx},${ry}`, divergent_pct: +((100*bad/(cw*ch)).toFixed(1)) });
  }
}
regions.sort((a,b)=>b.divergent_pct-a.divergent_pct);

const report = {
  schema: 'aceleracion-web.visual-report/v1',
  page: pageName,
  date: new Date().toISOString(),
  dimensions: { width, height },
  total_pixels: total,
  different_pixels: diffPixels,
  match_pct: matchPct,
  threshold_match_pct: THRESHOLD_MATCH_PCT,
  converged: matchPct >= THRESHOLD_MATCH_PCT,
  top_divergent_regions: regions.slice(0, 6),
};
const reportPath = path.join(REPORTS, 'visual-report.json');
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
console.log(`match=${matchPct}% | converged=${report.converged} | report -> ${path.relative(root, reportPath)}`);
process.exit(report.converged ? 0 : 1);