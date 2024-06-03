import { defineStore } from "pinia";

export const useUserStore = defineStore('userStore', {
  state: () => ({
		// List of all users
		users: [] 
	}),
  actions: {
 
  async getUsers() {
    let data = await $fetch("/api/users") // users gotten from the database
      //
  // 2 -- Use Javascript For - In Loop on data array to set users to contain data's contents
    this.users = data
    return data
  },
/*
  async createUser(user) {
    // Get Auto-increment ID
    let id = this.users.length + 1
    // Assign ID to user
    user.id = id
    // POST Request
    await $fetch( "/api/reservations/create" ,  {
        // $fetch sends request to api which sends it to database to add the new breakfast user
      method: "POST", //"POST" is an http method used to send data, in this case, to the API
      body: user
    }
    )
    this.users.push(user)
    console.log("Creating the following user:")
    console.log(user)
  },

  async editUser(user) {
    let found = this.users.find(p => p.id === user.id)
    if (found) {
      console.log('edit' + found.name)
      found.name = user.name
      found.email = user.email
      let id = found._id

      let edit_endpoint = `/api/reservations/${id}`

      await $fetch(edit_endpoint, {
          method: "PUT", // "PUT" as well is an http method that sends data to be replaced/ updated
          body: found
        }
        )
    }

      
  },

  async deleteUser(user) {
    let foundIndex = this.users.findIndex(p => p.id === user.id)
    let found = this.users.find(p => p.id === user.id)
    console.log('delete' + user.name)
    if (foundIndex !== -1) this.users.splice(foundIndex, 1)

    let id = found._id

    let delete_endpoint = `/api/reservations/${id}`
      
    await $fetch(delete_endpoint, {
      method: "DELETE",
      })

  },
*/
}
}
) 
