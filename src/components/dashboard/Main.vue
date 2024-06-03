<script setup>
// Extract into Dashboard Status Card component
// Extract into Dashboard Status Card Tabs component (Today/This week)
// Extract into Dashboard Chart Card component
// Extract into Dashboard Chart Card Tabs component (This week/This month/This quarter/This year)
// Extract into Dashboard Data Table component



const items = [{
  label: 'Breakfast',
  content: 'This is the Breakfast Menu'
}, {
  label: 'Lunch',
  content: 'This is the Lunch Menu'
}, {
  label: 'Dinner',
  content: 'This is the Dinner Menu'
}]

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
  key: 'ingredients',
  label: 'More',
}, {
  key: 'edit',
  label: 'Edit',
}, {
  key: 'delete',
  label: 'Delete',

}]


const lunch_meals = [{
  id: 1,
  name: 'Grilled Chicken Quinoa Bowl',
  price: '$18',
  description: 'Grilled chicken breast served over a bed of tri-color quinoa, roasted vegetables, and baby spinach. Topped with a zesty lemon-tahini dressing and garnished with toasted pine nuts.',
  image: 'https://cdn-aboak.nitrocdn.com/QJsLnWfsWAiuukSIMowyVEHtotvSQZoR/assets/images/optimized/rev-cbe4481/www.slenderkitchen.com/sites/default/files/styles/featured_750/public/recipe_images/chicken-quinoa-bowl.jpg',
  ingredients: 'Grilled chicken breast, Tri-color quinoa, Roasted vegetables, Baby spinach, Lemon-tahini dressing, Toasted pine nuts',
  section: 'Lunch'
}, {
  id: 2,
  name: 'Seared Ahi Tuna Salad',
  price: '$21',
  description: 'Sliced seared ahi tuna on a bed of mixed greens, cherry tomatoes, cucumber, and avocado. Drizzled with a soy-ginger vinaigrette and sprinkled with sesame seeds.',
  image: 'https://fitfoodiefinds.com/wp-content/uploads/2019/07/poke-bowl-14.jpg',
  ingredients: 'Ahi tuna, Mixed greens, Cherry tomatoes, Cucumber, Avocado, Soy-ginger vinaigrette, Sesame seeds',
  section: 'Lunch'
}, {
  id: 3,
  name: 'Mushroom and Truffle Risotto',
  price: '$18',
  description: 'Creamy risotto with a medley of wild mushrooms, finished with truffle oil and Parmesan cheese. Garnished with fresh chives and served with a side of garlic bread.',
  image: 'https://www.lakeshorelady.com/wp-content/uploads/2021/02/mushroom-risotto-8.jpg',
  ingredients: 'Arborio rice, Wild mushrooms, Truffle oil, Parmesan cheese, Chives, Garlic bread',
  section: 'Lunch'
}]

const dinner_meals = [{
  id: 1,
  name: 'Filet Mignon with Red Wine Reduction',
  price: '$31',
  description: 'Grilled filet mignon cooked to perfection, served with a rich red wine reduction sauce. Accompanied by garlic mashed potatoes and sautéed asparagus.',
  image: 'https://www.gritsandpinecones.com/wp-content/uploads/2022/02/filet-mignon-red-wine-sauce-final-plated.jpeg',
  ingredients: 'Filet mignon, Red wine reduction sauce, Garlic mashed potatoes, Asparagus',
  section: 'Dinner'
}, {
  id: 2,
  name: 'Lobster Ravioli with Saffron Cream Sauce',
  price: '$29',
  description: 'Handmade lobster-filled ravioli in a delicate saffron-infused cream sauce, garnished with fresh basil and grated Parmesan. Served with a side of garlic bread.',
  image: 'https://img1.wsimg.com/isteam/ip/454a9109-bb4b-413c-84aa-8c1310a3d924/ravioli-0001.jpg/:/rs=w:1280',
  ingredients: 'Lobster-filled ravioli, Saffron cream sauce, Fresh basil, Parmesan cheese, Garlic bread',
  section: 'Dinner'
}, {
  id: 3,
  name: 'Pan-Seared Sea Bass with Lemon Beurre Blanc',
  price: '$30',
  description: 'Pan-seared sea bass with a velvety lemon beurre blanc sauce. Accompanied by quinoa pilaf and roasted Brussels sprouts.',
  image: 'https://assets-global.website-files.com/6425f03eadc96686600b6d52/65037dfb29f7fb24d028bdde_Pan-Seared%20Sea%20Bass%20with%20Lemon%20Butter%20and%20Sauvignon%20Blanc.png',
  ingredients: 'Sea bass, Lemon beurre blanc sauce, Quinoa pilaf, Roasted Brussels sprouts',
  section: 'Dinner'
}]

