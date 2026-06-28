<template>
  <div class="site-shell">
    <header class="site-header">
      <nav class="site-nav" aria-label="メインナビゲーション">
        <NuxtLink class="brand" to="/" aria-label="ほうき鯖 トップページ">
          <span class="brand-mark" aria-hidden="true">✦</span><span>ほうき鯖</span>
        </NuxtLink>
        <div class="nav-links">
          <NuxtLink to="/#about">ほうき鯖について</NuxtLink>
          <NuxtLink to="/#join">参加方法</NuxtLink>
          <NuxtLink class="nav-cta" to="/#community">コミュニティ</NuxtLink>
        </div>
      </nav>
    </header>

    <main><NuxtPage /></main>

    <footer class="site-footer">
      <NuxtLink class="footer-brand" to="/">✦ ほうき鯖</NuxtLink>
      <p>Java版 Minecraft サーバー</p>
      <div class="footer-links">
        <NuxtLink to="/terms">利用規約</NuxtLink>
        <NuxtLink to="/privacy">プライバシーポリシー</NuxtLink>
      </div>
      <small>© {{ new Date().getFullYear() }} planet★箒星</small>
    </footer>
  </div>
</template>

<style lang="scss">
:root {
  --night: #070b18;
  --surface: rgba(18, 26, 49, 0.76);
  --line: rgba(255, 255, 255, 0.11);
  --text: #f5f7ff;
  --muted: #aeb9d1;
  --star: #ffd66b;
  --cyan: #69e2dc;
  --purple: #9f8cff;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  color: var(--text);
  background: var(--night);
  font-family: "Noto Sans JP", "Yu Gothic", "Hiragino Kaku Gothic ProN", sans-serif;
  -webkit-font-smoothing: antialiased;
}
a { color: inherit; }
.site-shell { min-height: 100vh; overflow: hidden; }
.site-header { position: absolute; z-index: 20; top: 0; width: 100%; }
.site-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: min(1180px, calc(100% - 40px));
  margin: 0 auto;
  padding: 24px 0;
}
.brand, .footer-brand {
  display: inline-flex;
  gap: 10px;
  align-items: center;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-decoration: none;
}
.brand-mark {
  color: var(--star);
  font-size: 1.4rem;
  filter: drop-shadow(0 0 8px rgba(255, 214, 107, 0.7));
}
.nav-links { display: flex; gap: 32px; align-items: center; }
.nav-links a {
  color: #d9e0f0;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s ease, background 0.2s ease;
}
.nav-links a:hover { color: #fff; }
.nav-links .nav-cta {
  padding: 10px 18px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.07);
}
.site-footer {
  display: grid;
  justify-items: center;
  gap: 14px;
  padding: 58px 24px 42px;
  border-top: 1px solid var(--line);
  color: var(--muted);
  background: #060914;
  text-align: center;
}
.site-footer p { margin: 0; font-size: 0.85rem; }
.footer-links { display: flex; gap: 24px; margin: 10px 0; }
.footer-links a { color: var(--muted); font-size: 0.82rem; text-decoration: none; }
.footer-links a:hover { color: #fff; }

@media (max-width: 720px) {
  .site-nav { width: min(100% - 28px, 1180px); padding: 18px 0; }
  .nav-links a:not(.nav-cta) { display: none; }
  .nav-links .nav-cta { padding: 8px 14px; font-size: 0.8rem; }
}
</style>
