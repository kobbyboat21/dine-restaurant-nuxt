<script setup>
defineProps({
  menu: Array,
  columns: String,
  dateFields: Array,
})

function getMonthName(monthNumber) {
  const date = new Date();
  date.setMonth(monthNumber);

  return date.toLocaleString('en-US', { month: 'short' });
}

function format_dates(date_string) {
  var date = new Date(date_string)
  var result = "" + (date.getDay() + 1) + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + ", " + date.toLocaleTimeString()
  return result
}
</script>

<template>
  <UTable :columns="columns" :rows='menu' :sort="{ column: 'title' }">
    <template v-for="field in dateFields" :key="field.key" #[field.key]="{row}">
      {{ format_dates(row[field.key]) }}
    </template>
    <template #deliveryInfo-data="{row}">
      <DashboardOrdersModalsDetails class="ml-11" :bookingitem="row" />
    </template>
    <template #edit-data="{row}">
      <DashboardBookingsModalsEdit :bookingitem="row" />
    </template>
    <template #delete-data="{row}">
      <DashboardBookingsModalsDelete :bookingitem="row" />
    </template>
  </UTable>
</template>

