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
 <!-- <div class="-menu-container grid grid-cols-1 sm:grid-cols-2 my-5">
    <div class="lunch-menu-bgimage absolute top-0 left-0 w-full h-screen 
      bg-[url(https://images.pexels.com/photos/4705833/https://images.pexels.com/photos/4705833/pexels-photo-4705833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)pexels-photo-4705833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)]"></div>

  <div
  class="bg-cover h-screen"
  style="background-image: url('https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"></div>
-->

  <LandingPageNavbar class="invisible sm:mt-4"/>
  <UIcon name="i-bx-menu" 
      class="visible absolute text-red-100 text-opacity-30 left-[0.5rem] top-[0.5rem] w-[3rem] h-[3rem] md:invisible" dynamic/>
  <div class="logo-pic relative left-[0.5rem] top-[-1.25rem] sm:invisible"> 
            <img
              alt="logo627"
              src="/LOGO.png"
              class="navbar-logo1 relative left-[10.5rem] top-[0.5rem] scale-50"
            />
          </div>
        <div class="relative left-[17rem] text-4xl mb-7 mt-1 sm:left-[70rem] sm:mb-20 sm:text-6xl sm:mt-16">

          <span class="menu-title-break relative top-[-1rem] left-[-2rem] tracking-wider">Lunch</span>
        </div>
    <div class="menu-body ml-7 sm:ml-28 mr-4 "> 
        <div class="menu-summary text-sm mb-10 mr-4 mt-8">
      <!--
          <span><h3>lunch is served Monday to Saturday from 9am </h3></span> 
<span><h3>until 11:30am. Last orders by 11:15am. </h3></span> -->
          <span>Lunch is served Monday to Saturday from 11:30am until 4:30pm. Last orders by 4:30pm. </span>
        </div>
      <div>
      <!-- div - tailwind grid 2 columns -->
    <!--
        <div class="ml-7 text-xl">
          <h1>MAINS</h1>
</div> -->
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
        <!--
        <div class="mt-5 mb-3 text-md tracking-wider">
          <span>DRINKS</span>
        </div>
        <div v-for="meal in lunch_meals">
          <div v-if="meal.section === drinks_section">
            <div class="flex justify-between">
              <div>
                <span class="meal-name">
                  {{ meal.name }}
                  <p class="text-xs"> {{ meal.description }} </p>
                </span>
              </div>
              <div>
                <span class="meal-price mr-6">
                  {{ meal.price }}
                </span>
              </div>

            </div>
          </div>
        </div>
        <h1>Sides</h1>
        <div v-for="meal in lunch_menu">
          <div v-if="meal.section === sides_section">
            <li>
              {{ meal.name}} {{meal.price}}
            </li>
          </div>
        </div>
        <h1>Drinks</h1>
        <div v-for="meal in lunch_menu">
          <div v-if="meal.section === drinks_section">
            <li>
              {{ meal.name}} {{meal.price}}
            </li>
          </div>
        </div>
-->
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
