<template>
  <div class="loading-container">
    <div class="thecube">
      <div class="cube c1" />
      <div class="cube c2" />
      <div class="cube c4" />
      <div class="cube c3" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
  .loading-container {
    background: rgba(0,0,0,0.75);
    height: 100vh;
    width: 100vw;
    position: fixed;s
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .thecube {
    width: 25vw;
    height: 25vw;
    margin: 0 auto;
    position: relative;
    -webkit-transform: rotateZ(45deg);
    transform: rotateZ(45deg);
  }

  .cube {
    position: relative;
    -webkit-transform: rotateZ(45deg);
    transform: rotateZ(45deg);
  }

  .cube {
    float: left;
    width: 50%;
    height: 50%;
    position: relative;
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }

  .cube:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #57c2b2;
    -webkit-animation: foldthecube 2s infinite linear both;
    animation: foldthecube 2s infinite linear both;
    -webkit-transform-origin: 100% 100%;
    -ms-transform-origin: 100% 100%;
    transform-origin: 100% 100%;
  }

  .c2 {
    -webkit-transform: scale(1.1) rotateZ(90deg);
    transform: scale(1.1) rotateZ(90deg);
  }

  .c3 {
    -webkit-transform: scale(1.1) rotateZ(180deg);
    transform: scale(1.1) rotateZ(180deg);
  }

  .c4 {
    -webkit-transform: scale(1.1) rotateZ(270deg);
    transform: scale(1.1) rotateZ(270deg);
  }

  .c2:before {
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
  }

  .c3:before {
    -webkit-animation-delay: 0.6s;
    animation-delay: 0.6s;
  }

  .c4:before {
    -webkit-animation-delay: 0.9s;
    animation-delay: 0.9s;
  }

  @keyframes foldthecube {
    0%, 10% {
      -webkit-transform: perspective(50vw) rotateX(-180deg);
      transform: perspective(50vw) rotateX(-180deg);
      opacity: 0;
    }

    25%,
    75% {
      -webkit-transform: perspective(50vw) rotateX(0deg);
      transform: perspective(50vw) rotateX(0deg);
      opacity: 1;
    }

    90%,
    100% {
      -webkit-transform: perspective(50vw) rotateY(180deg);
      transform: perspective(50vw) rotateY(180deg);
      opacity: 0;
    }
  }
</style>
