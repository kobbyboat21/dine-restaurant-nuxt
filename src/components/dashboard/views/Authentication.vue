<template>
  <div v-if="$viewport.isLessThan('tablet')">
    <DashboardAuthMobile />
  </div>
  <div v-else>
    <DashboardAuthDesktop />
  </div>

 <DashboardUtilsBackgroundsBlurryRestaurant class="z-0 bg-black w-full h-screen"/>
</template>
