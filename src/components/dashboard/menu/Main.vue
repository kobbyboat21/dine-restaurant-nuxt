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

let time_period = ref('daily')
const tabs_time_period = [
  {label: 'Today', value: 'daily'},
  {label: 'This Week', value: 'weekly'},
  {label: 'This Month', value: 'monthly'},
]

const handleTabChange = (index) => {
  time_period.value = tabs_time_period[index].value;
  console.log("TIME PERIOD: ", time_period.value)
  // TODO: fetch_menu_status_cards(time_period.value);
  // TODO: fetch_menu_chart_cards(time_period.value);
};

</script>


<template>
  <div>
    <UTabs 
        :items="tabs_time_period" 
        :default-index="0" 
        class="w-full"
        @change="handleTabChange"
    >
      <template #item="{item}">
        <div v-if="item.label === 'Today'">
        </div>
        <div v-if="item.label === 'This Week'">
        </div>
        <div v-if="item.label === 'This Month'">
        </div>
      </template>
    </UTabs>

    <div class="grid grid-cols-1 sm:grid-cols-3 my-5">



      <DashboardUtilsCardsStatus 
        class="my-3 sm:my-0" 
        value="Eggs Benedict Trio"  
        type="Most Ordered Breakfast" 
        icon="i-bx-bxs-baguette"
        data-aos="fade-down"
      />
      <DashboardUtilsCardsStatus 
        class="my-3 sm:my-0" 
        value="Seared Ahi Tuna Sandwich"  
        type="Most Ordered Lunch" 
        icon="i-bx-bxs-bowl-rice"
        data-aos="fade-down"
      />
      <DashboardUtilsCardsStatus 
        class="my-3 sm:my-0" 
        value="Lobster Ravioli"  
        type="Most Ordered Dinner" 
        icon="i-bx-bxs-bowl-hot"
        data-aos="fade-down"
      />
      <!-- <DashboardMenuStatusCard class="my-3 sm:my-0" type1="Eggs Benedict Trio" type2="Savoury French Toast" meal="Breakfast" data-aos="fade-right"/> -->
      <!-- <DashboardMenuStatusCard class="my-3 sm:my-0" type1="Seared Ahi Tuna Sandwich" type2="Club Sandwich Special" meal="Lunch" data-aos="fade-down"/> -->
      <!-- <DashboardMenuStatusCard type1="Fillet Mignon with Red Wine Reduction" type2="Lobster Ravioli with Saffron Cream Sauce" meal="Dinner" data-aos="fade-left"/> -->
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
