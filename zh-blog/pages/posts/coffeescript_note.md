---
layout: post
title: CoffeeScript 笔记
date: 2014-05-15 19:06:09
categories:
- Web
- CoffeeScript
tags:
- Web
- 笔记
- Note
- CoffeeScript
cover:
- https://geekpluxblog.oss-cn-hongkong.aliyuncs.com/coffeescript.jpg?x-oss-process=style/zip
---


> 原文地址：[https://geekplux.com/2014/05/15/coffeescript_note ](https://geekplux.com/2014/05/15/coffeescript_note)

最近读了《CoffeeScript程序设计》的前半部分「核心 CoffeeScript」。对 CoffeeScript 也是有了初步的了解，本文只是我的随手笔记，并没有非常系统的总结 CoffeeScript 语法，想学习语法的同学可以看以下两份中文材料：

- [CoffeeScript中文手册](http://island205.github.io/tlboc/)
- [CoffeeScript Cookbook](http://island205.github.io/coffeescript-cookbook.github.com/)

## 为什么要用 CoffeeScript？

- 采用了 JavaScript 中的 Good Parts，符合 JS 最佳实践
- 代码简洁清晰，有很多语法糖


## 一些特性

#### 1.有意义的空格

CoffeeScript 移除了所有的大括号和分号。

JS 会自动在行尾添加`;`，但它又没有纯粹的设计为一款不需要加分号的语言，所以有时候会引起一些蛋疼的Bug。而 CoffeeScript 会在编译出的 JS 代码里每行都加`;`，很方便。

CoffeeScript 和 Python、Ruby 一样，采用强制缩进（Coffee的很多地方与 ruby 类似)，这种简洁，可读性又很强的代码，让人大爱。



#### 2.变量作用域的控制

JS 中的变量作用域一直让人诟病。

CoffeeScript 把编译生成的 JS 封装在一个匿名函数中：

```javascript
(function(){
  // 这里是编译生成的代码
}).call(this);
```

这样就巧妙避免了全局作用域的污染。同时，CoffeeScript 始终在编译生成的 JS 代码中用 `var` 声明变量。

#### 3.存在性判断

CoffeeScript 中有个操作符 `?`，用于检测变量是否存在。

```coffeescript
console.log html if html?
```

这句 CoffeeScript 编译过来为（去掉了匿名封装函数，为了方便，之后的编译后代码都去掉）

```javascript
if (typeof html !== "undefined" && html !== null) {
  console.log(html);
}
```

可见，`?` 会先检测变量有没有定义，如果定义了再检测是否为 null。



#### 4.函数和 splat 操作符

CoffeeScript 中去掉了 `function` 关键字。用 `() ->` 定义一个函数。括号内为参数，可以为参数设置默认值。如：

```coffeescript
myFunction = (a, b = 2) ->
  a + b
```

编译为：

```javascript
var myFunction;

myFunction = function(a, b) {
  if (b == null) {
    b = 2;
  }
  return a + b;
};
```
调用函数的时候，还可以不用括号。如：

```coffeescript
myFunction 3, 5
```
有一点需要注意一下，CoffeeScript 会在编译后的 JS 代码中自动为最后一行添加 `return` 关键字。所以不论函数的最后一行是什么，都会成为返回值。如果你不想让最后一行成为返回值，就需要另起一行自己加上 `return`。

splat 操作符非常强大。在你的函数需要接受**可变数量的参数**时就需要它了。书上的栗子：

```coffeescript
splatter = (etc...) ->
  console.log "Length: #{etc.length}, Values: #{etc.join(', ')}"
  // CoffeeScript 中字符串插值用 #{}

splatter()
splatter("a", "b", "c")

// 输出
Length: 0, Values:
Length: 3, Values: a, b, c
```

就在某个参数后面加上`...`，就使传入的参数自动转化为一个数组。**splat 操作符可以出现在参数列表的任意位置，但是参数列表中只能有一个 splat 操作符**。

#### 5.数组与区间

一般定义数组是这样：

```coffeescript
myArray = ["a", "b", "c"]
```

在 CoffeeScript 里你还可以这样：

```coffeescript
myArray = [
            "a"
            "b"
            "c"
          ]
```

- 在 JS 中判断是否存在于数组，需要用 `Array.prototype.indexOf`，在 CoffeeScript 中只需要用 `in`：

```coffeescript
console.log "d was not be found" unless "d" in myArray

// 输出
d was not be found
```

- 交换赋值

```coffeescript
x = "X"
y = "Y"

[x, y] = [y, x]
```

交换 x、y 的值就这么简单！

- 多重赋值

```coffeescript
myArray = ["A", "B", "C", "D"]

[start, middle..., end] = myArray  // 可配合 splat 操作符使用

console.log "start: #{start}"
console.log "middle: #{middle}"
console.log "end: #{end}"

// 输出
start: A
middle: B,C
end: D
```

- **区间**

区间能让**定义包含两个数字之间所有数字的数组**变得很容易。

```coffeescript
myRange = [1..10]
console.log myRange

// 输出 [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
```

如果不想包括结束数值，可以用 `...` 代替 `..`。

```coffeescript
myRange = [10...1]
console.log myRange

// 输出 [ 10, 9, 8, 7, 6, 5, 4, 3, 2 ]
```

常见的数组操作，都可以通过区间完成：

```coffeescript
myArray = [1..10]

// 分割数组
part = myArray[0..2]
console.log part
// 输出 [ 1, 2, 3 ]


// 替换数组值
myArray = [1..10]
myArray[4..7] = ["a", "b", "c", "d"]
console.log myArray
// 输出 [ 1, 2, 3, 4, 'a', 'b', 'c', 'd', 9, 10 ]


// 插入值
myArray = [1..10]
myArray[4..-1] = ["a", "b", "c", "d"]
console.log myArray
// 输出 [ 1, 2, 3, 4, 'a', 'b', 'c', 'd', 5, 6, 7, 8, 9, 10 ]
```

#### 6.类和继承

一例胜千言：

```coffeescript
class Animal
  constructor: (@name) ->

  move: (meters) ->
    alert @name + " moved #{meters}m."

class Snake extends Animal
  move: ->
    alert "Slithering..."
    super 5

class Horse extends Animal
  move: ->
    alert "Galloping..."
    super 45

sam = new Snake "Sammy the Python"
tom = new Horse "Tommy the Palomino"

sam.move()
tom.move()
```

这是官网的例子，麻麻再也不用担心我在 JS 里使用类和继承了 T_T。

- consturctor 函数为类的构造函数。在 `new` 的时候调用，可以重写它。
- `::` 就和 JS 里的 `prototype` 一样


## 很多语法糖

我对「语法糖」的理解就是让代码的读写更简单。

CoffeeScript 中添加了一些关键字，如 `unless when then until do` 等。不仅如此，CoffeeScript 引入了很多**别名**来代替一些关键字：

| 别名           | 对应关键字       |
| -------------- | ---------------- |
| is             | ===              |
| isnt           | !==              |
| not            | !                |
| and            | &&               |
| or             | &#124;&#124;     |
| true, yes, on  | true             |
| false, no, off | false            |
| @, this        | this             |
| of             | in               |
| in             | no JS equivalent |

运用别名和新关键字，使代码读起来就和普通的英文一样。而且 CoffeeScript 还自动为你添加关键字，如函数最后的 `return`，`switch` 后自动添加 `break`（这种符合我们惰性的改进都是伟大的！ヽ( ^∀^)ﾉ）。


## 安装及用法

1.安装：
```
npm install -g coffee-script
```

2.用法：

安装完成后，直接在命令行中输入 `coffee`，就进入了 CoffeeScript 的 REPL（Read-eval-print-loop） 模式，这是一个可交互的控制台，你可以输入 CoffeeScript 代码立即执行。如图：


![][1]


也可以用**指令**编译 CoffeeScript 代码执行（*CoffeeScript 代码文件后缀名为 coffee*）：

```sh
coffee -c hello_world.coffee
```

还有一些其他选项，我目前用的最多的是 `-o`、`-p`、`-w` 这三个。

`-o` 即 `--output`，设置编译后 JS 文件输出到指定文件夹
`-p` 即 `--print` ，直接在终端打印出编译后的 JS 代码
`-w` 即 `--watch`，监视文件改变，一有变化就重新执行这条指令

```sh
coffee -c hello_world.coffee -o ./js -w
```

搭配起来就可以边写边编译到指定文件夹。


## 其他

有篇文章[《CoffeeScript: The beautiful way to write JavaScript》](http://amix.dk/blog/post/19612)，对 JS 和 CoffeeScript 的论述很中肯。但文中对「什么才是优美的代码」的总结更让人印象深刻：
>- beautiful code uses the least amount of code to solve a given problem
- beautiful code is readable and understandable
- beautiful code is achieved not when there is nothing more to add, but when there is nothing left to take away (just like great designs)
- the minimal length is a side-effect of beautiful code and not a goal or a measure


### 参考文献

- [《CoffeeScript 程序设计》](http://book.douban.com/subject/20509115/)
- [CoffeeScript 官网](http://coffeescript.org/)



[1]: https://geekpluxblog.oss-cn-hongkong.aliyuncs.com/coffeescript-note.png?x-oss-process=style/zip
