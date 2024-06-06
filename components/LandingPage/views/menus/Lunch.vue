<script setup>

const main_section = "Main"
const sides_section = "Sides"
const drinks_section = "Drinks"

const lunchStore = useLunchStore()
const { getLunch } = lunchStore
const { lunch_meals } = lunchStore

	useAsyncData(async () => await lunchStore.getLunch(), {
		initialCache: false,
	});


console.log(lunch_meals)

</script>


<template>

  <LandingPageNavbar class="mt-2"/>
<div class="z-100 mt-24">
    <div class="flex justify-end text-4xl mb-7 mr-6 mt-1 sm:left-[70rem] sm:mb-20 sm:text-6xl sm:mt-16">

      <span class="menu-title-break tracking-wider">Lunch</span>
    </div>
    <div class="menu-body ml-7 sm:ml-28 mr-4 "> 
        <div class="menu-summary text-sm mb-10 mr-4 mt-8">
          <span>Lunch is served Monday to Saturday from 11:30am until 4:30pm. Last orders by 4:30pm. </span>
        </div>
      <div>
  <div class="grid grid-cols-1 sm:grid-cols-2 ">
      <div class="sm:col-start-1">
          <div class="mt-5 mb-3 text-md tracking-wider">
            <span>MAINS</span>
          </div>
        <div v-for="meal in lunch_meals">
          <div v-if="meal.section === main_section">
            <div class="flex justify-between mb-2 col-start-1">
              <div>
                <span class="meal-name">
                  {{ meal.name }}
                  <p class="text-xs"> {{ meal.description }} </p>
                </span>
              </div>
              <div>
                <span class="meal-price mr-7 sm:mr-24">
                  {{ meal.price }}
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div class="mb-10 sm:col-start-2">
          <div class="mt-5 mb-3 text-md tracking-wider col-start-2">
            <span>SIDES</span>
          </div>
        <div v-for="meal in lunch_meals">
          <div v-if="meal.section === sides_section">
            <div class="flex justify-between mb-2">
              <div>
                <span class="meal-name">
                  {{ meal.name }}
                  <p class="text-xs"> {{ meal.description }} </p>
                </span>
              </div>
              <div>
                <span class="meal-price mr-7 sm:mr-24">
                  {{ meal.price }}
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>
</div>
</template>


<style scoped>

  .menu-title-break{
    font-family: Libre Baskerville;
    color: rgba(93, 80, 80, 1);
  }

  .menu-title-fast{
    font-family: Libre Baskerville; 
    color: rgba(93, 80, 80, 1);
  }

@media (max-width:479px) {
  .menu-title-break{
    font-family: Libre Baskerville;
    color: rgba(93, 80, 80, 1);
  }

  .menu-title-fast{
    font-family: Libre Baskerville; 
    color: rgba(93, 80, 80, 1);
  }
}
/*
  .menu-title-fast{
    position: relative;
    top:0rem;
    left:4rem;
    font-family: LibreBaskerville;
    font-weight: 400;
    text-decoration: none;
  }
}
*/

</style>
