import Vue from 'vue';
import Router from 'vue-router';

import Hello from '@/components/Hello';
import Version from '@/components/helios/Version';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/version',
      name: 'Version',
      component: Version,
    },
  ],
});
