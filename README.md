# vue-cnode

[![Build Status](https://travis-ci.org/Himmas/vue-cnode.svg?branch=master)](https://travis-ci.org/Himmas/vue-cnode)

[在线访问](https://himmas.github.io/vue-cnode/)


## 项目说明
该项目是为了练手vue所写的SPA，感谢[cnode社区](https://cnodejs.org/)提供的api

## 技术栈
vue + vue-router + axios + less + ES6;通过webpack打包

## 项目使用

``` bash

# git clone git@github.com:Himmas/vue-cnode.git
- npm install
- npm run dev
- npm run build

```

## 功能

- 主题列表，上拉加载
- 主题分类列表
- 主题详情，回复，点赞，评论
- 消息列表
- 消息提醒
- 消息全部标记
- 用户主页

## 目录结构 
``` bash 
.
├── build                           # 构建脚本
│   ├── dev-server.js               # development server script
│   ├── webpack.base.conf.js        # shared base webpack config
│   ├── webpack.dev.conf.js         # development webpack config
│   ├── webpack.prod.conf.js        # production webpack config
│   └── ...
├── config                          # 配置文件
│   ├── dev.env.js                 
│   ├── index.js         
│   └── prob.env.js       
│
├── node_modules                    # node模块依赖
├── src
│   ├── components                  # 组件文件夹
│   │        ├── a.vue              # 单文件组件
│   │        ├── b.vue
│   │        └── ...
│   ├── router                      # 路由
│   │        ├── router.js            
│   │        └── routes.js 
│   ├── asserts                     # 资源文件夹
│   │        ├── images             # 图片
│   │        ├── css                # 样式表
│   │        └── fonts              # 字体
│   │
│   ├── main.js                     # webpack entry
│   └── ...
│
│
│
├── static                          # 静态资源目录               
└── package.json
```
