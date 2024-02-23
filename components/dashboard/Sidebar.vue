<script setup>
const links = [{
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
}, {
  label: 'Help',
  to: '/dashboard',
  icon: 'i-heroicons-hand-raised',
}]
</script>

<template>
  <div class="mt-6 ml-3">
  <img src='/LOGO.png' class="ml-3"/>
  <UVerticalNavigation :links="links" class="mt-8"/>
  </div>
</template>


