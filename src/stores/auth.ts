import { defineStore } from "pinia";

export const useAuthStore = defineStore('authStore', {
  state: () => ({
		// List of all users
		users: [] 
	}),
  actions: {

  async signin() {
    await $fetch("/api/auth/login", { method: "POST" });
    /* await fetch(); */
    }
}
})
