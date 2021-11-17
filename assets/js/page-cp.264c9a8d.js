(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{760:function(s,t,a){"use strict";a.r(t);var e=a(1),l=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"基本用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[s._v("#")]),s._v(" 基本用法")]),s._v(" "),a("p",[a("code",[s._v("cp")]),s._v(" 命令用来复制文件，基本用法")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" destination\n")])])]),a("h2",{attrs:{id:"复制文件并命名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复制文件并命名"}},[s._v("#")]),s._v(" 复制文件并命名")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复制 hello.md 到当前文件夹下，并命名为 hello2.md")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" hello.md hello2.md\n")])])]),a("p",[s._v("如果当前文件夹下已经存在 "),a("code",[s._v("hello2.md")]),s._v("，则会覆盖该文件，"),a("strong",[s._v("且不会给出任何提示")]),s._v("，我们可以为 "),a("code",[s._v("cp")]),s._v(" 命令添加 "),a("code",[s._v("-i")]),s._v(" 选项，如果已经存在同名的文件，它会询问你是否覆盖")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -i hello.md hello2.md\n")])])]),a("ImageBox",{attrs:{src:"https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3/202111012128022021-11-01-21-28-03.png",center:!1}}),s._v(" "),a("h2",{attrs:{id:"复制文件到指定目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复制文件到指定目录"}},[s._v("#")]),s._v(" 复制文件到指定目录")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复制 /etc 文件夹下的 passwd 文件到当前目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /etc/passwd "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复制 hello.md 到当前目录下的 test 文件夹")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" hello.md "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n")])])]),a("p",[s._v("复制多个文件")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复制多个文件 hello.md, hello2.md 到 test 文件夹")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" hello.md hello2.md "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n")])])]),a("p",[s._v("使用通配符复制多个文件")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复制 hello.md hello2.md ... 到 test 文件夹")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" hello* "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("Tips")]),s._v(" "),a("p",[s._v("同样你可以添加 "),a("code",[s._v("-i")]),s._v(" 选项，在覆盖文件之前进行询问。")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -i /ect/passwd "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])])]),a("p",[s._v("将文件移动到某个目录时，也可以为文件重命名")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将 /etc/passwd 移动到当前文件夹，并重命名为 password")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /etc/passwd ./password\n")])])])]),s._v(" "),a("h2",{attrs:{id:"复制目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复制目录"}},[s._v("#")]),s._v(" 复制目录")]),s._v(" "),a("p",[s._v("复制目录时需要添加 "),a("code",[s._v("-r")]),s._v(" 选项")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# test1 为文件夹")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -r test1 test2\n")])])]),a("p",[s._v("上述命令有两种情况：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("test2")]),s._v(" 已存在，且为文件夹，则将 "),a("strong",[a("code",[s._v("test1")]),s._v(" 文件夹")]),s._v("复制到 "),a("code",[s._v("test2")]),s._v(" 下")]),s._v(" "),a("li",[a("code",[s._v("test2")]),s._v(" 不存在，则新建 "),a("code",[s._v("test2")]),s._v(" 文件夹，并将 "),a("strong",[a("code",[s._v("test1")]),s._v(" 文件夹下的所有文件复制到 "),a("code",[s._v("test2")]),s._v(" 下")]),s._v("，注意这里不是复制文件夹，而是复制文件夹下的所有文件")])])],1)}),[],!1,null,null,null);t.default=l.exports}}]);