<template>
  <div class="helios-container">
    <div class="helios-background"></div>
    <div class="helios-header underline">Dashboard</div>
    <div class="helios-header small">
      Version: {{ version }}
    </div>
    <div class="helios-header small">
     NODE_ENV: {{ env }}
    </div>
    <div class="helios-header small">
     Config:
    </div>
    <div
      v-if="!requirePassphrase || !passphraseExists || requirePassphrase && passphraseAccepted"
      class="config-printout"
    >
{{ configJson }}
    </div>
    <div class="home" @click="toHome">Home</div>
  </div>
</template>

<script>
import * as config from '@/util/config';

export default {
  data() {
    return {
      requirePassphrase: false,
      passphraseAccepted: false,
      passphraseExists: Boolean(process.env.ADMIN_PASS && process.env.ADMIN_PASS.length > 0),
      configJson: undefined,
      env: process.env.NODE_ENV,
      version: '',
    };
  },
  mounted() {
    if (this.requirePassphrase && this.passphraseExists) {
      // eslint-disable-next-line
      const pass = prompt('What is the password');
      if (pass === process.env.ADMIN_PASS) {
        this.passphraseAccepted = true;
      }
    }

    this.configJson = JSON.stringify(config.getConfig(), null, 4);

    fetch('/static/version.txt')
      .then(res => res.text())
      .then((text) => {
        this.version = text;
      });
  },
  methods: {
    toHome() {
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.helios-container {
  min-height: 100vh;
  min-width: 100vw;
  width: 100%;
  display: flex;
  text-align: center;
  color: #57c2b2;
  margin: 5vh 5vw;
  box-sizing: border-box;
  align-content: flex-start;
  font-family: Montserrat, sans-serif;
  flex-wrap: wrap;
  text-align: left;
  overflow: scroll;
}
.helios-background {
  background-color: #222324;
  z-index: -1;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.helios-header {
  font-size: 3em;
  width: 100%;
  font-weight: normal;
}
.config-printout {
  white-space: pre;
  text-align: left;
  font-size: 1.5em;
  font-family: monospace;
  background-color: #b9c1bd;
  color: black;
  padding: 1em;
  box-sizing: border-box;
  margin-top: 1em;
}
.small {
  font-size: 2em;
  color: #b9c1bd;
  margin-top: 1em;
}
.underline {
  border-bottom: 2px dashed #b9c1bd;
}
.home {
  width: 100%;
  align-self: flex-end;
  font-size: 1.5em;
  margin-top: 1em;
  cursor: pointer;
  text-decoration: underline;
}
</style>
