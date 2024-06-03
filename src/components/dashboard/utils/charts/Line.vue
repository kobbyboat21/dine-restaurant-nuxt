<script lang="ts" setup>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
 } from 'chart.js'
import { Line } from 'vue-chartjs'


// Register required chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
)


// Create Chart Data
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      borderColor: '#36A2EB',
      backgroundColor: '#9BD0F5',
      tensions: 0.4,
      data: [40, 39, 10, 40, 39, 80, 40]
    }
  ]
}

const options = {
  responsive: true,
  maintainAspectRatio: true,
}
</script>

<template>
  <Line :data="data" :options="options" />
</template>
