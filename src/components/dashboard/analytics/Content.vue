<script setup lang='ts'>

const orderStore = useOrderStore()
const { getOrders, getCompletedOrdersCount, getCompletedOrders } = orderStore


const bookingStore = useBookingStore()
const { getBookings, getUpcomingBookingsCount } = bookingStore 


const upcoming_orders = ref('')
const upcoming_bookings = ref('')

let time_period = 'daily'

function formatDate(date) {
  return date.toISOString().slice(0, 10);
}


const fetch_status_cards = async (time_period, getCountFunction) => {
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

  start_date = formatDate(start_date);
  end_date = formatDate(end_date);

  const count = await getCountFunction(start_date, end_date);
  countRef.value = count;

  watch([count], ([newCount]) => {
    if (newCount) {
      console.log('Data fetched successfully');
    } else {
      console.log('Data fetch failed.');
      fetch_status_cards(time_period, getCountFunction);
    }
  });
};

const fetch_order_status_cards = async (time_period) => {
  fetch_status_cards(time_period, getUpcomingOrdersCount);
};

const fetch_booking_status_cards = async (time_period) => {
  fetch_status_cards(time_period, getUpcomingBookingsCount, upcoming_bookings);
};


const tabs_time_period = [
  { label: 'Today', value: 'daily' },
  { label: 'This Week', value: 'weekly' },
]

const handleTabChange = (index) => {
  time_period = tabs_time_period[index].value;
  console.log("TIME PERIOD: ", time_period)
  fetch_order_status_cards(time_period);
  fetch_booking_status_cards(time_period);
};

// definePageMeta({
//   auth: false
// });
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
    <DashboardUtilsCardsChart 
      value=19 icon="i-heroicons-rectangle-stack" 
      type="Orders" data-aos="fade-right"/>
    <DashboardUtilsCardsChart 
      class="my-3 sm:my-0" 
      value=12 icon="i-heroicons-book-open" 
      type="Bookings" data-aos="fade-down"/>
  </div> 
  <div class="grid grid-cols-1 sm:grid-cols-3 my-5 ">
    <div class="">
      <!-- <DashboardStatusCard  -->
      <!--   class="my-3 sm:my-4 h-[45%]" -->
      <!--   value=34 icon="i-heroicons-rectangle-stack"  -->
      <!--   type="Tasks" data-aos="fade-right" -->
      <!-- /> -->
      <DashboardUtilsCardsRevenue
        class="my-3 sm:my-4 sm:h-[30%]"
      />
      <DashboardUtilsCardsStatus 
        class="my-3 sm:my-4 sm:h-[30%]" 
        :value=upcoming_bookings 
        icon="i-material-symbols-book" 
        type="Upcoming Bookings" 
        data-aos="fade-right" 
      />
      <DashboardUtilsCardsStatus 
        class="my-3 sm:my-4 sm:h-[30%]" 
        :value=upcoming_orders 
        icon="i-material-symbols-package-2-outline" 
        type="Upcoming Orders"  
      />
    </div>
    <UCard class="mx-3 text-center" data-aos="flip-right">
      <p> Orders </p>
      <DashboardUtilsChartsPie/>
    </UCard>
    <UCard>
      <DashboardUtilsCardsMostOrdered/>
    </UCard>
  </div> 
  
  </div>
</template>
