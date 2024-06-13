<script setup lang='ts'>
  
const columns = [{
  key: 'id',
  label: 'ID'
}, {
  key: 'meal',
  label: 'Meal'
}, {
  key: 'units_ordered',
  label: 'Units Ordered'
}]

const rows = [{
    id:1,
    meal: 'French Toast',
    units_ordered: '40'
  },{
    id:2,
    meal: 'Chicken Teriyaki',
    units_ordered: '32'
  },{
    id:3,
    meal: 'Pink Salmon and Rice',
    units_ordered: '30'
  },{
    id:4,
    meal: 'Chia Fruit Parfait',
    units_ordered: '23'
  },{
    id:5,
    meal: 'Couscous and Steak',
    units_ordered: '20'
  }]

</script>

<template>
  
  <UCard class="mx-3 text-center">
  <p class="font-bold text-2xl text-green-400">
      <UIcon name="i-tabler-award-filled" dynamic/>
    Top 5 Most Ordered Meals
  </p>
    <UTable :columns="columns" :rows="rows" />
  </UCard>
</template>
