import { i as defineStore } from '../server.mjs';

const useBreakfastStore = defineStore(
  "breakfastStore",
  {
    state: () => ({
      // List of all meals
      breakfast_meals: []
    }),
    actions: {
      async getBreakfast() {
        let data = await $fetch("/api/menus/breakfast");
        this.breakfast_meals = data;
        return data;
      },
      async createBreakfastMeal(meal) {
        let id = this.breakfast_meals.length + 1;
        meal.id = id;
        await $fetch(
          "/api/menus/breakfast/create",
          {
            // $fetch sends request to api which sends it to database to add the new breakfast meal
            method: "POST",
            //"POST" is an http method used to send data, in this case, to the API
            body: meal
          }
        );
        this.breakfast_meals.push(meal);
        console.log("Creating breakfast meal for the following meal:");
        console.log(meal);
      },
      async editBreakfast(meal) {
        let found = this.breakfast_meals.find((p) => p.id === meal.id);
        if (found) {
          console.log("edit" + found.name);
          found.name = meal.name;
          found.price = meal.price;
          found.description = meal.description;
          found.ingredients = meal.ingredients;
          found.section = meal.section;
          let id = found._id;
          let edit_endpoint = `/api/menus/breakfast/${id}`;
          await $fetch(
            edit_endpoint,
            {
              method: "PUT",
              // "PUT" as well is an http method that sends data to be replaced/ updated
              body: found
            }
          );
        }
      },
      async deleteBreakfast(meal) {
        let foundIndex = this.breakfast_meals.findIndex((p) => p.id === meal.id);
        let found = this.breakfast_meals.find((p) => p.id === meal.id);
        console.log("delete" + meal.name);
        if (foundIndex !== -1)
          this.breakfast_meals.splice(foundIndex, 1);
        let id = found._id;
        let delete_endpoint = `/api/menus/breakfast/${id}`;
        await $fetch(delete_endpoint, {
          method: "DELETE"
        });
      }
    }
  }
);

export { useBreakfastStore as u };
//# sourceMappingURL=breakfast_menu-81322d40.mjs.map
