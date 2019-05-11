---
title: 安裝指南
date: 2019-05-10T00:00:00
type: posts

categories: ["文件", "指南"]
tags: ["document", "guide", "installation"]
---

在開始之前，需要先建立一個 Hugo 網站，可以參考 [Hugo's Quick Start Guide](https://gohugo.io/getting-started/quick-start/) 的內容。

<!--more-->

## 安裝

有兩個方式可以安裝 hugo-theme-0x148 主題：

1. 透過 submodule (**建議方式**)
2. 透過 clone

#### 透過 submodule 安裝主題

透過 submodule 的方式，網站的 repository 不會儲存完整的 hugo-theme-0x148 檔案，而是將 hugo-theme-0x148 視為一個依賴。

```sh
git submodule add https://github.com/progamesigner/hugo-theme-0x148 themes/hugo-theme-0x148
```

這會將 hugo-theme-0x148 加入 submodule 中，現在實際抓取主題檔案：

```sh
git submodule init
git submodule update
```

完成，已經能夠開始使用 hugo-theme-0x148 主題了。

#### 透過 clone 安裝主題

透過 clone 的方式，網站的 repository 會儲存一份 hugo-theme-0x148 的檔案。

```sh
git clone --depth 1 https://github.com/progamesigner/hugo-theme-0x148 themes/hugo-theme-0x148
```

完成，已經能夠開始使用 hugo-theme-0x148 主題了。

## 設定

要開始使用 hugo-theme-0x148 主題，從 `exampleSite` 目錄中複製一份 `config.toml` 檔案。

```sh
cp themes/hugo-theme-0x148/exampleSite/config.toml .
```

可以查看這個文件網站的 [`config.toml`]({{< relref "/docs/guides/configurations" >}}) 檔案。
