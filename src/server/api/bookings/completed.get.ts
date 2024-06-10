export default defineEventHandler(async (event) => {
  const FLASK_API = useRuntimeConfig().FLASK_API
  const { start_date, end_date } = getQuery(event)

  const route = 'bookings/completed'
  const endpoint = FLASK_API + route
  const url = `${endpoint}?start_date=${start_date}&end_date=${end_date}`

  console.log('[BOOKINGS API] [COMPLETED] [FETCHING]', url)

  try {
    const completed = await $fetch(url)
    return completed
  } catch (error) {
    console.error('Error fetching completed bookings:', error)
    return { error: 'Failed to fetch completed bookings' }
  }
})

