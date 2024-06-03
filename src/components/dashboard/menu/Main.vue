<script setup>
const tabs = [{
  label: 'Breakfast',
  content: 'This is the Breakfast Menu'
}, {
  label: 'Lunch',
  content: 'This is the Lunch Menu'
}, {
  label: 'Dinner',
  content: 'This is the Dinner Menu'
}]

const breakfastStore = useBreakfastStore()
let { breakfast_meals } = breakfastStore
let { getBreakfast } = breakfastStore

console.log("Breakfast List:")
console.log(breakfast_meals)

const isOpen = ref(false)
import { useNuxtApp } from '#app'
const {$viewport} = useNuxtApp()
</script>


<template>
  <div>
  <div class="grid grid-cols-1 sm:grid-cols-3 my-5">
      <DashboardMenuStatusCard class="my-3 sm:my-0" type1="Eggs Benedict Trio" type2="Savoury French Toast" meal="Breakfast" data-aos="fade-right"/>
      <DashboardMenuStatusCard class="my-3 sm:my-0" type1="Seared Ahi Tuna Sandwich" type2="Club Sandwich Special" meal="Lunch" data-aos="fade-down"/>
      <DashboardMenuStatusCard type1="Fillet Mignon with Red Wine Reduction" type2="Lobster Ravioli with Saffron Cream Sauce" meal="Dinner" data-aos="fade-left"/>
  </div>
  <div v-if="$viewport.isLessThan('tablet')" class="hidden my-5">
      <DashboardMenuChartCard type="Avocado Toast with Smoked Salmon" meal="Breakfast" data-aos="fade-right"/>
      <DashboardMenuChartCard type="Mushroom and Truffle Risotto" meal="Lunch" data-aos="fade-down"/>
      <DashboardMenuChartCard type="Lobster Ravioli with Saffron Cream Sauce" meal="Dinner" data-aos="fade-left"/>
  </div>
  <div v-else class="visible grid grid-cols-3 my-5">
      <DashboardMenuChartCard type="Avocado Toast with Smoked Salmon" meal="Breakfast" data-aos="fade-right"/>
      <DashboardMenuChartCard type="Mushroom and Truffle Risotto" meal="Lunch" data-aos="fade-down"/>
      <DashboardMenuChartCard type="Lobster Ravioli with Saffron Cream Sauce" meal="Dinner" data-aos="fade-left"/>
  </div>
     <UTabs :items="tabs" :default-index="0" class="w-full" data-aos="flip-up">
      <template #item="{item}">
        <div v-if="item.label === 'Breakfast'">
          <DashboardMenuBreakfastDataTable />
        </div>

        <div v-if="item.label === 'Lunch'">
          <DashboardMenuLunchDataTable />
        </div>

        <div v-if="item.label === 'Dinner'">
          <DashboardMenuDinnerDataTable />
        </div>
      </template>
    </UTabs>
  </div>
</template>

