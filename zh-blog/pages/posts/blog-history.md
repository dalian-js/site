---
layout: post
title: 十年博客折腾历史
date: 2018-09-26 19:52:21
categories:
- Tool
- Life
tags:
- 生活
- Life
- 写文章
- Writing
- 工具
- Tool
- 博客
- Blog
---

断断续续写博客也多年了，如果从当年的 QQ 空间算起，那估计是有 10 年了。想以一篇流水账记录我折腾博客的历史。

> 生命在于折腾

## 第一代博客 - QQ 空间

当时我还是一个沉迷于如何把 QQ 空间打扮的更好看的人，不过偶尔也写几篇贻笑大方的文章。所以 QQ 空间是我的**第一代博客**，后来大学毕业决定[告别社交网络](https://geekplux.com/2014/08/02/farewell_social_network)，就把所有文章备份，然后把它彻底关闭了。

## 第二代博客 - Farbox

大约是大二，读到了一篇[《为什么你应该（从现在开始就）写博客》](http://mindhacks.cn/2009/02/15/why-you-should-start-blogging-now/)，随即又准备起来，当时瞄准了一个工具 [Farbox](http://www.farbox.com/)，是基于 [Dropbox](https://www.dropbox.com/) 的，只要把文章写好，托进 Dropbox 里，博客就自动更新了。它还提供了二级域名，这样其他人就能很方便的通过域名访问你的博客。

当时 dropbox 还没被封，是最好用的网盘，虽然上面的步骤看起来简单，但我还是折腾了很久，而且最大的收获是学会了 markdown，了解了什么是标记语言。随后我也写了两篇博客记录了一下：[写博客就用 FarBox](https://geekplux.com/2013/08/08/write_blog_by_farbox), [如何绑定独立域名](https://geekplux.com/2013/08/10/bind_domain)，不知道现在 Farbox 还能不能这么用。

## 第三代博客 - Hexo

我慢慢觉得 Farbox 太小白了，不够 Geek，于是我又萌生折腾的想法。我先是 Google 了一大圈，然后去知乎提了个问题：[如何拥有一个完全免费的博客？](https://www.zhihu.com/question/20688782)，整个过程让我学习到了很多 web 知识，包括服务器，虚拟主机，DNS，域名等。最后我决定用 [Hexo](https://hexo.io/zh-cn/) + [GitHub Pages](https://pages.github.com/) 的方案来搭建博客。

虽然当时已经 13 年了，但我还是第一次真正把 GitHub 用起来。我学会了 Git，学会了如何 commit，push 甚至 pull request。Hexo 的使用，让我接触到了 Node.js，我犹记得当时去图书馆借了一本[《Node.js 开发指南》](https://book.douban.com/subject/10789820/)，作者是 [byvoid](https://www.byvoid.com/)，同样的年纪，同是 10 级大学生，他在出书，我在拜读他写的书。总之我踉踉跄跄地总算是把博客搭起来了，之后的折腾就是主题上的折腾了，仿佛又回到了 QQ 空间的年代。

再后来由于 GitHub Pages 的访问速度在国内越来越慢，我在 GitCafe （后来被 [Coding](https://coding.net/) 收购） 上也搭了一套，通过 DNS 指定国内外两个不同渠道。我自己也花两天时间写了个 Hexo 主题：[Typing](https://github.com/geekplux/hexo-theme-typing)，就是我现在用的主题，很素，我故意把字体设置成楷体，字粗设置得很细，有种清淡的感觉，我很喜欢，一直沿用至今。

## 懒得折腾

随着年纪渐长，折腾之心日渐衰退。除非必要的时候，我都很少折腾博客的设施，想更专注在提升博客文章质量上。但是近日我把博客又迁移到了 [Netlify](https://www.netlify.com/) 上，因为它速度贼快，一键迁移，体验非常棒。另一方面，之前我博客里所有的图片都托管在 [七牛](https://www.qiniu.com/) 的免费对象存储 CDN 上，但是它的测试域名现在 30 天就要回收，所以博客图片全部挂掉了。于是我买了[阿里云 OSS](https://www.aliyun.com/product/oss)，一股脑把图片都迁移了过来。但是两个网站没有提供迁移方案，我又实在懒得一个个按钮去点，于是写了几个批量操作的脚本，总算完成了一百张图片迁移的浩大工程，还规范了图片的命名，强迫症得到了治愈。

## 拥有博客给我带来了什么

博客是新时代的名片，里面除了展示你个人都信息，还倾注了你的所思所想。身处在一个需要天天面对屏幕的职业，与人交流会慢慢变少以致困难，博客增加了你曝光的机会。很多人通过我的博客认识我，给我发邮件问问题，或者直接给我[打赏](https://donate.geekplux.com/)，还有人加我微信说：**“看完你的博客，我觉得我和你一模一样，别忘了世界上还有另一个你。”**，当时我也是很震惊。

博客也帮助我找到工作，扩大了影响力。虽然我在经历过一个相对小网红的时期后发现自己不太习惯这样的生活，但还是觉得有必要经营好自己的博客。

- 它帮你**梳理思路**，[写文章是最好的思考](https://geekplux.com/2015/10/27/why-those-who-write-great-articles-is-so-powerful)
- 它帮你**学习知识**，就像我上文说的一大堆技术，都是通过我在折腾博客的过程中学会的
- 它帮你**打开世界**，你会拥有一些志同道合的网友，分布世界各地却有可能在某个契机见上一面
- 它有可能**帮到别人**，这个是最大的价值吧，[总有一部分知识技能是你掌握而别人不会的](https://geekplux.com/2017/01/14/the-ways-to-get-information)

以上。
