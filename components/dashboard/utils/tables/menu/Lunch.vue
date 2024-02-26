<script setup>

defineProps({
  menu: String,
  columns: String,
})

</script>


<template>
    <DashboardMenuLunchModalsCreate/>
    <UTable :columns="columns" :rows= 'menu' :sort="{ column: 'title' }" >
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
      <DashboardMenuLunchModalsEdit :mealitem="row" /> 
    </template>
    <template #delete-data="{row}">
      <DashboardMenuLunchModalsDelete :mealitem="row" />
    </template>
    </UTable>
      
</template>


