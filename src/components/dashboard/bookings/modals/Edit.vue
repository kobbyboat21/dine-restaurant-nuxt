<script setup>

let isOpen = ref(false)

import { format } from 'date-fns'
//import DatePicker from 'v-calendar'
import { ref } from 'vue';
const date = ref(new Date())

// Import Store, List & update function
const bookingStore = useBookingStore()
const { editBooking } = bookingStore
const { bookings } = bookingStore

// Define the props to pass through the row data from the Data Table
const props = defineProps(['bookingitem'])

// Find the product from store using the row id  to match with the current product id
const booking = JSON.parse(JSON.stringify(bookings.find((stored_booking) => stored_booking.id === props.bookingitem.id) ?? null))

function edit() {
  editBooking(booking)
}

const status = ['upcoming', 'completed', 'cancelled']

const status_placeholder = ref(status[0])
</script>

<template>

  <div>
    <UButton @click="isOpen = true" 
        icon="i-heroicons-pencil-square"
        size="sm"
        color="blue"
        variant="ghost" />

    <UModal v-model="isOpen">
      <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <h1 class="text-lg text-center font-extrabold"> Edit Booking </h1>
        </template>
        <UForm class="space-y-4" @submit="edit">
        <UFormGroup label="Booking Name">
            <!-- v-model for each specific booking/product data; booking.name -->
            <UInput placeholder="Booking Name" v-model="booking.name"/>
          </UFormGroup>
          <UFormGroup label="Table Section">
            <UInput placeholder="Front/ Back" v-model="booking.section"/>
          </UFormGroup>
          <UFormGroup label="Number of Guests">
            <UInput v-model="booking.capacity"/>
          </UFormGroup>
          <UFormGroup label="Status">
            <USelect v-model="booking.status" :options="status"/>
          </UFormGroup>
          <UFormGroup label="Date & Time">
            <UPopover :popper="{ placement: 'bottom-start' }">
              <UButton icon="i-heroicons-calendar-days-20-solid" :label="format(booking.datetime, 'd MMM, yyy')" color="gray" variant="ghost" />
              <template #panel="{ close }">
                <DatePicker v-model="booking.datetime" mode="dateTime" @close="close" />
              </template>
            </UPopover>
          </UFormGroup>
          <UButton type="submit" color="gray" @click="isOpen = false">
            Submit
          </UButton> <!-- on submit, run update function -->
        </UForm> 
      </UCard>
    </UModal>
  </div>
  
</template>

