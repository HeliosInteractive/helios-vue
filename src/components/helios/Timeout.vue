// This timeout component can be included on any page that you wish to have timeout functionality

<template>
  <div class="timeout-container" v-if="timedout" @click.stop @touchstart.stop @touchend.stop>
    <div class="timeout-card">
      <div class="text">{{ timeoutCTA }}</div>
      <div class="timer">{{ remaining }}</div class="timer">
      <div class="text">{{ timeoutContinue }}</div>
    </div>
  </div>
</template>

<script>
import away from 'away';
import * as config from '@/util/config';

export default {
  data() {
    return {
      timeoutCTA: 'Are you still there?',
      timeoutContinue: 'Tap to Continue.',
      timeoutDismiss: null,
      countDownInterval: null,
      remaining: parseInt(config.getItem('timeout.timeUntilDismiss'), 10) / 1000,
      timedout: false,
      timer: undefined,
    };
  },
  mounted() {
    // Only continue if the timeout is enabled
    if (!config.getItem('timeout.enabled')) { return; }

    this.setupTimer();
  },
  beforeDestroy() {
    // Only continue if the timeout is enabled
    if (!config.getItem('timeout.enabled')) { return; }

    // Clear the interval and timeout so that they do not interfere later
    this.clearTimeout();
    if (this.timer) {
      this.timer.stop();
    }
  },
  methods: {
    /**
     * This method will be called when the timeout is dismissed via interaction
     */
    onDismissViaInteraction() {
      this.clearTimeout();
    },
    /**
     * This method will be called when the timeout is dismissed via timeout
     */
    onDismissViaTimeout() {
      this.clearTimeout();
      if (this.timer) {
        this.timer.stop();
        this.timer = undefined;
      }
      this.setupTimer();

      this.$router.push('/');
    },
    /**
     * Will setup the timer based on value in helios.config
     * Will also increment a remaining data point that can be used to display a counter
     */
    setupTimer() {
      // Clear out any existing counters
      this.clearTimeout();
      // Remove the event listens if a timer exists already.
      if (this.timer) {
        this.timer.stop();
      }

      // Set how long until timeout
      const timeUntilTimeout = parseInt(config.getItem('timeout.timeUntilAppear'), 10);

      // Add our own customEvent to allow for more fine control of the timeout.
      const awayOpts = {
        events:
          'customAwayEvent mousemove keydown DOMMouseScroll mousewheel mousedown touchstart touchmove',
      };

      // If a timer does not exist, then create one
      if (!this.timer) {
        this.timer = away(timeUntilTimeout, awayOpts);
      }

      this.timer.on('idle', () => {
        // open the timeout modal
        this.timedout = true;

        // Set the base value for the timeout screen countdown
        this.remaining =
          parseInt(config.getItem('timeout.timeUntilDismiss'), 10) / 1000;

        // Call action when timeout should dismiss
        this.timeoutDismiss = setTimeout(() => {
          this.onDismissViaTimeout();
        }, parseInt(config.getItem('timeout.timeUntilDismiss'), 10));

        // Count down the timeout screen
        this.countDownInterval = setInterval(() => {
          this.remaining -= 1;
        }, 1000);
      });

      this.timer.on('active', () => {
        // Disabled as we only want to close on specific user actions
        // Close the timeout modal and stop counters
        this.onDismissViaInteraction();
      });
    },

    /**
     * Clears all data relevant to the timeout component
     */
    clearTimeout() {
      // Change this.timedout after the current event processes
      // This and the event stops on the outer component
      // will prevent clicks/touches from being sent through the timeout component
      setTimeout(() => {
        this.timedout = false;
      });

      clearInterval(this.countDownInterval);
      clearTimeout(this.timeoutDismiss);
    },

  },
};
</script>

<style scoped>
.timeout-container {
  position: fixed;
  top: 0;
  left: 0;
  padding: 3em;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  box-shadow: 0px 0px 5px 5px rgba(0,0,0,0.25);
  font-family: Montserrat, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.timeout-card {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 10em 0;
  box-sizing: border-box;
  box-shadow: 0px 0px 5px 5px rgba(0,0,0,0.25);
  background-color: #57c2b2;
  font-family: Montserrat, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.timeout-card .text {
  color: #222324;
  font-size: 5em;
  font-weight: normal;
}
.timeout-card .timer {
  color: #222324;
  font-size: 7em;
  font-weight: normal;
}
</style>
