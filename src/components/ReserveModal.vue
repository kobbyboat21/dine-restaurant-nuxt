<script setup>

let resBookingModal = ref(true)
import { format } from 'date-fns'
//import DatePicker from 'v-calendar'
import { ref } from 'vue';
const date = ref(new Date())

// Import Store, List & update function
const bookingStore = useBookingStore()
const { createBooking } = bookingStore
const { bookings } = bookingStore

// Define the props to pass through the row data from the Data Table
const booking = {
  id: "",
  name: "",
  section: "",
  capacity: "",
  datetime: Date()
}

/*
*/
async function submit(){
  createBooking(booking)
}

</script>

<template>

  <div>
    <!--
    <UButton @click="createBookingModal = true" 
        icon="i-heroicons-calendar"
        color="brown"
        variant="plain"
        size="xl"
        label="BOOK"
        class="text-3xl"
/> -->

    <UModal v-model="resBookingModal">
      <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <h1 class="text-lg text-center font-extrabold"> Create Booking </h1>
        </template>
        <UForm class="space-y-4" @submit="submit">
        <UFormGroup label="Booking Name">
            <!-- v-model for each specific booking/product data; booking.name -->
            <UInput placeholder="Booking Name"  v-model="booking.name"/>
          </UFormGroup>
          <UFormGroup label=" Table Section">
            <!-- <USelectMenu class="w-full lg:w-48" searchable placeholder="Search section" :options="['Breakfast', 'Lunch', 'Dinner']" /> -->
            <UInput placeholder="Front/ Back" v-model="booking.section"/>
          </UFormGroup>
          <UFormGroup label="Number of Guests">
            <UInput v-model="booking.capacity"/>
          </UFormGroup>
          <UFormGroup label="Date & Time">
            <UPopover :popper="{ placement: 'bottom-start' }">
              <UButton icon="i-heroicons-calendar-days-20-solid" :label="format(booking.datetime, 'd MMM, yyy')" color="gray" variant="ghost" />
              <template #panel>
                <DatePicker v-model="booking.datetime" mode="dateTime" @close="close" />
              </template>
            </UPopover>
          </UFormGroup>
          <UButton type="submit" color="gray" @click="createBookingModal = false">
            Submit
          </UButton>
        </UForm> 
      </UCard>
    </UModal>
  </div>
  
</template>

