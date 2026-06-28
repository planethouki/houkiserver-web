<template>
  <div class="landing-page">
    <section class="hero">
      <div class="stars stars-a" aria-hidden="true" />
      <div class="stars stars-b" aria-hidden="true" />
      <div class="comet" aria-hidden="true"><span>✦</span></div>

      <div class="hero-content">
        <p class="eyebrow"><span>✦</span> PLANET HOUKI PRESENTS</p>
        <h1>きらめく世界へ、<br><span>一緒に飛び込もう。</span></h1>
        <p class="hero-copy">
          ほうき鯖は、みんなでのんびり冒険を楽しむ<br class="desktop-only">
          Java版 Minecraft マルチプレイサーバーです。
        </p>

        <div class="hero-actions">
          <button class="address-button" type="button" @click="copyAddress">
            <span class="address-label">SERVER ADDRESS</span>
            <strong>{{ serverAddress }}</strong>
            <span class="copy-icon" aria-hidden="true">{{ copied ? '✓' : '▣' }}</span>
            <span class="copy-hint">{{ copied ? 'コピーしました！' : 'クリックでコピー' }}</span>
          </button>
          <a v-if="discord" class="primary-button" :href="discord" target="_blank" rel="noreferrer">
            Discordに参加 <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div class="live-status" :class="{ offline: !serverStatusLoading && !serverStatus.isServerOnline }">
          <span class="status-dot" />
          <template v-if="serverStatusLoading">サーバー情報を確認中</template>
          <template v-else-if="serverStatus.isServerOnline">
            現在オンライン
            <span class="status-divider" />
            {{ serverStatus.onlinePlayerCount }} / {{ serverStatus.maxPlayerCount }} PLAYERS
            <span class="status-divider" />
            {{ serverStatus.version }}
          </template>
          <template v-else>現在オフライン</template>
        </div>
      </div>

      <a class="scroll-cue" href="#about" aria-label="ほうき鯖についてを見る">
        <span>SCROLL</span><i aria-hidden="true" />
      </a>
    </section>

    <section id="about" class="section about-section">
      <div class="section-heading">
        <p class="eyebrow"><span>✦</span> ABOUT HOUKI SERVER</p>
        <h2>あなたの物語が、<br><span>ここからはじまる。</span></h2>
        <p>ひとりの冒険も、仲間との大仕事も。遊び方を決めるのはあなたです。</p>
      </div>

      <div class="feature-grid">
        <article class="feature-card featured">
          <div class="feature-visual landscape" aria-hidden="true">
            <span class="moon" />
            <span class="mountain mountain-back" />
            <span class="mountain mountain-front" />
          </div>
          <div class="feature-copy">
            <span class="card-number">01</span>
            <h3>広がる、冒険の世界</h3>
            <p>新しい景色を探し、拠点をつくり、自由な冒険へ出かけよう。</p>
          </div>
        </article>

        <article class="feature-card">
          <div class="feature-icon" aria-hidden="true">♢</div>
          <span class="card-number">02</span>
          <h3>じっくり、ものづくり</h3>
          <p>小さな家から大きな街まで。思い描いたものを自分のペースで形にできます。</p>
        </article>

        <article class="feature-card">
          <div class="feature-icon community-icon" aria-hidden="true">✦</div>
          <span class="card-number">03</span>
          <h3>つながる、コミュニティ</h3>
          <p>困ったときは助け合い、うれしい発見は分かち合う。仲間と遊ぶ楽しさが待っています。</p>
        </article>
      </div>
    </section>

    <section id="join" class="section join-section">
      <div class="section-heading compact">
        <p class="eyebrow"><span>✦</span> HOW TO JOIN</p>
        <h2>さあ、ほうき鯖へ。</h2>
        <p>参加はかんたん、3ステップ。</p>
      </div>

      <div class="steps">
        <article>
          <span class="step-number">1</span>
          <h3>Java版を起動</h3>
          <p>Minecraft Java Edition のマルチプレイを開きます。</p>
        </article>
        <span class="step-line" aria-hidden="true" />
        <article>
          <span class="step-number">2</span>
          <h3>サーバーを追加</h3>
          <p>サーバーアドレスに<br><strong>{{ serverAddress }}</strong> を入力。</p>
        </article>
        <span class="step-line" aria-hidden="true" />
        <article>
          <span class="step-number">3</span>
          <h3>冒険をはじめる</h3>
          <p>接続したら、ほうき鯖での物語がスタートです。</p>
        </article>
      </div>
    </section>

    <section id="community" class="section community-section">
      <div class="community-glow" aria-hidden="true" />
      <div class="community-content">
        <p class="eyebrow"><span>✦</span> JOIN OUR COMMUNITY</p>
        <h2>冒険の続きは、<br>コミュニティで。</h2>
        <p>お知らせや交流はDiscordから。遊び方の動画も公開しています。</p>
        <div class="community-actions">
          <a v-if="discord" class="primary-button" :href="discord" target="_blank" rel="noreferrer">
            Discordに参加 <span aria-hidden="true">↗</span>
          </a>
          <a v-if="youtube" class="text-link" :href="youtube" target="_blank" rel="noreferrer">
            YouTubeで遊び方を見る <span aria-hidden="true">→</span>
          </a>
          <a class="text-link" href="https://twitter.com/planethouki" target="_blank" rel="noreferrer">
            X / Twitter <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()
