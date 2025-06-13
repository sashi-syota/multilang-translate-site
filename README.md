# 多言語翻訳サイト（AWS構成）

## 概要
このプロジェクトは、AWSの　CloudFront、S3、Lambda、API Gateway、AWS Translateを活用した、多言語対応の翻訳Webアプリケーションです。

ユーザーはWeb画面上で任意のテキストを入力し、
「日本語」「英語」「中国語」「フランス語」の間で双方向の翻訳が可能です。

## 使用技術
- AWS CloudFront（HTTPS通信/キャッシュ）
- AWS S3（静的webホスティング）
- AWS Lambda（翻訳処理をpythonで実装）
- AWS API Gateway（REST API連携）
- AWS Translate（翻訳サービス）
- HTML / CSS / JavaScript（フロントエンド）

## 機能
- 言語の切り替え（日本語・英語・中国語・フランス語）
- 入力/出力のテキストエリア
- 「Translate」「Clear」ボタン
- CloudFrontアイコンの表示

## 使い方
1. Cloudfront 配信URLを開く(https://d3jv625zvd73cc.cloudfront.net/) 
2. 翻訳元の言語と翻訳先の言語を選択
3. テキストを入力し「Translate」をクリック
4. 翻訳が表示される
5. 必要に応じて「Clear」で初期化

## 補足
- 本アプリはポートフォリオ用に構築したデモ環境です。
- 一部の環境によってはCloudFrontのキャッシュの影響で反映されない可能性があります。

## ディレクトリ構成（簡易）
aws-translate-site/
├── frontend/ # Web UI（HTML/CSS/JS）
└── backend/ # Lambda関数（Python）

## 制作
2025年6月



