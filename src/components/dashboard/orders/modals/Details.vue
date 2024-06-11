<script setup>

let isOpen = ref(false)

function edit() {
  editBooking(booking)
}

//TODO: Get from DB using Orders Store
const delivery = {
  "street": "Street",
  "number": "7",
  "city": "London",
  "region": "England",
  "country": "UK",
  "zip": "69420",
}

</script>

<template>
  <div>
    <UButton @click="isOpen = true" 
        icon="i-heroicons-truck-solid"
        size="sm"
        color="green"
        variant="ghost" 
    />
    <UModal v-model="isOpen">
      <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <h1 class="text-lg text-center font-extrabold"> Delivery Details </h1>
        </template>
        <UForm class="space-y-4" @submit="edit">
        <UFormGroup label="Street Name">
            <!-- v-model for each specific booking/product data; booking.name -->
            <UInput placeholder="Street Name" v-model="delivery.street"/>
          </UFormGroup>
          <UFormGroup label="Street Number">
            <UInput placeholder="Front/ Back" v-model="delivery.number"/>
          </UFormGroup>
          <UFormGroup label="City">
            <UInput v-model="delivery.city"/>
          </UFormGroup>
          <UFormGroup label="Region">
            <UInput v-model="delivery.region"/>
          </UFormGroup>
          <UFormGroup label="Country">
            <UInput v-model="delivery.country"/>
          </UFormGroup>
          <UFormGroup label="ZIP Code">
            <UInput v-model="delivery.zip"/>
          </UFormGroup>
          <UButton type="submit" color="gray" @click="isOpen = false">
            Submit
          </UButton> <!-- on submit, run update function -->
        </UForm> 
      </UCard>
    </UModal>
  </div>
  
</template>

