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
  key: 'task',
  label: 'Task',
}, {
  key: 'deadline',
  label: 'Deadline',
  sortable: true
}, {
  key: 'status',
  label: 'Request Status',
  sortable: true
}, {
  key: 'employee',
  label: 'Assigned to',
}, {
  key: 'priority',
  label: 'Priority',
}, {
  key: 'edit',
  label: 'Edit',
}, {
  key: 'delete',
  label: 'Delete',
}


]

const tasks = [{
  
  id: 1,
  task: 'Restock Frozen Inventory',
  deadline: '15/01/2024',
  status: 'In Progress',
  employee: 'Jake',
  priority: 'Medium',

}, {

  id: 2,
  task: 'Enrol Staff on Asbestos Training',
  deadline: '05/01/2024',
  status: 'Completed',
  priority: 'High'

}]


const status = ['Not Started', 'In Progress', 'Completed']
const selected = ref([tasks[1]])

</script>


<template>
  <div>
  <UContainer class="grid grid-cols-2 mt-8 " >
      <DashboardBookingsStatusCard value=12 icon="i-heroicons-book-open" type="New Tasks" />
      <DashboardBookingsStatusCard value=1 icon="i-heroicons-academic-cap" type="New Learning Modules" />
  </UContainer>
  <UContainer class="grid grid-cols-2 mb-8 ">
      <DashboardBookingsStatusCard value=19 icon="i-heroicons-book-open" type="Completed Tasks" />
      <DashboardBookingsStatusCard value=0 icon="i-heroicons-academic-cap" type="Overdue Learning Modules" />
  </UContainer>
  <DashboardTasksDataTable v-model="selected" :columns='columns' :rows='tasks'/>
  </div>
  <!--  ^ change menu attribute to use JS props ":menu" to pass through the menu data rather than a string of "breakfast_meals"-->
  <!--  pass through columns object with JS props ":columns"-->

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

