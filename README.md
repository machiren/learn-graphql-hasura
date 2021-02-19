# Learn Hasura GraphQL Engine

## 開発モジュール準備

```bash
npm i
```

## フロントエンド 開発サーバー立ち上げ

```bash
npm run dev
# or
yarn dev
```

## フロントエンド ビルド

```bash
npm run build
```

## フロントエンド 本番稼働

```bash
npm run start
```

## バックエンド 開発サーバー立ち上げ

```bash
docker-compose up
# or
docker-compose up -d # バッググラウンド
```

## バックエンド Hasura Console サーバー立ち上げ

```bash
npx hasura console
```

## GraphQL Query 定義 or 変更したら GraphQL の Hooks や型を再生成する

```bash
npm run gql-gen
```