const isOpen = ref(false)

import { useNuxtApp } from '#app'
const {$viewport} = useNuxtApp()
</script>


<template>
 <!-- You'd make a new component called DashboardView which is where the grids would be done -->
  <!-- DashboardSidebar would span 1 column, DashboardMain would span 11 columns inside the component above ^^^^ -->
  <div>
  <UContainer class="grid grid-cols-1 sm:grid-cols-3 my-5">
      <DashboardStatusCard class="my-3 sm:my-0" value=34 icon="i-heroicons-rectangle-stack" type="Tasks" data-aos="fade-right"/>
      <DashboardStatusCard class="my-3 sm:my-0" value=29 icon="i-heroicons-book-open" type="Bookings" data-aos="fade-down"/>
      <DashboardStatusCard class="my-3 sm:my-0" value=54 icon="i-heroicons-archive-box" type="Inventory" data-aos="fade-left"/>
  </UContainer>
  <UContainer class="grid grid-cols-1 sm:grid-cols-3 my-5">
      <DashboardChartCard value=19 icon="i-heroicons-rectangle-stack" type="Tasks" data-aos="fade-right"/>
      <DashboardChartCard class="my-3 sm:my-0" value=12 icon="i-heroicons-book-open" type="Bookings" data-aos="fade-down"/>
      <DashboardChartCard class="my-3 sm:my-0" value=37 icon="i-heroicons-archive-box" type="Inventory" data-aos="fade-left"/>
  </UContainer>
  <div v-if="$viewport.isLessThan('tablet')" class="hidden my-5">
  <UContainer class="grid grid-cols-2">
      <UCard class="mx-3 text-center" data-aos="flip-right">
        <p> Total Resevations </p>
        <DashboardUtilsChartsPie/>
      </UCard>
      <UCard class="mx-3 text-center" data-aos="fade-left">
        <p> Total Revenue </p>
        <DashboardUtilsChartsPie/>
      </UCard>
  </UContainer>
  </div>
  <div v-else class="visible">
  <UContainer class="grid grid-cols-2">
      <UCard class="mx-3 text-center" data-aos="flip-right">
        <p> Total Resevations </p>
        <DashboardUtilsChartsPie/>
      </UCard>
      <UCard class="mx-3 text-center" data-aos="fade-left">
        <p> Total Revenue </p>
        <DashboardUtilsChartsPie/>
      </UCard>
  </UContainer>
  </div>
  <!--  ^ change menu attribute to use JS props ":menu" to pass through the menu data rather than a string of "breakfast_meals"-->
  <!--  pass through columns object with JS props ":columns"-->

<!-- 1: WRAP AROUND DATA TABLE WITH TABS COMPONENT -->
<!-- 2: CUSTOMISE DATA TABLE TO MEAL FIELDS: {NAME, PRICE, SECTION, IMAGE, MENU, DETAILS, INGREDIENTS} 
  - Add in <UAvatar> for pictures
  - Add in <UTooltip> for pictures
- Add in a <UIcon> for the ingredients which is a button to popup a <UModal>
  -->
<!-- 3: ADD DATA TABLES FOR EACH MENU TYPE: {BREAKFAST, LUNCH, DINNER}-->

<!-- 4: ON A NEW PAGE /dashboard - USE TAILWIND GRID TO CREATE 6 CARDS SPLIT INTO 3 COLUMNS, 2 ROWS and then contains tabs below to switch between the Menu tables -->
<!-- 5: Extract the functional pages into the different components required (refactoring, rather than having everything in one file )-->
  </div>
</template>

