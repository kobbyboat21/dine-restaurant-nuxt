<script setup>
// Extract into Dashboard Status Card component
// Extract into Dashboard Status Card Tabs component (Today/This week)
// Extract into Dashboard Chart Card component
// Extract into Dashboard Chart Card Tabs component (This week/This month/This quarter/This year)
// Extract into Dashboard Data Table component



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
</script>


<template>
  <div>
  <UContainer class="grid grid-cols-2 mt-8 " >
      <DashboardBookingsStatusCard value=12 icon="i-heroicons-book-open" type="New Bookings" />
      <DashboardBookingsStatusCard value=18 icon="i-heroicons-circle-stack" type="Remaining Capacity" />
  </UContainer>
  <UContainer class="grid grid-cols-2 mb-8 ">
      <DashboardBookingsStatusCard value=19 icon="i-heroicons-book-open" type="Completed Bookings" />
      <DashboardBookingsStatusCard value=31 icon="i-heroicons-circle-stack" type="Total Capacity" />
  </UContainer>
    <UTabs :items="items" :default-index="0" class="w-full">
      <template #item="{ item }">
        <div v-if="item.label === 'Breakfast'">
         <DashboardDataTable meal="Breakfast" :menu='breakfast_bookings' :columns='columns'/>
        </div>
        <div v-if="item.label === 'Lunch'">
          <DashboardDataTable meal="Lunch" :menu='lunch_bookings' :columns='columns'/>
        </div>
        <div v-if="item.label === 'Dinner'">
          <DashboardDataTable meal="Dinner" :menu='dinner_bookings' :columns='columns'/>
        </div>
  <!--  ^ change menu attribute to use JS props ":menu" to pass through the menu data rather than a string of "breakfast_meals"-->
  <!--  pass through columns object with JS props ":columns"-->
      </template>
    </UTabs>
  </div>
<!-- 1: WRAP AROUND DATA TABLE WITH TABS COMPONENT -->
<!-- 2: CUSTOMISE DATA TABLE TO MEAL FIELDS: {NAME, PRICE, SECTION, IMAGE, MENU, DETAILS, INGREDIENTS} 
  - Add in <UAvatar> for pictures
  - Add in <UTooltip> for pictures
- Add in a <UIcon> for the ingredients which is a button to popup a <UModal>
  -->
<!-- 3: ADD DATA TABLES FOR EACH MENU TYPE: {BREAKFAST, LUNCH, DINNER}-->

<!-- 4: ON A NEW PAGE /dashboard - USE TAILWIND GRID TO CREATE 6 CARDS SPLIT INTO 3 COLUMNS, 2 ROWS and then contains tabs below to switch between the Menu tables -->
<!-- 5: Extract the functional pages into the different components required (refactoring, rather than having everything in one file )-->
</template>

