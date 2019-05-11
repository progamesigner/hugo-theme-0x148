---
title: Installation Guide
date: 2019-05-10T00:00:00
type: posts

categories: ["documents", "guides"]
tags: ["document", "guide", "installation"]
---

First of all you will need to setup a Hugo site. You can follow the [Hugo's Quick Start Guide](https://gohugo.io/getting-started/quick-start/) for that.

<!--more-->

## Installation

There are two different ways to install hugo-theme-0x148:

1. Via submodule (**recommended**)
2. Via clone

#### Install theme via submodule

With submodule, your site's repository doesn't store a copy of hugo-theme-0x148's repository. Rather it adds hugo-theme-0x148 as a dependency.

```sh
git submodule add https://github.com/progamesigner/hugo-theme-0x148 themes/hugo-theme-0x148
```

This will add hugo-theme-0x148's repository as a submodule to your site's repository. Now you have to pull the theme:

```sh
git submodule init
git submodule update
```

That's all, hugo-theme-0x148 is ready.

#### Install theme via clone

With clone, you will store a copy of hugo-theme-0x148's repository in your site's repository.

```sh
git clone --depth 1 https://github.com/progamesigner/hugo-theme-0x148 themes/hugo-theme-0x148
```

That's all, hugo-theme-0x148 is ready.

## Configuration

To get started with hugo-theme-0x148, copy `config.toml` file in `exampleSite` directory from hugo-theme-0x148's repository to your site's repository.

```sh
cp themes/hugo-theme-0x148/exampleSite/config.toml .
```

You can take a look at the [`config.toml` file]({{< relref "/docs/guides/configurations" >}}) of this site.
