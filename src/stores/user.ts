import { defineStore } from "pinia";
import { useFetch } from '#app';

export const useUserStore = defineStore('userStore', {
  state: () => ({
    users: [],
  }),
  actions: {
    async getUsers() {
      const data = await useFetch("/api/users");
      return data;
    },

    async createUser(user) {
      await $fetch("/api/users/create", {
        method: "POST",
        body: user,
      });
      this.$patch((state) => {
        state.users.push(user);
      });
    },

    async updateUser(user) {
      await $fetch(`/api/users/${user._id}`, {
        method: "PUT",
        body: user,
      });
      this.$patch((state) => {
        const foundIndex = state.users.findIndex((p) => p._id === user._id);
        if (foundIndex !== -1) {
          state.users.splice(foundIndex, 1, user);
        }
      });
    },

    async deleteUser(user) {
      try {
        await $fetch(`/api/users/${user._id}`, {
          method: "DELETE",
        });
        this.$patch((state) => {
          const foundIndex = state.users.findIndex((p) => p._id === user._id);
          if (foundIndex !== -1) {
            state.users.splice(foundIndex, 1);
          }
        });
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    },
  },
});

