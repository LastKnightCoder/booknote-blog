---
title: rm
tags:
  - Linux
  - File System
  - rm
author: 熊滔
commentid: linux:fs:rm
---

`rm` 用来删除文件

```bash {10}
~ » tree
.
├── dst
│   ├── hello.c
│   ├── hello.md
│   └── hello2.md
└── src

2 directories, 3 files
# 删除 dst 下的 hello2.md
~ » rm dst/hello2.md
~ » tree
.
├── dst
│   ├── hello.c
│   └── hello.md
└── src

2 directories, 2 files
```

因为 `Linux` 没有回收站，所以删除操作是一个很危险的操作，我们可以为 `rm` 命令添加 `-i` 选项，它会在删除文件之前进行询问

```bash
~ » rm -i dst/hello.md
rm: remove regular empty file 'dst/hello.md'? y
~ » tree
.
├── dst
│   └── hello.c
└── src

2 directories, 1 file
```

::: warning
当我们删除不存在的文件或文件夹时，会给出错误提示该文件或文件夹不存在。
:::

我们可以使用 `-f` 选项来强制删除文件，使用该选项后系统不会给出任何提示，即使添加了 `-i` 选项或者文件不存在

```shell
# 删除根目录下的所有文件，该命令十分危险，千万不能运行
rm -rf /*
```
