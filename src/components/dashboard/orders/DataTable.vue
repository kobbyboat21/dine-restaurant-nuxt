<script setup>

const orderStore = useOrderStore()
const { getOrders } = orderStore
let { orders } = orderStore

useAsyncData(async () => await orderStore.getOrders(), {
		initialCache: false,
	});

defineProps({   
  menu: String,
  columns: String
})

const columns = [{
  key: 'orderId',
  label: 'ID'
}, 
  {
  key: 'platformName',
  label: 'Platform Name',
}, 
  {
  key: 'customerId',
  label: 'Customer ID',
}, 
  {
  key: 'orderValue',
  label: 'Order Value',
}, 
  {
  key: 'orderItemsList',
  label: 'Order Items',
}, 
  {
  key: 'deliveryInfo.address',
  label: 'Delivery Information',
}, 
  {
  key: 'paymentMethod',
  label: 'Payment Method',
}, 
  {
  key: 'timestamps.placed',
  label: 'Placed',
  sortable: true
}, 
  {
  key: 'timestamps.prepared',
  label: 'Prepared',
},
  {
  key: 'timestamps.outForDelivery',
  label: 'Out for Delivery',
}, 
  {
  key: 'timestamps.delivered',
  label: 'Delivered',
}, 
  {
  key: 'edit',
  label: 'Edit',
}, {
  key: 'delete',
  label: 'Delete',
}


]

const mobile_columns = [{
  key: 'name',
  label: 'Booking Name',
}, {
  key: 'time',
  label: 'Time',
  sortable: true
}, {
  key: 'edit',
    label: 'Edit',
}
]

const dateFields = [
  { key: 'timestamps.placed', label: 'Placed' },
  { key: 'timestamps.prepared', label: 'Prepared' },
  { key: 'timestamps.outForDelivery', label: 'Out for Delivery' },
  { key: 'timestamps.delivered', label: 'Delivered' },
]

</script>

<template>
  <!-- v-if < tablet screen size, then render mobile -->
  <UCard>
    <div v-if="$viewport.isLessThan('tablet')" >
     <DashboardUtilsTablesMobile :menu='orders' :columns='mobile_columns'/>
    </div>
    <!-- v-else, then render full size component -->
    <div v-else >
      <DashboardBookingsModalsCreate />
     <DashboardUtilsTablesDesktop :menu='orders' :columns='columns' :dateFields='dateFields'/>
    </div>
  </UCard>
</template>
