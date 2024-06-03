<script setup>

defineProps({
  menu: Array,
  columns: String,
})

const breakfastStore = useBreakfastStore()
let { breakfast_meals } = breakfastStore

// get data on page load
</script>


<template>
  <!-- BUTTON -->   
    <DashboardMenuBreakfastModalsCreate/> 
    <UTable :columns="columns" :rows='breakfast_meals' :sort="{ column: 'title' }" >
    <template #description-data="{row}">
        <div class="whitespace-normal overflow-visible w-52">
          {{row.description}}
        </div>
    </template>
    <template #ingredients-data="{row}">
          <IngredientsModal>
          {{row.ingredients}}
          </IngredientsModal>
    </template>
      <template #image-data="{row}">
      <UTooltip :text="row.name" :popper="{ arrow: true }">
        <UAvatar :src="row.image"
            size="lg"
            alt="Avatar"
          />
      </UTooltip>
      </template>
    <template #edit-data="{row}">
      <DashboardMenuBreakfastModalsEdit :mealitem="row" /> 
    </template>
    <template #delete-data="{row}">
      <DashboardMenuBreakfastModalsDelete :mealitem="row" />
    </template>
    </UTable>
      
</template>


