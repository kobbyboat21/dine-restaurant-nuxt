<script setup>
// Define Breakfast Store from Pinia
import { storeToRefs } from 'pinia'

//import { useBreakfastStore } from '/stores/breakfast_menu.ts'
const dinnerStore = useDinnerStore()
const { dinner_meals } = dinnerStore

//console.log(breakfast_meals)

	useAsyncData(async () => await dinnerStore.getDinner(), {
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
     <DashboardUtilsTablesMenuDinnerMobile meal="Dinner" :menu='dinner_meals' :columns='mobile_columns'/>
    </div>
    <!-- v-else, then render full size component -->
    <div v-else>
     <DashboardUtilsTablesMenuDinner meal="Dinner" :menu='dinner_meals' :columns='columns'/>
    </div>
  </UCard>
</template>
