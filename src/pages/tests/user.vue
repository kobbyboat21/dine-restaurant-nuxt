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
          User Tests
        </UTooltip>
      </p>
    </div>

    <!-- CRUD Section -->
    <div class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="action in ['Create', 'Read', 'Update', 'Delete']"
          :key="action"
          class="bg-gray-800 rounded-lg shadow-md p-6"
        >
          <h3 class="text-xl font-bold mb-4">
            <UTooltip :text="`This card is for ${action} User operations`">
              {{ action }} User
            </UTooltip>
          </h3>
          <UButton
            color="purple"
            class="w-full"
            @click="handleAction(action.toLowerCase())"
          >
            <UTooltip :text="`Click to ${action} a User`">
              {{ action }} User
            </UTooltip>
          </UButton>
        </div>
      </div>
    </div>

    <!-- Tests Section -->
    <div class="container mx-auto px-4 py-8">
      <h2 class="text-2xl font-bold mb-4">
        <UTooltip text="This section displays the User Tests">
          User Tests
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
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// import { UIcon, UButton, UTooltip } from '@nuxt/ui'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

const tests = ref([
  { name: 'Create User Test', score: 0.8, isRunning: false, isPaused: false },
  { name: 'Read User Test', score: 0.6, isRunning: false, isPaused: false },
  { name: 'Update User Test', score: 0.9, isRunning: false, isPaused: false },
  { name: 'Delete User Test', score: 0.7, isRunning: false, isPaused: false },
  {
    name: 'Password Hash Comparison Test',
    score: 1,
    isRunning: false,
    isPaused: false,
  },
  {
    name: 'Authentication Token Generation Test',
    score: 0.4,
    isRunning: false,
    isPaused: false,
  },
])

const handleAction = async (action) => {
  console.log(`Handling ${action} user action`)

  // Create
  if (action === 'create') {
    const newUser = {
      _id: 1,
      username: 'NewUser',
      email: 'newuser@example.com',
      password: 'password123',
    }
    await userStore.createUser(newUser)
  }

  // Read
  if (action === 'read') {
    const users = await userStore.getUsers()
    console.log('Retrieved users:', users)
  }

  // Update
  if (action === 'update') {
    const userToUpdate = userStore.users[0]
    if (userToUpdate) {
      userToUpdate.name = 'Updated User'
      await userStore.updateUser(userToUpdate)
    }
  }

  // Delete
  if (action === 'delete') {
    const userToDelete = userStore.users[0]
    if (userToDelete) {
      await userStore.deleteUser(userToDelete)
    }
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
</script>

