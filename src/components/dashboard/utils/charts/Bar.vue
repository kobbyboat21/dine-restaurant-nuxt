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
import { reactive, watch, watchEffect } from 'vue'

ChartJS.register(
  Title,
  Tooltip,
  BarElement,
  CategoryScale,
  LinearScale
)

const props = defineProps({
  values: Array
})

console.log("[BAR CHART]: ",props.values)
const meal1_title = ref("Meal 1")
const meal1_data = ref(1)
const meal2_title = ref("Meal 2")
const meal2_data = ref(1)
const meal3_title = ref("Meal 3")
const meal3_data = ref(1)

const chartData = reactive({
  labels: [],
  datasets: []
})

const options = {
  responsive: true
}

watchEffect(() => {
  if (props.values && props.values.length > 0) {
    meal1_title.value = props.values[0]['_id']
    meal1_data.value = props.values[0]['count']
    meal2_title.value = props.values[1]['_id']
    meal2_data.value = props.values[1]['count']
    meal3_title.value = props.values[0]['_id']
    meal3_data.value = props.values[0]['count']

    chartData.labels = [meal1_title.value, meal2_title.value, meal3_title.value]
    chartData.datasets = [
      {
        backgroundColor: '#9BD0F5',
        data: [meal1_data.value, meal2_data.value, meal3_data.value],
      },
    ]
  } else {
    chartData.labels = []
    chartData.datasets = []
  }
})
</script>

<template>
    <Bar :data="chartData" :options="options" />
</template>

