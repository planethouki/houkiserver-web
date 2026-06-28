# houkiserver-web

ほうき鯖の Web サイトです。Nuxt を AWS Amplify Hosting の SSR として配信し、Minecraft サーバーの状態は Nuxt のサーバー API から取得します。

## ローカル開発

```bash
npm ci
cp .env.sample .env
npm run dev
```

`NUXT_PUBLIC_API_BASE_URL` が未設定の場合は、Nuxt の `server/api/server-status.ts` を使用します。

## AWS へのデプロイ

### 1. Amplify Hosting

1. Amplify Hosting でこの Git リポジトリのデプロイ対象ブランチを接続します。
2. 環境変数に以下を登録します。
   - `DISCORD_INVITE_LINK`: Discord の招待 URL
   - `YOUTUBE_PLAYLIST_LINK`: YouTube の再生リスト URL
3. `NUXT_PUBLIC_API_BASE_URL` が登録されている場合は削除します。未設定時は同一オリジンの `/api` が使用されます。
4. リポジトリ内の `amplify.yml` をビルド設定としてデプロイします。

Amplify のビルド環境を Nitro が検出し、SSR 用の `.amplify-hosting` に静的ファイル、Node.js サーバー、デプロイマニフェストを生成します。

### 2. 外部 REST API（任意）

Nuxt のサーバー API を使用せず、API Gateway + Lambda を別途デプロイする場合だけ使用します。

```bash
cd aws
sam build
sam deploy --guided
```

デプロイ後、Amplify の環境変数 `NUXT_PUBLIC_API_BASE_URL` に SAM の出力 `ApiBaseUrl` を登録します。`NUXT_PUBLIC_*` はブラウザーから参照できる公開値なので、秘密情報は設定しないでください。

公開 URL が決まったら、API の CORS をそのオリジンだけに制限できます。

```bash
cd aws
sam deploy --parameter-overrides AllowedOrigin=https://www.houkiserver.com
```

## ビルド確認

```bash
npm run build
```

Amplify のビルド環境では、配信する成果物が `.amplify-hosting` に生成されます。
