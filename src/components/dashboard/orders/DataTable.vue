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

const columns = [
  {
  key: 'orderId',
  label: 'ID'
}, 
  {
  key: 'customerId',
  label: 'Customer ID',
}, 
  {
  key: 'platformName',
  label: 'Platform Name',
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
  key: 'paymentMethod',
  label: 'Payment Method',
}, 
  {
  key: 'timestamps.placed',
  label: 'Placed',
  sortable: true
}, 
//   {
//   key: 'timestamps.prepared',
//   label: 'Prepared',
// },
//   {
//   key: 'timestamps.outForDelivery',
//   label: 'Out for Delivery',
// }, 
//   {
//   key: 'timestamps.delivered',
//   label: 'Delivered',
// }, 
  {
  key: 'deliveryInfo',
  label: 'Delivery Information',
}, 
  {
  key: 'edit',
  label: 'Edit',
}, {
  key: 'delete',
  label: 'Delete',
}


]

const mobile_columns = [
  {
  key: 'orderId',
  label: 'Order ID',
}, 
{
  key: 'customerId',
  label: 'Customer ID',
}, 
{
  key: 'deliveryInfo',
  label: 'Details',
}, 
  {
  key: 'timestamps.placed',
  label: 'Placed',
  sortable: true
}, 
]

const dateFields = [
  { key: 'placed', label: 'Placed' },
  { key: 'prepared', label: 'Prepared' },
  { key: 'outForDelivery', label: 'Out for Delivery' },
  { key: 'delivered', label: 'Delivered' },
]

</script>

<template>
  <!-- v-if < tablet screen size, then render mobile -->
    <div v-if="$viewport.isLessThan('tablet')" >
     <DashboardUtilsTablesMobile :menu='orders' :columns='mobile_columns' :dateFields='dateFields'/>
    </div>
    <!-- v-else, then render full size component -->
    <div v-else >
    <UCard>
        <DashboardOrdersModalsCreate />
       <DashboardUtilsTablesDesktop :menu='orders' :columns='columns' :dateFields='dateFields'/>
    </UCard>
    </div>
</template>
