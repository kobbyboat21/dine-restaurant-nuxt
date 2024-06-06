<template>
  <div>
  <LandingPageNavbar class="invisible sm:visible sm:mt-4 sm:z-20 sm:ml-29"/>
  <LandingPageViewsMenusBreakfast class="z-20"/>
  <DashboardUtilsBackgroundsBlurryRestaurant class="z-10 bg-black w-full h-screen"/>
  </div>
</template>

<script>
import { definePageMeta } from '#imports'

definePageMeta({
  auth: false
})
</script>
