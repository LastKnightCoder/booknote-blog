---
date: 2021-10-31
author: 熊滔
tags:
  - Linux
  - File System
  - ls
commentid: linux:fs:ls
---

## 基本用法

:::: el-row :gutter="20"
::: el-col :span="12"
```shell
# 将文件以列表的形式列出
ls
```
:::
::: el-col :span="12"
```shell
# 显示所有文件，包括隐藏文件
ls -a
```
:::
::::

## 递归显示

```shell
# 递归显示文件夹
ls -R
```

<ImageBox src="https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3/202111011624312021-11-01-16-24-32.png" :center="false" />

## 显示文件详细信息

:::: el-row :gutter="20"
::: el-col :span="8"
```shell
# 显示文件更多文件信息
ls -l
# 它具有一个别名
ll
```
```shell
# 显示特定文件的信息
ls -l hello.c
```
:::
::: el-col :span="16"
文件信息包括：

- 文件类型，比如目录(d)、文件(-)、字符型文件(c)、块设备(b)
- 文件权限
- 文件硬链接总数
- 文件归属者的用户名
- 文件归属组的组名
- 文件大小（以字节为单位）
- 文件的上次修改时间
- 文件名或目录名
:::
::::

<ImageBox src="https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3/202111011621502021-11-01-16-21-51.png" :center="false" />

## 模糊匹配

:::: el-row :gutter="20"
::: el-col :span="8"
使用匹配模式

- ?：代表一个字符
- *：代表零个或多个字符
:::
::: el-col :span="16"
```shell
ls -l he?lo.md
ls hello*
```
:::
::::

使用元字符

```shell
ls he[a-z]lo.md
```

