<template>
  <div class="app-keyboard-container" ref="keyboard">
  </div>
</template>

<script>
import '@helios-interactive/okey/dist/@helios-interactive/okey.min';

export default {
  updated() {
    if (this.$refs.keyboard) {
      this.$refs.keyboard.innerHTML = '';
      // eslint-disable-next-line
      new window.Keyboard(
        document.querySelectorAll('input:not([type=checkbox])'),
        this.$refs.keyboard,
      );
    }
  },
  mounted() {
    global.Keyboard.layout = {
      _upper: [
        [
          { label: 'Q', symbol: 'Q' },
          { label: 'W', symbol: 'W' },
          { label: 'E', symbol: 'E' },
          { label: 'R', symbol: 'R' },
          { label: 'T', symbol: 'T' },
          { label: 'Y', symbol: 'Y' },
          { label: 'U', symbol: 'U' },
          { label: 'I', symbol: 'I' },
          { label: 'O', symbol: 'O' },
          { label: 'P', symbol: 'P' },
          { label: '', symbol: ':' },
          { label: '', symbol: ';' },
          { label: '', symbol: '(' },
          { label: '', symbol: ')' },
          { label: '', symbol: '7' },
          { label: '', symbol: '8' },
          { label: '', symbol: '9' },
          { label: '\u21E6', symbol: 'backspace' },
        ],
        [
          { label: 'A', symbol: 'A' },
          { label: 'S', symbol: 'S' },
          { label: 'D', symbol: 'D' },
          { label: 'F', symbol: 'F' },
          { label: 'G', symbol: 'G' },
          { label: 'H', symbol: 'H' },
          { label: 'J', symbol: 'J' },
          { label: 'K', symbol: 'K' },
          { label: 'L', symbol: 'L' },
          { label: '', symbol: '%' },
          { label: '', symbol: '~' },
          { label: '', symbol: '`' },
          { label: '', symbol: '|' },
          { label: '', symbol: '3' },
          { label: '', symbol: '4' },
          { label: '', symbol: '5' },
          { label: '', symbol: '6' },
        ],
        [
          { symbol: 'toggle_default', label: '⇩' },
          { label: 'Z', symbol: 'Z' },
          { label: 'X', symbol: 'X' },
          { label: 'C', symbol: 'C' },
          { label: 'V', symbol: 'V' },
          { label: 'B', symbol: 'B' },
          { label: 'N', symbol: 'N' },
          { label: 'M', symbol: 'M' },
          { symbol: ' ', label: ' ' },
          { label: '', symbol: ',' },
          { label: '', symbol: '.' },
          { label: '', symbol: '"' },
          { label: '', symbol: '!' },
          { label: '', symbol: '0' },
          { label: '', symbol: '1' },
          { label: '', symbol: '2' },
          { label: '', symbol: '?' },
        ],
      ],
      _default: [
        [
          { label: 'q', symbol: 'q' },
          { label: 'w', symbol: 'w' },
          { label: 'e', symbol: 'e' },
          { label: 'r', symbol: 'r' },
          { label: 't', symbol: 't' },
          { label: 'y', symbol: 'y' },
          { label: 'u', symbol: 'u' },
          { label: 'i', symbol: 'i' },
          { label: 'o', symbol: 'o' },
          { label: 'p', symbol: 'p' },
          { label: '', symbol: '@' },
          { label: '', symbol: '#' },
          { label: '', symbol: '$' },
          { label: '', symbol: '&' },
          { label: '', symbol: '7' },
          { label: '', symbol: '8' },
          { label: '', symbol: '9' },
          { label: '\u21E6', symbol: 'backspace' },
        ],
        [
          { label: 'a', symbol: 'a' },
          { label: 's', symbol: 's' },
          { label: 'd', symbol: 'd' },
          { label: 'f', symbol: 'f' },
          { label: 'g', symbol: 'g' },
          { label: 'h', symbol: 'h' },
          { label: 'j', symbol: 'j' },
          { label: 'k', symbol: 'k' },
          { label: 'l', symbol: 'l' },
          { label: '', symbol: '_' },
          { label: '', symbol: '-' },
          { label: '', symbol: '+' },
          { label: '', symbol: '/' },
          { label: '', symbol: '3' },
          { label: '', symbol: '4' },
          { label: '', symbol: '5' },
          { label: '', symbol: '6' },
        ],
        [
          { symbol: 'toggle_upper', label: '⇧' },
          { label: 'z', symbol: 'z' },
          { label: 'x', symbol: 'x' },
          { label: 'c', symbol: 'c' },
          { label: 'v', symbol: 'v' },
          { label: 'b', symbol: 'b' },
          { label: 'n', symbol: 'n' },
          { label: 'm', symbol: 'm' },
          { symbol: ' ', label: ' ' },
          { label: '', symbol: ',' },
          { label: '', symbol: '.' },
          { label: '', symbol: '"' },
          { label: '', symbol: '!' },
          { label: '', symbol: '0' },
          { label: '', symbol: '1' },
          { label: '', symbol: '2' },
          { label: '', symbol: '?' },
        ],
      ],
    };

    if (this.$refs.keyboard) {
      this.$refs.keyboard.innerHTML = '';
      // eslint-disable-next-line
      new window.Keyboard(
        document.querySelectorAll('input:not([type=checkbox])'),
        this.$refs.keyboard,
      );
    }
  },
};
</script>

// This first style block is a customized version of okey css.
// It makes a few changes.
// * Okey will scale based on browser size
// * Space buttons will be twice as wide as other buttons
// * There is a variable(--max-keys-across) at the top that helps to control scaling.
//   Ensure it is set to the length of the maximum keys in a row.
// * Even with styling updates, the keyboard looks a bit rough in portrait mode.
//   Remove keys if using portrait mode
<style>
/* Start OKEY CSS */
.keyboard-container {
  --max-keys-across: 18;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background: #000000;
  color: #FFFFFF;
  font-family: sans-serif;
  /* fallback font-size */
  font-size: 26px;
  padding: calc((80vw / var(--max-keys-across))/2) calc((80vw / var(--max-keys-across))/2);
  box-sizing: border-box;

  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
.keyboard-container-hidden {
  padding: 0;
}
.keyboard-row {
  text-align: center;
}
.keyboard-key {
  width: calc(80vw / var(--max-keys-across));
  height: calc(80vw / var(--max-keys-across));
  line-height: calc(80vw / var(--max-keys-across));
  text-align: center;
  /* Margin will equate to 4px on 1920 x 1080 */
  margin: calc(100vw * 0.002);
  display: inline-block;
  background: #636363;
  transition: background 100ms ease;
}
.keyboard-key.active {
  background: #777777;
}
.keyboard-close-button {
  position: absolute;
  top: 0;
  right: 0;
  padding: 24px 24px;
  box-sizing: border-box;
  text-align: right;
  color: #676767;
  line-height: 1;
}
/* End OKEY CSS */

/* Space button will appear twice as wide as other keys */
.keyboard-key[data-symbol=' '] {
  /* Double width key, accounting for margin */
  width: calc((80vw / var(--max-keys-across)) * 2 + (100vw * 0.002 * 2));
}

@media (orientation: landscape) {
.keyboard-container {
  font-size: calc(26/1920 * 100vw);
}
}
@media (orientation: portrait) {
.keyboard-container {
  font-size: calc(26/1080 * 100vh);
}
}
</style>