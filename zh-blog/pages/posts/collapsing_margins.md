---
layout: post
title: Collapsing margins——合并的外边距
date: 2014-03-14 21:10:19
categories:
- Web
- CSS
tags:
- Web
- CSS
- 笔记
- Note
---

> 原文地址：[https://geekplux.com/2014/03/14/collapsing_margins ](https://geekplux.com/2014/03/14/collapsing_margins)

昨天在写 CSS 时遇到一个小问题，困扰了我好长时间，最后 Google 之，发现早有前人踩过此坑。为免以后再掉进坑，记下来比较好。

昨天遇到的问题是这样的。我设置了一对父子元素如下：

```HTML
<div class="parent">Parent
    <div class="children">Children
    </div>
</div>
<div class="divider"></div>
```

它们的样式如下：

```CSS
.parent {
    margin-bottom: 10px;
    width: 80px;
    height: 20px;
    background-color: yellow;
}
.children {
    margin-bottom: 20px;
    width: 80px;
    height: 20px;
    background-color: red;
}
.divider {
    height: 1px;
    background-color: black;
}
```

产生的效果如图所示：

![][1]

为什么分割线跑到了 Children 里面？这两个父子元素都设置了 `margin-bottom`，加起来应该是 30px，为什么现在成了 20px？种种疑问在我脑中盘旋。刚开始以为是万恶的 `position`，但是我把所有能想到的属性排列组合都设置了一遍，发现还是不行。果断 Google，才知道这个问题由来已久……



# collapsed margin

关于 collapsing-margin，有 [W3C 的官方介绍][2]：

> In CSS, the adjoining margins of two or more boxes (which might or might not be siblings) can combine to form a single margin. Margins that combine this way are said to collapse, and the resulting combined margin is called a **collapsed margin**.

在 CSS 中，**两个或多个毗邻（父子元素或兄弟元素）的普通流中的块元素垂直方向上的 margin 会发生叠加**。这种方式形成的外边距即可称为外边距叠加(collapsed margin)。

- 何为毗邻：是指没有被非空内容、padding、border 或 clear 分隔开。
- 何为普通流：除浮动（ float ）、绝对定位（ absolute ）外的代码即为普通流。

好吧，这下理解了，原来 **挨着的、且没有任何东西分割的** 两个普通元素会在垂直方向上合并 margin。我们可以想象出有 4 种情况会发生合并，看图比较直观（图来自网络）：

- 兄弟元素

![][3]

- 父子元素

![][4]

- 空元素

![][5]

- 以上三种混合

![][6]

到底怎么才算毗邻，其实[官网][2]对于**毗邻**作了很详细的解释（_保证你看完会晕_）：

首先是一个**大前提**：元素之间没有被非空内容、padding、border 或 clear 分隔开。然后有下面几种情况算是毗邻：

> - top margin of a box and top margin of its first in-flow child

>     一个元素的 margin-top 和它的第一个子元素的 margin-top

> - bottom margin of box and top margin of its next in-flow following sibling

>     普通流中一个元素的 margtin-bottom 和它的紧邻的兄弟元素的的 margin-top

> - bottom margin of a last in-flow child and bottom margin of its parent if the parent has 'auto' computed height

>     一个元素（ height 为 auto ）的 margin-bottom 和它的最后一个子元素的margin-bottom

> - top and bottom margins of a box that does not establish a new block formatting context and that has zero computed 'min-height', zero or 'auto' computed 'height', and no in-flow children

>     一个没有创建 BFC、没有子元素、height 为0的元素自身的 margin-top 和 margin-bottom

不管你晕不晕，反正我晕了……

# 如何避免

避免外边距叠加，只要破坏它的 4 个必要条件（2 个或多个、毗邻、垂直方向、普通流）中的一个即可。下面是[官网][2]不构成外边距叠加的各种情况。

> - 浮动元素和其他任何元素之间不发生外边距叠加 (包括和它的子元素).
> - 创建了 BFC 的元素不会和它的子元素发生外边距叠加
> - 绝对定位元素和其他任何元素之间不发生外边距叠加(包括和它的子元素).
> - inline-block 元素和其他任何元素之间不发生外边距叠加 (包括和它的子元素).
> - 普通流中的块级元素的 margin-bottom 永远和它相邻的下一个块级元素的 margin-top 叠加（除非相邻的兄弟元素 clear）
> - 普通流中的块级元素（没有 border-top、没有 padding-top ）的 margin-top 和它的第一个普通流中的子元素（没有 clear ）发生 margin-top 叠加
> - 普通流中的块级元素（ height 为 auto、min-height 为 0、没有 border-bottom、没有 padding-bottom ）和它的最后一个普通流中的子元素（没有自身发生 margin 叠加或 clear ）发生 margin-bottom 叠加
> - 如果一个元素的 min-height 为 0、没有 border、没有 padding、高度为 0 或者 auto、不包含子元素，那么它自身的外边距会发生叠加

同样会看晕，总结下来，我们**最好的办法是**：

- 为父元素设置 BFC 或 padding 或 border
- 兄弟元素间设置 float 或 inline-block 或 absolute
- 写结构的时候最好用一个方向，要不都 top 要不都 bottom

整个问题解决下来，我感觉其实并没有那么复杂的东西却被文档表述的很复杂，也可能是我英语比较差。而且在开发过程中许多细节我认为没必要去抠它，只要遇到时能迅速定位出原因（我昨天遇到这个问题，第一时间就无法定位，不停换关键词去搜才慢慢明白，还是经验少啊），就可以依靠 Google 搜索出解决方案，这样可以保证开发效率。如果想深入了解，还是抽业余时间吧……下面的文章可供参考（如怎么计算 margin 的最终值）。网上的资源太丰富了，感谢这些前辈。

- [外边距合并](https://developer.mozilla.org/zh-CN/docs/CSS/margin_collapsing)
- [子元素的 margin-top 与父元素合并的问题](http://blog.csdn.net/yuanxin1113/article/details/8829170)
- [Collapsing margins](http://css-tricks.com/almanac/properties/m/margin/)
- [Box model](http://www.w3.org/TR/CSS21/box.html#collapsing-margins)
- [CSS 框模型( Box module )](http://www.w3help.org/zh-cn/kb/006/) --- 涉及如何计算合并后的 margin 值

[1]: https://geekpluxblog.oss-cn-hongkong.aliyuncs.com/example-0.png?x-oss-process=style/zip
[2]: https://www.w3.org/TR/CSS21/box.html#collapsing-margins
[3]: https://geekpluxblog.oss-cn-hongkong.aliyuncs.com/example-1.gif?x-oss-process=style/zip
[4]: https://geekpluxblog.oss-cn-hongkong.aliyuncs.com/example-2.gif?x-oss-process=style/zip
[5]: https://geekpluxblog.oss-cn-hongkong.aliyuncs.com/example-3.gif?x-oss-process=style/zip
[6]: https://geekpluxblog.oss-cn-hongkong.aliyuncs.com/example-4.gif?x-oss-process=style/zip
