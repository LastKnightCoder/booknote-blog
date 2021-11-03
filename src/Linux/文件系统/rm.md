---
title: rm
tags:
  - Linux
  - File System
  - rm
author: 熊滔
commentid: linux:fs:rm
---

`rm` 用来删除文件和文件夹

```shell
# 删除多个文件
rm file1 file2 ...
# 删除文件夹，删除文件夹时需要添加 -r 选项
rm -r dir
```

因为 `Linux` 没有回收站，所以删除操作是一个很危险的操作，我们可以为 `rm` 命令添加 `-i` 选项，它会在删除文件之前进行询问

```shell
rm -i hello.md
```

::: warning
当我们删除不存在的文件或文件夹时，会给出错误提示该文件或文件夹不存在。
:::

我们可以使用 `-f` 选项来强制删除文件，使用该选项后系统不会给出任何提示，即使添加了 `-i` 选项或者文件不存在

```shell
# 删除根目录下的所有文件，该命令十分危险，千万不能运行
rm -rf /*
```
