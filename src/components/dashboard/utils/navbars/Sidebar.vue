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

const { signOut } = useAuth()
function logOut(){
  signOut( {callbackUrl: '/dashboard/login', external: true})
  navigateTo('/dashboard/login', {external: true})
  }
</script>

<template>
  <div class="flex flex-col h-screen w-40">
    <div class="flex justify-center mt-6">
      <img src="/LOGO.png" class="sm:visible ml-3" />
    </div>
    <UVerticalNavigation :links="links" class="sm:visible mt-8 mx-auto" />
    <div class="hidden sm:block mx-auto mt-8">
      <div @click="logOut()" class="bg-red-500 hover:bg-red-600 text-white rounded-full px-4 py-2">
        Logout
      </div>
    </div>
  </div>
</template>


