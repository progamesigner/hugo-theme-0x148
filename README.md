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

## Deploying to Cloudflare

The demo site at <https://theme.0x148.com> runs on Cloudflare Workers with static assets and no Worker script. `wrangler.jsonc` serves `docs/public/` and returns the nearest Hugo `404.html` for unknown paths.

```sh
npm ci
npm run deploy:prod   # production webpack assets and the Hugo demo site (needs Hugo extended)
npm run preview       # serve docs/public/ with wrangler dev, no remote calls
npm run build:dev     # development assets and drafts
```

GitHub Actions deploys the site with `.github/workflows/deploy.yaml`, which also pins the Hugo and Node.js versions. A push to `master` deploys to production. A push to any other branch uploads a preview version under an alias named after the branch, and the run summary shows its URL. The workflow needs the repository secrets `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`. The custom domain `theme.0x148.com` is set under the Worker's Settings > Domains & Routes. `wrangler.jsonc` turns off the production `workers.dev` URL and keeps preview URLs on.

## License

The hugo-theme-0x148 is licensed under the MIT license. Check the [LICENSE](LICENSE) file for details.
