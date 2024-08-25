<script setup lang="ts">
// const toast = useToast()


const hello=()=> {
  // toast.add({title:"Hello World!"})
  useToast().add({title: "登录成功"})
}

const people = [{
  id: 1,
  name: 'Lindsay Walton',
  title: 'Front-end Developer',
  email: 'lindsay.walton@example.com',
  role: 'Member'
}, {
  id: 2,
  name: 'Courtney Henry',
  title: 'Designer',
  email: 'courtney.henry@example.com',
  role: 'Admin'
}, {
  id: 3,
  name: 'Tom Cook',
  title: 'Director of Product',
  email: 'tom.cook@example.com',
  role: 'Member'
}, {
  id: 4,
  name: 'Whitney Francis',
  title: 'Copywriter',
  email: 'whitney.francis@example.com',
  role: 'Admin'
}, {
  id: 5,
  name: 'Leonard Krasner',
  title: 'Senior Designer',
  email: 'leonard.krasner@example.com',
  role: 'Owner'
}, {
  id: 6,
  name: 'Floyd Miles',
  title: 'Principal Designer',
  email: 'floyd.miles@example.com',
  role: 'Member'
}]


const links = [{
  label: 'Home',
  icon: 'i-heroicons-home',
  to: '/'
}, {
  label: 'Navigation',
  icon: 'i-heroicons-square-3-stack-3d'
}, {
  label: 'Breadcrumb',
  icon: 'i-heroicons-link'
}]

</script>

<template>
  <UButton label="Show toast" @click="hello" />
  <UIcon name="i-heroicons-moon" class="text-4xl"></UIcon>
  <UIcon name="i-solar-ghost-smile-linear" class="text-4xl"></UIcon>
  <UIcon name="i-ri-wechat-fill" class="text-4xl"></UIcon>
  <div class="flex items-center space-x-4">
    <USkeleton class="h-12 w-12" :ui="{ rounded: 'rounded-full' }" />
    <div class="space-y-2">
      <USkeleton class="h-4 w-[250px]" />
      <USkeleton class="h-4 w-[200px]" />
    </div>
  </div>
  <UTable :rows="people" />
  <UTooltip>
    <template #text>
      <span class="italic">Hello World!</span>
    </template>
  </UTooltip>
  <UBreadcrumb :links="links" />
</template>
