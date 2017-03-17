# questionaire

> A VueJS + NodeJS + MongoDB project



## Express路由回调参数req：

req.query 获取get请求链接参数
req.params 处理/:xxx 形式的get或pist请求参数
req.body 获取post请求体

[Express router](http://lostjs.com/2014/04/24/router-in-express-4/)

## 跨域请求后端api

vue中通过[proxyTable](https://vuejs-templates.github.io/webpack/proxy.html)来开启一个代理服务

## [JWT](https://www.npmjs.com/package/jsonwebtoken)：无状态的用户认证策略

传统的web应用解决HTTP无连接采用的是session+cookie。在如今RESTFUL化的API接口下，API被设计成无状态的，这意味着没有登录注销，没有session，cookie+session机制已经不能很好的保护API了，因为无法保证这些request是由用户自身发出的。

这种形式下采用的是基于Token的验证机制。JWT(JSON Web Token)是一种简洁的、自包含的方法用于通信双方之间以JSON对象的形式安全的传递信息。

简洁(compact)：通过url、post参数或者在http header发送，数据量小，传输速度快

自包含(self-contained)：Payload负载中包含了所有用户所需要的信息，避免多次查询数据库


#### JWT的结构：

包含三部分，使用`.`分隔

* Header头部
* Payload负载
* Signature签名

每部分内容都使用Base64Url编码


## 非父子组件通信

Nav组件和Reg|Login组件共享token这个状态，用户登录成功后本地会存储token，Nav需要根据本地是否有token动态显示登出按钮。
先解决这个问题之后再看有没有更好的方法，用了**非父子组件通信**，使用一个空的vue实例作为中央事件总线。
```
var bus = new Vue();

//在Login和Reg中触发Nav的显示登出按钮事件
console.log('goint to trigger!');
bus.$emit('showLogoutBtn');

//在Nav的钩子中监听事件
bus.$on('showLogoutBtn', ()=>{
	console.log('be trggiered!');
	// ...
})
```

## 页面权限控制

已登录用户不可以再访问路由/login和/register，未登录用户不可以访问已登录用户可访问的路由，还有未定义路由的访问重定向到404页面。
暂时用的是判断本地token是否存在来限制访问:
```
created () {
	var cookie = store.fetch();
	if(!cookie.token) this.$router.push({name: 'login'});
}
```
实际不应该是这样，应该给token一个过期时间，每次路由访问都向服务器发起一个GET请求，验证token是否有效。之后再完善。

## 记得要优化的：密码加密，token验证
## Tips
* autocomplete="off" 禁用输入字段自动完成功能