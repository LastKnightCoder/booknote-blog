---
title: more
tags:
  - Linux
  - File System
  - more
author: 熊滔
commentid: linux:fs:more
---

`more` 命令也是用来查看文件内容的，相对于 `cat` 命令，它提供了翻页的功能，我们可以一页一页的查看

```shell
# 查看 file 文件
more file
```

---

我们可以通过 `Ctrl + F` 或者 `Space`(空格键向下翻页)，通过 `Ctrl + B` 向上翻页。

::: warning 注意
当翻到文件末尾时，便会自动退出程序，此时不能向上翻页了。
:::

按 `q` 也可以直接退出程序。

---

如果我们想从第 `n` 行开始查看，我们可以通过 `+n` 来指定

```shell
# 从第 10 行开始查看
more +10 file
```

通过 `-n` 来指定一页有多少行，例如 `-10` 就表示一页有 `10` 行

```shell
# 指定一页有 10 行
more -10 file
```
 
