<template>
  <div class="landing-page">
    <section class="hero">
      <div class="stars stars-a" aria-hidden="true" />
      <div class="stars stars-b" aria-hidden="true" />
      <div class="comet" aria-hidden="true"><span>✦</span></div>

      <div class="hero-content">
        <p class="eyebrow"><img class="eyebrow-icon" src="/favicon.ico" alt="" width="18" height="18">ほうき鯖</p>
        <h1>ふつうの<br><span>サバイバルサーバー</span></h1>
        <p class="hero-copy">
          対人戦なし。少人数で落ち着いて、採掘・建築・冒険を楽しむ<br class="desktop-only">
          Java版 Minecraft サバイバルサーバーです。
        </p>

        <div class="hero-actions">
          <button class="address-button" type="button" @click="copyAddress">
            <span class="address-label">サーバーアドレス</span>
            <strong>{{ serverAddress }}</strong>
            <span class="copy-icon" aria-hidden="true">{{ copied ? '✓' : '▣' }}</span>
            <span class="copy-hint">{{ copied ? 'コピーしました！' : 'クリックでコピー' }}</span>
          </button>
          <a v-if="discord" class="primary-button" :href="discord" target="_blank" rel="noreferrer">
            Discordを開く <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div class="live-status" :class="{ offline: !serverStatusLoading && !serverStatus.isServerOnline }">
          <span class="status-dot" />
          <template v-if="serverStatusLoading">サーバー情報を確認中</template>
          <template v-else-if="serverStatus.isServerOnline">
            現在オンライン
            <span class="status-divider" />
            {{ serverStatus.onlinePlayerCount }} / {{ serverStatus.maxPlayerCount }} 人が参加中
            <span class="status-divider" />
            <span class="status-version">対応バージョン：{{ serverStatus.version }}</span>
          </template>
          <template v-else>現在オフライン</template>
        </div>
      </div>

      <a class="scroll-cue" href="#join" aria-label="冒険の流れを見る">
        <span>下へ</span><i aria-hidden="true" />
      </a>
    </section>

    <section id="join" class="section journey-section">
      <div class="section-heading journey-heading">
        <p class="eyebrow"><img class="eyebrow-icon" src="/favicon.ico" alt="" width="18" height="18">はじめての冒険</p>
        <h2>小さな仮拠点から、<br><span>あなたの世界へ。</span></h2>
        <p>サーバーに接続したあと、どんな冒険が待っているのかをご案内します。</p>
      </div>

      <div class="journey-list">
        <article class="journey-step">
          <figure class="journey-image">
            <img src="/1-world-spawn.png" alt="ほうき鯖の初期スポーン地点" width="1920" height="1080" loading="lazy">
          </figure>
          <div class="journey-copy">
            <span class="step-index">手順 01</span>
            <p class="world-label">初期スポーン</p>
            <h3>まずは、ここから。</h3>
            <p>接続すると、最初にスポーンするサーバーの入口です。ここから資源ワールドへ旅立ちます。</p>
            <code>/saisei</code>
          </div>
        </article>

        <article class="journey-step reverse">
          <figure class="journey-image">
            <img src="/2-saisei-ore.png" alt="資源ワールドsaiseiの採掘場" width="1920" height="1080" loading="lazy">
          </figure>
          <div class="journey-copy">
            <span class="step-index">手順 02</span>
            <p class="world-label">資源ワールド「saisei」</p>
            <h3>資源を集め、仮拠点をつくる。</h3>
            <p><code>/saisei</code> で資源ワールドへ。採掘や冒険で装備と建築資材を集め、まずは小さな仮拠点を作りましょう。</p>
            <aside class="notice"><span aria-hidden="true">↻</span><p><strong>定期的に再生成されます</strong>saiseiの地形・建築物・設置物はリセットされます。</p></aside>
          </div>
        </article>

        <article class="journey-step">
          <figure class="journey-image protect-image">
            <img src="/3-protect-area.png" alt="金のシャベルで保護範囲を指定した建築物" width="1920" height="1080" loading="lazy">
          </figure>
          <div class="journey-copy">
            <span class="step-index">手順 03</span>
            <p class="world-label">領域保護</p>
            <h3>大切なものを、きちんと守る。</h3>
            <p>初期チェストは自動では保護されません。金のシャベルで土地の対角となる2点を指定すると、建築物やチェストをほかのプレイヤーから守れます。</p>
            <ol class="claim-steps">
              <li><span>1</span>金のシャベルを作る</li>
              <li><span>2</span>保護する範囲の始点を右クリック</li>
              <li><span>3</span>対角の終点を右クリック</li>
            </ol>
          </div>
        </article>
      </div>

      <div class="unlock-message">
        <span class="unlock-star" aria-hidden="true">✦</span>
        <p class="eyebrow">新しい世界の開放</p>
        <h3>遊び続けると、世界が広がる。</h3>
        <p>サーバーでしばらく遊び、運営の確認が完了すると、永住できる2つのワールドへ行けるようになります。</p>
      </div>

      <div class="destination-heading">
        <p class="eyebrow"><img class="eyebrow-icon" src="/favicon.ico" alt="" width="18" height="18">拠点をつくる世界</p>
        <h2>暮らす世界を選ぼう。</h2>
        <p>どちらも原則リセットなし。集めたアイテムを持って、本格的な拠点づくりを始められます。</p>
      </div>

      <div class="destination-grid">
        <article class="destination-card">
          <img src="/4-kaitaku.png" alt="kaitakuワールドに作られた街並み" width="1920" height="1080" loading="lazy">
          <div class="destination-overlay" />
          <div class="destination-copy">
            <div class="destination-meta"><span>難易度：イージー</span><span>開拓・建築</span></div>
            <p class="world-label">開拓ワールド「kaitaku」</p>
            <h3>思い描いた景色を、形に。</h3>
            <p>穏やかな難易度で、建築や街づくりにじっくり取り組める開拓用ワールドです。</p>
            <code>/kaitaku</code>
          </div>
        </article>

        <article class="destination-card">
          <img src="/5-bouken.png" alt="boukenワールドの巨大な渓谷" width="1920" height="1080" loading="lazy">
          <div class="destination-overlay" />
          <div class="destination-copy">
            <div class="destination-meta"><span>難易度：ハード</span><span>冒険・モンスター討伐</span></div>
            <p class="world-label">冒険ワールド「bouken」</p>
            <h3>険しい世界を、生き抜こう。</h3>
            <p>歯応えのあるサバイバルと冒険を楽しむ、上級者向けのワールドです。</p>
            <code>/bouken</code>
          </div>
        </article>
      </div>
    </section>

    <section id="about" class="section about-section">
      <div class="section-heading">
        <p class="eyebrow"><img class="eyebrow-icon" src="/favicon.ico" alt="" width="18" height="18">ほうき鯖について</p>
        <h2>競わず、急がず、<br><span>自分のペースで。</span></h2>
        <p>ほうき鯖は、最大9人の小さなサバイバルサーバー。ひとりで黙々と遊ぶのも、仲間と大きなものを作るのも自由です。</p>
      </div>

      <div class="server-values">
        <article>
          <span class="value-icon" aria-hidden="true">⚔</span>
          <div><strong>対人戦なし</strong><p>すべてのワールドで、プレイヤー同士の攻撃は無効です。</p></div>
        </article>
        <article>
          <span class="value-icon" aria-hidden="true">◆</span>
          <div><strong>サバイバル</strong><p>採掘・建築・モンスター討伐を中心に楽しめます。</p></div>
        </article>
        <article>
          <span class="value-icon" aria-hidden="true">✦</span>
          <div><strong>最大9人</strong><p>少人数で落ち着いて遊べる環境です。</p></div>
        </article>
      </div>
    </section>

    <section id="community" class="section community-section">
      <div class="community-glow" aria-hidden="true" />
      <div class="community-content">
        <p class="eyebrow"><img class="eyebrow-icon" src="/favicon.ico" alt="" width="18" height="18">困ったときは</p>
        <h2>分からないことを、<br>聞いてみる。</h2>
        <p>分からないことや困ったことがあれば、Discordでほかのプレイヤーに聞いてみてください。運営者への連絡にはXも利用できます。</p>
        <div class="community-actions">
          <a v-if="discord" class="primary-button" :href="discord" target="_blank" rel="noreferrer">
            Discordを開く <span aria-hidden="true">↗</span>
          </a>
          <a v-if="youtube" class="text-link" :href="youtube" target="_blank" rel="noreferrer">
            土地保護の解説動画 <span aria-hidden="true">↗</span>
          </a>
          <a class="text-link" href="https://twitter.com/planethouki" target="_blank" rel="noreferrer">
            運営者へXで連絡 <span aria-hidden="true">↗</span>
          </a>
        </div>
        <p class="contact-note">※ Xは運営者の個人アカウントです。サーバー情報の発信専用ではありません。</p>
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
  display: flex;
  align-items: center;
  margin: 0 0 22px;
  color: var(--cyan);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.12em;
}
.eyebrow-icon {
  width: 18px;
  height: 18px;
  margin-right: 9px;
  border-radius: 3px;
  object-fit: cover;
}
h1, h2, h3, p { margin-top: 0; }
h1 {
  max-width: 1100px;
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
h1 span { white-space: nowrap; }
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
  letter-spacing: 0.1em;
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
.status-version {
  color: #e9edf8;
  font-size: 0.84rem;
  font-weight: 800;
  letter-spacing: 0.02em;
}
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
.server-values {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}
.server-values article {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  padding: 28px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: linear-gradient(145deg, rgba(20, 29, 55, 0.9), rgba(12, 18, 36, 0.95));
}
.value-icon {
  display: grid;
  flex: 0 0 42px;
  width: 42px;
  height: 42px;
  place-items: center;
  border: 1px solid rgba(105, 226, 220, 0.25);
  border-radius: 50%;
  color: var(--cyan);
  background: rgba(105, 226, 220, 0.06);
}
.server-values strong { display: block; margin-bottom: 7px; font-size: 1.05rem; }
.server-values p { margin-bottom: 0; color: var(--muted); font-size: 0.82rem; line-height: 1.7; }

.journey-section {
  background:
    radial-gradient(circle at 88% 14%, rgba(75, 157, 166, 0.1), transparent 22%),
    #080d1b;
}
.journey-heading { margin-bottom: 90px; }
.journey-list { display: grid; gap: 110px; }
.journey-step {
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(300px, 0.75fr);
  gap: clamp(45px, 7vw, 90px);
  align-items: center;
}
.journey-step.reverse { grid-template-columns: minmax(300px, 0.75fr) minmax(0, 1.25fr); }
.journey-step.reverse .journey-image { order: 2; }
.journey-image {
  position: relative;
  margin: 0;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 16px;
  background: #0e1428;
  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.24);
}
.journey-image::after {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  box-shadow: inset 0 0 60px rgba(4, 8, 18, 0.2);
  content: "";
  pointer-events: none;
}
.journey-image img {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}
.protect-image img { object-position: center 45%; }
.journey-copy { position: relative; }
.step-index {
  display: block;
  margin-bottom: 20px;
  color: var(--cyan);
  font-family: Consolas, monospace;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.12em;
}
.world-label {
  margin-bottom: 10px;
  color: #fff;
  font-family: Consolas, monospace;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
}
.journey-copy h3 {
  margin-bottom: 20px;
  font-size: clamp(1.8rem, 3vw, 2.7rem);
  font-weight: 900;
  line-height: 1.3;
  letter-spacing: -0.035em;
}
.journey-copy > p:not(.world-label), .destination-heading > p:last-child {
  color: var(--muted);
  line-height: 1.9;
}
code {
  display: inline-block;
  padding: 7px 12px;
  border: 1px solid rgba(105, 226, 220, 0.22);
  border-radius: 6px;
  color: var(--cyan);
  background: rgba(105, 226, 220, 0.07);
  font-family: Consolas, monospace;
  font-size: 0.85em;
}
.notice {
  display: flex;
  gap: 14px;
  align-items: flex-start;
  margin-top: 25px;
  padding: 16px;
  border-left: 2px solid var(--star);
  color: var(--star);
  background: rgba(255, 214, 107, 0.05);
}
.notice > span { padding-top: 2px; font-size: 1.2rem; }
.notice p { margin: 0; color: var(--muted); font-size: 0.76rem; line-height: 1.6; }
.notice strong { display: block; margin-bottom: 3px; color: #f3de9b; }
.claim-steps {
  display: grid;
  gap: 10px;
  margin: 25px 0 0;
  padding: 0;
  list-style: none;
}
.claim-steps li {
  display: flex;
  gap: 12px;
  align-items: center;
  color: #d7deed;
  font-size: 0.8rem;
}
.claim-steps span {
  display: grid;
  width: 25px;
  height: 25px;
  place-items: center;
  border: 1px solid rgba(105, 226, 220, 0.3);
  border-radius: 50%;
  color: var(--cyan);
  font-family: Consolas, monospace;
  font-size: 0.66rem;
}
.unlock-message {
  position: relative;
  max-width: 780px;
  margin: 150px auto;
  padding: 55px clamp(28px, 6vw, 75px);
  border: 1px solid rgba(159, 140, 255, 0.3);
  border-radius: 18px;
  background: radial-gradient(circle at 50% 0%, rgba(159, 140, 255, 0.18), transparent 50%), rgba(18, 26, 49, 0.72);
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.25);
  text-align: center;
}
.unlock-star {
  display: block;
  margin-bottom: 22px;
  color: var(--star);
  font-size: 2rem;
  filter: drop-shadow(0 0 14px rgba(255, 214, 107, 0.5));
}
.unlock-message .eyebrow { justify-content: center; margin-bottom: 15px; color: var(--purple); }
.unlock-message h3 { margin-bottom: 16px; font-size: clamp(1.7rem, 3.2vw, 2.7rem); font-weight: 900; }
.unlock-message > p:last-of-type { margin-bottom: 17px; color: var(--muted); line-height: 1.8; }
.unlock-message small { color: #7e89a1; font-size: 0.7rem; }
.destination-heading { max-width: 720px; margin-bottom: 48px; }
.destination-heading h2 { margin-bottom: 20px; font-size: clamp(2.2rem, 4.5vw, 4rem); font-weight: 900; letter-spacing: -0.04em; }
.destination-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 22px; }
.destination-card {
  position: relative;
  min-height: 580px;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: #10182d;
}
.destination-card > img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s ease;
}
.destination-card:hover > img { transform: scale(1.035); }
.destination-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(6, 10, 22, 0.05) 20%, rgba(6, 10, 22, 0.95) 82%);
}
.destination-copy { position: absolute; z-index: 2; right: 0; bottom: 0; left: 0; padding: 38px; }
.destination-meta { display: flex; gap: 8px; margin-bottom: 20px; }
.destination-meta span {
  padding: 6px 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 999px;
  color: #e3e9f6;
  background: rgba(7, 11, 24, 0.45);
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  backdrop-filter: blur(6px);
}
.destination-copy h3 { margin-bottom: 12px; font-size: clamp(1.5rem, 2.5vw, 2.2rem); font-weight: 900; }
.destination-copy > p:not(.world-label) { max-width: 480px; margin-bottom: 20px; color: #c3ccde; font-size: 0.86rem; line-height: 1.8; }
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
.community-content .contact-note {
  margin: 20px 0 0;
  color: #7e89a1;
  font-size: 0.7rem;
  line-height: 1.7;
}
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
  .section { padding-top: 95px; padding-bottom: 95px; }
  .server-values { grid-template-columns: 1fr; }
  .journey-heading { margin-bottom: 60px; }
  .journey-list { gap: 75px; }
  .journey-step, .journey-step.reverse { grid-template-columns: 1fr; gap: 30px; }
  .journey-step.reverse .journey-image { order: 0; }
  .journey-copy { padding: 0 5px; }
  .unlock-message { margin: 105px auto; }
  .destination-grid { grid-template-columns: 1fr; }
  .destination-card { min-height: 520px; }
  .community-glow { right: -100px; opacity: 0.45; }
}

@media (max-width: 520px) {
  h1 { font-size: clamp(2rem, 10vw, 3.4rem); }
  .desktop-only { display: none; }
  .hero-actions { display: grid; }
  .address-button { min-width: 0; width: 100%; }
  .primary-button { width: 100%; }
  .live-status { align-items: flex-start; flex-wrap: wrap; line-height: 1.7; }
  .status-divider { display: none; }
  .server-values article { padding: 22px; }
  .journey-image { border-radius: 11px; }
  .unlock-message { padding: 42px 24px; }
  .destination-card { min-height: 470px; }
  .destination-copy { padding: 26px; }
  .community-actions { display: grid; }
}
</style>
