import { defineStore } from "pinia";

export const useBookingStore = defineStore('bookingStore', {
  state: () => ({
		// List of all bookings
		bookings: [],
    upcomingBookings: [],
    completedBookings: [],
    cancelledBookings: [],

	}),
  actions: {
 
  async getBookings() {
    let data = await $fetch("/api/bookings/") // bookings gotten from the database
      //
  // 2 -- Use Javascript For - In Loop on data array to set bookings to contain data's contents
    this.bookings = data
    return data
  },

  async getCompletedBookings(startDate, endDate) {
    const data = await useFetch(`/api/bookings/completed?start_date=${startDate}&end_date=${endDate}`);
    this.$patch((state) => {
      state.completedBookings = data.data;
    });
    return this.completedBookings
  },

  async getUpcomingBookings(startDate, endDate) {
    const data = await useFetch(`/api/bookings/upcoming?start_date=${startDate}&end_date=${endDate}`);
    // console.log("UPCOmIng", data)
    this.$patch((state) => {
      state.upcomingBookings = data.data;
    });
    return this.upcomingBookings },

  async getCancelledBookings(startDate, endDate) {
    const data = await useFetch(`/api/bookings/cancelled?start_date=${startDate}&end_date=${endDate}`);
    this.$patch((state) => {
      state.cancelledBookings = data.data;
    });
    return this.cancelledBookings
  },

  async getCompletedBookingsCount(startDate, endDate) {
    const data = await useFetch(`/api/bookings/completed?start_date=${startDate}&end_date=${endDate}`);
    // console.log("UPCOmIng", data)
    this.$patch((state) => {
      state.completedBookings = data.data;
    });
    return JSON.parse(this.completedBookings).length
  },

  async getUpcomingBookingsCount(startDate, endDate) {
    const data = await useFetch(`/api/bookings/upcoming?start_date=${startDate}&end_date=${endDate}`);
    this.$patch((state) => {
      state.upcomingBookings = data.data;
    });
    return JSON.parse(this.upcomingBookings).length
  },

  async getCancelledBookingsCount(startDate, endDate) {
    const data = await useFetch(`/api/bookings/cancelled?start_date=${startDate}&end_date=${endDate}`);
    this.$patch((state) => {
      state.cancelledBookings = data.data;
    });
    return JSON.parse(this.cancelledBookings).length
  },

  async getRemainingCapacityCount(startDate, endDate) {
    const upcomingBookingsCount = await this.getUpcomingBookingsCount(startDate, endDate);
    const totalCapacity = 200; // Will be manually entered by restaurant
    const remainingCapacity = totalCapacity - upcomingBookingsCount;
    console.log(`Remaining capacity: ${remainingCapacity}`)
    return remainingCapacity
    },

  async createBooking(booking) {
    // Get Auto-increment ID
    let id = this.bookings.length + 1
    // Assign ID to booking
    booking.id = id
    // POST Request
    await $fetch( "/api/reservations/create" ,  {
        // $fetch sends request to api which sends it to database to add the new breakfast booking
      method: "POST", //"POST" is an http method used to send data, in this case, to the API
      body: booking
    }
    )
    this.bookings.push(booking)
    console.log("Creating the following booking:")
    console.log(booking)
  },

  async editBooking(booking) {
    let found = this.bookings.find(p => p.id === booking.id)
    if (found) {
      console.log('edit' + found.name)
      found.name = booking.name
      found.section = booking.section
      found.capacity = booking.capacity
      found.status = booking.status
      found.datetime = booking.datetime
      let id = found._id

      let edit_endpoint = `/api/reservations/${id}`

      await $fetch(edit_endpoint, {
          method: "PUT", // "PUT" as well is an http method that sends data to be replaced/ updated
          body: found
        }
        )
    }
      
  },

  async deleteBooking(booking) {
    let foundIndex = this.bookings.findIndex(p => p.id === booking.id)
    let found = this.bookings.find(p => p.id === booking.id)
    console.log('delete' + booking.name)
    if (foundIndex !== -1) this.bookings.splice(foundIndex, 1)

    let id = found._id

    let delete_endpoint = `/api/reservations/${id}`
      
    await $fetch(delete_endpoint, {
      method: "DELETE",
      })

  },

}
}
) /* 
const bookings = [{
  id: 1,
  name: 'Marcus Smart',
  time: '10:00',
  section: 'Front',
  capacity: '4',
}, {
  
  id: 2,
  name: 'Elon Musk',
  time: '9:30',
  section: 'Main',
  capacity: '2',
  
}, {
  
  id: 3,
  name: 'Theresa May',
  time: '11:00',
  section: 'Back',
  capacity: '4'
}
*/
