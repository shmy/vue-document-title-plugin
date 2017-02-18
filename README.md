### 支持vue-router导航切换document.title
```bash
$ npm install vue-document-title-plugin
```
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