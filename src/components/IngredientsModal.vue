<script setup>
const isOpen = ref(false)
</script>

<template>
  <div>
    <UButton @click="isOpen = true" icon="i-heroicons-arrow-top-right-on-square"
        size="sm"
        color="black"
        variant="ghost" />

    <UModal v-model="isOpen">
      <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <h1 class="text-lg text-center font-extrabold">🥘 Ingredients</h1>
        </template>

        <slot></slot>

        <template #footer>
        </template>
      </UCard>
    </UModal>
  </div>
</template>


