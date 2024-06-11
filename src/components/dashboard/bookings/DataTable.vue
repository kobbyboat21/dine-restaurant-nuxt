<script setup>

const bookingStore = useBookingStore()
const { getBookings } = bookingStore
let { bookings } = bookingStore

	useAsyncData(async () => await bookingStore.getBookings(), {
		initialCache: false,
	});

defineProps({   
  menu: String,
  columns: String
})

const columns = [{
  key: 'id',
  label: 'ID'
}, {
  key: 'name',
  label: 'Booking Name',
}, {
  key: 'datetime',
  label: 'Date & Time',
  sortable: true
}, {
  key: 'section',
  label: 'Table Section',
}, {
  key: 'capacity',
  label: 'Maximum Capacity',
  direction: 'desc'
}, {
  key:'status',
  label: 'Status'
}, {
  key: 'edit',
  label: 'Edit',
}, {
  key: 'delete',
  label: 'Delete',
}


]

const mobile_columns = [{
  key: 'name',
  label: 'Booking Name',
}, {
  key: 'time',
  label: 'Time',
  sortable: true
}, {
  key: 'edit',
    label: 'Edit',
}
]

</script>

<template>
  <!-- v-if < tablet screen size, then render mobile -->
  <UCard>
    <div v-if="$viewport.isLessThan('tablet')" >
     <DashboardUtilsTablesMobile :menu='bookings' :columns='mobile_columns'/>
    </div>
    <!-- v-else, then render full size component -->
    <div v-else >
      <DashboardBookingsModalsCreate />
     <DashboardUtilsTablesDesktop :menu='bookings' :columns='columns'/>
    </div>
  </UCard>
</template>
