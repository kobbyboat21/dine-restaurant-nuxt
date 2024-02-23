
<script lang="ts" setup>
import { 
  Chart as ChartJS, 
  Title, 
  Tooltip, 
  Legend, 
  BarElement, 
  CategoryScale, 
  LinearScale 
} from 'chart.js'

import { Bar } from 'vue-chartjs'

ChartJS.register(
  Title, 
  Tooltip, 
  BarElement, 
  CategoryScale, 
  LinearScale
)

const data = {

  labels: [
    'Meal 1',
    'Meal 2',
    'Meal 3',
  ],
  datasets: [ 
    { 

      backgroundColor: '#9BD0F5',
      data: [40, 20, 12],
    
    }
  ]
}

const options = {
  responsive: true,
}

</script>

<template>
  <Bar :data="data" :options="options" />
</template>
