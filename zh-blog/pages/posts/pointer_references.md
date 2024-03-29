---
layout: post
title: C++指针与引用小结
date: 2013-01-02 15:41:25
categories:
- Code
tags:
- Code
- 编程
- 总结
- Summary
- 笔记
- Note
---

## **概念**

### **引用**

**引用**就是某一对象（变量）的一个**别名**。举个例子更容易理解：

```cpp
int m;
int &n = m;
```

这段程序中，`n`是`m`的一个引用（reference），`m`是被引用物（referent）。
`n`相当于`m`的**别名**（绰号），对`n`的任何操作就是对`m`的操作。
`n`既不是`m`的拷贝，也不是指向`m`的指针，其实`n`就是`m`它自己。

### **指针**

> **指针**用于指向对象（变量）。指针提供对其所指对象的间接访问。指针用于指向单个对象。

（这三句摘自《C++ Primer, Fourth Edition》）。再举个例子：

```cpp
int m;
int *n = &m;
```

第二条语句定义了一个指向`int`型的指针`n`，并初始化`n`使其指向`int`型的变量`m`。
`*n`中的 `*` 操作符表明`n`是一个指针变量（**`n`本质上也是一个变量，只不过这个变量的存储内容是 地址**）。
`&m`中的 `&` 符号是**取地址操作符**，当此操作符用于一个对象上时，返回的是该对象的存储地址。



## **联系**

- 都是有关地址的概念。
  指针指向一块内存，它的内容是所指内存的地址；而引用则是某块内存的别名。
- 都是间接访问其他对象。
- 都能用于函数参数和返回值的传递。

## **区别**

- **一、指针是一个实体（本质上就是存放变量地址的一个变量），而引用只是个别名。**

这句话从内存分配的角度很好理解，程序会为指针变量分配内存区域，而引用不分配内存区域。

- **二、指针可变，引用不可变。**

指针在逻辑上是独立的，它可以被改变，包括其所指向的地址的改变和其指向的地址中所存放的数据的改变。
引用在逻辑上不独立，具有依附性，所以引用必须在一开始就被初始化，而且引用一旦和某个对象绑定后就不能再改变（从一而终）。

- **三、指针可以为空，引用不能为空。**

即指针可以为 NULL，而引用必须与合法的存储单元关联。

- **四、传递方式不同。**

首先，函数参数和返回值的传递方式大概可以理解为三种：

1. 值传递
2. 指针传递
3. 引用传递

先理解**值传递**：值传递过程中，被调函数的形式参数作为被调函数的局部变量处理，即在栈中开辟了内存空间以存放由主调函数放进来的实参的值，从而成为了实参的一个拷贝。_值传递的特点是被调函数对形式参数的任何操作都是作为局部变量进行，不会影响主调函数的实参变量的值。_

**指针传递**本质上值传递，只不过它所传递的是一个地址值。然后把上面那段话「翻译」一下：指针传递时，形参是一个指针变量，该变量拷贝了实参的地址值，然后作为被调函数的局部变量（传递过来的实参的地址值不会变），再然后我们可以用`*`操作符访问实参，从而对实参进行操作。很绕口，不如看个例子：

```cpp
#include <iostream>
using namespace std;

void f(int *n)
{
  *n = 5;
}

int main()
{
  int m = 1;
  cout << m << endl;
  f(&m);
  cout << m << endl;

  return 0;
}
```

该程序输出结果为：1 5

在函数`f`中，形参`n`是指向`int`型的指针变量，拷贝了实参`m`的地址，作为`f`函数的局部变量，然后通过`*n`改变实参`m`的值。

而在**引用传递**过程中，被调函数的形式参数虽然也作为局部变量在栈中开辟了内存空间，但是这时存放的是**由主调函数放进来的实参变量的地址**。被调函数对形参的任何操作都被处理成间接寻址（不必通过\*操作符），即通过栈中存放的地址访问主调函数中的实参变量。正因为如此，被调函数对形参做的任何操作都影响了主调函数中的实参变量（此时的形参其实就是实参）。再举个例子：

```cpp
#include <iostream>
using namespace std;

void f(int &n)
{
  n = 5;
}

int main()
{
  int m = 1;
  cout << m << endl;
  f(m);
  cout << m << endl;

  return 0;
}
```

输出结果为：1 5

`n`是`f`中的局部变量，同时`n`也是实参`m`的引用。此时`n`就为`m`，所以在`f`中对`n`的操作都会影响`m`，为`n`赋值 5 就是对`m`赋值 5。

还可以从编译角度理解（此处从网上摘录）：

> 程序在编译时分别将指针和引用添加到符号表上，符号表上记录的是变量名及变量所对应地址。指针变量在符号表上对应的地址值为指针变量的地址值，而引用在符号表上对应的地址值为引用对象的地址值。符号表生成后就不会再改，因此指针可以改变其指向的对象（指针变量中的值可以改），而引用对象则不能修改。

- **五、引用不能 const，指针能 const，const 的指针不可变。**
  对于引用，具体指没有 int&const a 这种形式，而 const int& a 是有的， 前者指引用本身（即别名）不可以改变，这是理所当然的，所以不需要这种形式，后者指引用所指的值不可以改变）

- **六、「sizeof 引用」得到的是所指向的变量(对象)的大小，而“sizeof 指针”得到的是指针本身的大小。**

- **七、指针和引用的自增(++)运算意义不一样（很好理解）。**

要理解知识必须先建立知识的结构，就像盖楼房一样，必须先有框架，所以此处附上本人制作的一幅简单的思维导图：

![](https://geekpluxblog.oss-cn-hongkong.aliyuncs.com/pointer-summary.jpg?x-oss-process=style/zip)

