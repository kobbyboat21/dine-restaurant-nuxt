<script setup>
import { ref } from 'vue';
let createBookingModal = ref(false)

function toggleBookingModal() {
createBookingModal.value = !createBookingModal.value
console.log(createBookingModal.value)
}
</script>

<template>
  <div>
    <div v-if="$viewport.isLessThan('tablet')">
    <UButton 
      @click="toggleBookingModal()" 
        icon="i-heroicons-calendar"
        color="brown"
        variant="plain"
        size="xl"
        label="BOOK"
        class="text-xl text-stone-700"
    />
    </div>
    <div v-else>
    <UButton @click="toggleBookingModal()" 
        icon="i-heroicons-calendar"
        color="brown"
        variant="plain"
        size="xl"
        label="BOOK"
        class="text-3xl text-stone-700"
    />
    </div>

  <BookingModal v-if="createBookingModal"/>
  </div>
</template>
