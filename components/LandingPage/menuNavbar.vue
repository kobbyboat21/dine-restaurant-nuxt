<script setup lang="ts">
const route = useRoute()

const links = [{
  label: 'Breakfast',
  icon: 'i-heroicons-home',
  to: '/menus/breakfast'
}, {
  label: 'Lunch',
  icon: 'i-heroicons-chart-bar',
  to: '/menus/lunch'
}, {
  label: 'Dinner',
  icon: 'i-heroicons-command-line',
  to: '/menus/dinner'
}]
</script>

<template>
  <UVerticalNavigation
  :links="links"
  :ui="{
  size: 'text-4xl',
  inactive: 'text-[#594c4c] dark:text-white-400 hover:text-gray-400',
  icon: {
    base: 'w-8 h-8',
    inactive: 'text-[#594c4c] dark:text-[#594c4c]'
    }
  }"
  class="flex z-40 justify-center mt-40 absolute w-screen left-0"/>
  <DashboardUtilsBackgroundsWhiteStone/>
</template>
