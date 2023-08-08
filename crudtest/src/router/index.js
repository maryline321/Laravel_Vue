import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CompanyIndex from '../components/CompanyIndex.vue';
import CreateCompany from '../components/CompanyIndex.vue';
import EditCompany  from '../components/EditCompany.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      // path: '/companyIndex',
      name: 'companyIndex',
     
      component: CompanyIndex
    },
    {
      path: '/createcompany',
      name: 'createCompany',
     
      component: CreateCompany
    },
    {
      path: '/editcompany',
      name: 'editCompany',
     
      component: EditCompany
    }
  ]
})

export default router