const discord = config.public.discordInviteLink
const youtube = config.public.youtubePlaylistLink
const serverAddress = 'mc.houkiserver.com'

useHead({
  title: 'ほうき鯖 | Java版 Minecraft サーバー',
  meta: [{ name: 'description', content: 'みんなでのんびり冒険を楽しむ、Java版 Minecraft マルチプレイサーバー「ほうき鯖」。' }],
})

let fetchStatusInterval
let copiedTimer
const copied = ref(false)
const serverStatusLoading = ref(true)
const serverStatus = reactive({
  isServerOnline: false,
  onlinePlayerCount: 0,
  maxPlayerCount: 0,
  version: '',
})

onMounted(() => {
  fetchServerStatus()
  fetchStatusInterval = setInterval(fetchServerStatus, 10000)
})

onUnmounted(() => {
  clearInterval(fetchStatusInterval)
  clearTimeout(copiedTimer)
})

async function copyAddress() {
  try {
    await navigator.clipboard.writeText(serverAddress)
    copied.value = true
    clearTimeout(copiedTimer)
    copiedTimer = setTimeout(() => { copied.value = false }, 2000)
  } catch {
    copied.value = false
  }
}

async function fetchServerStatus() {
  try {
    const statusResponse = await $fetch('/api/serverStatus', { signal: AbortSignal.timeout(4000) })
    serverStatus.isServerOnline = statusResponse.isServerOnline

    if (statusResponse.isServerOnline && statusResponse.result) {
      const status = statusResponse.result
      serverStatus.onlinePlayerCount = status.players.online
      serverStatus.maxPlayerCount = status.players.max
      serverStatus.version = status.version.name.replace('Spigot', 'Minecraft')
    } else {
      serverStatus.onlinePlayerCount = 0
      serverStatus.maxPlayerCount = 0
      serverStatus.version = ''
    }
  } catch {
    serverStatus.isServerOnline = false
  } finally {
    serverStatusLoading.value = false
  }
}
</script>

