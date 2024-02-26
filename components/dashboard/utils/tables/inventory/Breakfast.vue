<script setup>

defineProps({
  menu: Array,
  columns: String,
})


const bookbreakfastStore = useBookBreakfastStore()
let { breakfast_bookings } = bookbreakfastStore

</script>


<template>
  <!-- BUTTON BookingsCreateModal -->   
      <DashboardBookingsBreakfastModalsCreate />
    <UTable :columns="columns" :rows='breakfast_bookings' :sort="{ column: 'title' }" >
    <template #edit-data="{row}">
      <DashboardBookingsBreakfastModalsEdit :bookingitem="row" />
      </template>

    <template #delete-data="{row}">
      <DashboardBookingsBreakfastModalsDelete :bookingitem="row" />
      </template>

  </UTable>

</template>    
