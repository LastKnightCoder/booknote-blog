---
title: cat
tags:
  - Linux
  - File System
  - cat
author: 熊滔
commentid: linux:fs:cat
---

`cat` 命令的作用时来查看文件的内容

## 基本用法

```shell
cat hello.c
```

<ImageBox src="https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3/202111041513552021-11-04-15-13-56.png" :center="false" />

## 显示行号

添加 `-n` 选项显示行号

```shell
cat -n hello.c
```

<ImageBox src="https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3/202111041516352021-11-04-15-16-36.png" :center="false" />

## 连接多个文件

`cat` 命令是 `concatenate` 的缩写，意为连接的意思，`cat` 命令可以连接多个文件，然后将它打印在标准输出，也就是屏幕上

```shell
# 将 hello.c 连接多次，并打印在屏幕上
cat hello.c hello.c hello.c
```

<ImageBox src="https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3/202111041554532021-11-04-15-54-54.png" :center="false" />

`cat` 命令会将文件的所有内容全部打印在终端界面上，所以当文件过长就会导致前面的内容看不到。

