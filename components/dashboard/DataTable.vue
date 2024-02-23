<script setup>

defineProps({
  menu: String,
  columns: String,
})
</script>


<template>
  <!-- right now it's checking if here's a matching item label to the string "meal" not the meal prop/variable - no quotes ('') needed for variables 

  > you don't have any source for the items data, that's for the Tabs which aren't included in this component

    so this component should be only <UTable> and you'll make another component with the different Tabs;
 => <DashboardTables> which will have Tabs with the 3 Menu Tables in that using this <DataTable> component-->
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
    <template #edit-data>
      <UButton 
        icon="i-heroicons-pencil-square"
        size="sm"
        color="black"
        variant="ghost" />
    </template>
    <template #delete-data>
      <UButton 
        icon="i-heroicons-trash"
        size="sm"
        color="black"
        variant="ghost" />
    </template>
    </UTable>
      
</template>


