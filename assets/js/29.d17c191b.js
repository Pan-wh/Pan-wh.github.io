(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{566:function(a,s,t){"use strict";t.r(s);var e=t(7),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h5",{attrs:{id:"整个过程有几个阶段-磁盘读取-打包-tar-压缩-传输-解压缩-拆包-落盘"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#整个过程有几个阶段-磁盘读取-打包-tar-压缩-传输-解压缩-拆包-落盘"}},[a._v("#")]),a._v(" 整个过程有几个阶段：磁盘读取--\x3e打包(tar)--\x3e压缩--\x3e传输--\x3e解压缩--\x3e拆包--\x3e落盘")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("#下载lz4压缩工具\n\nyum -y install -y lz4 lz4-devel\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("h5",{attrs:{id:"传输两端都要安装lz4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#传输两端都要安装lz4"}},[a._v("#")]),a._v(" 传输两端都要安装lz4")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('time tar -c svnrepos |lz4 | pv |ssh -c arcfour128 -o"MACs umac-64@openssh.com" -p 22612 pwh@192.168.20.192 "lz4 -d | tar -xC /data/"\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("pv用于速度观察")]),a._v(" "),t("p",[a._v("原文地址https://www.orczhou.com/index.php/2013/11/tranfer-data-faster-on-the-fly/\n"),t("Valine")],1)])}),[],!1,null,null,null);s.default=r.exports}}]);