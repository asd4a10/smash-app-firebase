<script setup>
import { RouterView } from "vue-router";
import Header from "@/components/Header.vue";
</script>

<template>
  <Header class="custom-header" />
  <RouterView />
</template>

<style scoped>
.custom-header {
  margin-bottom: 5%;
}
</style>
