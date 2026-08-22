import { saludo } from './greeting.ts';

const app = document.querySelector<HTMLDivElement>('#app');

if (app) {
  app.innerHTML = `
    <header style="padding:16px 24px;border-bottom:1px solid #334155">
      <strong style="color:#3b82f6;letter-spacing:2px">ACME DEVOPS</strong>
    </header>
    <main style="padding:24px">
      <h1 style="color:#f1f5f9">${saludo('piloto')}</h1>
    </main>
  `;
}
