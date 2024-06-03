<script setup>

defineProps({
  icon: String,
  type1: String,
  type2: String,
  meal: String
})

const cards = [{
  label: 'Today'
}, {    
  label: 'This Week'
  }
]
</script>



<template>

<UCard class="mx-3 text-center">
  <UTabs :items="cards" :default-index="0" class="w-full">
    <template #item="{item}">
      <div v-if="item.label === 'Today'">
        <p class="font-bold text-l text-green-400">{{ type1 }}</p>
          <p> Most Ordered {{meal}} Meal </p>
      </div>
      <div v-if="item.label === 'This Week'">
        <p class="font-bold text-l text-green-400">{{ type2 }}</p>
          <p> Most Ordered {{meal}} Meal </p>
      </div>
    </template>
  </UTabs>

</UCard>

</template>



