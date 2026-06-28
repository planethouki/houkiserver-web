# houkiserver-web

ほうき鯖の Web サイトです。Nuxt を AWS Amplify Hosting の SSR として配信し、Minecraft サーバーの状態は Nuxt のサーバー API から取得します。

## ローカル開発

```bash
npm ci
cp .env.sample .env
npm run dev
```

## ビルド確認

```bash
npm run build
```

Amplify のビルド環境では、配信する成果物が `.amplify-hosting` に生成されます。
