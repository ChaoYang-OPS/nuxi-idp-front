<script setup lang="ts">
// const toast = useToast()


const hello=()=> {
  // toast.add({title:"Hello World!"})
  console.log("Hello ")
  useToast().add({title: "登录成功"})
  console.log("world")
}

</script>

<template>
  <UButton label="Show toast" @click="hello" />
  <UIcon name="i-heroicons-moon" class="text-4xl"></UIcon>
  <UIcon name="i-solar-ghost-smile-linear" class="text-4xl"></UIcon>
  <UIcon name="i-ri-wechat-fill" class="text-4xl"></UIcon>
</template>
