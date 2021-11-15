---
title: 'Legacy code best practice: how to take over an existing project smoothly'
description: Don’t rush to overturn all the old code, but change it little by little, modularize and optimize it.
date: 2021-01-27 00:10:00
tag: Software Engineering, refactoring, legacy code, programming
author: GeekPlux
---

# Legacy code best practice: how to take over an existing project smoothly

Every programmer, I guess, would meet the code from others that you have never contributed to. And one of the ways to distinguish experienced programmers from beginners is to see if they can quickly dive into the legacy code and maintain, develop, and refactor it in the right way.

There is no silver bullet to approach it, I’ve also been caught in the nightmare of not being able to read the code at all. But I have some tips from my experience to guide you to master it step by step. Hope it would be helpful.

## 1. Ask for documentation or explanation

It’s very lucky if there is some detailed documentation, or if the person who wrote the code is still around. This can save you a lot of time, but of course the best way is that the previous team can help you walk through the whole codebase.

In this stage, you’d better know:

- how to **run** the whole project code
- any easier way to **test** or **debug** during development
- the **version control** tool they used
- how to **release** and **deploy**
- any **dependent** library you should notice

if there are no docs and no person was responsible for it available, promise me, please do not get angry and smash your keyboard :)

![smash keyboard panda](https://geekpluxblog.oss-cn-hongkong.aliyuncs.com/legacy-code/smash%20keyboard.gif)

## 2. Fix minor bugs

Learn by doing is always the fastest way to master code. For instance, if the legacy code is for the front-end, you can just change the Button style, if it’s for the back-end, you can just replace the response, that’s the easy but effective method to:

- know and practice how to **debug** during developing
- know each function’s purpose and its **scope**, roughly

These small bugs or tweaks allow you to get better familiar with the code, especially if you are really confused and have no idea how to start.

## 3. Keep new code clean

If you do not want to make things more complicated, then keep your new code clean. To follow the [Unix philosophy](https://www.wikiwand.com/en/Unix_philosophy), **make each function do one thing and do it well**.

You can’t control the quality of the inherited code, but you can make sure the code you add is the style you love.

## 4. Only rewrite code when necessary

I know every developer can’t help trying to rewrite the legacy code, but it usually brings much **undesirable** behavior.

Every time when I have to rewrite some functions, I will imagine the code taken over is a black box full of magic (and it always is!) so that I will be careful with each input and output.

When it comes to interdependent functions, try to control the scope of their impact, change the code as little as possible, try to ensure that no new bugs are introduced, and keep smooth iterative development.

## 5. Modularize code to the minimum possible

Maintaining and developing the legacy code is a progressive process. When you have to rewrite it, don’t rush to completely overturn the previous code first, try to take it apart first.

Dividing code makes you understand the code logic totally. You could keep the input params and output as simple as possible. **Roughly split first, and then split again on top of that until it is minimized**.

The advantage of this step is that any future refactoring of your code will also bring minimal impact.


![modularize like lego](https://geekpluxblog.oss-cn-hongkong.aliyuncs.com/legacy-code/james-pond-riEYPSKxoTw-unsplash.jpg)

## 6. Refactor after modularization

Best practices for refactoring are written in many books, but I still recommend doing it on top of completing the previous step. Which will take weeks, months or possibly years depending on the complexity.

At the same time you need to keep up with the speed of developing new features, so it’s a **trade-off**. I know that refactoring parts of the legacy code can improve the speed of writing new code, but it can also be more of a burden. It needs much patience to take your time and get the refactoring done.

## Conclusion

In short, **don’t rush to overturn all the old code, but change it little by little, modularize and optimize it**. Which like eating a pie, starting from the edges and working your way to the core, little by little.