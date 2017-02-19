**支持vue-router(version >= 2.0)导航切换更改document.title**  
[![npm](https://img.shields.io/npm/v/vue-document-title-plugin.svg?style=flat-square)](https://www.npmjs.com/package/vue-document-title-plugin)
[![npm](https://img.shields.io/npm/dt/vue-document-title-plugin.svg?style=flat-square)](https://www.npmjs.com/package/vue-document-title-plugin)
[![license](https://img.shields.io/github/license/shmy/vue-document-title-plugin.svg?style=flat-square)](https://github.com/shmy/vue-document-title-plugin/blob/master/LICENSE.md)
[![GitHub stars](https://img.shields.io/github/stars/shmy/vue-document-title-plugin.svg?style=social&label=Star)](https://github.com/shmy/vue-document-title-plugin)  
### **Features**  
- 支持ios微信客户端的无效的bug. 参考自:[http://blog.csdn.net/xuexiiphone/article/details/51966342][1]  
### **Installation**  
+ via **CDN**  
``` html
  <script src="https://unpkg.com/vue-document-title-plugin/dist/vue-document-title-plugin.min.js"></script>
```  
#### simple example
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <script src="https://unpkg.com/vue/dist/vue.js"></script>
  <script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
  <script src="https://unpkg.com/vue-document-title-plugin/dist/vue-document-title-plugin.min.js"></script>
</head>

<body>
  <div id="app">
    <button @click="change">change title</button>
    <button @click="get">get title</button>
    <router-view></router-view>
  </div>
  <template id="index">
    <div>
      <h1>this is index page</h1>
      <router-link to="/list">go to list</router-link>
    </div>
  </template>
  <template id="list">
    <div>
      <h1>this is list page</h1>
      <router-link to="/">go to index</router-link>
    </div>
  </template>
  <script>
    Vue.use(VueRouter);
    var router = new VueRouter({
      routes: [{
        path: "/",
        component: { template: "#index" },
        meta: { title: "首页" }
      }, {
        path: "/list",
        component: { template: "#list" },
        meta: { title: "列表页" }
      }]
    });
    Vue.use(vueDocumentTitlePlugin, router, { filter: function (title) { return title + "[balabala]" } });
    new Vue({
      el: "#app",
      router,
      methods: {
        change: function () {
          this.$doc.title = "xxxx";
        },
        get: function () {
          alert(this.$doc.title);
        }
      }
    })
  </script>
</body>

</html>
```
+ via **NPM**  
```bash
$ npm install vue-document-title-plugin --save # Or
$ yarn add vue-document-title-plugin
```

#### simple example

```javascript
  // main.js
  import vue from "vue";
  import vueRouter from "vue-router";
  import vueDocumentTitlePlugin from "vue-document-title-plugin";
  vue.use(vueRouter); 
  const router = new VueRouter({
    routes: [{
      path: "/",
       // component: 
       meta: { title: "首页" } // 导航到这个路由document.title会变成 首页【网站名称】
    }]
  });
  Vue.use(vueDocumentTitlePlugin, router, { defTitle: "【网站名称】", filter: title => `${title}【网站名称】` });
```


  [1]: http://blog.csdn.net/xuexiiphone/article/details/51966342