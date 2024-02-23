<script setup>

defineProps({
  icon: String,
  value: Number,
  type: String
})

</script>



<template>

<UCard class="mx-3 text-center">
  <p class="font-bold text-xl text-green-400">
    <UIcon :name="icon" class="bg-green-400"/>
        {{value}}</p>
  <p>Completed {{ type }}</p>
  <DashboardChartComponent class="mt-3"/>
</UCard>

</template>



