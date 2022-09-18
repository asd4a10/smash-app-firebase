<template>
  <teleport to="body">
    <div class="d-flex flex-column justify-content-center loader">
      <div class="d-flex justify-content-center">
        <div class="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div></div
  ></teleport>
</template>

<script>
import { reactive } from "vue";

const state = reactive({ seconds: 0 });
</script>

<style scoped>
.loader {
  position: fixed;
  background-color: rgb(177, 47, 47);
  opacity: 0.5;
  z-index: 10;
  height: 100%;
  width: 100%;
}
.lds-ripple {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid rgb(255, 255, 255);
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  4.9% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  5% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}
</style>
