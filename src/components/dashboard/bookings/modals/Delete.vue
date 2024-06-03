<script setup>

let isOpen = ref(false)

const bookingStore = useBookingStore()
const { deleteBooking } = bookingStore
const { bookings } = bookingStore

const props = defineProps(['bookingitem'])

const booking = JSON.parse(JSON.stringify(bookings.find((stored_booking) => stored_booking.id === props.bookingitem.id) ?? null))

function remove(){
  deleteBooking(booking)
} 

</script>

<template>

  <div>
     <UButton @click="isOpen = true" 
        icon="i-heroicons-trash"
        size="sm"
        color="red"
        variant="ghost" />

    <UModal v-model="isOpen">
      <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <h1 class="text-lg text-center font-extrabold"> Delete Booking </h1>
        </template>
        <UForm class="space-y-4" @submit="remove">
        <p> Do you want to delete this booking? The action cannot be undone </p>

        <UButton type="submit" @click="isOpen = false">
          Delete
        </UButton> <!-- on submit, run update function -->

        </UForm>
      </UCard>
    </UModal>

  </div>



</template>
