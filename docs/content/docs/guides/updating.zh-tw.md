---
title: 更新指南
date: 2019-05-10T00:00:10
type: posts

categories: ["文件", "指南"]
tags: ["document", "guide", "updating"]
---

<!--more-->

## 更新

### 透過 submodule 更新

```sh
cd themes/hugo-theme-0x148
git checkout master
git pull

cd ../..
git add themes/hugo-theme-0x148
git commit -m "Update hugo-theme-0x148"
```

### 透過 clone 更新

簡單地用最新版本的 hugo-theme-0x148 檔案取代 `themes/hugo-theme-0x148` 即可；也就是說，刪除原本的檔案再重新 clone 一次。

```sh
rm -rf themes/hugo-theme-0x148
git clone --depth 1 https://github.com/progamesigner/hugo-theme-0x148 themes/hugo-theme-0x148
```

完成之後，提交這個變更。

```sh
git add themes/hugo-theme-0x148
git commit -m "Update hugo-theme-0x148"
```

## 更新之後

在更新 hugo-theme-0x148 之後，記得檢查網站中的 `config.toml` 檔案是否有對應到最新版本的 `config.toml` 檔案格式。

建議在更新之前與之後都檢查 [更新日誌]({{< relref "/release-notes" >}}) 的內容，並且再三檢查所有與 hugo-theme-0x148 相關的設定。
