import { createApp } from "vue";
import App from "./App.vue";
// 公共样式
import "@/assets/css/common.scss"

import router from "@/router"; // 引入路由配置文件

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";


const app = createApp(App);

// 注册element
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(router);
app.use(ElementPlus, { locale: zhCn });
app.mount("#app");
