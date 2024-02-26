<script setup>
// Define Breakfast Store from Pinia
import { storeToRefs } from 'pinia'

//import { useBreakfastStore } from '/stores/breakfast_menu.ts'
const lunchStore = useLunchStore()
const { lunch_meals } = lunchStore

//console.log(breakfast_meals)

	useAsyncData(async () => await lunchStore.getLunch(), {
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
     <DashboardUtilsTablesMenuLunchMobile meal="Lunch" :menu='lunch_meals' :columns='mobile_columns'/>
    </div>
    <!-- v-else, then render full size component -->
    <div v-else>
     <DashboardUtilsTablesMenuLunch meal="Lunch" :menu='lunch_meals' :columns='columns'/>
    </div>
  </UCard>
</template>
