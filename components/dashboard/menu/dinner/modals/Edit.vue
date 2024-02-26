<script setup>

let isOpen = ref(false)

// Import Store, List & update function
const dinnerStore = useDinnerStore()
const { editDinner } = dinnerStore
const { dinner_meals } = dinnerStore

// Define the props to pass through the row data from the Data Table
const props = defineProps(['mealitem'])

// Find the product from store using the row id  to match with the current product id
const meal = JSON.parse(JSON.stringify(dinner_meals.find((stored_meal) => stored_meal.id === props.mealitem.id) ?? null))

function edit() {
  editDinner(meal)
}

</script>

<template>

  <div>
    <UButton @click="isOpen = true" 
        icon="i-heroicons-pencil-square"
        size="sm"
        color="blue"
        variant="ghost" />

    <UModal v-model="isOpen">
      <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <h1 class="text-lg text-center font-extrabold"> Edit Meal </h1>
        </template>
        <UForm class="space-y-4" @submit="edit">
        <UFormGroup label="Name">
            <!-- v-model for each specific meal/product data; meal.name -->
            <UInput  v-model="meal.name"/>
          </UFormGroup>
          <UFormGroup label="Price">
            <UInput v-model="meal.price"/>
          </UFormGroup>
          <UFormGroup label="Description">
            <UInput v-model="meal.description"/>
          </UFormGroup>
          <UFormGroup label="Ingredients">
            <UInput v-model="meal.ingredients"/>
          </UFormGroup>
          <UFormGroup label="Section">
            <UInput v-model="meal.section"/>
          </UFormGroup>
          <UButton type="submit" @click="isOpen = false">
            Submit
          </UButton> <!-- on submit, run update function -->
        </UForm> 
      </UCard>
    </UModal>
  </div>
  
</template>

