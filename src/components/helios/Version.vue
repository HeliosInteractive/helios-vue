<template>
  <div style="background: white; color: black">
    <h3>
      AppVersion: {{ version }}
    </h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      version: '',
    };
  },
  mounted() {
    fetch('/static/version.txt')
      .then(res => res.text())
      .then((text) => {
        this.version = text;
      });
  },
};
</script>

<style>

</style>
