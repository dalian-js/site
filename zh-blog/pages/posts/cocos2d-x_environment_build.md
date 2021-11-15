---
layout: post
title: Windows8.1 下 Cocos2d-x 环境搭建
date: 2013-10-16 17:54:30
categories:
- Cocos2d-x
tags:
- Cocos2d-x
- 开发环境
- 游戏开发
- Guide
- 入门
- Game Development
- Development Environment
---

Cocos2d-x 是一个开源的 2d 游戏引擎，基于 Cocos2d-iPhone 设计，MIT 许可证下发布。其最明显的特点是**跨平台**，只需要编写一次代码，就可以无缝地部署在包括 iOS、Android、Windows、OSX 在内的许多主流游戏平台上。在移动终端多样化的今天，跨平台是大势所趋。接下来开始正题：如何搭建 Cocos2d-x 开发环境。

## **准备**

- 正确安装 Visual Studio 2012（2010 也可以，以下简称 VS）
- 官网[下载 Cocos2d-x](http://www.cocos2d-x.org/download)（本文使用的是 C++2.2 版本）

## **步骤**

- 解压 Cocos2d-x 压缩包：将下好的引擎解压到你认为合适的地方，比如说 D 盘或者 E 盘。
- 打开解压后的 Cocos2d-x 引擎的目录，可看到如下文件：

![](https://geekpluxblog.oss-cn-hongkong.aliyuncs.com/cocos2dx/20131016170507.jpg?x-oss-process=style/zip)

如果你装的是 VS2010，则打开 cocos2d-win32.vc2010.sln；如果你装的是 VS2012，则打开 cocos2d-win32.vc2012.sln，如上图红色框表示的。此时会自动打开 VS2012（或 VS2010），稍等片刻后你会看到 Cocos2d-x 自带的例子都已经自动加载到 VS 的工程目录下了。如下图：

![](https://geekpluxblog.oss-cn-hongkong.aliyuncs.com/cocos2dx/20131016215353.jpg?x-oss-process=style/zip)



- 加载完毕后，在 Solution 'cocos2d-win32.vc2012' （解决方案） 处右击鼠标，选择“Build solution”(生成解决方案)，如下图：

![](https://geekpluxblog.oss-cn-hongkong.aliyuncs.com/cocos2dx/20131016213126.jpg?x-oss-process=style/zip)

第一次编译会需要较长时间，请耐心等待。

- 等全部编译完后，环境基本算是搭好了，可以运行 Cocos2d-x 自带的例子看一下：右击 TestCpp --> 设为启动项目 --> Ctrl+F5（还有另一种方式）

![](https://geekpluxblog.oss-cn-hongkong.aliyuncs.com/cocos2dx/20131016172327.jpg?x-oss-process=style/zip)

如果之前的步骤都没有错，那么这时 Cocos2d-x 自带的 Demo 就会跑起来，你会看到如下所示画面：

![](https://geekpluxblog.oss-cn-hongkong.aliyuncs.com/cocos2dx/20131016172443.jpg?x-oss-process=style/zip)

当然你还可以这样运行，这次换 HelloCpp：

![](https://geekpluxblog.oss-cn-hongkong.aliyuncs.com/cocos2dx/20131016172502.jpg?x-oss-process=style/zip)

如果前面的步骤都没有错，会出现如下画面：

![](https://geekpluxblog.oss-cn-hongkong.aliyuncs.com/cocos2dx/20131016214249.jpg?x-oss-process=style/zip)

至此，开发环境就算搭建成功了，下篇来介绍如何创建一个新项目，就是广为人知的 Hello World！[如何新建一个 Cocos2d-x 项目](http://www.geekplux.com/2013/10/17/如何新建一个Cocos2d-x项目/)

