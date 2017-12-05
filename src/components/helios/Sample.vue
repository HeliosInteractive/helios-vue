<template>
  <div id="sample" class="helios-container">
    <h1 class="helios-header">Helios Sample Vue App</h1>
    <img src="/static/images/icons/ms-icon-310x310.png" alt="">
    <h2 class="fullwidth">Features</h2>
    <div class="links">
      <a href="/#/sample-timeout">Sample Timeout</a>
      <a href="/#/sample-keyboard">Sample Keyboard</a>
      <a href="/#/sample-loading">Sample Loading</a>
      <a href="/#/admin">Admin Panel</a>
    </div>
    <h2 class="fullwidth">Resources</h2>
    <div class="links">
      <a href="https://material.io/icons/">Material Icons  <v-icon color="white">star</v-icon></a>
      <a href="https://vuetifyjs.com/">Vuetify  <v-icon color="white">layers</v-icon></a>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
#sample {
  justify-content: center;
}
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
  font-size: 3em;
  width: 100%;
  text-align: center;
  font-weight: normal;
}
.fullwidth {
  width: 100%;
}
.links {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 2em;
}
.links a {
  padding: 0 3em;
  color:#57c2b2;
}
.links a:visited {
  color:#57c2b2;
}
</style>