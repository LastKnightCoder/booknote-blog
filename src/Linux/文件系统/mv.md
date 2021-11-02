---
title: mv
tags:
  - Linux
  - File System
  - mv
category: Linux
author: 熊滔
commentid: linux:fs:mv
---

`mv` 用来移动文件或者重命名文件。

## 重命名文件

```shell
# 重命名 hello.md 为 hello2.md
mv hello.md hello2.md
```

## 移动文件

```shell
# 移动 hello.md 到 test 文件夹下
mv hello.md test/
```

```shell
# 移动多个文件到 test 文件夹下
mv hello.md hello2.md test/
```

```shell
# 移动 test 文件夹下的所有文件(夹)到 test2 文件夹
mv test/* test2/
```


