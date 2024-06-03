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
    <template #employee-data="{row}">
      <UAvatarGroup size="sm" :max="2">
        <UTooltip text="Howard Smith">
        <UAvatar
          src="https://avatars.githubusercontent.com/u/739984?v=4"
          alt="[Person's name JS variable]"
        />
        </UTooltip>
        <UTooltip text="Jake Tenner">
        <UAvatar
          src="https://avatars.githubusercontent.com/u/904724?v=4"
          alt="Atinux"
        />
        </UTooltip>
        <UTooltip text="Chris Cole">
        <UAvatar
          src="https://avatars.githubusercontent.com/u/7547335?v=4"
          alt="smarroufin"
        />
        </UTooltip>
      </UAvatarGroup>
    </template>
    <template #status-data="{row}">
      <USelectMenu v-model="selected" :options="status" placeholder="Select status" />
    </template> 
  </UTable>
    


</template>
  



