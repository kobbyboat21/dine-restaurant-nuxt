import { defineStore } from "pinia";
import { useFetch } from '#app';

export const useOrderStore = defineStore('orderStore', {
  state: () => ({
    orders: [],
    mostOrderedBreakfastMeal: null,
    mostOrderedLunchMeal: null,
    mostOrderedDinnerMeal: null,
  }),
  actions: {
    async getOrders() {
      const data = await useFetch("/api/orders");
      this.$patch((state) => {
        state.orders = data.value;
      });
    },

    async createOrder(order) {
      await $fetch("/api/orders/create", {
        method: "POST",
        body: order,
      });
      this.$patch((state) => {
        state.orders.push(order);
      });
    },

    async updateOrder(order) {
      await $fetch(`/api/orders/${order._id}`, {
        method: "PUT",
        body: order,
      });
      this.$patch((state) => {
        const foundIndex = state.orders.findIndex((p) => p._id === order._id);
        if (foundIndex !== -1) {
          state.orders.splice(foundIndex, 1, order);
        }
      });
    },

    async deleteOrder(order) {
      try {
        await $fetch(`/api/orders/${order._id}`, {
          method: "DELETE",
        });
        this.$patch((state) => {
          const foundIndex = state.orders.findIndex((p) => p._id === order._id);
          if (foundIndex !== -1) {
            state.orders.splice(foundIndex, 1);
          }
        });
      } catch (error) {
        console.error("Error deleting order:", error);
      }
    },

    async getMostOrderedBreakfastMeal() {
      const data = await useFetch("/api/orders/most-ordered-breakfast");
      this.$patch((state) => {
        state.mostOrderedBreakfastMeal = data.value;
      });
    },

    async getMostOrderedLunchMeal() {
      const data = await useFetch("/api/orders/most-ordered-lunch");
      this.$patch((state) => {
        state.mostOrderedLunchMeal = data.value;
      });
    },

    async getMostOrderedDinnerMeal() {
      const data = await useFetch("/api/orders/most-ordered-dinner");
      this.$patch((state) => {
        state.mostOrderedDinnerMeal = data.value;
      });
    },
  },
});
