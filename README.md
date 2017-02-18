**支持vue-router(version >= 2.0)导航切换更改document.title**  
[![npm](https://img.shields.io/npm/v/vue-document-title-plugin.svg?style=flat-square)](https://www.npmjs.com/package/vue-document-title-plugin)
[![npm](https://img.shields.io/npm/dt/vue-document-title-plugin.svg?style=flat-square)](https://www.npmjs.com/package/vue-document-title-plugin)
[![license](https://img.shields.io/github/license/shmy/vue-document-title-plugin.svg?style=flat-square)](https://github.com/shmy/vue-document-title-plugin/blob/master/LICENSE.md)
[![GitHub stars](https://img.shields.io/github/stars/shmy/vue-document-title-plugin.svg?style=social&label=Star)](https://github.com/shmy/vue-document-title-plugin)
### **Installation**  
+ via **CDN**  
``` html
  <script src="https://unpkg.com/vue-document-title-plugin/dist/vue-document-title-plugin.min.js"></script>
```  
+ via **NPM**  
```bash
$ npm install vue-document-title-plugin --save # Or
$ yarn add vue-document-title-plugin
```

### Demo

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
  Vue.use(documentTitle, router, { defTitle: "【网站名称】", filter: title => `${title}【网站名称】` });
```
