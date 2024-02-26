<script setup>

let createMealModal = ref(false)

// Import Store, List & update function
const lunchStore = useLunchStore()
const { createLunchMeal } = lunchStore
const { lunch_meals } = lunchStore

// Define the props to pass through the row data from the Data Table
const meal = {
  id: 69,
  name: "gayerst",
  price: 5151,
  description: "homiexfadfasdf",
  ingredients: "2 niggas",
  section: "hell"
}

/*
*/
async function submit(){
  createLunchMeal(meal)
}

</script>

<template>

  <div>
    <UButton @click="createMealModal = true" 
        icon="i-heroicons-plus"
        color="gray"
        variant="solid"
        label="Create Meal"/>

    <UModal v-model="createMealModal">
      <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <h1 class="text-lg text-center font-extrabold"> Create Meal </h1>
        </template>
        <UForm class="space-y-4" @submit="submit">
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
          <UButton type="submit" @click="createMealModal = false">
            Submit
          </UButton>
        </UForm> 
      </UCard>
    </UModal>
  </div>
  
</template>

