<script setup lang="ts">
const toast = useToast()


const hello=()=> {
  // toast.add({title:"Hello World!"})
  console.log("Hello ")
  useToast().add({title: "hello"})
  console.log("world")
}

</script>

<template>
  <UButton label="Show toast" @click="hello" />
</template>
