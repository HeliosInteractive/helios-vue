// This timeout component can be included on any page that you wish to have timeout functionality

<template>
  <div class="time-out-container" v-if="timedout">
    <div class="timeout-card">
      <div @click="sendBack" class="timeout-close"></div>
      <div class="fullwidth t-center timeout-cta">{{ timeoutCTA }}</div>
        <div class="fullwidth t-center bold timeout-countdown">
          <div>00:{{ remaining > 9 ? remaining : `0${remaining}`}}</div>
        </div>
      <div @click.stop="sendBack" class="abbvie-btn yellow-btn timeout-button-continue">{{name ? `Continue as ${name}` : 'Continue'}}</div>
      <div @click.stop="sendHome" ref="restart" class="abbvie-btn timeout-button-restart">Start Over</div>
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
      timeoutDismiss: null,
      countDownInterval: null,
      remaining: parseInt(config.getItem('timeUntilTimeoutDismiss'), 10) / 1000,
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
      this.$router.push('/')
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
      let timeUntilTimeout = parseInt(config.getItem('timeUntilTimeout'), 10);

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
          parseInt(config.getItem('timeUntilTimeoutDismiss'), 10) / 1000;

        // Call action when timeout should dismiss
        this.timeoutDismiss = setTimeout(() => {
          this.timer.stop();
          this.onDismissViaTimeout();
        }, parseInt(config.getItem('timeUntilTimeoutDismiss'), 10));

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
.time-out-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: white;
  opacity: 0.97;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--darkblue);
  z-index: 2000;
}

.timeout-card {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
}

.timeout-button-restart {
  width: 40% !important;
  position: absolute;
  top: 1100px;
  border: 5px var(--purple) solid;
  background-color: white;
  color: var(--purple);
  z-index: 5000;
}
.timeout-button-continue {
  width: 50% !important;
  position: absolute;
  top: 800px;
  z-index: 5000;
}
.timeout-close {
  position: absolute;
  top: 35px;
  right: 35px;
  height: 60px;
  width: 60px;
  background-size: contain;
  background-image: url('/static/img/btn-close.png');
}
.timeout-countdown {
  font-size: 60px;
  position: absolute;
  top: 550px;
}
.timeout-not-me {
  font-size: 35px;
  position: absolute;
  top: 1000px;
}
.timeout-cta {
  font-size: 50px;
  position: absolute;
  top: 350px;

}
</style>
