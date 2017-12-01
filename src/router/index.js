import Vue from 'vue';
import Router from 'vue-router';

import Sample from '@/components/helios/Sample';
import SampleTimeout from '@/components/helios/SampleTimeout';
import SampleKeyboard from '@/components/helios/SampleKeyboard';
import SampleLoadingUsage from '@/components/helios/SampleLoadingUsage';

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
      path: '/sample-timeout',
      name: 'SampleTimeout',
      component: SampleTimeout,
    },
    {
      path: '/sample-keyboard',
      name: 'SampleKeyboard',
      component: SampleKeyboard,
    },
    {
      path: '/sample-loading',
      name: 'SampleLoadingUsage',
      component: SampleLoadingUsage,
    },
    {
      path: '/admin',
      name: 'AdminPanel',
      component: AdminPanel,
    },
  ],
});
