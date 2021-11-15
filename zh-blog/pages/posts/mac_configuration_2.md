---
layout: post
title: 菜鸟级 Mac 配置（二）
date: 2014-03-03 13:50:50
categories:
- Tool
- Mac
tags:
- 工具
- Tool
- Mac
- 开发环境
- Development Environment
---

这一篇该讲讲我自己搭建开发环境遇到的事了。

其实这第二篇我前两天就写了一大半，我明明记得随手 Command+S 了，不过，我貌似把保存好的文件给删掉了……真是自作孽不可活，只能重新写一遍 T_T。

- **Xcode**

虽然身为一个菜鸟，但 Xcode 的大名早就如雷贯耳，毕竟是苹果亲生的，无论看起来还是用起来都非常迷人。第一次打开 App Store 就在很显著的位置看到了它，果断点了安装。结果发现有 2G 多，耐心等着下完（其实我特别想吐槽我这儿 50KB/s 的网速！）。

为什么 Xcode 必装？因为有编译的地方就有它。所以这里还要装一个 Command line tools，基本方法是打开 Xcode，找到 Preferences—Downloads—Components，在里面找到它并安装。如果你找不到，那可以在命令行输入：

```sh
xcode-select --install
```

这时会弹出一个选项框，问你是去下载 Xcode 还是直接安装，选择安装。

- **brew**

我以前并木有听过 Homebrew（毕竟第一次用 Mac），但我看几篇 Mac 教程都提到它，于是去下载来尝试一下。果然群众的眼光是雪亮的，自从用了 brew 感觉上五楼都不喘气了……有了它，可以方便的管理工具包，常用的命令有：

```sh
brew install xxx
brew uninstall xxx
brew list
brew update xxx
```

都是一句话，非常给力。不得不佩服 Ruby 社区的大神们，简直造福人类。



去 Homebrew 的官网是 [bew.sh](http://brew.sh/)，找到它的安装代码：

```sh
ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"
```

copy 到命令行，回车，搞定！

还有个东西叫 Homebrew-Cask，谁用谁知道。

- **oh-my-zsh**

Mac 自带了很多 Shell，通过下面的命令：

```sh
cat /etc/shells
```

可以看到如下列表：

```sh
/bin/bash
/bin/csh
/bin/ksh
/bin/sh
/bin/tcsh
/bin/zsh
```

系统默认的是 bash，但 zsh 才是其中最犀利的，被称为「终极 Shell」。而且一位国外特别有（wu）才（liao）的程序员为 zsh 量身定做了一套配置方案叫 **oh-my-zsh**，实在是对我等小白用心良苦，我不能辜负他的这片心意啊。

首先，通过

```sh
chsh -s /bin/zsh
```

把默认 Shell 换为 zsh。然后用下面的两句（任选其一）可以自动安装 oh-my-zsh：

```sh
curl -L https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh | sh
```

```sh
wget --no-check-certificate https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O - | sh
```

剩下的配置就参考我灰常喜爱的池老师的文章吧—— [终极 Shell](http://macshuo.com/?p=676)

- **iTerm2**

据说，这货和 zsh 配合起来，特别酷炫！于是我去官网下载，然后飞速安装，迫不及待的打开，发现也没什么两样嘛。但在我把下面的快捷键都试了一遍后，发现这些小功能确实酷炫：

1. 分窗口操作：shift+command+d（横向）command+d（竖向）
2. 查找和粘贴：command+f，呼出查找功能，tab 键选中找到的文本，option+enter 粘贴
3. 自动完成：command+ 根据上下文呼出自动完成窗口，上下键选择
4. 粘贴历史：shift+command+h
5. 回放功能：option+command+b
6. 全屏：command+enter
7. 光标去哪了？ command+/
8. Expose Tabs：option+command+e

下图是有多标签页和多窗口的 iTerm2：

![][1]

- **Apache**

Mac 自带 Apache ，可以使用以下命令控制它：

```sh
sudo apachectl start
sudo apachectl restart
sudo apachectl stop
```

所以，唯一修改的就是它的站点目录了。Mac 下 Apache 的默认站点目录是

```sh
DocumentRoot "/Library/WebServer/Documents"
```

我没有修改它，而是做了个软链接，我觉得这样更方便。

```sh
ln -s 「你想更换的目录」 /Library/WebServer/Documents
```

重启生效。

- **PHP**

Mac 也自带了 PHP，你只需配置 `php.ini` 文件就好了。具体配置可以网上搜索。

_但这里我想说一件我遇到的蛋疼问题：之前我的 Mac 默认语音是中文，什么环境都配置好之后，我觉得还是换成英文版比较带劲（no zuo no die），就设置更换并重启了电脑。突然发现 Web 项目首页报错，数据库错误。我排查了好长时间，最后发现原来是因为更换了英文版之后，电脑的**默认时区**更换了，导致 PHP 出错，进而导致数据库也有了问题。所以在 `php.ini` 里把 date.timezone = Asia/Shanghai 吧。。。_

- **MySQL**

Mac 终于不自带 MySQL 了，但是我们有 brew。第一步

```sh
brew install mysql
```

安装成功后，第二步，用下面语句设置：

```sh
unset TMPDIR
mysql_install_db --verbose --user=`whoami` --basedir="$(brew --prefix mysql)" --datadir=/usr/local/var/mysql --tmpdir=/tmp
```

第三步，启动 MySQL:

```sh
mysql.server start
```

第四步，输入以下脚本。根据提示完成配置（虽然是全英文，但要认真看）。

```sh
/usr/local/Cellar/mysql/5.5.10/bin/mysql_secure_installation
```

按这四步来安装，我觉得应该是万无一失的。否则总会碰到一些比较蛋疼的问题，比如 root 用户的密码都设置不了（不知道是不是我一个人碰到），出现的错误提示现在忘了，不过根据 StackOverflow 上[这篇帖子](http://stackoverflow.com/questions/4359131/brew-install-mysql-on-mac-os)的方法可以重新安装。刚才的那四步也是这位程序员写的，清晰易懂。

_后来还是由于我更换英文版，我发现数据库导入都成了乱码……（耳边又响起了 no zuo no die），原因是因为英文版又把默认编码改了……可以使用下面这句更改 MySQL 的默认编码：_

```sh
SET NAMES 'utf8';

上面这一条就相当于下面的三句指令：
SET character_set_client = utf8;
SET character_set_results = utf8;
SET character_set_connection = utf8;
```

至此，基本上我的环境都搭好了，编辑器当然用 Sublime Text 3。后来我还安装了一下 Android Studio，还是那个问题，第一次 Gradle 太慢了，在天朝还是下载离线的吧……

我对 Mac 还在探索中，如果你有什么好的 Mac 技巧，可以告诉我哦~


[1]: https://geekpluxblog.oss-cn-hongkong.aliyuncs.com/mac-config/mac-config4.png?x-oss-process=style/zip
