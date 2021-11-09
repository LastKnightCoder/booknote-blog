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

::: info
`cd -` 表示回到上次所在的目录，例如我现在在 `/etc` 目录，现在我通过 `cd ~` 来到了家目录，这时我运行 `cd -` 表示回到我上次所在的目录，即会切换到 `/ect` 目录。

<ImageBox src="https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3/202111041453012021-11-04-14-53-02.png" :center="false" />
<br/>
:::

