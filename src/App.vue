<template>
  <div id="app">
    <triple-tap @tapped="tripleTapTrigged"></triple-tap>
    <font-loader @font-loaded="fontLoaded"></font-loader>
    <loading-screen v-if="loading || fontLoading"></loading-screen>

    <router-view></router-view>
  </div>
</template>

<script>
import router from '@/router';
import FontLoader from '@/components/helios/FontLoader';
import LoadingScreen from '@/components/helios/LoadingScreen';
import TripleTap from '@/components/helios/TripleTap';

import EventBus from './components/helios/EventBus';

export default {
  name: 'app',
  router,
  data() {
    return {
      loading: false,
      fontLoading: true,
    };
  },
  components: {
    FontLoader,
    EventBus,
    LoadingScreen,
    TripleTap,
  },
  methods: {
    fontLoaded() {
      this.fontLoading = false;
    },
    tripleTapTrigged() {
      this.$router.push({ name: 'AdminPanel' });
    },
  },
  mounted() {
    EventBus.$on('OPEN_LOADING_SCREEN', () => {
      this.loading = true;
    });
    EventBus.$on('CLOSE_LOADING_SCREEN', () => {
      this.loading = false;
    });
  },
};
</script>

<style>

</style>
