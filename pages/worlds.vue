<template>
  <div class="worlds-page">
    <section class="worlds-hero">
      <div class="worlds-stars" aria-hidden="true" />
      <div class="worlds-orbit" aria-hidden="true"><span>✦</span></div>
      <div class="worlds-hero-copy">
        <p class="worlds-eyebrow">WORLD GUIDE</p>
        <h1>今日は、どの世界へ？</h1>
        <p>資源を集める場所、腰を据えて暮らす場所、腕試しに出かける場所。<br>ほうき鯖にある7つのワールドをご案内します。</p>
        <nav class="world-jump" aria-label="ワールド一覧">
          <a v-for="world in worlds" :key="world.id" :href="`#${world.id}`">{{ world.name }}</a>
        </nav>
      </div>
    </section>

    <div class="worlds-main">
      <section class="worlds-intro" aria-labelledby="choose-world">
        <div>
          <p class="worlds-eyebrow">CHOOSE YOUR WORLD</p>
          <h2 id="choose-world">目的にあわせて、<br>世界を選ぼう。</h2>
        </div>
        <p>コマンドで直接行けるワールドと、ネザーゲートでつながるワールドがあります。リセット対象の世界には、大切な建築物やアイテムを残さないようご注意ください。</p>
      </section>

      <div class="world-list">
        <article
          v-for="(world, index) in worlds"
          :id="world.id"
          :key="world.id"
          class="world-card"
          :class="[`theme-${world.theme}`, { 'world-card-reverse': index % 2 === 1 }]"
        >
          <div class="world-visual">
            <img v-if="world.image" :src="world.image" :alt="world.imageAlt" width="1920" height="1080" loading="lazy">
            <div v-else class="world-art" aria-hidden="true">
              <span class="art-star">✦</span>
              <span class="art-ring" />
              <span class="art-horizon" />
            </div>
            <div class="visual-shade" />
            <span class="world-number">0{{ index + 1 }}</span>
            <div class="visual-labels">
              <span v-for="tag in world.tags" :key="tag">{{ tag }}</span>
            </div>
          </div>

          <div class="world-copy">
            <p class="worlds-eyebrow">{{ world.englishName }}</p>
            <h2>{{ world.name }}</h2>
            <p class="world-lead">{{ world.lead }}</p>
            <dl class="world-facts">
              <div>
                <dt>行き方</dt>
                <dd><code v-if="world.command">{{ world.command }}</code><template v-else>{{ world.access }}</template></dd>
              </div>
              <div>
                <dt>役割</dt>
                <dd>{{ world.purpose }}</dd>
              </div>
              <div v-if="world.difficulty">
                <dt>難易度</dt>
                <dd>{{ world.difficulty }}</dd>
              </div>
            </dl>
            <aside v-if="world.notice" class="world-notice">
              <span aria-hidden="true">{{ world.noticeIcon }}</span>
              <p><strong>{{ world.noticeTitle }}</strong>{{ world.notice }}</p>
            </aside>
          </div>
        </article>
      </div>

      <section class="worlds-note">
        <span aria-hidden="true">✦</span>
        <div>
          <p class="worlds-eyebrow">GOOD TO KNOW</p>
          <h2>すべての世界で、PvPは無効です。</h2>
          <p>プレイヤー同士で競うより、それぞれのペースで採掘・建築・冒険を楽しむサーバーです。</p>
        </div>
        <NuxtLink to="/#join">冒険の始め方を見る <span aria-hidden="true">→</span></NuxtLink>
      </section>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl
  ? String(config.public.siteUrl).replace(/\/+$/, '')
  : ''

