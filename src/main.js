import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import 'element-plus/lib/theme-chalk/index.css'
import ElementPlus from 'element-plus'
import './plugins/element.js'
import installElementPlus from './plugins/element'
const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.mount('#app');
installElementPlus(app)