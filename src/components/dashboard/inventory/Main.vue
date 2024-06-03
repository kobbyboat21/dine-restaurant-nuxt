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
  label: 'Item Name',
}, {
  key: 'quantity',
  label: 'Quantity',
  sortable: true
}, {
  key: 'cost',
  label: 'Cost Per Item',
  sortable: true
}, {
  key: 'inventory_value',
  label: 'Inventory Value',
  sortable: true
}, {
  key: 'reorder_days',
  label: 'Days Per Re-order',
  sortable: true
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
  label: 'Item Name',
}, {
  key: 'quantity',
  label: 'Quantity',
}, {
  key: 'edit',
  label: 'Edit',
}]

/*
const breakfast_inventory= [{

  id: 1,
  name: 'Bread',
  quantity: '300',
  cost: '$0.80',
  inventory_value: '$240',
  reorder_days: '6'
}, {

  id: 2,
  name: 'Maple Syrup',
  quantity: '10',
  cost: '$1.20',
  inventory_value: '$120',
  reorder_days: '10'
}, {

  id: 3,
  name: 'Oranges',
  quantity: '100',
  cost: '$0.30',
  inventory_value: '$30',
  reorder_days: '4'
}

]

const lunch_inventory= [{

  id: 1,
  name: 'Potatoes',
  quantity: '200',
  cost: '$0.60',
  inventory_value: '$120',
  reorder_days: '6'
}, {

  id: 2,
  name: 'Chicken Thighs',
  quantity: '256',
  cost: '$0.20',
  inventory_value: '$51.20',
  reorder_days: '3'
}, {

  id: 3,
  name: 'Jasmine Rice',
  quantity: '40',
  cost: '$1.00',
  inventory_value: '$40',
  reorder_days: '4'
}

]
*/

const inventory= [{

  id: 1,
  name: 'Ribeye Steak',
  quantity: '20',
  cost: '$5.20',
  inventory_value: '$104',
  reorder_days: '6'
}, {

  id: 2,
  name: 'Chicken Thighs',
  quantity: '256',
  cost: '$0.20',
  inventory_value: '$51.20',
  reorder_days: '3'
}, {

  id: 3,
  name: '1978 Cavelot Red Wine',
  quantity: '10',
  cost: '$21.00',
  inventory_value: '$210',
  reorder_days: '20'

}

]
</script>


<template>
  <div>
  <div class="grid grid-cols-1 sm:grid-cols-2 my-5 " >
      <DashboardBookingsStatusCard class="my-3 sm:my-0" value=12 icon="i-heroicons-book-open" type="Most Used Item" data-aos="fade-right"/>
      <DashboardBookingsStatusCard value=18 icon="i-heroicons-circle-stack" type="Average Cost/ Item" data-aos="fade-left"/>
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 my-5 ">
      <DashboardBookingsStatusCard class="my-3 sm:my-0" value=19 icon="i-heroicons-book-open" type="Item Remaining Stock" data-aos="fade-right"/>
      <DashboardBookingsStatusCard value=31 icon="i-heroicons-circle-stack" type="Total Inventory Value" data-aos="fade-left"/>
  </div>
  <UCard>
  <div v-if="$viewport.isLessThan('tablet')">
  <DashboardInventoryDataTable v-model="selected" :columns='mobile_columns' :rows='inventory' data-aos="flip-up" class="mt-4"/>
  </div>
  <div v-else>
  <DashboardInventoryDataTable v-model="selected" :columns='columns' :rows='inventory' data-aos="flip-up" class="mt-4"/>
  </div>
  </UCard>
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

