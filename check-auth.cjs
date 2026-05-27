const { chromium } = require('playwright')
async function main() {
  const browser = await chromium.launch()

  // --- Cena 1: tela de login (sessão limpa) ---
  const ctx1 = await browser.newContext()
  const p1 = await ctx1.newPage()
  await p1.setViewportSize({ width: 1280, height: 900 })
  await p1.goto('http://localhost:5173/?admin')
  await p1.waitForLoadState('networkidle')
  await p1.screenshot({ path: './exemplos/check-login.png' })

  // --- Cena 2: login com senha errada ---
  await p1.fill('input[type="text"]', 'admin')
  await p1.fill('input[type="password"]', 'senhaerrada')
  await p1.click('button[type="submit"]')
  await p1.waitForTimeout(400)
  await p1.screenshot({ path: './exemplos/check-login-erro.png' })
  await ctx1.close()

  // --- Cena 3: login correto → painel aberto ---
  const ctx2 = await browser.newContext()
  const p2 = await ctx2.newPage()
  await p2.setViewportSize({ width: 1280, height: 900 })
  await p2.goto('http://localhost:5173/?admin')
  await p2.waitForLoadState('networkidle')
  await p2.fill('input[type="text"]', 'admin')
  await p2.fill('input[type="password"]', 'amortemax2025')
  await p2.click('button[type="submit"]')
  await p2.waitForTimeout(400)
  await p2.screenshot({ path: './exemplos/check-admin-auth.png' })
  await ctx2.close()

  console.log('OK')
  await browser.close()
}
main().catch(console.error)
