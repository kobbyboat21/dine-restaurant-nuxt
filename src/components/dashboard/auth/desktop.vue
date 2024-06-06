<template>
  <div class="flex items-center justify-center min-h-screen w-full h-screen z-50">
    <div class="max-w-md w-full bg-gray-600 rounded-lg shadow-md p-6 z-10 opacity-70">
      <h2 class="text-2xl font-bold mb-6 text-center">Sign In</h2>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <UInput
            v-model="email"
            type="email"
            placeholder="Email"
            class="w-full"
            required
          />
        </div>
        <div class="mb-6">
          <UInput
            v-model="password"
            type="password"
            placeholder="Password"
            class="w-full"
            required
          />
        </div>
        <UButton
          type="submit"
          class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          :disabled="isLoading"
        >
          <span v-if="isLoading">Loading...</span>
          <span v-else>Sign In</span>
        </UButton>
        <div v-if="error" class="mt-4 text-red-500 text-center">{{ error }}</div>
      </form>
    </div>
  </div>
  <DashboardUtilsBackgroundsBlurryRestaurant class="z-0 bg-black w-full h-screen"/>
</template>

<script setup>
import { ref } from 'vue'
const { signIn, token, data, status, lastRefreshedAt } = useAuth()

const email = ref('')
const password = ref('')
const error = ref('')
const isLoading = ref(false)


const handleSubmit = async () => {
  try {
    isLoading.value = true
    const response = await signIn('credentials', {
      email: email.value,
      password: password.value,
      // redirect: false
      callbackUrl: '/dashboard',
      external: true
    })

    if (response.error) {
      error.value = response.error
    } else {
      // Handle successful login
      // You can redirect the user or store the user data in the state
      console.log('Login successful:', response.user)
    }
  } catch (err) {
    error.value = 'An error occurred during login'
    console.error(err)
  } finally {
    isLoading.value = false
  }
}
</script>
