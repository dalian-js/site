---
layout: post
title: Vim - 适合自己的，才是最好的
date: 2015-06-06 20:28:21
categories:
- Tool
tags:
- Vim
- Emacs
- IDE
- 工具
- Tool
---

> 原文地址：[https://geekplux.com/2015/06/06/vim-those-fit-yourself-are-the-best ](https://geekplux.com/2015/06/06/vim-those-fit-yourself-are-the-best)

Vim 被称为编辑器之神，是我用过之后才体会到的，用之前实在不敢对它做出什么评价。在大学时代，Vim 的大名就已如雷贯耳，但由于它陡峭的学习曲线，一直望而却步。等真正开始学习之后，发现并没有想象中的复杂，也没有所谓的瓶颈，只要在实际写代码中强迫自己使用就可以了，无形中就会形成习惯。最初的不适，换来的是效率的飞升。这和我当初学习[双拼](http://www.geekplux.com/2014/07/06/learn_shuangpin)的感觉一样。下图是我的 Vim 界面：

![我的 Vim 界面](https://geekpluxblog.oss-cn-hongkong.aliyuncs.com/vim.png?x-oss-process=style/zip)

## 学习方式

我一开始也是看了很多教程，这里我就不说具体的学习方法了，因为 Google 上一搜一大堆。

我只想谈一点：很多「过来人」告诫新手，一开始使用 Vim 一定不能使用插件，**要从最纯净的 Vim 开始练习**。他们认为一上手就使用别人的配置，很容易被别人影响，不能领会到自己配置 Vim，这种从无到有的感觉。虽然我也很喜欢折腾的感觉，但这对于学习、入门一个工具来说有点**南辕北辙**，我们学习一个工具就是为了用好它，或者**用它来为我们服务**。为什么要我们去适应它呢？也许这不符合 Vim 的哲学，但是我觉得：

- Vim 存在这么多年，已经有很多优秀的 Vim 配置（比如：[spf13-vim](https://github.com/spf13/spf13-vim)），可以为我们节省很多折腾的时间。不过如果你非常喜欢折（zuo）腾（si），那也可以从头开始。
- 对于新手来说，自己的配置总是很不成熟，到头来还是得参考一些高手的配置。索性一开始用他们的，慢慢删改。
- 从纯净版开始你会觉得很枯燥，Vim 远没别人口中、视频中所述的酷炫，效率不升反降。这很容易丧失进阶的兴趣。
- 天下武功，唯快不破，这个时代求快。我不否认先夯实基础，再层层递进的学习方式，但针对不同的学习对象，不同的环境背景，我们还是应该采取最快、最有效的学习方式。



如果你学习 Vim 是为了体验学习的新鲜感，或者业余玩味，请忽略我上面的话。但如果你的最终目的是为了在实际中用到它，提升我们的工作效率，那你不妨和我一样，直接拉别人的配置下来，在 Shell 里输入 Vim 启动，开始写代码！

当时我找到了 [k-vim](https://github.com/wklken/k-vim)，按照他的安装步骤，很简单就把 Vim 配置好了，启动 Vim，发现界面也很漂亮，嗯，这就是我要的效果。接着，我打开自己那两天正在写的项目，通过仅会的四个快捷键 **HJKL** 移动光标来查看文件。然后我仔细阅读了 [k-vim](https://github.com/wklken/k-vim) 的 README 文件，把它提到的几个快捷键试了试，感觉很不错。接下来的几天，它的 README 网页我一直开着，遇到想要的快捷键一搜就搞定，虽然写代码的效率确实下降了很多，但对编辑器的使用越来越纯熟。一周之后我已经习惯用 Vim 来编程了。

接下来开始进一步研究 Vim，理解 Vim 的**三种模式**（正常模式、命令模式、视图模式），然后掌握如何配置**插件**和**快捷键**就 OK 了。最关键一点就是要实战，强迫自己所有的操作只用键盘，强迫只用 Vim 作编辑器。

## 插件与快捷键

Vim 的插件可以通过 [Vundle](https://github.com/gmarik/Vundle.vim) 来管理。（据说 [vim-plug](https://github.com/junegunn/vim-plug) 也挺好用）

只需两步：

- 在 `vimrc.bundles` 文件中配置你想要的插件
- 在 Vim 的命令模式中输入`:BundleInstall`

其他的命令有：

```shell
:BundleUpdate    //更新插件
:BundleClean     //删除插件
```

个人觉得必备的插件：

- syntastic 多语言语法检查
- YouCompleteMe 代码自动补全
- ctrlp.vim 文件搜索，类似 Sublime Text 里面的 Cmd + P
- vim-airline 状态栏增强
- nerdtree 目录树
- vim-ctrlspace tab/buffer 导航增强

而快捷键的学习方法，就是用到的时候去 Google，多用几次就记住了。如果它自带的快捷键用着不舒服，你完全可以自己重设，Vim 就是自由，不必拘泥条条框框。

## 哲学

非常推荐阅读 Stack Overflow 上的这篇回答：

[What is your most productive shortcut with Vim?](http://stackoverflow.com/questions/1218390/what-is-your-most-productive-shortcut-with-vim)

这篇真正阐述了 Vim 作者当初设计 Vim 快捷键时的哲学，看懂这篇对 Vim 快捷键的掌握会更上一层。

## 感悟

在学习 Vim、使用 Vim 的过程中，我最大的感悟就是**「适合自己的，才是最好的」**。

很多插件看起来很酷炫，快捷键几下就能实现很繁杂的操作，但是你不一定会有使用这个插件的需求，或者即使用也用的不多。有人总喜欢拿 IDE 和 Vim 比，我觉得这根本没有比较的必要，你两个都用也没什么问题。大的项目，复杂的文件结构和引用，你不用 IDE 而用 Vim，是浪费时间。而且一般 IDE 都提供了 Vim 模式，你仍可以在 IDE 中继续击键如飞。

用 Vim 体验的是一种**轻便、自由、可塑**的感觉。你可以根据自己的需求来培养 Vim，这就像恋（gao）爱（ji）一样是两个人互相适应的过程。互相习惯才能把效率最大化。

---

### 推荐链接

- [Vim Adventure](http://vim-adventures.com/) Vim 小游戏
- [Learn Vim Progressively](http://yannesposito.com/Scratch/en/blog/Learn-Vim-Progressively/) 中文版：[简明 Vim 练级攻略](http://coolshell.cn/articles/5426.html)
- [Learn Vimscript the Hard Way](http://learnvimscriptthehardway.stevelosh.com/) 中文版：[笨方法学 Vimscript](http://learnvimscriptthehardway.onefloweroneworld.com/)
- [交互式学习 Vim](http://www.openvim.com/tutorial.html)
- [Vim Awesome](http://vimawesome.com/) Awesome Vim plugins from across the universe
- [史上最全 Vim 快捷键键位图 -- 入门到进阶](http://cenalulu.github.io/linux/all-vim-cheatsheat/)
- [所需即所获：像 IDE 一样使用 vim](https://github.com/yangyangwithgnu/use_vim_as_ide)
- [将你的 Vim 打造成轻巧强大的 IDE](http://yuez.me/jiang-ni-de-vim-da-zao-cheng-qing-qiao-qiang-da-de-ide/)

