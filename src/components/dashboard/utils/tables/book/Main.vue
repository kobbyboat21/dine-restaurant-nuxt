<script setup>

defineProps({
  menu: Array,
  columns: String,
})


const bookingStore = useBookingStore()
let { bookings } = bookingStore

function getMonthName(monthNumber) {
  const date = new Date();
  date.setMonth(monthNumber);

  return date.toLocaleString('en-US', { month: 'short' });
}

function datesaregay(date_string){
  var date = new Date(date_string)
  var result = "" + (date.getDay() + 1) + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + ", " + date.toLocaleTimeString() 
  //var result = "" + date.getFullYear() + getMonthName(date.getMonth()) + date.getDay()

console.log(result)
  return result
}
</script>


<template>
  <!-- BUTTON BookingsCreateModal -->   
      <DashboardBookingsModalsCreate />
    <UTable :columns="columns" :rows='bookings' :sort="{ column: 'title' }" >
    <template #edit-data="{row}">
      <DashboardBookingsModalsEdit :bookingitem="row" />
      </template>
    <template #datetime-data="{row}">
      {{ datesaregay(row.datetime) }}
    </template>
    <template #delete-data="{row}">
      <DashboardBookingsModalsDelete :bookingitem="row" />
      </template>

  </UTable>

</template>    
