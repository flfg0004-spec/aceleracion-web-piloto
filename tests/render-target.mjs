// Renderiza generator-sim.html a source.png (1536x1024) — simula la salida del generador.
import { chromium } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';

const here = path.dirname(fileURLToPath(import.meta.url));
const targetDir = path.join(here, '..', 'design', 'targets', 'dashboard');

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1536, height: 1024 } });
await page.goto('file:///' + path.join(targetDir, 'generator-sim.html').replace(/\\/g, '/'));
await page.waitForTimeout(300);
await page.screenshot({ path: path.join(targetDir, 'source.png') });
await browser.close();
console.log('source.png generado');
