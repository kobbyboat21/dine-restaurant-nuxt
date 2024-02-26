import { defineStore } from "pinia";

export const useDinnerStore = defineStore('dinnerStore', {
  state: () => ({
		// List of all meals
		dinner_meals: [] 
	}),
  actions: {
 
  async getDinner() {
    let data = await $fetch("/api/menus/dinner") // meals gotten from the database
      //
  // 2 -- Use Javascript For - In Loop on data array to set dinner_meals to contain data's contents
    this.dinner_meals = data
    return data
  },

  async createDinnerMeal(meal) {
    // Get Auto-increment ID
    let id = this.dinner_meals.length + 1
    // Assign ID to meal
    meal.id = id
    // POST Request
    await $fetch( "/api/menus/dinner/create" ,  {
        // $fetch sends request to api which sends it to database to add the new dinner meal
      method: "POST", //"POST" is an http method used to send data, in this case, to the API
      body: meal
    }
    )
    this.dinner_meals.push(meal)
    console.log("Creating dinner meal for the following meal:")
    console.log(meal)
  },

  async editDinner(meal) {
    let found = this.dinner_meals.find(p => p.id === meal.id)
    if (found) {
      console.log('edit' + found.name)
      found.name = meal.name
      found.price = meal.price
      found.description = meal.description
      found.ingredients = meal.ingredients
      found.section = meal.section
      let id = found._id

      let edit_endpoint = `/api/menus/dinner/${id}`

      await $fetch(edit_endpoint, {
          method: "PUT", // "PUT" as well is an http method that sends data to be replaced/ updated
          body: found

        }
        )
    }

      
  },

  async deleteDinner(meal) {
    let foundIndex = this.dinner_meals.findIndex(p => p.id === meal.id)
    let found = this.dinner_meals.find(p => p.id === meal.id)
    console.log('delete' + meal.name)
    if (foundIndex !== -1) this.dinner_meals.splice(foundIndex, 1)

    let id = found._id

    let delete_endpoint = `/api/menus/dinner/${id}`
      
    await $fetch(delete_endpoint, {
      method: "DELETE",
      })

  },

}
}
) /* 

  

  /* const dinner_meals = ref([{
    id: 1,
    name: 'Filet Mignon with Red Wine Reduction',
    price: '$31',
    description: 'Grilled filet mignon cooked to perfection, served with a rich red wine reduction sauce. Accompanied by garlic mashed potatoes and sautéed asparagus.',
    image: 'https://www.gritsandpinecones.com/wp-content/uploads/2022/02/filet-mignon-red-wine-sauce-final-plated.jpeg',
    ingredients: 'Filet mignon, Red wine reduction sauce, Garlic mashed potatoes, Asparagus',
    section: 'Dinner'
  }, {
    id: 2,
    name: 'Lobster Ravioli with Saffron Cream Sauce',
    price: '$29',
    description: 'Handmade lobster-filled ravioli in a delicate saffron-infused cream sauce, garnished with fresh basil and grated Parmesan. Served with a side of garlic bread.',
    image: 'https://img1.wsimg.com/isteam/ip/454a9109-bb4b-413c-84aa-8c1310a3d924/ravioli-0001.jpg/:/rs=w:1280',
    ingredients: 'Lobster-filled ravioli, Saffron cream sauce, Fresh basil, Parmesan cheese, Garlic bread',
    section: 'Dinner'
  }, {
    id: 3,
    name: 'Pan-Seared Sea Bass with Lemon Beurre Blanc',
    price: '$30',
    description: 'Pan-seared sea bass with a velvety lemon beurre blanc sauce. Accompanied by quinoa pilaf and roasted Brussels sprouts.',
    image: 'https://assets-global.website-files.com/6425f03eadc96686600b6d52/65037dfb29f7fb24d028bdde_Pan-Seared%20Sea%20Bass%20with%20Lemon%20Butter%20and%20Sauvignon%20Blanc.png',
    ingredients: 'Sea bass, Lemon beurre blanc sauce, Quinoa pilaf, Roasted Brussels sprouts',
    section: 'Dinner'
  }]) */
