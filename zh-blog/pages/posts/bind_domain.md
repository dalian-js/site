---
layout: post
title: 如何绑定独立域名
date: 2013-08-10 18:18:11
categories:
- Tool
- FarBox
tags:
- Discovery
- FarBox
- Tool
- Blog
- Domain
- 工具
- 博客
- 域名
---

前天把博客搭好之后总觉得得搞个独立域名才算「高端大气上档次」。今天把绑定的经验分享一下。

---

## **购买域名**

域名，就是你网站的网址（标识和入口），比如我的是 geekplux.com。不是说没有这一串字母就不能访问你的网站，只是用 IP 访问的话，谁愿意记那一堆数字。相比之下，还是记字母简单。

免费的域名有很多，但是免费的顶级域名真不多。据我所知，`.tk`是很不错的。如果你决定要长期写下去，也想让别人独一无二的网址访问你的博客，那还是买一个吧。

域名提供商很多，国内有[万网](http://www.net.cn/)等，国外有[name](http://www.name.com/)、[GoDaddy](http://www.godaddy.com/)等。不过还是推荐你购买国外厂商的，因为国内要备案，提交各种材料等审核（_国外难道没有监管机制吗？呆在天朝就是安全_），我们只是为了有个博客，没必要这么兴师动众的。我用的是 GoDaddy 的，因为可以用支付宝支付。买的时候看个人喜好，我用的是`.com`的，也有人追求个性用`.me`、`.us`等（不信可以搜 www.fuck.me ）。不推荐`.info`的，以这个结尾的大部分是垃圾网站，容易被搜索引擎屏蔽，我想宅男都懂。

在 GoDaddy 选好你的域名之后，一路点 continue，到支付页面选支付宝，价钱跟你域名的好坏有关了（BTW，我在支付前特地 Google 了一下 GoDaddy 有没有优惠，结果真搜到了 GoDaddy 的优惠码，6 折买的）。。。接下来要将你的域名和 IP 绑定起来，这里涉及到一个叫**DNS**的东西。



## **配置 DNS**

DNS 可以理解成一个专门破译密码的侦探，把你的域名解析成 IP 地址，所以只要把你刚买的域名在 DNS 里设置成指向你的 IP，别人就能通过域名访问你的网站了。DNS 具体的工作方式太复杂，我是小白，讲不清楚。

GoDaddy 默认提供了 DNS 服务，但是很不稳定，具体原因。。。这个。。。在天朝我还是不要说了吧。。。既然如此，得另选个 DNS 服务了，穷屌丝总喜欢用免费的东西，于是我打算用[DNSPod](https://www.dnspod.cn/)，虽然是免费，但是谁用谁知道。以下是设置步骤：

### **一、先在 GoDaddy 里设置**

1. 登录 [godaddy](http://www.godaddy.com)
2. 登录后，选择【My Account】，然后单击【DOMAINS】后的【Launch】
   ![](https://geekpluxblog.oss-cn-hongkong.aliyuncs.com/bind-domain/godaddy1.jpg?x-oss-process=style/zip)

3. 在域名列表中找到要修改要修改 DNS 的域名，然后点击该域名后的下拉图标（如下图所示），然后点击下拉列表中的 【Set NameServers】
   ![](https://geekpluxblog.oss-cn-hongkong.aliyuncs.com/bind-domain/godaddy2.jpg?x-oss-process=style/zip)

4. 选择【Custom】 ，然后点击右下角的 Add Nameserver
   ![](https://geekpluxblog.oss-cn-hongkong.aliyuncs.com/bind-domain/add-server.jpg?x-oss-process=style/zip)

5. 输入 DNSPod 的 2 个 DNS 短地址（对应 6 台服务器），然后点击【Add】，再点击【Save】即可。
   f1g1ns1.dnspod.net
   f1g1ns2.dnspod.net
   ![](https://geekpluxblog.oss-cn-hongkong.aliyuncs.com/bind-domain/godaddy3.jpg?x-oss-process=style/zip)

6. 点击保存，等待全球递归 DNS 服务器刷新（最多 72 小时）。
   ![](https://geekpluxblog.oss-cn-hongkong.aliyuncs.com/bind-domain/dns-refresh.jpg?x-oss-process=style/zip)

### **二、再在 DNSPod 里设置**

在【我的域名】页面，点击【添加记录】，然后设置成如下图所示就行了。
![](https://geekpluxblog.oss-cn-hongkong.aliyuncs.com/bind-domain/dns.jpg?x-oss-process=style/zip)

---

如果一切顺利的话，你就可以在你浏览器的地址栏里华丽的输入你的网址来访问你的网站了。加上上一篇[写博客就用 FarBox](http://www.geekplux.com/2013/08/08/写博客就用FarBox/)基本上一个博客就成形了。认真的话几个小时就全部搞定了。没基础的同学可以多去 Google 一下（什么时候用 Google 什么时候用百度自己脑补吧）。送大家一句话，多 Google，不费电(￣︶￣)。

