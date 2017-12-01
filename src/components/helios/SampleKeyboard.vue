<template>
  <div class="helios-container">
    <div class="helios-header">
      Sample of keyboard
    </div>
    <input class="sample-input" type="text" v-model="input">
    <div class="helios-header">Output: {{ input }}</div>
    <keyboard></keyboard>
  </div>
</template>

<script>
import Keyboard from '@/components/helios/Keyboard';

export default {
  data() {
    return {
      input: undefined,
    };
  },
  components: {
    Keyboard,
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
  justify-content: center;
}
.helios-header {
  margin-top: 10vh;
  font-size: 3em;
  width: 100%;
  text-align: center;
  font-weight: normal;
}
.sample-input {
  width: 50vw;
  line-height: 1.5em;
  font-size: 3em;
  margin: 2em;
}
</style>
