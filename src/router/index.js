import Vue from 'vue';
import Router from 'vue-router';

import Sample from '@/components/helios/Sample';
import AdminPanel from '@/components/helios/AdminPanel';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Sample',
      component: Sample,
    },
    {
      path: '/admin',
      name: 'AdminPanel',
      component: AdminPanel,
    },
  ],
});