const worlds = [
  {
    id: 'saisei',
    name: 'saisei',
    englishName: 'RESOURCE WORLD',
    lead: '鉱石や建築資材を集めるための資源ワールド。最初の冒険も、ここから始まります。',
    command: '/saisei',
    purpose: '資源採取',
    difficulty: 'ノーマル',
    tags: ['資源', '再生成あり'],
    noticeIcon: '↻',
    noticeTitle: '定期的に再生成されます',
    notice: '地形・建築物・設置したアイテムはリセットされます。大切なものは残さないでください。',
    image: '/2-saisei-ore.png',
    imageAlt: '資源ワールドsaiseiの採掘場',
    theme: 'earth',
  },
  {
    id: 'saisei-nether',
    name: 'saisei_nether',
    englishName: 'RESOURCE NETHER',
    lead: 'ネザーの資源を探しに行くための世界。saiseiから、さらに奥へ進む冒険です。',
    access: 'saiseiのネザーゲート',
    purpose: 'ネザー資源の採取',
    difficulty: 'ノーマル',
    tags: ['ネザー', '再生成あり'],
    noticeIcon: '↻',
    noticeTitle: '定期的に再生成されます',
    notice: '建築物や設置物もリセットの対象です。',
    theme: 'nether',
  },
  {
    id: 'kaitaku',
    name: 'kaitaku',
    englishName: 'HOMELAND',
    lead: '建築や街づくりにじっくり取り組める開拓用ワールド。長く暮らす拠点づくりに向いています。',
    command: '/kaitaku',
    purpose: '開拓・建築',
    difficulty: 'イージー',
    tags: ['開拓', '原則リセットなし'],
    image: '/4-kaitaku.png',
    imageAlt: 'kaitakuワールドに作られた街並み',
    theme: 'green',
  },
  {
    id: 'kaitaku-nether',
    name: 'kaitaku_nether',
    englishName: 'HOMELAND NETHER',
    lead: 'kaitakuと対になるネザー。開拓ワールドの拠点から、ゲートをくぐって行き来できます。',
    access: 'kaitakuのネザーゲート',
    purpose: 'kaitaku側のネザー',
    difficulty: 'ノーマル',
    tags: ['ネザー', '原則リセットなし'],
    theme: 'ember',
  },
  {
    id: 'bouken',
    name: 'bouken',
    englishName: 'ADVENTURE WORLD',
    lead: '歯応えのあるサバイバルを楽しむ上級者向けワールド。装備を整えて挑みましょう。',
    command: '/bouken',
    purpose: '冒険・モンスター討伐',
    difficulty: 'ハード',
    tags: ['上級者向け', '原則リセットなし'],
    image: '/5-bouken.png',
    imageAlt: 'boukenワールドの巨大な渓谷',
    theme: 'blue',
  },
  {
    id: 'bouken-nether',
    name: 'bouken_nether',
    englishName: 'ADVENTURE NETHER',
    lead: 'boukenからつながる、何もない空間から始まる特殊なネザーワールドです。',
    access: 'boukenのネザーゲート',
    purpose: 'bouken側のネザー',
    difficulty: 'ハード',
    tags: ['上級者向け', '空のワールド'],
    noticeIcon: '◇',
    noticeTitle: '足元に注意',
    notice: '空っぽのワールドです。準備を整えてから向かいましょう。',
    theme: 'void',
  },
  {
    id: 'end',
    name: 'end',
    englishName: 'THE END',
    lead: 'エンダードラゴンが待つ果ての世界。討伐後も、ドラゴンは定期的に復活します。',
    command: '/end',
    purpose: 'エンド探索・ドラゴン討伐',
    difficulty: 'ノーマル',
    tags: ['再生成あり', 'ドラゴン復活'],
    noticeIcon: '↻',
    noticeTitle: '定期的に再生成されます',
    notice: '地形・建築物・設置したアイテムはリセットされます。エンダードラゴンも定期的に復活します。',
    theme: 'end',
  },
]

const pageTitle = 'ワールド紹介 | ほうき鯖'
const pageDescription = '資源、開拓、冒険、ネザー、エンド。ほうき鯖で遊べる7つのワールドと行き方をご紹介します。'
const pageUrl = siteUrl ? `${siteUrl}/worlds` : undefined
const ogImage = siteUrl ? `${siteUrl}/og-image.png` : '/og-image.png'

useHead({
  link: pageUrl ? [{ rel: 'canonical', href: pageUrl }] : [],
})

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  robots: 'index, follow',
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  ogType: 'website',
  ogLocale: 'ja_JP',
  ogSiteName: 'ほうき鯖',
  ogUrl: pageUrl,
  ogImage,
  twitterCard: 'summary_large_image',
  twitterTitle: pageTitle,
  twitterDescription: pageDescription,
  twitterImage: ogImage,
})
</script>

