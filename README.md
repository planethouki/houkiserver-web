# houkiserver-web

ほうき鯖の Web サイトです。フロントエンドは Nuxt で静的生成 (SSG) し、AWS Amplify Hosting から配信します。Minecraft サーバーの状態取得だけを API Gateway (HTTP API) + Lambda で提供します。

## ローカル開発

```bash
npm ci
cp .env.sample .env
npm run dev
```

ローカルでは `NUXT_PUBLIC_API_BASE_URL=http://localhost:3000/api` とすることで、Nuxt の `server/api/server-status.ts` を使用します。

## AWS へのデプロイ

### 1. REST API

[AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html) と AWS CLI の認証を準備し、次を実行します。

```bash
cd aws
sam build
sam deploy --guided
```

最初のデプロイでは `AllowedOrigin` は既定値の `*` で開始できます。Amplify の URL または独自ドメインが決まっている場合は、その公開オリジンを指定します（末尾の `/` は付けません）。デプロイ完了時に表示される `ApiBaseUrl` を控えます。

### 2. Amplify Hosting

1. Amplify Hosting でこの Git リポジトリの `main` ブランチを接続します。
2. 環境変数に以下を登録します。
   - `NUXT_PUBLIC_API_BASE_URL`: SAM の出力 `ApiBaseUrl`
   - `DISCORD_INVITE_LINK`: Discord の招待 URL
   - `YOUTUBE_PLAYLIST_LINK`: YouTube の再生リスト URL
3. リポジトリ内の `amplify.yml` をビルド設定としてデプロイします。

`NUXT_PUBLIC_*` は静的生成時にブラウザー用コードへ埋め込まれる公開値です。秘密情報は設定しないでください。

公開 URL が決まったら、API の CORS をそのオリジンだけに制限できます。

```bash
cd aws
sam deploy --parameter-overrides AllowedOrigin=https://www.houkiserver.com
```

## ビルド確認

```bash
npm run generate
```

Amplify へ配信する成果物は `.output/public` に生成されます。
