// Vue component for loading minimal fonts with webfontloader

// Recommend using https://transfonter.org/ for converting fonts into an easily importable format.

<template>
</template>

<script>
// https://github.com/typekit/webfontloader
import WebFontLoader from 'webfontloader';

export default {
  created() {
    WebFontLoader.load({
      custom: {
        // Use FVD notation to include families
        // Include Montserrat regular (n4, or 'normal') and 900 weight (n9)
        families: ['Montserrat:n4,n9'],
        // Path to stylesheet that defines font-face
        urls: ['/static/fonts/montserrat/stylesheet.css'],
      },
      active: this.setFontLoaded,
    });
  },
  methods: {
    setFontLoaded() {
      this.$emit('font-loaded');
    },
  },
};
</script>