<script setup>

let isOpen = ref(false)

const dinnerStore = useDinnerStore()
const { deleteDinner } = dinnerStore
const { dinner_meals } = dinnerStore

const props = defineProps(['mealitem'])

const meal = JSON.parse(JSON.stringify(dinner_meals.find((stored_meal) => stored_meal.id === props.mealitem.id) ?? null))

function remove(){
  deleteDinner(meal)
} 

</script>

<template>

  <div>
     <UButton @click="isOpen = true" 
        icon="i-heroicons-trash"
        size="sm"
        color="red"
        variant="ghost" />

    <UModal v-model="isOpen">
      <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <h1 class="text-lg text-center font-extrabold"> Delete Meal </h1>
        </template>
        <UForm class="space-y-4" @submit="remove">
        <p> Do you want to delete this meal? The action cannot be undone </p>

        <UButton type="submit" @click="isOpen = false">
          Delete
        </UButton> <!-- on submit, run update function -->

        </UForm>
      </UCard>
    </UModal>

  </div>



</template>
