<script setup>
defineProps({
  menu: String,
  mobile_columns: String,
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

function get_date_slot_name(field_key){
  const slot_name = `timestamps.${field_key}-data`
  return slot_name
}

</script>

<template>
  <UTable :columns="mobile_columns" :rows= 'menu' :sort="{ column: 'title' }" >
    <template #deliveryInfo-data="{row}">
      <DashboardOrdersModalsDetails class="" :bookingitem="row" />
    </template>

    <template #edit-data="{row}">
        <EditModal :mealitem="row" /> 
      </template>

    <template v-for="field in dateFields" :key="field.key" #[get_date_slot_name(field.key)]="{row}">
            {{ format_dates(row.timestamps[field.key]) }}
      </template>
    </UTable>
</template>

