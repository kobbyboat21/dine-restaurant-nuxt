<script setup>

const cards = [{
  label: 'Today'
}, {    
  label: 'This Week'
  }
]

</script>


<template>

<UTabs :items="cards" :default-index="0" class="w-full">
  <template #item="{item}">
    <div v-if="item.label === 'Today'">
      <DashboardUtilsChartsLine class="mt-2"/>
    </div>
    <div v-if="item.label === 'This Week'">
      <DashboardUtilsChartsLine class="mt-2" />
    </div>
  </template>
</UTabs>

</template>
