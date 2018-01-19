<template>
  <div id="triple-tap" @click="addTap"></div>
</template>

<script>
export default {
  data() {
    return {
      taps: 0,
      tapTimeout: undefined,
    };
  },
  methods: {
    addTap() {
      this.taps += 1;

      this.setTapTimeout();
    },
    clearTaps() {
      this.taps = 0;
    },
    setTapTimeout() {
      clearTimeout(this.tapTimeout);

      this.tapTimeout = setTimeout(() => {
        this.clearTaps();
      }, 500);
    },
  },
  watch: {
    taps(newTaps) {
      if (newTaps >= 3) {
        this.$emit('tapped');
        this.taps = 0;
      }
    },
  },
  beforeDestroy() {
    clearTimeout(this.tapTimeout);
  },
};
</script>

<style scoped>
#triple-tap {
  position: fixed;
  top: 0;
  left: 0;
  width: 5vh;
  height: 5vh;
  z-index: 5000;
}
</style>
