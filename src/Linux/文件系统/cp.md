---
title: cp
tags:
  - Linux
  - File System
  - cp
category: Linux
author: 熊滔
commentid: linux:fs:cp
---

## 基本用法

`cp` 命令用来复制文件，基本用法

```shell
cp source destination
```

## 复制文件并命名

```shell
# 复制 hello.md 到当前文件夹下，并命名为 hello2.md
cp hello.md hello2.md
```

如果当前文件夹下已经存在 `hello2.md`，则会覆盖该文件，**且不会给出任何提示**，我们可以为 `cp` 命令添加 `-i` 选项，如果已经存在同名的文件，它会询问你是否覆盖

```shell
cp -i hello.md hello2.md
```

<ImageBox src="https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3/202111012128022021-11-01-21-28-03.png" :center="false" />

## 复制文件到指定目录

```shell
# 复制 /etc 文件夹下的 passwd 文件到当前目录
cp /etc/passwd .
# 复制 hello.md 到当前目录下的 test 文件夹
cp hello.md test
```

复制多个文件

```shell
# 复制多个文件 hello.md, hello2.md 到 test 文件夹
cp hello.md hello2.md test
```

使用通配符复制多个文件

```shell
# 复制 hello.md hello2.md ... 到 test 文件夹
cp hello* test
```

::: tip
同样你可以添加 `-i` 选项，在覆盖文件之前进行询问。

```shell
cp -i /ect/passwd .
```

将文件移动到某个目录时，也可以为文件重命名

```shell
# 将 /etc/passwd 移动到当前文件夹，并重命名为 password
cp /etc/passwd ./password
```
:::

## 复制目录

复制目录时需要添加 `-r` 选项

```shell
# test1 为文件夹
cp -r test1 test2
```

上述命令有两种情况：

- `test2` 已存在，且为文件夹，则将 **`test1` 文件夹**复制到 `test2` 下
- `test2` 不存在，则新建 `test2` 文件夹，并将 **`test1` 文件夹下的所有文件移动到 `test2` 下**，注意这里不是移动文件夹，而是移动文件夹下的所有文件