<style scoped lang="scss">
.worlds-page { background: #080d1b; }
.worlds-hero {
  position: relative;
  display: grid;
  min-height: 620px;
  overflow: hidden;
  place-items: center;
  background:
    radial-gradient(circle at 72% 38%, rgba(105, 226, 220, 0.14), transparent 22%),
    radial-gradient(circle at 20% 70%, rgba(159, 140, 255, 0.13), transparent 26%),
    linear-gradient(150deg, #080d1b, #101934 58%, #090d1a);
}
.worlds-stars, .worlds-stars::after {
  position: absolute;
  inset: 0;
  opacity: 0.5;
  background-image: radial-gradient(circle, #fff 0 1px, transparent 1.5px);
  background-size: 105px 105px;
  content: "";
}
.worlds-stars::after { inset: 35px 0 0 47px; background-size: 160px 160px; }
.worlds-orbit {
  position: absolute;
  top: 50%;
  right: 8%;
  width: 300px;
  height: 300px;
  border: 1px solid rgba(105, 226, 220, 0.2);
  border-radius: 50%;
  box-shadow: 0 0 90px rgba(105, 226, 220, 0.08), 0 0 0 70px rgba(159, 140, 255, 0.025);
  transform: translateY(-50%) rotate(-18deg) scaleY(0.45);
}
.worlds-orbit span {
  position: absolute;
  top: -30px;
  left: 42%;
  color: var(--star);
  font-size: 3.8rem;
  filter: drop-shadow(0 0 20px rgba(255, 214, 107, 0.7));
  transform: scaleY(2.2) rotate(18deg);
}
.worlds-hero-copy { position: relative; z-index: 2; width: min(1100px, calc(100% - 40px)); }
.worlds-eyebrow {
  margin: 0 0 18px;
  color: var(--cyan);
  font-family: Consolas, monospace;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.18em;
}
.worlds-hero h1 { max-width: 800px; margin: 0 0 24px; font-size: clamp(3rem, 7vw, 6.3rem); font-weight: 900; letter-spacing: -0.055em; }
.worlds-hero-copy > p:not(.worlds-eyebrow) { max-width: 680px; margin: 0; color: var(--muted); font-size: 1rem; line-height: 2; }
.world-jump { display: flex; flex-wrap: wrap; gap: 9px; max-width: 800px; margin-top: 38px; }
.world-jump a {
  padding: 8px 13px;
  border: 1px solid var(--line);
  border-radius: 999px;
  color: #d8e0f0;
  background: rgba(255, 255, 255, 0.04);
  font-family: Consolas, monospace;
  font-size: 0.7rem;
  text-decoration: none;
}
.world-jump a:hover { border-color: rgba(105, 226, 220, 0.55); color: var(--cyan); }
.worlds-main { width: min(1120px, calc(100% - 40px)); margin: 0 auto; padding: 120px 0; }
.worlds-intro { display: grid; grid-template-columns: 1fr 0.8fr; gap: 80px; align-items: end; margin-bottom: 95px; }
.worlds-intro h2 { margin: 0; font-size: clamp(2.3rem, 5vw, 4.4rem); font-weight: 900; line-height: 1.25; letter-spacing: -0.045em; }
.worlds-intro > p { margin: 0; color: var(--muted); line-height: 1.95; }
.world-list { display: grid; gap: 130px; }
.world-card { display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(300px, 0.9fr); gap: clamp(42px, 7vw, 88px); align-items: center; scroll-margin-top: 40px; }
.world-card-reverse { grid-template-columns: minmax(300px, 0.9fr) minmax(0, 1.1fr); }
.world-card-reverse .world-visual { order: 2; }
.world-visual { position: relative; min-height: 500px; overflow: hidden; border: 1px solid var(--line); border-radius: 18px; background: #10182d; box-shadow: 0 35px 80px rgba(0, 0, 0, 0.3); }
.world-visual > img { width: 100%; height: 100%; min-height: 500px; object-fit: cover; }
.visual-shade { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(5, 8, 18, 0.08), rgba(5, 8, 18, 0.15) 55%, rgba(5, 8, 18, 0.8)); }
.world-number { position: absolute; top: 25px; left: 28px; color: rgba(255, 255, 255, 0.7); font-family: Consolas, monospace; font-size: 0.72rem; letter-spacing: 0.15em; }
.visual-labels { position: absolute; bottom: 25px; left: 28px; display: flex; flex-wrap: wrap; gap: 8px; }
.visual-labels span { padding: 7px 10px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 999px; color: #fff; background: rgba(6, 10, 22, 0.58); font-size: 0.66rem; font-weight: 700; backdrop-filter: blur(8px); }
.world-copy h2 { margin: 0 0 22px; font-family: Consolas, monospace; font-size: clamp(2.2rem, 4.5vw, 4rem); font-weight: 800; letter-spacing: -0.05em; }
.world-lead { margin: 0 0 32px; color: var(--muted); line-height: 1.95; }
.world-facts { display: grid; gap: 0; margin: 0; border-top: 1px solid var(--line); }
.world-facts div { display: grid; grid-template-columns: 76px 1fr; gap: 15px; padding: 15px 0; border-bottom: 1px solid var(--line); }
.world-facts dt { color: #7f8aa2; font-size: 0.72rem; font-weight: 700; }
.world-facts dd { margin: 0; color: #e4e9f4; font-size: 0.86rem; }
.world-facts code { padding: 4px 8px; border: 1px solid rgba(105, 226, 220, 0.22); border-radius: 5px; color: var(--cyan); background: rgba(105, 226, 220, 0.06); }
.world-notice { display: flex; gap: 14px; margin-top: 23px; padding: 16px; border-left: 2px solid var(--star); background: rgba(255, 214, 107, 0.05); }
.world-notice > span { color: var(--star); font-size: 1.2rem; }
.world-notice p { margin: 0; color: var(--muted); font-size: 0.75rem; line-height: 1.65; }
.world-notice strong { display: block; margin-bottom: 3px; color: #f3de9b; }
.world-art { position: absolute; inset: 0; overflow: hidden; background: radial-gradient(circle at 50% 42%, rgba(255, 120, 70, 0.32), transparent 21%), linear-gradient(155deg, #281227, #0b1020 65%); }
.art-star { position: absolute; top: 28%; left: 47%; z-index: 2; color: #ffd29b; font-size: 4.2rem; filter: drop-shadow(0 0 24px currentColor); }
.art-ring { position: absolute; top: 34%; left: 26%; width: 52%; height: 18%; border: 1px solid rgba(255, 218, 177, 0.35); border-radius: 50%; transform: rotate(-13deg); }
.art-horizon { position: absolute; right: -12%; bottom: -28%; left: -12%; height: 58%; border-radius: 50% 50% 0 0; background: linear-gradient(#5d2531, #1b1022); box-shadow: 0 -10px 60px rgba(255, 73, 49, 0.18); }
.theme-ember .world-art { background: radial-gradient(circle at 44% 40%, rgba(255, 125, 53, 0.34), transparent 20%), linear-gradient(145deg, #38171e, #100b14 70%); }
.theme-void .world-art { background: radial-gradient(circle at 50% 42%, rgba(159, 140, 255, 0.18), transparent 20%), linear-gradient(150deg, #120c24, #03040a 70%); }
.theme-void .art-horizon { background: #080611; box-shadow: 0 -6px 50px rgba(159, 140, 255, 0.1); }
.theme-end .world-art { background: radial-gradient(circle at 50% 35%, rgba(226, 229, 174, 0.25), transparent 18%), linear-gradient(150deg, #26203e, #090713 70%); }
.theme-end .art-star { color: #e8e9bd; }
.theme-end .art-horizon { background: linear-gradient(#4b4666, #191529); box-shadow: 0 -10px 60px rgba(222, 226, 174, 0.12); }
.worlds-note { display: grid; grid-template-columns: auto 1fr auto; gap: 28px; align-items: center; margin-top: 145px; padding: 42px; border: 1px solid rgba(159, 140, 255, 0.25); border-radius: 18px; background: radial-gradient(circle at 0 50%, rgba(159, 140, 255, 0.15), transparent 30%), rgba(18, 26, 49, 0.6); }
.worlds-note > span { color: var(--star); font-size: 2rem; filter: drop-shadow(0 0 12px rgba(255, 214, 107, 0.5)); }
.worlds-note h2 { margin: 0 0 8px; font-size: clamp(1.4rem, 2.5vw, 2rem); }
.worlds-note p:not(.worlds-eyebrow) { margin: 0; color: var(--muted); font-size: 0.82rem; line-height: 1.7; }
.worlds-note a { padding: 12px 18px; border: 1px solid var(--line); border-radius: 999px; color: #fff; font-size: 0.78rem; font-weight: 700; text-decoration: none; white-space: nowrap; }
.worlds-note a:hover { border-color: var(--cyan); color: var(--cyan); }

@media (max-width: 820px) {
  .worlds-hero { min-height: 570px; }
  .worlds-orbit { right: -150px; opacity: 0.55; }
  .worlds-main { padding: 90px 0; }
  .worlds-intro { grid-template-columns: 1fr; gap: 30px; margin-bottom: 70px; }
  .world-list { gap: 85px; }
  .world-card, .world-card-reverse { grid-template-columns: 1fr; gap: 32px; }
  .world-card-reverse .world-visual { order: 0; }
  .world-visual, .world-visual > img { min-height: 420px; }
  .worlds-note { grid-template-columns: auto 1fr; }
  .worlds-note a { grid-column: 2; justify-self: start; }
}

@media (max-width: 520px) {
  .worlds-hero-copy { width: min(100% - 30px, 1100px); }
  .worlds-hero-copy > p:not(.worlds-eyebrow) br { display: none; }
  .worlds-main { width: min(100% - 30px, 1120px); }
  .world-visual, .world-visual > img { min-height: 340px; }
  .world-copy h2 { font-size: 2rem; overflow-wrap: anywhere; }
  .worlds-note { grid-template-columns: 1fr; padding: 28px; }
  .worlds-note a { grid-column: 1; }
}
</style>
