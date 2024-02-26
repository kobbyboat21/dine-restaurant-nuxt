<script setup>
import { storeToRefs } from 'pinia'

const breakfastStore = useBreakfastStore()
const { getBreakfast } = breakfastStore
let { breakfast_meals } = breakfastStore

	useAsyncData(async () => await breakfastStore.getBreakfast(), {
		initialCache: false,
	});

defineProps({
  menu: String,
  columns: String,
})

const columns = [{
  key: 'id',
  label: 'ID'
}, {
  key: 'name',
  label: 'Meal Name',
  sortable: true
}, {
  key: 'price',
  label: 'Meal Price',
  sortable: true
}, {
  key: 'description',
  label: 'Meal Description',
  direction: 'desc'
}, {
  key: 'section',
  label: 'Section',
}, {
  key: 'image',
  label: 'Image'
}, {
  key: 'ingredients',
  label: 'Ingredients',
}, {
  key: 'edit',
  label: 'Edit',
}, {
  key: 'delete',
  label: 'Delete',
}


]

const mobile_columns = [{
  key: 'name',
  label: 'Meal Name',
  sortable: true
}, {
  key: 'price',
  label: 'Meal Price',
  sortable: true
}, {
  key: 'edit',
  label: 'Edit',

}]

</script>

<template>
  <!-- v-if < tablet screen size, then render mobile -->
  <UCard>
    <div v-if="$viewport.isLessThan('tablet')" >
     <DashboardUtilsTablesMenuBreakfastMobile meal="Breakfast" :menu='breakfast_meals' :columns='mobile_columns'/>
    </div>
    <!-- v-else, then render full size component -->
    <div v-else >
     <DashboardUtilsTablesMenuBreakfast meal="Breakfast"  :menu='breakfast_meals' :columns='columns'/>
    </div>
  </UCard>
</template>
