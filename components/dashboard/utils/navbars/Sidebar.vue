<script setup>
const links = [{
  label: 'Dashboard',
  to: '/dashboard',
  icon: 'i-heroicons-adjustments-horizontal',
}, { 
  label: 'Menus',
  to: '/dashboard/menu',
  icon: 'i-heroicons-bars-4',
}, {
  label: 'Bookings',
  to: '/dashboard/bookings',
  icon: 'i-heroicons-book-open',
}, {
  label: 'Inventory',
  to: '/dashboard/inventory',
  icon: 'i-heroicons-archive-box',
}, {
  label: 'Tasks',
  to: '/dashboard/tasks',
  icon: 'i-heroicons-rectangle-stack',
}, {
  label: 'Landing Page',
  to: '/',
  icon: 'i-heroicons-building-office-2',
}]
</script>

<template>
  <div class="mt-6 ml-3 w-40">
  <UIcon name="i-bx-menu" 
      class="visible absolute text-red-100 text-opacity-30 left-[0.5rem] top-[0.5rem] w-[3rem] h-[3rem] md:invisible" dynamic/>
  <img src='/LOGO.png' class="invisible sm:visible ml-3 "/>
  <UVerticalNavigation :links="links" class="invisible sm:visible mt-8"/>
  </div>
</template>


