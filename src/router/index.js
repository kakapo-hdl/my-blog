import { createWebHistory, createRouter } from "vue-router";
const Home = () => import('../views/HomePage.vue')
const MyProfile = () => import('../views/MyProfile.vue')

const routes = [
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: Home
  },
  {
    path:'/Home',
    name: "Home",
    component: Home
  },
  {
    path:'/MyProfile',
    name: "MyProfile",
    component: MyProfile
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;