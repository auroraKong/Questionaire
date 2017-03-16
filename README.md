# questionaire

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


express路由回调参数req：

req.query 获取get请求链接参数
req.params 处理/:xxx 形式的get或pist请求参数
req.body 获取post请求体


[express router](http://lostjs.com/2014/04/24/router-in-express-4/)


autocomplete="off" 禁用输入字段自动完成功能


### JWT：无状态的用户认证策略

传统的web应用解决HTTP无连接采用的是session+cookie。在如今RESTFUL化的API接口下，API被设计成无状态的，这意味着没有登录注销，没有session，cookie+session机制已经不能很好的保护API了，因为无法保证这些request是由用户自身发出的。

这种形式下采用的是基于Token的验证机制。JWT(JSON Web Token)是一种简洁的、自包含的方法用于通信双方之间以JSON对象的形式安全的传递信息。

简洁(compact)：通过url、post参数或者在http header发送，数据量小，传输速度快

自包含(self-contained)：Payload负载中包含了所有用户所需要的信息，避免多次查询数据库


### JWT的结构：

包含三部分，使用`.`分隔

* Header头部
* Payload负载
* Signature签名

每部分内容都使用Base64Url编码


记得要优化的：密码加密，权限限制访问，登出功能
