<script lang="ts" setup>
import { 
  Chart as ChartJS, 
  ArcElement, 
  Tooltip, 
  Legend 
} from 'chart.js'

import { Pie } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

const options = {
  responsive: true,
}

const data = {
  labels: ['Breakfast', 'Lunch', 'Dinner'],
  datasets: [
    {
      backgroundColor: ['#41B883', '#E46651', '#00D8FF'],
      data: [40, 20, 80]
    }
  ]
}

</script>



<template>
  <Pie :data="data" :options="options" />
</template>
