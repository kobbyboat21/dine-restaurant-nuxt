export default defineEventHandler(async (event) => {
  const FLASK_API = useRuntimeConfig().FLASK_API
  const { start_date, end_date } = getQuery(event)

  const route = 'bookings/cancelled'
  const endpoint = FLASK_API + route
  const url = `${endpoint}?start_date=${start_date}&end_date=${end_date}`

  console.log('[BOOKINGS API] [CANCELLED] [FETCHING]', url)

  try {
    const cancelled = await $fetch(url)
    return cancelled
  } catch (error) {
    console.error('Error fetching cancelled bookings:', error)
    return { error: 'Failed to fetch cancelled bookings' }
  }
})

