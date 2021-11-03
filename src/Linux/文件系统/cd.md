---
title: cd
tags:
  - Linux
  - File System
  - cd
author: 熊滔
commentid: linux:fs:cd
---

改变工作路径

```shell
cd dir
```

`dir` 可以是绝对路径，也可以是相对路径


:::: el-row :gutter="20"
::: el-col :span="12"
```shell
# 绝对路径
# 切换到根目录下的 etc 文件夹中
cd /etc
```
:::
::: el-col :span="12"
```shell
# 相对路径，相对于当前路径
# 切换到当前路径下的 test 文件夹中
cd test
```
:::
::::