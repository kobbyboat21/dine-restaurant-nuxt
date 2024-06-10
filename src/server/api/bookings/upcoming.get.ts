export default defineEventHandler(async (event) => {
  const FLASK_API = useRuntimeConfig().FLASK_API
  const { start_date, end_date } = getQuery(event)

  const route = 'bookings/upcoming'
  const endpoint = FLASK_API + route
  const url = `${endpoint}?start_date=${start_date}&end_date=${end_date}`

  console.log('[BOOKINGS API] [UPCOMING] [FETCHING]', url)

  try {
    const upcoming = await $fetch(url)
    return upcoming
  } catch (error) {
    console.error('Error fetching upcoming bookings:', error)
    return { error: 'Failed to fetch upcoming bookings' }
  }
})

