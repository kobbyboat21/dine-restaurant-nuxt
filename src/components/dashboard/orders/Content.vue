<script setup>

const orderStore = useOrderStore()
const { getOrders, getUpcomingOrdersCount, getCompletedOrdersCount, getUpcomingOrders, getCompletedOrders, getMedianOrderValue, getMostPopularPlatform } = orderStore

const median_order_value = ref('')
const most_popular_platform = ref('')
const upcoming_orders = ref('')
const completed_orders = ref('')

let time_period = 'daily'

function formatDate(date) {
  return date.toISOString().slice(0, 10);
}

const fetch_order_status_cards = async (time_period) => {
  const today = new Date();
  const yesterday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1);
  const tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
  let start_date, end_date;

  switch (time_period) {
    case 'daily':
      start_date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
      end_date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 2);
      break;
    case 'weekly':
      const lastMonday = new Date(today);
      lastMonday.setDate(today.getDate() - (today.getDay() || 6) + 1); // Find last monday
      start_date = new Date(lastMonday.getFullYear(), lastMonday.getMonth(), lastMonday.getDate());
      end_date = new Date(start_date);
      end_date.setDate(end_date.getDate() + 7);
      break;
    case 'monthly':
      start_date = new Date(today.getFullYear(), today.getMonth(), 2);
      end_date = new Date(today.getFullYear(), today.getMonth() + 1, 2);
      break;
    case 'annual':
      start_date = new Date(today.getFullYear(), 0, 1);
      end_date = new Date(today.getFullYear(), 11, 31);
      break;
    default:
      start_date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
      end_date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 2);
      break;
  }

  start_date = formatDate(start_date)
  end_date = formatDate(end_date)
  // console.log('DAILY', start_date, end_date)

  median_order_value.value = await getMedianOrderValue(start_date, end_date);
  most_popular_platform.value = await getMostPopularPlatform(start_date, end_date);
  upcoming_orders.value = await getUpcomingOrdersCount(start_date, end_date);
  completed_orders.value = await getCompletedOrdersCount(start_date, end_date);
};

// Run on load
onMounted(async() => {
  await fetch_order_status_cards(time_period)
})

// Update display when data changes
watch([median_order_value, most_popular_platform, upcoming_orders, completed_orders], ([newMedianValue, newPlatform, newUpcoming, newCompleted]) => {
  if (newMedianValue && newPlatform && newUpcoming && newCompleted) {
    console.log('All data fetched successfully');
  } else {
    console.log('Data fetch failed.');
    fetch_order_status_cards(time_period)
  }
})

const tabs_time_period = [
  {label: 'Today', value: 'daily'},
  {label: 'This Week', value: 'weekly'},
  {label: 'This Month', value: 'monthly'},
]

const handleTabChange = (index) => {
  time_period = tabs_time_period[index].value;
  console.log("TIME PERIOD: ", time_period)
  fetch_order_status_cards(time_period);
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

  <div class="grid grid-cols-1 sm:grid-cols-2 my-5 " >
      <DashboardUtilsCardsStatus 
        class="my-3 sm:my-0" 
        :value=upcoming_orders 
        icon="i-material-symbols-package-2-outline" 
        type="Upcoming Orders" 
        data-aos="fade-right" 
      />
      <DashboardUtilsCardsStatus 
        :value=completed_orders 
        icon="i-material-symbols-package-2" 
        type="Completed Orders" 
        data-aos="fade-left"
      />
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 my-5 ">
      <DashboardUtilsCardsStatus
        class="my-3 sm:my-0" 
        :value=median_order_value 
        icon="i-teenyicons-money-stack-outline" 
        type="Median Order Value" 
        data-aos="fade-right" 
      />
      <DashboardUtilsCardsStatus 
        :value=most_popular_platform 
        icon="i-game-icons-platform" 
        type="Most Popular Platform" 
        data-aos="fade-left" 
      />
  </div>
  
    <DashboardOrdersDataTable />
  </div>
</template>

