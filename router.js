import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './HomePage.vue'
import ProductsPage from './ProductsPage.vue'
import FactoryPage from './FactoryPage.vue'
import CustomPage from './CustomPage.vue'
import ContactPage from './ContactPage.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage, meta: { title: '三富锂电 - 首页' } },
  { path: '/products/', name: 'products', component: ProductsPage, meta: { title: '产品中心 - 三富锂电' } },
  { path: '/factory/', name: 'factory', component: FactoryPage, meta: { title: '工厂实力 - 三富锂电' } },
  { path: '/custom/', name: 'custom', component: CustomPage, meta: { title: '定制服务 - 三富锂电' } },
  { path: '/contact/', name: 'contact', component: ContactPage, meta: { title: '联系三富锂电' } },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

router.afterEach((to) => {
  document.title = to.meta.title || '三富锂电'
})