<style scoped lang="scss">
.landing-page { background: var(--night); }
.hero {
  position: relative;
  display: grid;
  align-items: center;
  min-height: 100svh;
  overflow: hidden;
  background:
    radial-gradient(circle at 76% 42%, rgba(95, 72, 180, 0.2), transparent 28%),
    radial-gradient(circle at 50% 110%, rgba(71, 202, 194, 0.12), transparent 40%),
    linear-gradient(150deg, #080c1b 20%, #0d1230 68%, #080b18 100%);
}
.hero::after {
  position: absolute;
  right: -12%;
  bottom: -42%;
  width: 75vw;
  height: 75vw;
  border: 1px solid rgba(159, 140, 255, 0.13);
  border-radius: 50%;
  box-shadow: 0 0 120px rgba(104, 75, 184, 0.12) inset;
  content: "";
}
.stars {
  position: absolute;
  inset: 0;
  opacity: 0.65;
  background-image:
    radial-gradient(circle, #fff 0 1px, transparent 1.5px),
    radial-gradient(circle, #7ce1df 0 1px, transparent 1.5px),
    radial-gradient(circle, #fff 0 1px, transparent 1.5px);
  background-position: 4% 20%, 27% 71%, 83% 14%;
  background-size: 190px 190px, 270px 270px, 350px 350px;
}
.stars-b { opacity: 0.35; transform: rotate(18deg) scale(1.1); }
.comet {
  position: absolute;
  z-index: 1;
  top: 24%;
  right: 15%;
  width: min(34vw, 470px);
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(105, 226, 220, 0.2), #fff);
  box-shadow: 0 0 16px rgba(105, 226, 220, 0.55);
  transform: rotate(-27deg);
}
.comet::before, .comet::after {
  position: absolute;
  right: 0;
  width: 68%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(159, 140, 255, 0.7));
  content: "";
  transform-origin: right;
}
.comet::before { transform: rotate(7deg); }
.comet::after { transform: rotate(-7deg); }
.comet span {
  position: absolute;
  right: -12px;
  top: -18px;
  color: #fff;
  font-size: 1.8rem;
  filter: drop-shadow(0 0 12px var(--cyan));
}
.hero-content {
  position: relative;
  z-index: 3;
  width: min(1180px, calc(100% - 40px));
  margin: 0 auto;
  padding: 150px 0 100px;
}
.eyebrow {
  margin: 0 0 22px;
  color: var(--cyan);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.22em;
}
.eyebrow span { margin-right: 8px; color: var(--star); }
h1, h2, h3, p { margin-top: 0; }
h1 {
  max-width: 820px;
  margin-bottom: 28px;
  font-size: clamp(3rem, 6.7vw, 6.2rem);
  font-weight: 900;
  line-height: 1.12;
  letter-spacing: -0.045em;
}
h1 span, .section-heading h2 span {
  color: transparent;
  background: linear-gradient(100deg, #fff 10%, #b9f3ec 48%, #b4a5ff 88%);
  background-clip: text;
  -webkit-background-clip: text;
}
.hero-copy {
  margin-bottom: 38px;
  color: var(--muted);
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  line-height: 2;
}
.hero-actions, .community-actions { display: flex; gap: 14px; align-items: stretch; flex-wrap: wrap; }
.address-button {
  position: relative;
  min-width: 300px;
  padding: 13px 58px 13px 20px;
  border: 1px solid rgba(105, 226, 220, 0.33);
  border-radius: 10px;
  color: var(--text);
  background: rgba(13, 23, 43, 0.8);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.18);
  cursor: pointer;
  text-align: left;
  transition: border-color 0.2s ease, transform 0.2s ease;
}
.address-button:hover { border-color: var(--cyan); transform: translateY(-2px); }
.address-label {
  display: block;
  margin-bottom: 3px;
  color: var(--muted);
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.18em;
}
.address-button strong { font-family: Consolas, monospace; font-size: 1.08rem; letter-spacing: 0.02em; }
.copy-icon { position: absolute; top: 19px; right: 20px; color: var(--cyan); }
.copy-hint { position: absolute; bottom: -25px; left: 2px; color: #8b98b3; font-size: 0.68rem; }
.primary-button {
  display: inline-flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  min-height: 61px;
  padding: 0 28px;
  border: 0;
  border-radius: 10px;
  color: #0a1020;
  background: linear-gradient(110deg, var(--cyan), #a2eee4);
  box-shadow: 0 12px 35px rgba(70, 206, 198, 0.18);
  font-size: 0.9rem;
  font-weight: 800;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.primary-button:hover {
  color: #0a1020;
  box-shadow: 0 16px 40px rgba(70, 206, 198, 0.28);
  transform: translateY(-2px);
}
.live-status {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 48px;
  color: #9eabc3;
  font-size: 0.66rem;
  font-weight: 700;
  letter-spacing: 0.08em;
}
.status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #65e49c;
  box-shadow: 0 0 10px #65e49c;
}
.offline .status-dot { background: #ff7a88; box-shadow: 0 0 10px #ff7a88; }
.status-divider { width: 1px; height: 12px; background: var(--line); }
.scroll-cue {
  position: absolute;
  z-index: 4;
  bottom: 25px;
  left: 50%;
  display: grid;
  justify-items: center;
  gap: 9px;
  color: #7f8ba6;
  font-size: 0.55rem;
  letter-spacing: 0.2em;
  text-decoration: none;
  transform: translateX(-50%);
}
.scroll-cue i { width: 1px; height: 26px; background: linear-gradient(var(--cyan), transparent); }
.section { position: relative; padding: 130px max(24px, calc((100vw - 1180px) / 2)); }
.about-section {
  background: radial-gradient(circle at 10% 45%, rgba(80, 77, 160, 0.13), transparent 24%), #0a0f20;
}
.section-heading { max-width: 720px; margin-bottom: 62px; }
.section-heading h2, .community-content h2 {
  margin-bottom: 24px;
  font-size: clamp(2.2rem, 4.5vw, 4rem);
  font-weight: 900;
  line-height: 1.25;
  letter-spacing: -0.04em;
}
.section-heading > p:last-child, .community-content > p { color: var(--muted); line-height: 1.9; }
.feature-grid { display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 18px; }
.feature-card {
  position: relative;
  min-height: 280px;
  overflow: hidden;
  padding: 38px;
  border: 1px solid var(--line);
  border-radius: 16px;
  background: linear-gradient(145deg, rgba(20, 29, 55, 0.9), rgba(12, 18, 36, 0.95));
}
.feature-card.featured { grid-row: span 2; min-height: 580px; padding: 0; }
.feature-visual {
  position: relative;
  height: 58%;
  overflow: hidden;
  background: radial-gradient(circle at 75% 30%, rgba(168, 146, 255, 0.3), transparent 20%), linear-gradient(#111a3b, #17254c);
}
.feature-visual::before {
  position: absolute;
  inset: 0;
  opacity: 0.5;
  background-image: radial-gradient(circle, #fff 0 1px, transparent 1.3px);
  background-size: 70px 70px;
  content: "";
}
.moon {
  position: absolute;
  top: 24%;
  right: 20%;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: #f6e4a4;
  box-shadow: 0 0 35px rgba(246, 228, 164, 0.45);
}
.mountain {
  position: absolute;
  bottom: -20%;
  width: 70%;
  aspect-ratio: 1;
  background: #17223e;
  transform: rotate(45deg);
}
.mountain-back { left: -15%; background: #29365c; }
.mountain-front { right: -10%; bottom: -38%; background: #10192e; }
.feature-copy { padding: 34px 38px; }
.card-number {
  display: block;
  margin-bottom: 14px;
  color: var(--cyan);
  font-family: Consolas, monospace;
  font-size: 0.72rem;
}
.feature-card h3, .steps h3 { margin-bottom: 12px; font-size: 1.35rem; font-weight: 800; }
.feature-card p, .steps p { margin-bottom: 0; color: var(--muted); font-size: 0.9rem; line-height: 1.8; }
.feature-icon {
  position: absolute;
  right: 36px;
  bottom: 25px;
  color: rgba(105, 226, 220, 0.19);
  font-size: 7.5rem;
  line-height: 1;
  transform: rotate(12deg);
}
.community-icon { color: rgba(159, 140, 255, 0.18); filter: drop-shadow(0 0 20px rgba(159, 140, 255, 0.2)); }
.join-section { background: #080d1b; text-align: center; }
.section-heading.compact { margin-right: auto; margin-left: auto; }
.steps { display: flex; align-items: flex-start; justify-content: center; }
.steps article { width: min(280px, 30%); }
.step-number {
  display: grid;
  width: 54px;
  height: 54px;
  margin: 0 auto 25px;
  place-items: center;
  border: 1px solid rgba(105, 226, 220, 0.55);
  border-radius: 50%;
  color: var(--cyan);
  background: rgba(105, 226, 220, 0.07);
  font-family: Consolas, monospace;
  font-weight: 700;
  box-shadow: 0 0 25px rgba(105, 226, 220, 0.1);
}
.step-line {
  width: 10%;
  height: 1px;
  margin-top: 27px;
  background: linear-gradient(90deg, rgba(105, 226, 220, 0.35), rgba(159, 140, 255, 0.35));
}
.steps strong { color: var(--cyan); font-family: Consolas, monospace; font-weight: 600; }
.community-section {
  min-height: 560px;
  overflow: hidden;
  background:
    radial-gradient(circle at 80% 50%, rgba(128, 99, 220, 0.18), transparent 28%),
    linear-gradient(130deg, #111a35, #0b1022 65%);
}
.community-section::before {
  position: absolute;
  inset: 0;
  opacity: 0.3;
  background-image: radial-gradient(circle, #fff 0 1px, transparent 1.4px);
  background-size: 120px 120px;
  content: "";
}
.community-glow {
  position: absolute;
  top: 50%;
  right: 15%;
  width: 220px;
  height: 220px;
  border: 1px solid rgba(159, 140, 255, 0.3);
  border-radius: 50%;
  box-shadow: 0 0 80px rgba(159, 140, 255, 0.18), 0 0 0 60px rgba(159, 140, 255, 0.025);
  transform: translateY(-50%);
}
.community-glow::after {
  position: absolute;
  top: 40%;
  left: 25%;
  color: var(--star);
  content: "✦";
  font-size: 5rem;
  filter: drop-shadow(0 0 25px rgba(255, 214, 107, 0.65));
}
.community-content { position: relative; z-index: 2; max-width: 650px; }
.community-content > p { margin-bottom: 34px; }
.text-link {
  display: inline-flex;
  gap: 12px;
  align-items: center;
  padding: 18px 10px;
  color: #dce3f3;
  font-size: 0.86rem;
  font-weight: 700;
  text-decoration: none;
}
.text-link:hover { color: var(--cyan); }

@media (max-width: 800px) {
  .hero-content { width: min(100% - 32px, 1180px); padding-top: 130px; }
  .comet { top: 20%; right: -3%; width: 45vw; opacity: 0.65; }
  .feature-grid { grid-template-columns: 1fr; }
  .feature-card.featured { grid-row: auto; }
  .section { padding-top: 95px; padding-bottom: 95px; }
  .steps { display: grid; gap: 20px; }
  .steps article { width: min(100%, 340px); }
  .step-line { width: 1px; height: 35px; margin: 0 auto; }
  .community-glow { right: -100px; opacity: 0.45; }
}

@media (max-width: 520px) {
  h1 { font-size: clamp(2.7rem, 14vw, 4.2rem); }
  .desktop-only { display: none; }
  .hero-actions { display: grid; }
  .address-button { min-width: 0; width: 100%; }
  .primary-button { width: 100%; }
  .live-status { align-items: flex-start; flex-wrap: wrap; line-height: 1.7; }
  .status-divider { display: none; }
  .feature-card { padding: 28px; }
  .feature-card.featured { min-height: 520px; }
  .feature-copy { padding: 28px; }
  .feature-visual { height: 55%; }
  .community-actions { display: grid; }
}
</style>
