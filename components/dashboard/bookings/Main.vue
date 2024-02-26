<script setup>
// Extract into Dashboard Status Card component
// Extract into Dashboard Status Card Tabs component (Today/This week)
// Extract into Dashboard Chart Card component
// Extract into Dashboard Chart Card Tabs component (This week/This month/This quarter/This year)
// Extract into Dashboard Data Table component


/*
const items = [{
  label: 'Breakfast',
  content: 'This is the Breakfast Bookings'
}, {
  label: 'Lunch',
  content: 'This is the Lunch Bookings'
}, {
  label: 'Dinner',
  content: 'This is the Dinner Bookings'
}]

const columns = [{
  key: 'id',
  label: 'ID'
}, {
  key: 'name',
  label: 'Booking Name',
}, {
  key: 'date',
  label: 'Date',
  sortable: true
}, {
  key: 'time',
  label: 'Time',
  sortable: true
}, {
  key: 'section',
  label: 'Table Section',
}, {
  key: 'capacity',
  label: 'Maximum Capacity',
  direction: 'desc'
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


const breakfast_bookings = [{
  id: 1,
  name: 'Marcus Smart',
  time: '10:00',
  section: 'Front',
  capacity: '4',
}, {
  
  id: 2,
  name: 'Elon Musk',
  time: '9:30',
  section: 'Main',
  capacity: '2',
  
}, {
  
  id: 3,
  name: 'Theresa May',
  time: '11:00',
  section: 'Back',
  capacity: '4'
}

]
const lunch_bookings = [{
  id: 1,
  name: 'Marge Simpson',
  time: '15:30',
  section: 'Main',
  capacity: '4',
}, {
  
  id: 2,
  name: 'Micheal Jordan',
  time: '13:00',
  section: 'Main',
  capacity: '6',
  
}, {
  
  id: 3,
  name: 'Julian Terriman',
  time: '14:00',
  section: 'Back',
  capacity: '2'
}

]
const dinner_bookings = [{
  id: 1,
  name: 'Boney James',
  time: '19:00',
  section: 'Front',
  capacity: '4',
}, {
  
  id: 2,
  name: 'Gigi Ross',
  time: '19:30',
  section: 'Main',
  capacity: '2',
  
}, {
  
  id: 3,
  name: 'Future Hendrix',
  time: '21:00',
  section: 'Back',
  capacity: '6'
}
]
*/
</script>


<template>
  <div>
  <div class="grid grid-cols-1 sm:grid-cols-2 my-5 " >
      <DashboardBookingsStatusCard class="my-3 sm:my-0" value=12 icon="i-heroicons-book-open" type="New Bookings" data-aos="fade-right" />
      <DashboardBookingsStatusCard value=18 icon="i-heroicons-circle-stack" type="Remaining Capacity" data-aos="fade-left" />
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 my-5 ">
      <DashboardBookingsStatusCard class="my-3 sm:my-0" value=19 icon="i-heroicons-book-open" type="Completed Bookings" data-aos="fade-right" />
      <DashboardBookingsStatusCard value=31 icon="i-heroicons-circle-stack" type="Total Capacity" data-aos="fade-left" />
  </div>
  
    <DashboardBookingsDataTable />
  </div>
</template>

