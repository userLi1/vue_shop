import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import "./styles.scss";

// 引入全局样式表
import "./assets/CSS/index.css";

// 引入字体图标库
import "./assets/fonts/iconfont.css";

// 引入axios
import axios from "axios";
// import { config } from "vue/types/umd";
// 配置请求的根路径
axios.defaults.baseURL = "http://127.0.0.1:8888/api/private/v1/";

// 添加请求拦截器
axios.interceptors.request.use((config) => {
  // 为请求头对象，添加 token 验证的 Authorization 字段
  // console.log(config);
  config.headers.Authorization = window.sessionStorage.getItem("token");
  // 必须返回 config
  return config;
});

Vue.prototype.$http = axios;

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
