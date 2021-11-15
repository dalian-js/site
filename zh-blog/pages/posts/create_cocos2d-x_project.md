---
layout: post
title: 如何新建一个 Cocos2d-x 项目
date: 2013-10-17 16:43:30
categories:
- Cocos2d-x
tags:
- Cocos2d-x
- 游戏开发
- Game Development
- Guide
- 入门
---

作为一名程序猿的，凡事都得从 Hello World 开始！接下来就由我来演示一遍如何创建一个 Hello World 项目。

**要想创建一个 Cocos2d-x 项目就必须有它的模板**，如果你使用过 Cocos2d-x2.1.4 以前的版本就知道其官方自带有模板安装文件，所以你可以下载 2.1.4 以前的版本（如 cocos2d-x 2.1.3），将 cocos2d-x 2.1.3\template 目录下的`msvc`文件夹复制到 cocos2d-x 2.2.0\template 下，再复制 cocos2d-x 2.1.3 目录下的文件`install-templates-msvc.bat`到 cocos2d-x 2.2.0 下，点击运行，结束后你就可以在 VS2012 的新建项目中发现有 Cocos2d-x 模板了。

但是新版的已经没有了，**官方推荐用脚本新建项目**。所以我们还是参照官方文档用最新的方法吧。一个脚本生成所有平台的项目文件，非常方便！

## **准备**

- 按照上一篇[《Windows8.1 下 Cocos2d-x 环境搭建》](http://www.geekplux.com/2013/10/16/Windows8.1下Cocos2d-x环境搭建/)先搭建好环境
- 下载 Python[官网下载](http://www.python.org/download/)
- 安装 Python：
  一路 next 就行了，安装目录默认为 `C:\Python27\`

![](https://geekpluxblog.oss-cn-hongkong.aliyuncs.com/cocos2dx/20131017155948.jpg?x-oss-process=style/zip)



- 配置环境变量：
  这一步我相信大部分人都不陌生，新建变量名为 `PYTHON_HOME` 的系统变量，值为你 Python 的安装目录，如图：

![](https://geekpluxblog.oss-cn-hongkong.aliyuncs.com/cocos2dx/20131017160806.jpg?x-oss-process=style/zip)

然后编辑 Path 变量，在变量值最后加 `%PYTHON_HOME%` ，如果之前没分号记得加上（＃－.－）

![](https://geekpluxblog.oss-cn-hongkong.aliyuncs.com/cocos2dx/20131017161151.jpg?x-oss-process=style/zip)

_为了检测是否配置成功，你可以在 cmd 中输入 python，如果出现如下显示则配置成功。_

![](https://geekpluxblog.oss-cn-hongkong.aliyuncs.com/cocos2dx/20131017161225.jpg?x-oss-process=style/zip)

## **步骤**

- 打开命令提示符（win+R，输入 cmd，回车），切换到你 Cocos2d-x 目录所在盘符（我的是 D）， `D:`
- 输入 `cd D:\cocos2dx_2.2.0\tools\project-creator` 进入 `create_project.py` 脚本所在目录。
- 输入 `python create_project.py -project HelloWorld -package com.cocos2dx.org -language cpp` 运行脚本，生成 Hello World 项目，其中 HelloWorld 为**工程名**，com.cocos2dx.org 为**android 版本取的包标识名**。这两处你可以自己修改。

![](https://geekpluxblog.oss-cn-hongkong.aliyuncs.com/cocos2dx/20131017161406.jpg?x-oss-process=style/zip)

然后你就可以在 D:\cocos2dx_2.2.0\projects 路径下找到你刚才新建的项目了，目录如下图 ：

![](https://geekpluxblog.oss-cn-hongkong.aliyuncs.com/cocos2dx/20131017161456.jpg?x-oss-process=style/zip)

- 打开目录，运行 HelloWorld.sln。

![](https://geekpluxblog.oss-cn-hongkong.aliyuncs.com/cocos2dx/20131017161637.jpg?x-oss-process=style/zip)
![](https://geekpluxblog.oss-cn-hongkong.aliyuncs.com/cocos2dx/20131017161912.jpg?x-oss-process=style/zip)

至此，熟悉的几个大字 Hello World 映入眼帘，证明运行成功！接下来就可以开始你的 Cocos2d-x 游戏开发之旅了！~(￣ ▽ ￣)~

