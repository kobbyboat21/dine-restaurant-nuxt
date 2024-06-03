import { i as defineStore } from '../server.mjs';

const useLunchStore = defineStore(
  "lunchStore",
  {
    state: () => ({
      // List of all meals
      lunch_meals: []
    }),
    actions: {
      async getLunch() {
        let data = await $fetch("/api/menus/lunch");
        this.lunch_meals = data;
        return data;
      },
      async createLunchMeal(meal) {
        let id = this.lunch_meals.length + 1;
        meal.id = id;
        await $fetch(
          "/api/menus/lunch/create",
          {
            // $fetch sends request to api which sends it to database to add the new lunch meal
            method: "POST",
            //"POST" is an http method used to send data, in this case, to the API
            body: meal
          }
        );
        this.lunch_meals.push(meal);
        console.log("Creating lunch meal for the following meal:");
        console.log(meal);
      },
      async editLunch(meal) {
        let found = this.lunch_meals.find((p) => p.id === meal.id);
        if (found) {
          console.log("edit" + found.name);
          found.name = meal.name;
          found.price = meal.price;
          found.description = meal.description;
          found.ingredients = meal.ingredients;
          found.section = meal.section;
          let id = found._id;
          let edit_endpoint = `/api/menus/lunch/${id}`;
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
      async deleteLunch(meal) {
        let foundIndex = this.lunch_meals.findIndex((p) => p.id === meal.id);
        let found = this.lunch_meals.find((p) => p.id === meal.id);
        console.log("delete" + meal.name);
        if (foundIndex !== -1)
          this.lunch_meals.splice(foundIndex, 1);
        let id = found._id;
        let delete_endpoint = `/api/menus/lunch/${id}`;
        await $fetch(delete_endpoint, {
          method: "DELETE"
        });
      }
    }
  }
);

export { useLunchStore as u };
//# sourceMappingURL=lunch_menu-10f9d72d.mjs.map
