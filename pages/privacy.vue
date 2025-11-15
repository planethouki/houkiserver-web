<template>
  <div class="container my-5 privacy-policy">
    <div class="row justify-content-center">
      <div class="col-lg-10">

        <header class="mb-4">
          <h1 class="h3 mb-2">プライバシーポリシー</h1>
          <p class="text-muted small mb-1">
            本プライバシーポリシーは、管理者（以下「管理者」）が運営するマインクラフトサーバー（以下「本サーバー」）において
            ユーザーの個人情報・関連データをどのように扱うかを定めたものです。
          </p>
          <p class="text-muted small">
            本サーバーを利用することで、本ポリシーの内容に同意したものとみなします。
          </p>
        </header>

        <!-- 第1条 -->
        <section class="mb-4">
          <h2 class="h5 mb-2">第1条（収集する情報）</h2>
          <p>本サーバーは、運営上必要な範囲で、以下の情報を収集する場合があります。</p>
          <ul>
            <li>Minecraft アカウント名（プレイヤーID）</li>
            <li>接続日時、接続IPアドレス、利用端末に関する技術情報</li>
            <li>チャットログ・ゲーム内の行動ログ</li>
            <li>不正対策や荒らし対策のためのログ情報</li>
            <li>お問い合わせ時に提供される任意の情報</li>
          </ul>
        </section>

        <!-- 第2条 -->
        <section class="mb-4">
          <h2 class="h5 mb-2">第2条（利用目的）</h2>
          <p>収集した情報は、以下の目的のために利用します。</p>
          <ul>
            <li>サーバーの運営、管理、保守、品質向上のため</li>
            <li>不正行為や荒らし行為の調査・対応のため</li>
            <li>トラブル発生時の対応のため</li>
            <li>ユーザーサポート・問い合わせ対応のため</li>
            <li>サーバーの安全性確保のための分析</li>
          </ul>
        </section>

        <!-- 第3条 -->
        <section class="mb-4">
          <h2 class="h5 mb-2">第3条（ログデータの保存期間）</h2>
          <p>
            収集したログデータ（チャットログ、接続情報など）は、運営上必要な期間保存されます。
            保存期間は特に定めず、管理者の判断で適宜削除・保管が行われます。
          </p>
        </section>

        <!-- 第4条 -->
        <section class="mb-4">
          <h2 class="h5 mb-2">第4条（第三者提供）</h2>
          <p>管理者は、以下の場合を除き、ユーザー情報を第三者に提供することはありません。</p>
          <ul>
            <li>ユーザー本人の同意がある場合</li>
            <li>法令に基づく開示要請があった場合</li>
            <li>不正行為の調査のため、外部サービスや専門家に協力を依頼する必要がある場合</li>
            <li>サーバー運営に必要な範囲で外部サービス（ホスティング等）を利用する場合</li>
          </ul>
        </section>

        <!-- 第5条 -->
        <section class="mb-4">
          <h2 class="h5 mb-2">第5条（セキュリティ対策）</h2>
          <p>
            管理者は、ユーザー情報を適切に管理し、不正アクセス・情報漏えい等の防止に努めます。
            ただし、完全な安全性を保証するものではありません。
          </p>
        </section>

        <!-- 第6条 -->
        <section class="mb-4">
          <h2 class="h5 mb-2">第6条（ユーザーの権利）</h2>
          <p>
            ユーザーは、管理者が保有する自身のデータについて開示または削除を求めることができます。
            ただし、荒らし対策・不正対策に影響が出る場合や、ログ保全の義務がある場合には応じられない場合があります。
          </p>
        </section>

        <!-- 第7条 -->
        <section class="mb-4">
          <h2 class="h5 mb-2">第7条（ポリシーの改定）</h2>
          <p>
            管理者は、必要に応じて本プライバシーポリシーを変更することがあります。
            改定後も引き続き本サーバーを利用することで、ユーザーは改定内容に同意したものとみなされます。
          </p>
        </section>

        <!-- 第8条 -->
        <section class="mb-4">
          <h2 class="h5 mb-2">第8条（施行日）</h2>
          <p class="mb-1">
            本ポリシーは、{{ '2025年12月1日' }} より施行します。
          </p>
        </section>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "privacy",
};
</script>

<style scoped>
.privacy-policy {
  line-height: 1.7;
}

.privacy-policy ul {
  padding-left: 1.2rem;
  list-style-type: disc;
}
</style>
