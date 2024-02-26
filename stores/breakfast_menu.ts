import { defineStore } from "pinia";

export const useBreakfastStore = defineStore('breakfastStore', {
  state: () => ({
		// List of all meals
		breakfast_meals: [] 
	}),
  actions: {
 
  async getBreakfast() {
    let data = await $fetch("/api/menus/breakfast") // meals gotten from the database
      //
  // 2 -- Use Javascript For - In Loop on data array to set breakfast_meals to contain data's contents
    this.breakfast_meals = data
    return data
  },

  async createBreakfastMeal(meal) {
    // Get Auto-increment ID
    let id = this.breakfast_meals.length + 1
    // Assign ID to meal
    meal.id = id
    // POST Request
    await $fetch( "/api/menus/breakfast/create" ,  {
        // $fetch sends request to api which sends it to database to add the new breakfast meal
      method: "POST", //"POST" is an http method used to send data, in this case, to the API
      body: meal
    }
    )
    this.breakfast_meals.push(meal)
    console.log("Creating breakfast meal for the following meal:")
    console.log(meal)
  },

  async editBreakfast(meal) {
    let found = this.breakfast_meals.find(p => p.id === meal.id)
    if (found) {
      console.log('edit' + found.name)
      found.name = meal.name
      found.price = meal.price
      found.description = meal.description
      found.ingredients = meal.ingredients
      found.section = meal.section
      let id = found._id

      let edit_endpoint = `/api/menus/breakfast/${id}`

      await $fetch(edit_endpoint, {
          method: "PUT", // "PUT" as well is an http method that sends data to be replaced/ updated
          body: found
        }
        )
    }

      
  },

  async deleteBreakfast(meal) {
    let foundIndex = this.breakfast_meals.findIndex(p => p.id === meal.id)
    let found = this.breakfast_meals.find(p => p.id === meal.id)
    console.log('delete' + meal.name)
    if (foundIndex !== -1) this.breakfast_meals.splice(foundIndex, 1)

    let id = found._id

    let delete_endpoint = `/api/menus/breakfast/${id}`
      
    await $fetch(delete_endpoint, {
      method: "DELETE",
      })

  },

}
}
) /* 
    id: 1,
    name: 'Avocado Toast with Smoked Salmon',
    price: '$17',
    description:'Sliced avocadp on toasted artisanal bread, topped with smoked salmon, poached eggs, and a drizzle of lemon-infused hollandaise sauce. Served with a side of mixed greens.',
    image: 'https://www.seriouseats.com/thmb/lVZskabVRdVqcJIUeD3OJlD-mI0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__05__20160502-avocado-toast-vicky-wasik-salmon-8-a7a4152ebdf3456a9df61ee9dd1179d6.jpg',
    ingredients: 'Artisanal bread, Avocado, Smoked salmon, Eggs, Hollandaise sauce, Mixed greens',
    section: 'Main'
  }, 
    {
    id: 2,
    name: 'Eggs Benedict Trio',
    price: '$16',
    description: 'Three variations of eggs Benedict - classic with Canadian bacon, spinach and mushroom with truffle hollandaise, and smoked salmon with dill hollandaise. Accompanied by crispy hash browns.',
    image: 'https://ik.imagekit.io/munchery/blog/tr:w-768/perfect-eggs-benedict-3-ways-and-the-best-breakfast-potatoes-on-the-side.jpeg',
    ingredients: 'English muffins, Canadian bacon, Spinach, Mushrooms, Truffle hollandaise sauce, Smoked salmon, Poached eggs, Hash browns',
    section: 'Main'
  }, 
    {
    id: 3,
    name: 'Chia Seed Pudding Parfait',
    price: '$14',
    description: 'Layers of vanilla-infused chia seed pudding, fresh mixed berries, and granola, topped with a dollop of Greek yogurt. Served with a side of honey and a selection of tropical fruits.',
    image: 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2014/11/Pomegranate-Chia-Pudding-Parfait-5.jpg',
    ingredients: 'Chia seeds, Vanilla-infused almond milk, Mixed berries, Granola, Greek yogurt, Honey, Tropical fruits',
    section: Side
  }]) */
 
