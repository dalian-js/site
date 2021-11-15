---
layout: post
title: Markvis - 在 markdown 中生成可视化图表
date: 2017-07-14 20:56:40
categories:
- Tool
- Visualization
tags:
- Markvis
- Visualization
- Markdown
- markdown-it
- 数据
- 可视化
- Tool
- 工具
- Development
---

> 本文首发于「GraphiCon图形控」公众号，微信号 GraphiCon，[原文地址](http://t.cn/RKmrRn9)

今天在这里给大家分享一个 markdown-it 插件，能让你在markdown 中通过几行代码就生成一个可视化图表📊。

- 项目主页： [https://markvis.js.org/ ](https://markvis.js.org/)
- 在线编辑器体验一下： [https://markvis-editor.js.org/ ](https://markvis-editor.js.org/)
- 源码： [https://github.com/geekplux/markvis ](https://github.com/geekplux/markvis)

![home](https://i.loli.net/2017/07/14/59687d0c743bd.jpeg)

## 背景介绍

Markdown 现在被越来越多的人熟悉，它是一个标记语言，只要你在每句话之前加一些符号，编辑器就能自动排版。markdown-it 是一个 markdown 的解析器，易扩展，很多人给它写插件，比如有个插件是让它支持可爱的 emoji 表情。markvis 也是一个插件，通过两行代码就能生成条形图折线图等，如下图：

![preview](https://i.loli.net/2017/07/13/5966c9acb6509.png)

## 为什么要做这个工具

有时候写文章需要插入一些数据来增强说服力，但是单纯的数字又不直观，所以可视化图表是必须的。紧接着就会出现一个问题：如何把图表添加到文章中。通常的做法是用一些现成的工具生成图片，然后把图片贴到文章中。这样一来就非常繁琐，尤其是用markdown写作时你还得把图片先上传到一个图床中。另一方面，访客阅读文章时，图片的加载比网页元素肯定更耗时。一旦加载过慢就会给阅读造成非常不好的体验。

Markvis 相当于抓住了这个痛点，开发出了直接在 Markdown 中生成图表的插件，省去写作人员的很多步骤。

## Markvis 的优势

Markvis 设计的语法简单，而且拥有非常灵活的 API。

### 开源项目

短短一天，Markvis 已经在 GitHub 上收获了 300+ 的 star 数，并且成功挤上了 Trending 榜前 10，连 Producthunt 的盆友都夸，相信将来在开发和维护上会有不少的优势。

![comment](https://i.loli.net/2017/07/14/59687cd46241d.png)

### 自定义图表

Markvis 目前提供三种最常用的图表：[条形图](https://github.com/geekplux/markvis-bar)，[折线图](https://github.com/geekplux/markvis-line)和[饼状图](https://github.com/geekplux/markvis-pie) 的布局。但是请不要担心，你可以通过 API 来自定义新的图表。只要你会一点 d3，就都可以轻松开发出一个新的图表布局。[D3](https://d3js.org) 是目前最流行的可视化前端库，让你可以自由操作 SVG 元素，生成各式各样的可视化结果。

### 自定义是引擎

目前 Markvis 是用 d3 来做底层的渲染，但实际上你可以直接把渲染引擎换掉，换成你想要的，比如 Vega-Lite，Echart 等。Vega-Lite 是 2016 年 IEEE VIS 的 best paper，提出了一种高级可视化语法，能直接用简单的 json 转换成一个可视化图表，并带有丰富的交互操作。Markvis 的下一步开发计划就是将其整合进来，这样 markvis 支持的图表类型和交互就极大的丰富起来。Echart 是国内百度开发的一款可视化库，也非常简单易用。

刚才提到的 D3 和 Vega-lite 都来自同一个实验室——可视化界著名的华盛顿大学交互数据实验室，他们在可视化工具方面的探索非常超前。不过目前国内的可视化发展也是突飞猛进，像百度嗯 Echart，阿里的 DataV、G2 都是很赞的可视化库。欢迎感兴趣的小伙伴一起来学习可视化知识，开发有趣的可视化工具！


## Update

除了上文提到的优势，markvis 还可以慢慢对接所有主流的 markdown parser。或者给主流编辑器提供插件。


