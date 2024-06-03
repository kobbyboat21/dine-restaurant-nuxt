import { i as defineStore } from '../server.mjs';

const useDinnerStore = defineStore(
  "dinnerStore",
  {
    state: () => ({
      // List of all meals
      dinner_meals: []
    }),
    actions: {
      async getDinner() {
        let data = await $fetch("/api/menus/dinner");
        this.dinner_meals = data;
        return data;
      },
      async createDinnerMeal(meal) {
        let id = this.dinner_meals.length + 1;
        meal.id = id;
        await $fetch(
          "/api/menus/dinner/create",
          {
            // $fetch sends request to api which sends it to database to add the new dinner meal
            method: "POST",
            //"POST" is an http method used to send data, in this case, to the API
            body: meal
          }
        );
        this.dinner_meals.push(meal);
        console.log("Creating dinner meal for the following meal:");
        console.log(meal);
      },
      async editDinner(meal) {
        let found = this.dinner_meals.find((p) => p.id === meal.id);
        if (found) {
          console.log("edit" + found.name);
          found.name = meal.name;
          found.price = meal.price;
          found.description = meal.description;
          found.ingredients = meal.ingredients;
          found.section = meal.section;
          let id = found._id;
          let edit_endpoint = `/api/menus/dinner/${id}`;
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
      async deleteDinner(meal) {
        let foundIndex = this.dinner_meals.findIndex((p) => p.id === meal.id);
        let found = this.dinner_meals.find((p) => p.id === meal.id);
        console.log("delete" + meal.name);
        if (foundIndex !== -1)
          this.dinner_meals.splice(foundIndex, 1);
        let id = found._id;
        let delete_endpoint = `/api/menus/dinner/${id}`;
        await $fetch(delete_endpoint, {
          method: "DELETE"
        });
      }
    }
  }
);

export { useDinnerStore as u };
//# sourceMappingURL=dinner_menu-e954e986.mjs.map
