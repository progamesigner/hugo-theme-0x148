---
title: Updating Guide
date: 2019-05-10T00:00:10
type: posts

categories: ["documents", "guides"]
tags: ["document", "guide", "updating"]
---

<!--more-->

## Updating

### Update theme via submodule

```sh
cd themes/hugo-theme-0x148
git checkout master
git pull

cd ../..
git add themes/hugo-theme-0x148
git commit -m "Update hugo-theme-0x148"
```

### Update theme via clone

Just replace folder `themes/hugo-theme-0x148` with latest clone of hugo-theme-0x148. That is, delete the old one and clone again.

```sh
rm -rf themes/hugo-theme-0x148
git clone --depth 1 https://github.com/progamesigner/hugo-theme-0x148 themes/hugo-theme-0x148
```

After that, commit the changes.

```sh
git add themes/hugo-theme-0x148
git commit -m "Update hugo-theme-0x148"
```

## After Updating

After updating hugo-theme-0x148, always check your site's `config.toml` file to match latest `config.toml` file format.

You should always check [release notes]({{< relref "/release-notes" >}}) before and after updating.

It's a good idea to double check all the configurations of hugo-theme-0x148.
