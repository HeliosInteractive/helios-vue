<template>
  <div class="helios-container">
    <div class="helios-header">
      Loading screen is opened and closed by sending a message over the EventBus
    </div>
    <div class="links helios-header">
      <a @click="startLoading">Tap here to load</a>
    </div>
  </div>
</template>

<script>
import EventBus from '@/components/helios/EventBus';

export default {
  methods: {
    startLoading() {
      EventBus.$emit('OPEN_LOADING_SCREEN');

      setTimeout(() => {
        EventBus.$emit('CLOSE_LOADING_SCREEN');
      }, 5000);
    },
  },
};
</script>

<style scoped>
.helios-container {
  height: 100vh;
  width: 100vw;
  display: flex;
  text-align: center;
  background-color: #222324;
  color: #57c2b2;
  align-content: flex-start;
  font-family: Montserrat, sans-serif;
  flex-wrap: wrap;
}
.helios-header {
  margin-top: 10vh;
  font-size: 1.5em;
  width: 100%;
  text-align: center;
  font-weight: normal;
}
.links {
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 3em;
}
.links a {
  padding: 0 3em;
  color:#57c2b2;
}
.links a:visited {
  color:#57c2b2;
}
</style>
