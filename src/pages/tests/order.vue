<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <!-- Heading Section -->
    <div class="py-8">
      <h1 class="text-4xl font-bold text-center mb-2">
        <UTooltip text="This is the main heading of the Testing Suite">
          Testing Suite
        </UTooltip>
      </h1>
      <p class="text-xl text-center text-gray-400">
        <UTooltip text="This subheading describes the purpose of the Testing Suite">
          Order Tests
        </UTooltip>
      </p>
    </div>

    <!-- CRUD Section -->
    <div class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="action in ['Create', 'Read', 'Update', 'Delete', 'Populate Orders']"
          :key="action"
          class="bg-gray-800 rounded-lg shadow-md p-6"
        >
          <h3 class="text-xl font-bold mb-4">
            <UTooltip :text="`This card is for ${action} Order operations`">
              {{ action }} Order
            </UTooltip>
          </h3>
          <UButton
            color="purple"
            class="w-full"
            @click="handleAction(action.toLowerCase())"
          >
            <UTooltip :text="`Click to ${action} an Order`">
              {{ action }} Order
            </UTooltip>
          </UButton>
        </div>
      </div>
    </div>

    <!-- Tests Section -->
    <div class="container mx-auto px-4 py-8">
      <h2 class="text-2xl font-bold mb-4">
        <UTooltip text="This section displays the Order Tests">
          Order Tests
        </UTooltip>
      </h2>
      <ul class="space-y-2">
        <li
          v-for="(test, index) in tests"
          :key="index"
          class="bg-gray-800 rounded-lg shadow-md p-4 flex items-center justify-between"
        >
          <div class="flex items-center">
            <span class="mr-4">
              <UTooltip :text="`This test has a score of ${test.score}`">
                [{{ test.score }}] {{ test.name }}
              </UTooltip>
            </span>

            <UIcon
              v-if="!tests[index].isRunning"
              @click="startTest(index)"
              name="i-ph-play"
              class="mr-2 cursor-pointer"
              dynamic
            >
              <UTooltip text="Click to start the test">
                <template #content>Start Test</template>
              </UTooltip>
            </UIcon>
            <UIcon
              v-else-if="tests[index].isRunning && !tests[index].isPaused"
              @click="pauseTest(index)"
              name="i-heroicons-pause"
              class="mr-2 cursor-pointer"
            >
              <UTooltip text="Click to pause the test">
                <template #content>Pause Test</template>
              </UTooltip>
            </UIcon>
            <UIcon
              v-else
              @click="resumeTest(index)"
              name="i-heroicons-play"
              class="mr-2 cursor-pointer"
            >
              <UTooltip text="Click to resume the test">
                <template #content>Resume Test</template>
              </UTooltip>
            </UIcon>
          </div>
          <div
            class="h-8 w-full max-w-xs rounded-full"
            :class="getHealthBarColor(test.score)"
          ></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useOrderStore } from '@/stores/orders'

const orderStore = useOrderStore()

const tests = ref([
  { name: 'Create Order Test', score: 0.8, isRunning: false, isPaused: false },
  { name: 'Read Order Test', score: 0.6, isRunning: false, isPaused: false },
  { name: 'Update Order Test', score: 0.9, isRunning: false, isPaused: false },
  { name: 'Delete Order Test', score: 0.7, isRunning: false, isPaused: false },
])

const handleAction = async (action) => {
  console.log(`Handling ${action} order action`)

  // Create
  if (action === 'create') {
    const newOrder = {
      orderId: 1,
      customerId: 1,
      platformName: 'Uber Eats',
      orderItemsList: [],
      orderValue: 10.99,
      paymentMethod: 'Credit Card',
      timestamps: {
        placed: new Date(),
        prepared: null,
        outForDelivery: null,
        delivered: null,
      },
      deliveryInfo: {
        name: 'John Doe',
        address: {
          street: '123 Main St',
          propertyNumber: '1',
          city: 'Anytown',
          region: 'CA',
          country: 'USA',
          zipCode: '12345',
        },
      },
    }
    await orderStore.createOrder(newOrder)
  }

  // Read
  if (action === 'read') {
    await orderStore.getOrders()
    console.log('Retrieved orders:', orderStore.orders)
  }

  // Update
  if (action === 'update') {
    const orderToUpdate = orderStore.orders[0]
    if (orderToUpdate) {
      orderToUpdate.name = 'Updated Order'
      await orderStore.updateOrder(orderToUpdate)
    }
  }

  // Delete
  if (action === 'delete') {
    const orderToDelete = orderStore.orders[0]
    if (orderToDelete) {
      await orderStore.deleteOrder(orderToDelete)
    }
  }

  // Populate Orders
  if (action === 'populate orders') {
    await populateOrders()
  }
}

const startTest = (index) => {
  tests.value[index].isRunning = true
}

const pauseTest = (index) => {
  tests.value[index].isPaused = true
}

const resumeTest = (index) => {
  tests.value[index].isPaused = false
}

const getHealthBarColor = (score) => {
  if (score === 1) return 'bg-green-500'
  if (score >= 0.9) return 'bg-lime-500'
  if (score >= 0.7) return 'bg-yellow-500'
  if (score >= 0.2) return 'bg-orange-500'
  return 'bg-red-500'
}

const populateOrders = async () => {
  const orders = [
    {
      orderId: 1,
      customerId: 1,
      platformName: 'Uber Eats',
      orderItemsList: [],
      orderValue: 10.99,
      paymentMethod: 'Credit Card',
      timestamps: {
        placed: new Date(),
        prepared: null,
        outForDelivery: null,
        delivered: null,
      },
      deliveryInfo: {
        name: 'John Doe',
        address: {
          street: '123 Main St',
          propertyNumber: '1',
          city: 'Anytown',
          region: 'CA',
          country: 'USA',
          zipCode: '12345',
        },
      },
    },
    {
      orderId: 2,
      customerId: 2,
      platformName: 'DoorDash',
      orderItemsList: [],
      orderValue: 15.99,
      paymentMethod: 'Visa',
      timestamps: {
        placed: new Date(),
        prepared: null,
        outForDelivery: null,
        delivered: null,
      },
      deliveryInfo: {
        name: 'Jane Smith',
        address: {
          street: '456 Oak Rd',
          propertyNumber: '2',
          city: 'Somewhere',
          region: 'NY',
          country: 'USA',
          zipCode: '54321',
        },
      },
    },
    // Add more orders as needed
  ]

  for (const order of orders) {
    await orderStore.createOrder(order)
  }
}
</script>
