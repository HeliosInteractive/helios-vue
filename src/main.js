// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import { crow } from '@helios-interactive/crow';

import './main.css';
import * as config from './util/config';

Vue.config.productionTip = false;

// Import the helios config file
config.storeHeliosConfig().then(() => {
  // setup crow for logging
  crow.setUrl(config.getItem('crow.url'));
  crow.setApplication(config.getItem('crow.application'));
  crow.setDevMode(config.getItem('crow.devMode'));

  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    template: '<App/>',
    components: { App: () => import('./App') },
  });
});
