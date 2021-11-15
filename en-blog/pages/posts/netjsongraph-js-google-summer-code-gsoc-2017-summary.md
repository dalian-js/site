---
title: netjsongraph.js – Google Summer of Code (GSoC) 2017 summary
description: A wonderful journey of 2017 GSOC
date: 2017-08-26 22:45:52
tag: Google Summer of Code, GSoC, Data Visualization, Visualization, Summary
author: GeekPlux
---

# netjsongraph.js – Google Summer of Code (GSoC) 2017 summary

> Link on [medium](https://medium.com/@GeekPlux/netjsongraph-js-google-summer-of-code-gsoc-2017-summary-b0239f4eb8a9)

Throughout the last three months, I was quite fortunate to work for [Freifunk][freifunk] on [netjsongraph.js][netjsongraph.js] under the guidance of my mentor [Federico Capoano](https://github.com/nemesisdesign). Thanks for this invaluable experience that I learned a lot of knowledge and use them in a practical project. Here is a summary of the work I have done during the Google Summer of Code (GSoC) 2017.

![Google Summer of Code project page](https://geekpluxblog.oss-cn-hongkong.aliyuncs.com/gsoc/project-page.png?x-oss-process=style/zip)

## Goal

[netjsongraph.js][netjsongraph.js] is a visualization library for [NetJSON](http://netjson.org/docs/what.html#what-is-netjson), a network topology data format. The main goal of [netjsongraph.js][netjsongraph.js] may be concluded in below three lines (more details you can see in [GSoC 2017-netjsongraph.js: visualization of NetJSON data](https://blog.freifunk.net/2017/05/30/gsoc-2017-netjsongraph-js-visualization-netjson-data/)):

- Apply the modern front-end development tools and add tests workflow ([#1](https://github.com/netjson/netjsongraph.js/issues/1), [#45](https://github.com/netjson/netjsongraph.js/issues/45))
- Rewrite it with WebGL ([#11](https://github.com/netjson/netjsongraph.js/issues/11), [#29](https://github.com/netjson/netjsongraph.js/issues/29), [#39](https://github.com/netjson/netjsongraph.js/issues/39), [#42](https://github.com/netjson/netjsongraph.js/issues/42), [#47](https://github.com/netjson/netjsongraph.js/issues/47))
- Improve the performance ([#41](https://github.com/netjson/netjsongraph.js/issues/41), [#44](https://github.com/netjson/netjsongraph.js/issues/44), [#46](https://github.com/netjson/netjsongraph.js/issues/46))

## Achievement

> - ##### Github Repository : [netjsongraph.js][netjsongraph.js]
> - ##### Examples on GitHub pages: [netjson](https://netjson.github.io/netjsongraph.js/)

You can browse all examples on GitHub pages. Some screen shots of the application:

![basic example](https://geekpluxblog.oss-cn-hongkong.aliyuncs.com/gsoc/basic-example.png?x-oss-process=style/zip)

![performance example](https://geekpluxblog.oss-cn-hongkong.aliyuncs.com/gsoc/performance-example.png?x-oss-process=style/zip)

The force-directed layout is usually used to visualize network data. It offers insights on the relationships between nodes and links. The previous version of [netjsongraph.js][netjsongraph.js] is implemented by [d3](https://d3js.org/) and it's rendered using SVG. It would be very slow if there were thousands or ten of thousands nodes or links. So I have to embrace the WebGL speeded up by GPU to have a better performance.

I have recorded my work in the blog every milestone:

- [GSoC 2017-netjsongraph.js milestone 1](https://blog.freifunk.net/2017/06/29/gsoc-2017-netjsongraph-js-milestone-1/)
- [GSoC 2017-netjsongraph.js milestone 2](https://blog.freifunk.net/2017/07/26/gsoc-2017-netjsongraph-js-milestone-2/)

_BTW, It's a great management method to make members submit weekly reports and blog posts in [Freifunk][freifunk]._

During the three months, there have been **116 commits** from me. I created a big Pull Request include them:

![netjsongraph.js #48](https://geekpluxblog.oss-cn-hongkong.aliyuncs.com/gsoc/merge-request.png?x-oss-process=style/zip)

![netjsongraph.js project panels](https://geekpluxblog.oss-cn-hongkong.aliyuncs.com/gsoc/project.png?x-oss-process=style/zip)

Almost all goals have achieved:

- Published a minor version
- Improved development workflow
- Tests Added
- Refactored visualization by [Three.js](https://threejs.org/) and [d3-force][d3-force]
- Added more interaction like hover (show nodes tooltips), click (show nodes or links information panel), pan and zoom
- Improved performance

Especially on performance aspect, it runs efficiently on Chrome reached **60FPS** under _5k nodes and 10k links_. And if you don't wanna animation, you can choose the static rendering layout.

## Challenges

I also encounter some challenges I never met before.

#### Event binding and handling

As you know, WebGL renders all objects in one canvas tag. How to bind events on every geometry? You should use the [Ray casting](https://en.wikipedia.org/wiki/Ray_casting). Raycasting is used for mouse picking (working out what objects in the 3d space the mouse is over) amongst other things. So you can know which geometry your mouse over and add some interaction effect.

There are thousands of objects and every object has several events you should handle, I had to develop an event controller to manage it.

#### Performance

The bottleneck in this visualizer is performance([#41](https://github.com/netjson/netjsongraph.js/issues/41)). I tried many methods to improve it include:

##### Reuse geometry and material

However, the color of every node is different and the one link should highlight itself when it hovered, so the material should be independent and can not use in common.

##### Combine the mesh

Same problem with above. It's not flexible to combine them to one mesh, different nodes and links should have different positions.

##### Static rendering

Make calculation before rendering, so there is no animation and repaint.

##### Using Web Worker

Web Workers is a simple means for web content to run scripts in background threads. The worker thread can perform tasks without interfering with the user interface. So put static layout calculation into it will be efficient.

#### Force-directed algorithm

There are different complexity and cost in the different force-directed algorithm. The [Force-Atlas2 algorithm](http://journals.plos.org/plosone/article?id=10.1371/journal.pone.0098679) has some benefits over the force layout implemented in [d3-force][d3-force]. So current version may be refactored by an advanced algorithm in the future.

## What is left to be done

- Add optional geographic map ([#40](https://github.com/netjson/netjsongraph.js/issues/40))
- Using Force-Atlas2 algorithm

More interactions and features should be added, and performance may be optimized by using new algorithm. I'd like to continue developing this project after GSoC.

In the end, thanks for the great patience and guidance from my mentors. Thanks for Google to provide me with this rare chance to contribute to an open source community together with awesome members from all over the world. I really appreciate this invaluable experience accumulated this summer and I believe it will have the profound impact on my career and life.


[netjsongraph.js]: https://github.com/netjson/netjsongraph.js
[freifunk]: https://freifunk.net/
[d3-force]: https://github.com/d3/d3-force/
