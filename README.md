[![GitHub release](https://img.shields.io/github/release/progamesigner/hugo-theme-0x148.svg?style=for-the-badge)](https://github.com/progamesigner/hugo-theme-0x148/releases/latest)
[![GitHub Release Date](https://img.shields.io/github/release-date/progamesigner/hugo-theme-0x148.svg?style=for-the-badge)](https://github.com/progamesigner/hugo-theme-0x148/releases)
[![license](https://img.shields.io/github/license/progamesigner/hugo-theme-0x148.svg?style=for-the-badge)](LICENSE)

![0x148](images/screenshot.png?raw=true)

# 0x148

A theme for Hugo with customizations.

## Features
 - Responsive and mobile friendly
 - Configurable menu of navbar, navbar links, share menu
 - Pages for archives, categories, and tags
 - Post archetype features:
    - Hero covers
    - Table of contents
 - Shortcodes:
    - expand
    - figure
    - hero
    - mailvelope
    - message
 - Support multilingual mode and internationalization (i18n)
 - Support code highlighting (based on Chroma / Pygments)
 - Support search and filters in taxonomy terms page
 - Support Google AMP
 - Support Open Graph, Twitter card, and google news (via Hugo built-in templates)
 - Easily and extensively customizations
    - Custom CSS
    - Custom JS
    - Custom Head / Header / Footer
 - Intergrated with Google Analytics, Disqus, and Iconify

## Quick Start

```shell
mkdir themes
cd themes
git clone https://github.com/0x148/hugo-theme-0x148.git
```

## Documentation

Check the [documentation](https://theme.0x148.com) for detailed documentation of hugo-theme-0x148.

If it's your first time using Hugo, please check [Hugo official documentation](https://gohugo.io/overview/introduction/) also.

## Development

If you find a bug or want to request a new feature, feel free to open an issue.

## Cloudflare 部署

使用 Cloudflare **Workers + static assets**，不需要 Worker script。`wrangler.jsonc` 指向 `docs/public/`，不存在的路徑回傳 404（`404-page`）。

Hugo 會產生各語系的 `404.html`；Cloudflare 會回傳最近的 404 頁面。Theme 路徑相對於 `docs/` 指向儲存庫根目錄，不依賴 checkout 資料夾名稱。

### 本機建置與驗證

需要 Node.js 24（根目錄 `.node-version`）；另需安裝 Hugo **extended 0.168.0**。

```sh
npm ci
npm run build
npm run deploy:prod # webpack 正式資產 + Hugo 示範站
npx wrangler deploy --dry-run # 僅驗證，不部署
npm run preview             # Wrangler 本機預覽，不連遠端
```

`npm run build` 保留原本 webpack 開發資產建置；正式示範站請用 `npm run deploy:prod`。原本的開發資產與 Hugo 組合建置改為 `npm run build:dev`。

`npm run deploy` 會真正發布已建置的資產；只在準備好上線且已取得 Cloudflare 授權時執行。

### Workers Builds 後台設定

在 Workers & Pages 建立名稱為 `hugo-theme-0x148` 的 **Worker** 並連結此 GitHub 儲存庫，根目錄設為儲存庫根目錄。先以 `migrate-to-cloudflare` 分支驗證；合併後將 production branch 設為 `master`。

| 設定 | 值 |
| --- | --- |
| Build command | `npm run deploy:prod` |
| Deploy command | `npm run deploy` |
| Build variable | `NODE_VERSION=24` |
| Build variable | `HUGO_VERSION=0.168.0` |
| Custom domain | `theme.0x148.com` |

版本變數請設定在 **Settings > Build > Build Variables and Secrets**。Workers Builds 的 [build image](https://developers.cloudflare.com/workers/ci-cd/builds/build-image/) 支援 `NODE_VERSION`（亦可讀取 `.node-version`）與 `HUGO_VERSION`；`netlify.toml` 的環境變數不會套用到 Workers Builds。這些是建置環境變數，不要放進 Wrangler runtime `vars`。網站不需要 runtime 變數或應用程式 secrets；Workers Builds 的部署 API token 可由後台自動產生，無須提交到 Git。

先在 `workers.dev` 網址確認首頁、語系／文件路徑、404 與靜態資產，再到 **Settings > Domains & Routes** 加入上述 custom domain。確認網域已由 Cloudflare 管理，於準備切換時處理現有 Netlify DNS 記錄衝突並驗證 HTTPS。此變更只準備設定，不會操作 Cloudflare 帳號或 DNS。

`netlify.toml` 是舊部署設定，保留供 DNS 切換前回滾；切換完成並驗證穩定前，請保留 Netlify 站台與原 DNS 記錄資料。

參考：[Workers Builds 設定](https://developers.cloudflare.com/workers/ci-cd/builds/configuration/)、[靜態站與 404](https://developers.cloudflare.com/workers/static-assets/routing/static-site-generation/)、[自訂標頭](https://developers.cloudflare.com/workers/static-assets/headers/)。

## License

The hugo-theme-0x148 is licensed under the MIT license. Check the [LICENSE](LICENSE) file for details.
