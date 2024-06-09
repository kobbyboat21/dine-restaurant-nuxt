<script setup>
defineProps({
  menu: String,
  mobile_columns: String,
})

</script>

<template>
    <UTable :columns="mobile_columns" :rows= 'menu' :sort="{ column: 'title' }" >
      <template #edit-data>
        <EditModal :mealitem="row" /> 
      </template>
    </UTable>
</template>

