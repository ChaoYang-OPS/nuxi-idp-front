<script setup lang="ts">

const colorMode = useColorMode()
console.log(colorMode)
const selected = ref(false)
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Must be at least 8 characters')
})

type Schema = z.output<typeof schema>

const state = reactive({
  email: undefined,
  password: undefined
})

async function onSubmit (event: FormSubmitEvent<Schema>) {
  // Do something with data
  console.log(event.data)
}

const countries = ['United States', 'Canada', 'Mexico']

const country = ref(countries[0])

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
      <UCheckbox v-model="selected" name="notifications" label="Notifications" />
      <UChip>
        <UButton icon="i-heroicons-inbox" color="gray" />
      </UChip>

      <UContainer>
        <UChip inset>
          <UAvatar
              src="https://avatars.githubusercontent.com/u/26598793?v=4"
              alt="Avatar"
          />
        </UChip>
      </UContainer>
      <UDivider label="OR" />
      <UDivider icon="i-simple-icons-github" />

      <UDivider
          :avatar="{ src: 'https://avatars.githubusercontent.com/u/26598793?v=4' }"
      />
      <UDivider
          label="Nuxt UI"
          :ui="{ label: 'text-primary-500 dark:text-primary-400' }"
      />
      <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
        <UFormGroup label="Email" name="email">
          <UInput v-model="state.email" />
        </UFormGroup>

        <UFormGroup label="Password" name="password">
          <UInput v-model="state.password" type="password" />
        </UFormGroup>

        <UButton type="submit">
          Submit
        </UButton>
      </UForm>
    </div>
    <UFormGroup label="Email" required>
      <UInput placeholder="you@example.com" icon="i-heroicons-envelope" />
    </UFormGroup>
    <UFormGroup label="Email" description="We'll only use this for spam.">
      <UInput placeholder="you@example.com" icon="i-heroicons-envelope" />
    </UFormGroup>
    <UFormGroup
        label="Email"
        help="We will never share your email with anyone else."
    >
      <UInput placeholder="you@example.com" icon="i-heroicons-envelope" />
    </UFormGroup>
    <UFormGroup>
      <template #label>
        <UAvatar
            src="https://avatars.githubusercontent.com/u/26598793?v=4"
            size="3xs"
        />
      </template>
      <template #default>
        <UInput model-value="ChaoYang-Ops" placeholder="you@example.com" />
      </template>
    </UFormGroup>
    <USelect
        icon="i-heroicons-magnifying-glass-20-solid"
        color="white"
        size="sm"
        :options="['United States', 'Canada', 'Mexico']"
        placeholder="Search..."
    />
  </header>
</template>