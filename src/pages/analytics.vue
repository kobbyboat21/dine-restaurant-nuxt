<script setup lang='ts'>

const tabs_time_period = [
  {label: 'Today', value: 'daily'},
  {label: 'This Week', value: 'weekly'},
  ]

const handleTabChange = (index) => {
  time_period = tabs_time_period[index].value;
  console.log("TIME PERIOD: ", time_period)
  fetch_order_status_cards(time_period);
};

definePageMeta({
  auth: false
})
</script>


<template>
<!---
<div id="tabs" full width (w-full)>
  <tabs>
</div>

<div id="line charts" full width> 
  <line chart>
  <line chart>
</div>

<div id="bottommmmm_row" grid-col-12>
    <div id="status_cards" col-span-3>
      <status card full width>
      <status card full width>
    </div>

    <div id="middle chart" col-span-6>
      <pie chart>
    </div>

    <div id="list" col-span-6>
      <top 5 ordered meals list>
    </div>

</div>
-->

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
      </template>
    </UTabs>

  <div class="grid grid-cols-1 sm:grid-cols-2 my-5 ">
    <DashboardUtilsCardsChart value=19 icon="i-heroicons-rectangle-stack" type="Tasks" data-aos="fade-right"/>
    <DashboardUtilsCardsChart class="my-3 sm:my-0" value=12 icon="i-heroicons-book-open" type="Bookings" data-aos="fade-down"/>
  </div> 
  <div class="grid grid-cols-1 sm:grid-cols-3 my-5 ">
    <div>
      <!-- <DashboardStatusCard  -->
      <!--   class="my-3 sm:my-4 h-[45%]" -->
      <!--   value=34 icon="i-heroicons-rectangle-stack"  -->
      <!--   type="Tasks" data-aos="fade-right" -->
      <!-- /> -->
      <DashboardUtilsCardsRevenue/>
      <DashboardStatusCard 
        class="my-3 sm:my-0 h-[45%]" 
        value=29 icon="i-heroicons-book-open" 
        type="Bookings" data-aos="fade-down"/>
    </div>
    <UCard class="mx-3 text-center" data-aos="flip-right">
      <p> Total Resevations </p>
      <DashboardUtilsChartsPie/>
    </UCard>
    <DashboardUtilsCardsMostOrdered/>
  </div> 
  
  </div>
</template>
