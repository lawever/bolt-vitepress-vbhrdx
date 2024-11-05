# 快速开始

## 安装

```bash
# 使用 npm
npm install vitepress --save-dev

# 使用 yarn 
yarn add -D vitepress

# 使用 pnpm
pnpm add -D vitepress
```

## 创建第一个页面

1. 创建文档目录:
```bash
mkdir docs && cd docs
```

2. 创建首页:
```markdown
# docs/index.md
---
layout: home
---

# Hello VitePress
```

## 配置

在 `.vitepress/config.ts` 中配置你的站点:

```ts
export default {
  title: '我的文档',
  description: '使用 VitePress 构建的文档站点'
}
```