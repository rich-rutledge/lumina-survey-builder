<script setup lang="ts">
import ContentComponent from './components/ContentComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import NavComponent from './components/NavComponent.vue'
</script>

<template>
  <div class="app-root bg-white flex w-screen h-screen">
    <NavComponent></NavComponent>
    <div class="flex flex-col flex-1">
      <HeaderComponent></HeaderComponent>
      <ContentComponent></ContentComponent>
    </div>
  </div>
</template>

<style scoped>
</style>
