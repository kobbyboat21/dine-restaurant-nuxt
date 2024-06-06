<template>
  <DashboardViewsAuthentication />
</template>

<script>
import { definePageMeta } from '#imports'

definePageMeta({
  auth: {
  unauthenticatedOnly: true,
  navigateAuthenticatedTo: '/dashboard'
}
})
</script>
