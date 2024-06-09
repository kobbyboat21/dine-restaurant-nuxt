export default defineEventHandler(async (event) => {
  const FLASK_API = useRuntimeConfig().FLASK_API
  const { start_date, end_date } = getQuery(event)

  const route = 'orders/median-order-value'
  const endpoint = FLASK_API + route
  const url = `${endpoint}?start_date=${start_date}&end_date=${end_date}`

  console.log('[ORDERS API] [MEDIAN ORDER VALUE] [FETCHING]', url)

  try {
    const median_order_value = await $fetch(url)
    console.log('[ORDERS API] [MEDIAN ORDER VALUE] [VALUE]', median_order_value)
    return median_order_value
  } catch (error) {
    console.error('Error fetching median order value:', error)
    return { error: 'Failed to fetch median order value' }
  }
})

