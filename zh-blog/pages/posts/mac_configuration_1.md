---
layout: post
title: 菜鸟级 Mac 配置（一）
date: 2014-02-26 21:14:15
categories:
- Tool
- Mac
tags:
- 工具
- Tool
- Mac
---

前两天我的神机 MBP 终于到手了，虽然之前我已经见过 N 台 Macbook，但拆开包装的那一刻我还是被它惊艳了。新款比以前更薄了，感觉跟 air 的厚度相差无几（这货好意思叫 pro 么）。哈哈，作为一名第一次使用 Mac 的孩纸，我果然遇到了很多菜鸟级的问题，通过不断的 Google，基本都配置好了，现在来罗列一下。

## 基础设置篇

- **触控板设置**

体验了两天，MBP 的触控板真心好用，鼠标已被我打入冷宫。所以根据自己的习惯设置好触控板是第一步。我就改了两处：

1.  轻触改为单击
2.  把双指滚动方向改为相反（不是自然方向）。如图：

![][1]


- **Finder 设置**

Finder—Preferences，把所有文件后缀名显示出来。（不显示出来木有安全感）



- **自带词典和发音**

Mac 自带的词典非常好用，默认是**三个手指轻触**触控板就可以自动翻译选中的单词。而且，你可以通过以下的设置，如图：

![][2]

就可以按 Option + Esc 让 Mac 把你选中的单词读出来。

个人觉得最重要的就是这三个配置了，其它就是换了换快捷键和壁纸……当然我后来把语言换成了**英文版**（这后来引发了一个蛋疼的小问题，下一篇讲）。

只要你把 Mac 的快捷键记牢（[参考这张图](https://geekpluxblog.oss-cn-hongkong.aliyuncs.com/mac-config/mac-shortcuts.png?x-oss-process=style/zip)），就能飞速的使用它了，真的是飞速！

## 必备软件篇

Mac 下安装软件直接把 app 文件拖到 「应用程序」文件夹下就 OK 了。卸载就直接从该文件夹下删除就行。简单的令人发指……

- **神器 Alfred**

当初在 Win 下，我用的是 launchy 用来快速启动软件。Mac 下的 Alfred 就是此类软件的神器。在 App Store 里找到它并安装。从此启动软件再也不需要去 Dock 和 Launchpad 里找了（具体使用的快捷键自己可以设置）。

但这只是 Alfred 的基本功能，其最厉害之处是可以通过 workflow 扩展，github 上有专门的项目来收集各种牛（wu）逼（liao）人士开发的 workflow [项目地址](https://github.com/hzlzh/AlfredWorkflow.com)、[项目主页](http://www.alfredworkflow.com/)。你可以通过 workflow 扩展各种有趣的功能。比如查天气、计算器这种……知乎上也讨论过：[借助 Alfred 2.0 的 Workflows 功能可以做哪些好玩的事情](http://www.zhihu.com/question/20656680)

- **F.lux**

这个软件的功能是根据当前的时间来调节**屏幕的色温**，以达到保护双眼的目的。虽然 Mac 明媚的屏幕很吸引人，但是为了我的眼睛，我还是装上了 F.lux，当初 Win 下我也是必装，还是我唯一允许开机启动的软件~~谁用谁知道。

- **XtraFinder**

其实我就看中了它的**多标签页**的功能。

- QQ

这好像不用解释。社交类还有 Skype、Line、WeiboX、Twitter 都很不错。

- DropBox

自动后台同步，毫无违和感。

百度云盘其实也不错，当初还送了 3T 空间，可以同步些不是太重要但很大的文件。

- Chrome

其实 Safari 也是极其好用的，但是为了跨平台，Chrome 就成了不二人选。Firefox 应该是多用来作开发用。

- MplayerX

Mac 平台下比较流行的播放器。

- 搜狗输入法

我觉得搜狗就不错。

- Evernote && Wiz

之前一直是用 Wiz 的，主要是因为：

1.  Wiz 的多级目录不限层数，Evernote 最多三层。
2.  Wiz 一个月的流量是 180M ，Evernote 是 60M。
3.  Wiz 的排版比 Evernote 方便（个人认为）。

Wiz 支持的导入格式有很多，还可以直接导入 Evernote 文件，但是导出就很渣了……把 Wiz 导出 HTML，再导入 Evernote 会出现没有标题等蛋疼现象。而且最关键的是 Wiz 的 Mac 版太丑了！！！所以开始用 Evernote 。

- Mou

用 Markdown 写作必备，界面简洁好看，赏心悦目。

![][3]

- CleanMyMac 2

清理垃圾

- Pocket

现在已经离不开它了，想看的文章随手往里一丢。手机那边会自动下载好。地铁上或其他闲着没事的时候就可以拿出来看，阅读体验非常好。

- 迅雷

这还用解释吗？

- Wunderlist

TO DO 应用，适合比较忙的人使用。多平台，界面太赞！

- 其他优秀 App

可以去这个[项目主页](https://github.com/hzlzh/Best-App)看看。

## 感受

通过我这两天感受下来，我觉得**跨平台**已成了我选择软件最重要的标准，毕竟现在终端种类太多了。而对于 Mac ，我觉得它最迷人的一点是它简单，什么都简单，风格简单，操作简单。简单就容易专注，最大化窗口后，能让你专注于眼前的工作，而不像 Win 不停的有干扰源出现。你还可以设置几个不同的桌面，一个桌面专门用来娱乐，放 QQ、微博等的窗口，另一个桌面专门用来创作型任务。

最后，以文章[如何提高创作型任务的效率？（MAC 版）](http://www.yangzhiping.com/psy/mac.html)中的一段来说明 Mac 和 Win 的差异吧：

> 因为心理学家诺曼的贡献与苹果在工业设计上的传统优势，Mac 与 Windows 的最大不同是注意力。MACOSX 以简洁的设计取胜，甚至强迫用户将注意力聚焦在当前工作之上。Windows 系列操作系统设计，相对而言，缺少一个统一并且强硬执行下去的注意力法则。在 Windows 上，你可以看到大量分散你的注意力的软件设计，同时，在 Windows 上，格外泛滥你可能只需要 20%功能，但是不得不受到其他 80%的功能设计带来的诸如升级、数据维护等复杂操作的干扰。苹果公司作为一种与众不同的硅谷精神的“传销”头头，很好地维持了整个 MAC 生态链对用户注意力的关注，微软在这方面，则逊色较多，在 Office 系列中的全屏模式，往往你是阅读者而非创作者。

下一篇主要讲一下我的开发环境配置……


[1]: https://geekpluxblog.oss-cn-hongkong.aliyuncs.com/mac-config/mac-config1.png?x-oss-process=style/zip
[2]: https://geekpluxblog.oss-cn-hongkong.aliyuncs.com/mac-config/mac-config2.png?x-oss-process=style/zip
[3]: https://geekpluxblog.oss-cn-hongkong.aliyuncs.com/mac-config/mac-config3.png?x-oss-process=style/zip
