<script setup>

const bookingStore = useBookingStore()
const { getBookings, getUpcomingBookingsCount, getCompletedBookingsCount, 
        getUpcomingBookings, getCompletedBookings, getCancelledBookingsCount, 
        getRemainingCapacityCount } = bookingStore

const upcoming_bookings = ref('')
const completed_bookings = ref('')
const cancelled_bookings = ref('')
const remaining_capacity = ref('')

let time_period = 'annual'

function formatDate(date) {
  return date.toISOString().slice(0, 10);
}

const fetch_booking_status_cards = async (time_period) => {
  const today = new Date();
  let start_date, end_date;

  switch (time_period) {
    case 'daily':
      start_date = new Date(today.getFullYear(), today.getMonth(), today.getDate());
      end_date = new Date(start_date);
      break;
    case 'weekly':
      const lastMonday = new Date(today);
      lastMonday.setDate(today.getDate() - (today.getDay() || 6) + 1); // Find last monday
      start_date = new Date(lastMonday.getFullYear(), lastMonday.getMonth(), lastMonday.getDate());
      end_date = new Date(start_date);
      end_date.setDate(end_date.getDate() + 6);
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
      start_date = new Date(today.getFullYear(), today.getMonth(), today.getDate());
      end_date = new Date(start_date);
      break;
  }

  start_date = formatDate(start_date)
  end_date = formatDate(end_date)

  upcoming_bookings.value = await getUpcomingBookingsCount(start_date, end_date);
  completed_bookings.value = await getCompletedBookingsCount(start_date, end_date);
  cancelled_bookings.value = await getCancelledBookingsCount(start_date, end_date);
  remaining_capacity.value = await getRemainingCapacityCount(start_date, end_date);
};

// Run on load
onMounted(async() => {
  await fetch_booking_status_cards(time_period)
})

// Update display when data changes

watch([upcoming_bookings, completed_bookings, remaining_capacity, cancelled_bookings], ([newUpcoming, newCompleted, newRemainingCapacity, newCancelled]) => {
  if (newUpcoming && newCompleted && newCancelled && newRemainingCapacity) {
    console.log('All data fetched successfully');
  } else {
    console.log('Data fetch failed.');
    fetch_booking_status_cards(time_period)
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
  fetch_booking_status_cards(time_period);
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
        :value=upcoming_bookings 
        icon="i-material-symbols-book" 
        type="Upcoming Bookings" 
        data-aos="fade-right" 
      />
      <DashboardUtilsCardsStatus 
        :value=completed_bookings 
        icon="i-material-symbols-bookmark-added-outline-sharp" 
        type="Completed Bookings" 
        data-aos="fade-left"
      />
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 my-5 ">
      <DashboardUtilsCardsStatus
        class="my-3 sm:my-0" 
        :value=cancelled_bookings
        icon="i-material-symbols-cancel-outline" 
        type="Cancelled Bookings" 
        data-aos="fade-right" 
      />
      <DashboardUtilsCardsStatus 
        :value=remaining_capacity 
        icon="i-material-symbols-table-restaurant-outline" 
        type="Remaining Capacity" 
        data-aos="fade-left" 
      />
  </div>
    <DashboardBookingsDataTable />
  </div>
</template>

