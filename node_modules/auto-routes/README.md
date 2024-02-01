# auto-routes
a tool for express to auto map url routes and project's routes directory

> 根据项目目录自动生成路由，基于express

## 用法

#### 安装

```npm
    npm install auto-routes --save
```

#### 引入

在express工程目录下的app.js里

```js
    var autoRoutes=require('auto-routes')
    
    autoRoutes(app,'routes目录路径')
```

然后，auto-routes就会自动帮你生成路由 ^.^

注意:index.js对应默认路径'/'

[简单demo](https://github.com/flypie2/auto-routes-demo)

### dependence:

node.js V4+