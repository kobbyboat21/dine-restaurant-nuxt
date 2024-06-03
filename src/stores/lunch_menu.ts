import { defineStore } from "pinia";

export const useLunchStore = defineStore('lunchStore', {

 state: () => ({
		// List of all meals
		lunch_meals: [] 
	}),
  actions: {
 
  async getLunch() {
    let data = await $fetch("/api/menus/lunch") // meals gotten from the database
      //
  // 2 -- Use Javascript For - In Loop on data array to set lunch_meals to contain data's contents
    this.lunch_meals = data
    return data
  },

  async createLunchMeal(meal) {
    // Get Auto-increment ID
    let id = this.lunch_meals.length + 1
    // Assign ID to meal
    meal.id = id
    // POST Request
    await $fetch( "/api/menus/lunch/create" ,  {
        // $fetch sends request to api which sends it to database to add the new lunch meal
      method: "POST", //"POST" is an http method used to send data, in this case, to the API
      body: meal
    }
    )
    this.lunch_meals.push(meal)
    console.log("Creating lunch meal for the following meal:")
    console.log(meal)
  },

  async editLunch(meal) {
    let found = this.lunch_meals.find(p => p.id === meal.id)
    if (found) {
      console.log('edit' + found.name)
      found.name = meal.name
      found.price = meal.price
      found.description = meal.description
      found.ingredients = meal.ingredients
      found.section = meal.section
      let id = found._id

      let edit_endpoint = `/api/menus/lunch/${id}`

      await $fetch(edit_endpoint, {
          method: "PUT", // "PUT" as well is an http method that sends data to be replaced/ updated
          body: found
        }
        )
    }

      
  },

  async deleteLunch(meal) {
    let foundIndex = this.lunch_meals.findIndex(p => p.id === meal.id)
    let found = this.lunch_meals.find(p => p.id === meal.id)
    console.log('delete' + meal.name)
    if (foundIndex !== -1) this.lunch_meals.splice(foundIndex, 1)

    let id = found._id

    let delete_endpoint = `/api/menus/lunch/${id}`
      
    await $fetch(delete_endpoint, {
      method: "DELETE",
      })

  },

}
}
) /* 


  /* const lunch_meals = ref([{
    id: 1,
    name: 'Grilled Chicken Quinoa Bowl',
    price: '$18',
    description: 'Grilled chicken breast served over a bed of tri-color quinoa, roasted vegetables, and baby spinach. Topped with a zesty lemon-tahini dressing and garnished with toasted pine nuts.',
    image: 'https://cdn-aboak.nitrocdn.com/QJsLnWfsWAiuukSIMowyVEHtotvSQZoR/assets/images/optimized/rev-cbe4481/www.slenderkitchen.com/sites/default/files/styles/featured_750/public/recipe_images/chicken-quinoa-bowl.jpg',
    ingredients: 'Grilled chicken breast, Tri-color quinoa, Roasted vegetables, Baby spinach, Lemon-tahini dressing, Toasted pine nuts',
    section: 'Lunch'
  }, {
    id: 2,
    name: 'Seared Ahi Tuna Salad',
    price: '$21',
    description: 'Sliced seared ahi tuna on a bed of mixed greens, cherry tomatoes, cucumber, and avocado. Drizzled with a soy-ginger vinaigrette and sprinkled with sesame seeds.',
    image: 'https://fitfoodiefinds.com/wp-content/uploads/2019/07/poke-bowl-14.jpg',
    ingredients: 'Ahi tuna, Mixed greens, Cherry tomatoes, Cucumber, Avocado, Soy-ginger vinaigrette, Sesame seeds',
    section: 'Lunch'
  }, {
    id: 3,
    name: 'Mushroom and Truffle Risotto',
    price: '$18',
    description: 'Creamy risotto with a medley of wild mushrooms, finished with truffle oil and Parmesan cheese. Garnished with fresh chives and served with a side of garlic bread.',
    image: 'https://www.lakeshorelady.com/wp-content/uploads/2021/02/mushroom-risotto-8.jpg',
    ingredients: 'Arborio rice, Wild mushrooms, Truffle oil, Parmesan cheese, Chives, Garlic bread',
    section: 'Lunch'
  }])*/
