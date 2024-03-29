---
layout: post
title: 为什么要用 Emacs
date: 2016-12-03 15:22:17
categories:
- Tool
tags:
- Emacs
- Vim
- IDE
- 工具
- Tool
---

> 本文仅从作者个人感受上谈一下自己使用 Emacs 的理由和感受，通篇无干货。原文地址：[https://geekplux.com/2016/12/03/why-use-emacs ](https://geekplux.com/2016/12/03/why-use-emacs)

Emacs 和 Vim 这两大编辑器，一直让前赴后继的工具党难以取舍。到底学哪一个？哪一个学了之后能如虎添翼？最初的我也是纠结了许久，仿佛本科时纠结到底该主学 C++ 还是主学 Java 一样。而事实上正如前辈们说的：*不要纠结学哪个，反正迟早都要学*。


## 使用 Emacs 的若干好处

从我个人的角度讲，我认为学习和使用 Emacs 有以下几个好处：

- **掌握了一个几乎能完成任何事，又可以随心所欲修改的编辑器**
- **入了 lisp 的门**
- **混进了一个牛人众多的社区**

搜索过 Emacs 的人对前两点应该都有所耳闻，但百闻不如一见，真正使用之后才知道 Emacs 多强大。就我个人来说，除了将 Emacs 作为多种编程语言的编辑器，还用来管理自己的[学习笔记](http://geekplux.com/wiki)、To-Do List。社区里很多道友还用它来记账、管理文献、写论文等等（*[大家都用 Emacs 做什么？](https://emacs-china.org/t/emacs/61)*）。如果你对 Emacs 没兴趣，那么至少应该了解一下 [Org-Mode](http://orgmode.org/)，由于 Org-Mode 的强大，有人甚至用它来[管理自己的一生](http://doc.norang.ca/org-mode.html)（*类似[《奇特的一生》](https://union-click.jd.com/jdc?e=&p=AyIGZRtSFQASAVIfXxIyFQJRElsQBRsFURprUV1KWQorAlBHU0VeBUVNR0ZbSkdETlcNVQtHRVNSUVNLXANBRA1XB14DS10cQQVYD21XHgBQH1IVBxUOVx9aJQRbRQhaAxNmcXcvTh1nC3d0T2cNfkQeC2UaaxUDEwdTGVkSAxM3ZRtcJUN8B1QaXxMLEwRlGmsVBhQPVRpcFgETAVQcaxICGzcHRgVRVxEOUStrJQEiN2UbaxYyUGlUTglGCxAEAhIORgoXB1ZMCxQAFQ8HGFwUVhUPVhhTEzIQBlQfUg%3D%3D)中提到的方法*）。Org 其实就像 MarkDown 一样，是一种标记语言，想想能用纯文本去管理自己的一生，是不是还有点小激动。

![用 Emacs 查看天气](https://emacs-china.org/uploads/default/original/1X/606931976e4756474b5654f33e74171250d63c3e.jpeg)

由于 Emacs 的配置都是用 elisp 这个 lisp 的方言去写的，所以学习 lisp 终于有了用武之地。不过 lisp 属于「规则简单，威力无穷」，学习它其实不会花太多时间，但要理解它的精髓和使用好它真的很难。

除了以上两点，还有一个最关键的好处是：认识了很多牛人。不得不说，**Emacs 的高门槛和小众，决定了其使用者的质量**。很多 Emacs 道友来自非计算机行业，有的学化学，有的做木工，非常有趣。而且大家都特别有钻研精神，这可能也是所有 Emacs 玩家的共同点。


## 我是如何中了 Emacs 的毒

其实最早听说 Emacs 是在本科的时候。下载下来拨弄一番后发现难点在于记忆快捷键，实现一个自己想要的操作可能需要按一系列按键，有点像**记忆菜单栏快捷键**的感觉（*现在不这么认为了，现在完成一个操作我可能都是直接调用 Emacs 的函数，因为 Emacs 中任何一个操作其实都是一个函数*）。每一个快捷键组合打开一个「子菜单」，最终要实现的操作有可能在三级子菜单中，所以感觉相当繁琐。后来每每雄心壮志重新开始学习，都会被记忆快捷键这个拦路虎挡住。

当然，学习 Vim 也如此。在不知道多少次折腾后，我还是先掌握了 Vim，学习历程和方式参见这篇 [Vim - 适合自己的，才是最好的](http://geekplux.com/2015/06/06/vim-those-fit-yourself-are-the-best)。Vim 的哲学和 Emacs 不同，它把输入分成 **纯输入** 和 **操作** 两种模式（个人理解）。纯输入就是单纯的输入字符，需要换行、移动光标、复制粘贴时则需要「操作」。我觉得这种很符合大脑的思考方式，输入时单纯想着内容就好，需要「整理」内容时再操作。

但是我想用 Emacs 之心不死，当时主要因为 Org-Mode 对我的吸引力很大。在听说 Emacs 有 evil 之后，果断转了过去，瞬间觉得学习曲线变得顺滑了。再之后发现了颜值颇高的 Spacemacs，于是更加爱不释手。Spacemacs 的文档非常详尽，还提供了如何从 Vim 迁移的方案，对我这种菜鸟真的是非常友好。

从此，便算是入了坑，之后的填坑之路也是漫长，比如如何配置，如何使用 Org-Mode，如何寻找适合自己的最佳实践，每部分都能长篇大论一番。

如果你有兴趣，还可以去 [来聊聊大家是怎么入 Emacs 这个大坑的吧](https://emacs-china.org/t/emacs-joy/80) 看看其他人入坑的经历。


### 关于 Emacs 的学习曲线

有的人推崇从最原生的 Emacs 学起，自己一步步配置，有的人推崇直接用社区大牛写好的配置，我显然是后者。[Spacemacs](https://github.com/syl20bnr/spacemacs/) 就是一款对新手和 Vim 党非常友好的配置，而且文档写的**特别详细**，只要你**耐心**读，绝对是可以从容掌握它的，实在遇到困难可以在社区**正确**提问，只要你问题不是很让人反感，都会有很多大牛热心帮你（*这里我不禁要说一句，如果你是伸手党，那么 Emacs 是真的不适合你*）。


### 关于使用 Emacs 太折腾

刚开始确实花很多时间在折腾上，但是现在不会了。因为我发现，对工具「折腾」的越多，定制越深，就会越**依赖**这个工具。一旦需要在别的电脑上编程，双手都感觉不是自己的了。同时，折腾后的「效率提升」其实我们自己都知道效果并不明显，有的需求完全是**伪需求**。强迫自己适应一个新的操作方式，虽然对自己是一个训练，但不需要以提升效率为借口。所以我现在基本上除了一些影响使用上的改动外，基本上维持默认配置，强迫自己适应默认配置，适应才是对效率的最大提升。

不过，一旦开始折腾，很容易**停不下来**，你懂的。。。一下午甚至一天的时间一瞬间就没了。


## 延伸阅读

- [编辑器辣么多，为什么你还在使用 Emacs?](https://emacs-china.org/t/emacs/111)
- [一年成为Emacs高手(像神一样使用编辑器)](https://github.com/redguardtoo/mastering-emacs-in-one-year-guide/blob/master/guide-zh.org)
- [Spacemacs Rocks 21 天掌握 Emacs](https://github.com/emacs-china/Spacemacs-rocks)


