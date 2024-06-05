import { defineNuxtRouteMiddleware, navigateTo } from '#imports'

export default defineNuxtRouteMiddleware(async (to) => {
  // Check if the user is trying to access the landing page
  const unauthenticated_routes = [
    '/',
    '/menu',
    '/dashboard/login',
  ]

  const currentRoute = to.path

  if (unauthenticated_routes.includes(currentRoute)) {
    // Allow access to the landing page
    return
  }

  // Check if the user is authenticated
  const isAuthenticated = false /* your authentication logic here */

  // If the user is not authenticated and not on the landing page
  if (!isAuthenticated) {
    // Redirect to the login page
    return navigateTo('/dashboard/login')
  }
})
