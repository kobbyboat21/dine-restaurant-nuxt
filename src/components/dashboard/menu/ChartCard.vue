<script setup>

defineProps({
  type: String,
  meal: String
})

</script>



<template>

<UCard class="mx-3 text-center">
  <p class="font-bold text-l text-green-400">{{ type }}</p>
    <p class="mt-2"> Most Ordered {{meal}} Meal </p>
    <p> This Year </p>
  <DashboardUtilsChartsBar/>
</UCard>

</template>



