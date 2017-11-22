// This timeout component can be included on any page that you wish to have timeout functionality

<template>
  <div class="timeout-container" v-if="timedout">
    <h2>{{ timeoutCTA }}</h2>
    <h1>{{ remaining }}</h1>
    <h2>{{ timeoutContinue }}</h2>
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
    this.setupTimer();
  },
  beforeDestroy() {
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
      this.timedout = false;

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
  width: 100vw;
  height: 100vh;
  background-color: #222324;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.timeout-container h2 {
  color: #b9c1bd;
}
.timeout-container h1 {
  color: #57c2b2;
}
</style>
