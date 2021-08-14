(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{551:function(s,n,a){"use strict";a.r(n);var e=a(7),r=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h5",{attrs:{id:"docker-环境安装和基本命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-环境安装和基本命令"}},[s._v("#")]),s._v(" Docker 环境安装和基本命令")]),s._v(" "),a("p",[s._v("参考：http://www.macrozheng.com/#/deploy/mall_deploy_docker")]),s._v(" "),a("h5",{attrs:{id:"docker-环境安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-环境安装"}},[s._v("#")]),s._v(" Docker 环境安装")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#安装yum-utils：\nyum install -y yum-utils device-mapper-persistent-data lvm2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#为yum源添加docker仓库位置：\nyum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo\n\n#安装docker:\nyum nstall docker-ce\n\n#启动docker:  \nsystemctl start docker\n\n#缓存清除:  \ndocker  删除未启动的容器缓\ndocker system prune --volumes\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("docker 日志缓存清除设置：https://blog.csdn.net/yjk13703623757/article/details/80283729")]),s._v(" "),a("p",[s._v("容器日志一般存放在/var/lib/docker/containers/container_id/下面， 以json.log结尾")]),s._v(" "),a("h5",{attrs:{id:"永久虚拟内存设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#永久虚拟内存设置"}},[s._v("#")]),s._v(" 永久虚拟内存设置：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("切换到root用户修改配置sysctl.conf\nvi /etc/sysctl.conf\n添加下面配置：\nvm.max_map_count=655360\n并执行命令：\nsysctl -p（可以使其永久）\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h5",{attrs:{id:"docker-下载超时的错误最终解决方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-下载超时的错误最终解决方法"}},[s._v("#")]),s._v(" docker 下载超时的错误最终解决方法")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('如果遇到镜像下载不下来的情况，需要修改 /etc/docker/daemon.json 文件并添加上 registry-mirrors 键值，然后重启docker服务：\n{\n  "registry-mirrors": ["https://registry.docker-cn.com"]\n}\nsudo systemctl daemon-reload\nsudo systemctl restart docker\n 或"registry-mirrors":["https://almtd3fa.mirror.aliyuncs.com"]\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h5",{attrs:{id:"docker-镜像常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-镜像常用命令"}},[s._v("#")]),s._v(" Docker 镜像常用命令")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("搜索镜像\ndocker search java\n\n下载镜像\ndocker pull java:8\n\n官网查看对应的安装软件的支持版本\nhttps://hub.docker.com\n\n列出镜像\ndocker images\n\n删除镜像\ndocker rmi java:8\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('新建并启动容器\ndocker run -p 80:80 --name nginx -d nginx:1.17.0\n-d选项：表示后台运行\n--name选项：指定运行后容器的名字为nginx,之后可以通过名字来操作容器\n-p选项：指定端口映射，格式为：hostPort:containerPort\n\n列出容器\ndocker ps\n\n列出所有容器\ndocker ps -a\n\n停止容器\ndocker stop ontainerName(或者$ContainerId)\n\n强制停止容器\ndocker kill $ContainerName(或者$ContainerId)\n\n启动已停止的容器\ndocker start $ContainerName(或者$ContainerId)\n\n进入容器\n先查询出容器的pid：\ndocker inspect --format "{{.State.Pid}}" $ContainerName(或者$ContainerId)\n根据容器的pid进入容器：\nnsenter --target "$pid" --mount --uts --ipc --net --pid\n\n删除容器\ndocker rm $ContainerName(或者$ContainerId)\n\n查看容器的日志\n查看当前全部日志\ndocker logs $ContainerName(或者$ContainerId)\n动态查看日志\ndocker logs $ContainerName(或者$ContainerId) -f\n$ docker logs [OPTIONS] CONTAINER\n  Options:\n        --details        显示更多的信息\n    -f, --follow         跟踪实时日志\n        --since string   显示自某个timestamp之后的日志，或相对时间，如42m（即42分钟）\n        --tail string    从日志末尾显示多少行日志， 默认是all\n    -t, --timestamps     显示时间戳\n        --until string   显示自某个timestamp之前的日志，或相对时间，如42m（即42分钟）\n更多日志参考：https://www.jianshu.com/p/1eb1d1d3f25e\n\n查看容器的IP地址\ndocker inspect --format \'{{ .NetworkSettings.IPAddress }}\' $ContainerName(或者$ContainerId)\n --format可以缩写程-f\n查看容器的全部内容\ndocker inspect $ContainerName\n\n修改容器的启动方式(docker重启容器自动重启)\ndocker container update --restart=always $ContainerName\n\n同步宿主机时间到容器\ndocker cp /etc/localtime $ContainerName(或者$ContainerId):/etc/\n或（docker cp /usr/share/zoneinfo/Asia/Shanghai $ContainerName:/etc/localtime-要重启容器）\n进入容器查看时间\ndocker exec -ti  $ContainerName /bin/bash\ndate\n\n指定容器时区\ndocker run -p 80:80 --name nginx \\\n-e TZ="Asia/Shanghai" \\\n-d nginx:1.17.0\n\n-v /etc/localtime:/etc/localtime:ro \n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("在宿主机查看docker使用cpu、内存、网络、io情况\n查看指定容器情况：\ndocker stats $ContainerName(或者$ContainerId)\n查看所有容器情况：\ndocker stats -a\n查看Docker磁盘使用情况\ndocker system df\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("进入Docker容器内部的bash\ndocker exec -it $ContainerName /bin/bash\n使用root帐号进入Docker容器内部\ndocker exec -it --user root $ContainerName /bin/bash\nDocker创建外部网络\ndocker network create -d bridge my-bridge-network\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('修改Docker镜像的存放位置\ndocker info | grep "Docker Root Dir"\n关闭Docker服务：\nsystemctl stop docker\n移动目录到目标路径：\nmv /var/lib/docker /mydata/docker\n建立软连接：\nln -s /mydata/docker /var/lib/docker\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h5",{attrs:{id:"bridge-模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bridge-模式"}},[s._v("#")]),s._v(" Bridge 模式")]),s._v(" "),a("p",[s._v("#为了实现 Docker 容器跟局域网通信，并且实现局域网其他的物理机也可以访问容器的")]),s._v(" "),a("p",[s._v("#IP（不配置 NAT 映射），可以自定义桥接网络 br0，将 br0 跟物理网卡 eth0 或者 ens33")]),s._v(" "),a("p",[s._v("#桥接。\n操作方法如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('#添加 ens33 网卡指定 bridge 桥接网卡名称 br0；\ncd /etc/sysconfig/network-scripts/\n\n#查看 ifcfg-ens33 网卡 IP 地址；\ncat ifcfg-ens33\nTYPE="Ethernet" DEVICE="ens33"\nONBOOT="yes" BRIDGE="br0"\nIPADDR=192.168.0.141\nNETMASK=255.255.255.0\nGATEWAY=192.168.0.1\n\n#查看 ifcfg-br0 网卡 IP 地址；\ncat ifcfg-br0\nDEVICE="br0" BOOTPROTO=static\nONBOOT=yes\nTYPE="Bridge"\nIPADDR=192.168.0.141\nNETMASK=255.255.255.0\nGATEWAY=192.168.0.1\n\n#重启 network 网络服务；\nservice network restart\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('#修改 docker 引擎，使其读取 br0 网桥；\ncat /etc/sysconfig/docker-network\nDOCKER_NETWORK_OPTIONS="-b=br0"\n\n#启动 Docker 容器，设置为 none 模式，然后使用 br0 网桥，指令如下：\n（br0 为网桥名称，192.168.0.11/24 为容器 IP 和掩码，192.168.0.141 为容器网关）\ndocker run -itd --net=none --name=nginx-v1 docker.io/nginx\npipework br0 nginx-v1 192.168.0.11/24@192.168.0.141\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("Valine")],1)}),[],!1,null,null,null);n.default=r.exports}}]);