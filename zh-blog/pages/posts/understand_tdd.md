---
layout: post
title: 初识 TDD
date: 2014-03-21 00:20:09
categories:
- Software Engineering
- Agile Development
tags:
- 软件工程
- Software Engineering
- Agile Development
- 笔记
- Note
---

> 原文地址：[https://geekplux.com/2014/03/21/understand_tdd ](https://geekplux.com/2014/03/21/understand_tdd)

最近团队进驻了 Innospace（一个创业孵化基地），感觉一切要走上正轨的节奏。每周 Innospace 会提供一些来自业内大牛的创业和技术方面的培训指导，活动也非常多。感谢我的实习团队，让我有机会可以学到更多的东西。今天的主题是 TDD（测试驱动开发），对我来说这个东西不仅是新鲜的，还是陌生的，所以我也是认真记了记，顺便整理成文。

# 神马是 TDD

维基百科上是这样说的：测试驱动开发（Test-driven development）是极限编程中倡导的程序开发方法，以其倡导**先写测试程序，然后编码实现其功能**得名。

好吧，上面那段翻译的真是让人捉急，人家原文是这样的：

> Test-driven development (TDD) is a software development process that relies on the repetition of a very short development cycle: first the developer writes an (initially failing) automated test case that defines a desired improvement or new function, then produces the minimum amount of code to pass that test, and finally refactors the new code to acceptable standards.

看完英文应该比较好理解。通俗点就是：**先写测试，再写只能让测试通过的代码，然后不停的循环这两个步骤，直到重构出满足需求的代码**。以每个测试来推动整个开发的进行，这样有助于编写简洁和高质量的代码，并加速开发过程。



# TDD 流程

![][1]

1. 先写一个测试，覆盖的需求很少
2. 检查是否运行失败
3. 编写能通过这个测试的代码
4. 运行该测试
5. 如果测试通过，则写新的测试，覆盖更多需求；如果测试没有通过，则更改代码直到通过
6. 重构代码，使其能通过新写的测试
7. 重复第 5 步
8. 重复第 6 步
   ……

# 一个好的 Test Case 应有下列特点：

- 快 --天下武功，唯快不破
- 独立 --不依赖于其他的测试用例的输出结果
- 可读 --基本上别人一看你的代码就知道是在测试什么功能，都不用写注释
- 完整 --包括目的，输入，预期结果
- 可重复 --无论谁测试结果都一样，且可以根据之前的测试编写下一个测试
- 一个 assert --只有一个判断结果，准确、简洁

要实现前两点，则测试用例就不能涉及到文件、数据库、网络、环境（第三方类库）等。

# 感受

TDD 作为一种敏捷开发方式，越来越为人所吹。毕竟敏捷开发越来越流行，所以 TDD 也是越来越被人吹捧。而且整个 TDD 开发过程看起来效果非常棒，尤其是在敏捷教练现场演示了一遍之后（果然例子理解起来永远比理论容易）。感觉是把大事化小，逐步解决。

不过，任何东西都有利有弊。比如，测试的范围就是个很麻烦的问题，怎么才能写出一个好的测试用例。既不会覆盖的需求太多，又不会覆盖的太少……

不管怎样，还是学到了东西，非常感谢两位敏捷教练。

[1]: https://geekpluxblog.oss-cn-hongkong.aliyuncs.com/tdd.png?x-oss-process=style/zip

