<script setup>

let props = defineProps({
  type: String,
  meal: String,
  values: Array
})

</script>



<template>

<UCard class="mx-3 text-center">
    <div v-if="props.values.length > 0">
    <p class="font-bold text-l text-green-400">{{ meal }}</p>
      <p class="mt-2"> Most Ordered {{type}} </p>
      <p> Today </p>
    <DashboardUtilsChartsBar :values="props.values"/>
  </div>
  <div v-else>
    Loading...
  </div>
</UCard>

</template>



