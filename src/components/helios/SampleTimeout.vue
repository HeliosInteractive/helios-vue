<template>
  <div class="helios-container">
    <div class="helios-header">
      Sample of timeout
    </div>
    <p>
      Timeout will appear after x amount of milliseconds of inactiviy. Configured in helios.config.
    </p>

    <timeout></timeout>
  </div>
</template>

<script>
import Timeout from '@/components/helios/Timeout';

export default {
  components: {
    Timeout,
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
  justify-content: center;
  flex-wrap: wrap;
}
.helios-header {
  margin-top: 10vh;
  font-size: 3em;
  width: 100%;
  text-align: center;
  font-weight: normal;
}
</style>
