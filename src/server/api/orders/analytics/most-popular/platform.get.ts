export default defineEventHandler(async (event) => {
  const FLASK_API = useRuntimeConfig().FLASK_API
  const { start_date, end_date } = getQuery(event)

  const route = 'orders/most-popular-platform'
  const endpoint = FLASK_API + route
  const url = `${endpoint}?start_date=${start_date}&end_date=${end_date}`

  console.log('[ORDERS API] [MOST POPULAR PLATFORM] [FETCHING]', url)

  try {
    const median_order_value = await $fetch(url)
    return median_order_value
  } catch (error) {
    console.error('Error fetching most popular platform:', error)
    return { error: 'Failed to fetch most popular platform' }
  }
})

