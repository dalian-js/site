---
layout: post
title: 数据可视化基础——视觉编码
date: 2017-01-03 20:02:52
categories:
- Visualization
tags:
- Visualization
- 可视化
- 数据可视化
- 数据
- 大数据
- Big Data
- Data
- Data Visualization
- Guide
- 入门
- Note
- 笔记
- 总结
- Summary
---

> 本系列「数据可视化基础」文章共三篇，介绍可视化中最基础、最重要的一些概念、理论。这篇为第三篇，主要介绍[视觉编码](http://geekplux.com/2017/01/03/basics-of-data-visualization-visual-encoding-principles)，另两篇则主讲[可视化流程](http://geekplux.com/2017/01/01/basics-of-data-visualization-the-process-model)和[数据模型](http://geekplux.com/2017/01/02/basics-of-data-visualization-data-model)，建议从可视化流程看起。
> 原文地址：[http://geekplux.com/2017/01/03/basics-of-data-visualization-visual-encoding-principles ](http://geekplux.com/2017/01/03/basics-of-data-visualization-visual-encoding-principles)

终于来到了最后一篇，前两篇的铺垫可能有点长，但是不种苗浇水怎能开枝散叶。可视化编码是可视化中的**核心内容**，本文会对其进行详细的讲解，尤其是**视觉编码**与**视觉通道**两个概念，如果其中遇到晦涩之处，不要心急，可囫囵吞枣直接往下看。

## 什么是视觉编码（visual encoding）

很多人可能看到题目的时候就有这个疑问，到底什么是视觉编码。其实视觉编码很简单，用一句话就能概括：

> 视觉编码描述的是将数据映射到最终可视化结果上的过程。

这里的可视化结果可能是图片，也可能是一张网页等等。

编码二字，如果说**编**是指设计、映射的过程，那么码呢？**码**其实指的是一些图形符号。

## 图形能告诉我们什么

在介绍各类图形符号之前，我们先谈谈：图形能告诉我们什么。

![](https://geekpluxblog.oss-cn-hongkong.aliyuncs.com/basics-of-data-visualization/pic.png?x-oss-process=style/zip)

仔细观察上方这个简单的图片，你能得得到什么信息？

1. A B C 是不同的
2. B 在 A 和 C 的中间
3. BC 的长度是 AB 的大概两倍

得益于我们视觉系统的强大，这些信息不假思索就能得出。如果把上图想象成一个二维坐标系，则我们可能得出更多的结论。

> "Resemblance, order and proportion are the three signfields in graphics.” - Bertin [1]

图形符号和信息间的映射关系使我们能迅速获取信息。所以我们可以把图片看成一组图形符号的组合，这些图形符号中**携带**了一些信息，我们称作它**编码**了一些信息。而当人们从这些符号中**读取**信息时，我们称作我们**解码**了一些信息。

我们人类解码信息靠的是我们的眼睛、我们的视觉系统。如果说图形符号是编码信息的工具或通道、那么我们的视觉就是解码信息的通道。因此，我们通常把这种**图形符号 < —— > 信息 < —— > 视觉系统**的对应称作**视觉通道**。

至此算是把**视觉通道**、**视觉编码**这两个概念讲清楚了。如果一个人说他想用四个通道来编码四个维度的数据，即可以翻译成他想用四种图形符号来对应这份数据表的四个列的信息。

这里举个例子（例子来自于 [2] [陈为 沈则潜 陶煜波. 数据可视化[M]. 电子工业出版社, 2013.](https://geekplux.com/r/datavis_book/)）：

![例子来自于陈为 沈则潜 陶煜波《数据可视化》](https://geekpluxblog.oss-cn-hongkong.aliyuncs.com/basics-of-data-visualization/example.png?x-oss-process=style/zip)

- 上图中图 A 表示了三个不同班级的数学平均分，用柱状图表示，柱状图的**高度**作为一个视觉通道，编码了数学平均分的*值*；柱状，这个**形状**作为一个视觉通道编码了数学平均分这一*属性*。
- 图 B 中，我们想在 A 的基础上多展示语文平均分这一项数据（即增加了一个数据维度），则选用点这个**形状**通道编码这两个*属性*；点的**横坐标**编码语文平均分的*值*；点的**纵坐标**编码数学平均分的*值*。
- 这时候发现图 B 中我们把班级这个数据维度给丢掉了，于是我们可以用**颜色**这一视觉通道来编码班级这个**属性**信息，如图 C。
- 如果我们还想展示班级*人数*这一信息，则可以用**尺寸**这一视觉通道来编码，如图 D。

## 视觉编码中常用的视觉通道

1967 年，Jacques Bertin 初版的《Semiology of Graphics》一书提出了图形符号与信息的对应关系（就是本文上一节的内容），奠定了可视化编码的理论基础。

![Bertin J. Semiology of graphics: diagrams[C]// Conference on Computer Networks. 1983. ](https://geekpluxblog.oss-cn-hongkong.aliyuncs.com/basics-of-data-visualization/signal.png?x-oss-process=style/zip)

如上图所示，书中把图形符号分为两种：

- **位置变量**：一般指二维坐标
- **视网膜变量**：**尺寸**、**数值**、**纹理**、**颜色**、**方向**和**形状**

以上基本的图形符号共有 7 种。将其映射到点、线、面之后，就相当于有 21 种编码可用的视觉通道。后来人们还又补充了几种其他的视觉通道：**长度**、**面积**、**体积**、**透明度**、**模糊/聚焦**、**动画**等，所以可用的视觉通道其实太多了。

而一般一份可视化作品可用到的视觉通道要尽可能得少，因为太多了反而会造成我们视觉系统的混乱，使我们获取信息更难。于是这就涉及到了视觉通道的设计原则。

## 视觉编码设计原则

这一节其实可以单独再分一篇文章写，因为可视化编码设计实在是复杂：假设我们有 k 个视觉通道，有 n 个数据维度，则一共有 `(n+1)^k` 种编码方案……从中选出一种最佳方案难度可见一斑。

不过既然本文是讲解视觉编码相关，所以这个章节是逃不掉的，在此提纲挈领讲一下。如果想深入了解，可以阅读参考文献中提到的书籍。

### 视觉通道的三个性质

上一篇[数据模型](http://geekplux.com/2017/01/02/basics-of-data-visualization-data-model)讲解了可视化中数据分为三类：**类别型**、**有序型**、**数值型**。

1. **定性性质**（或叫分类性质）。适用于类别型数据。比如形状或颜色，这两个视觉通道，非常容易被人眼识别。从一堆正方形中识别出一个三角形，或看万绿丛中一点红，都是我们眼睛拿手好戏。
2. **定量性质或定序性质**。适用于有序型和数值型数据。比如长度、大小特别适合于编码数值/量的大小。
3. **分组性质**。具有相同视觉通道的数据，人眼也能很快识别出来，将其归为一组。

总结一下视觉通道与数据类型的对应关系，如下图所示：

![视觉通道与数据类型的对应](https://geekpluxblog.oss-cn-hongkong.aliyuncs.com/basics-of-data-visualization/level.png?x-oss-process=style/zip)

### 视觉编码设计的两大原则

Mackinlay[4] 和 Tversky[5] 分别提出了两套可视化设计的原则，Mackinlay 强调表达性和有效性，Tversky 强调一致性和理解性。两者可以糅合起来：

1. **表达性、一致性**：可视化的结果应该充分表达了数据想要表达的信息，且没有多余。
2. **有效性、理解性**：可视化之后比前一种数据表达方案更加有效，更加容易让人理解。

下面这张图总结了视觉编码面对不同数据类型的优先级：

![视觉编码面对不同数据类型的优先级](https://geekpluxblog.oss-cn-hongkong.aliyuncs.com/basics-of-data-visualization/level2.png?x-oss-process=style/zip)

如果要具体展开每项视觉通道来说，未免有点太繁琐，而且设计可视化编码除了视觉通道还需要考虑：

- 色彩搭配
- 交互
- 美学因素
- 信息的密度
- 直观映射、隐喻

以上每一项都很重要，之后有机会再写吧。这个可视化基础系列总算是完结了，文字虽然不多，但是搜索资料、读论文、总结等还是挺累的，希望你能有所收获。欢迎各位在我博客文末留言讨论（如果看不到评论框可能是因为你没有科学上网）。

## 参考文献

- [1] Bertin J. Semiology of graphics: diagrams[C]// Conference on Computer Networks. 1983.
- [2] [陈为 沈则潜 陶煜波. 数据可视化[M]. 电子工业出版社, 2013.](https://geekplux.com/r/datavis_book/)
- [3] [cse512 data visualization (spring 2016)](http://courses.cs.washington.edu/courses/cse512/16sp/)
- [4] Mackinlay, Jock. Automating the design of graphical presentations of relational information[J]. Acm Transactions on Graphics, 1986, 5(2):110-141.
- [5] Tversky B, Morrison J B, Betrancourt M. Animation: Can it facilitate?[J]. International Journal of Human-Computer Studies, 2002, 57(4):247-262.