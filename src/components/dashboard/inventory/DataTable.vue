<script setup>

defineProps({
  tasks: String,
  columns: String,
})
const status = ['Not Started', 'In Progress', 'Completed']
const selected = ref([status[0]])
</script>


<template>
  
  <UTable :columns="columns" :rows= 'tasks' :sort="{ column: 'title'}">
    <template #edit-data>
      <UButton 
        icon="i-heroicons-pencil-square"
        size="sm"
        color="blue"
        variant="ghost" />
    </template>
    <template #delete-data>
      <UButton 
        icon="i-heroicons-trash"
        size="sm"
        color="red"
        variant="ghost" />
    </template>
  </UTable>
    


</template>
  



