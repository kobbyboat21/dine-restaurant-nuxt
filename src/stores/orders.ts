import { defineStore } from "pinia";
import { useFetch } from '#app';

export const useOrderStore = defineStore('orderStore', {
  state: () => ({
    orders: [],
    mostOrderedBreakfastMeal: null,
    mostOrderedLunchMeal: null,
    mostOrderedDinnerMeal: null,
    upcomingOrders: [],
    completedOrders: [],
    mostPopularPaymentMethod: null,
    mostPopularPlatform: null,
    medianOrderValue: null,
  }),
  actions: {
    async getOrders() {
      const data = await useFetch("/api/orders");
      this.$patch((state) => {
        state.orders = data.data;
      });
      return data.data
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
      return this.mostOrderedBreakfastMeal
    },

    async getMostOrderedLunchMeal() {
      const data = await useFetch("/api/orders/most-ordered-lunch");
      this.$patch((state) => {
        state.mostOrderedLunchMeal = data.value;
      });
      return this.mostOrderedLunchMeal
    },

    async getMostOrderedDinnerMeal() {
      const data = await useFetch("/api/orders/most-ordered-dinner");
      this.$patch((state) => {
        state.mostOrderedDinnerMeal = data.value;
      });
      return this.mostOrderedDinnerMeal
    },

    async getUpcomingOrders(startDate, endDate) {
      const data = await useFetch(`/api/orders/upcoming?start_date=${startDate}&end_date=${endDate}`);
      this.$patch((state) => {
        state.upcomingOrders = data.data;
      });
      return this.upcomingOrders
    },

    async getCompletedOrders(startDate, endDate) {
      const data = await useFetch(`/api/orders/completed?start_date=${startDate}&end_date=${endDate}`);
      this.$patch((state) => {
        state.completedOrders = data.data;
      });
      return this.completedOrders
    },
    async getUpcomingOrdersCount(startDate, endDate) {
      const data = await useFetch(`/api/orders/upcoming?start_date=${startDate}&end_date=${endDate}`);
      this.$patch((state) => {
        state.upcomingOrders = data.data;
      });
      return JSON.parse(this.upcomingOrders).length
    },

    async getCompletedOrdersCount(startDate, endDate) {
      const data = await useFetch(`/api/orders/completed?start_date=${startDate}&end_date=${endDate}`);
      this.$patch((state) => {
        state.completedOrders = data.data;
      });
      return JSON.parse(this.completedOrders).length
    },

    async getMostPopularPaymentMethod(startDate, endDate) {
      const data = await useFetch(`/api/orders/analytics/most-popular/payment-method?start_date=${startDate}&end_date=${endDate}`);
      this.$patch((state) => {
        state.mostPopularPaymentMethod = data.data;
      });
      return this.mostPopularPaymentMethod
    },

    async getMostPopularPlatform(startDate, endDate) {
      const data = await useFetch(`/api/orders/analytics/most-popular/platform?start_date=${startDate}&end_date=${endDate}`);
      this.$patch((state) => {
        state.mostPopularPlatform = data.data;
      });
      return this.mostPopularPlatform
    },

    async getMedianOrderValue(startDate, endDate) {
      const data = await useFetch(`/api/orders/analytics/median-order-value?start_date=${startDate}&end_date=${endDate}`);
      this.$patch((state) => {
        state.medianOrderValue = data.data;
      });
      return this.medianOrderValue
    },
  },
});

