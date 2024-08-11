<script setup lang="ts">

const colorMode = useColorMode()
console.log(colorMode)
</script>

<template>
<!--  <Header class="flex justify-between py-3 py4">-->
<!--    <div class="flex gap-4">-->
<!--    </div>-->
<!--  </Header>-->
<!--  <header>SRE OPS IN Default </header>-->
  <header class="flex justify-between py-3 px-4">
    <div class="flex gap-4">
      <UButton color="primary" variant="solid" @click="colorMode.preference = 'light'">亮色</UButton>
      <UButton color="primary" variant="solid" @click="colorMode.preference = 'dark'">暗色</UButton>
      <UButton color="primary" variant="solid" @click="colorMode.preference = 'system'">系统</UButton>
    </div>
  </header>
</template>