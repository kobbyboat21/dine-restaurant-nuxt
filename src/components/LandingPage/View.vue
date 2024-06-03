<script>


</script>

<template>
  <div class="landing-page-view bg-white overflow-x-hidden">
    <LandingPageNavbar class="mt-2"/>
    <LandingPageSectionHero/> 
    <!-- <LandingPageSectionRestaurantpic/> -->
    <div class="overflow-hidden">
      <LandingPageSectionBreakfast/>
      <UIcon name="i-bx-baguette" 
        class="absolute z-20 left-[3.5rem] top-[153rem] w-[15rem] h-[15rem] text-opacity-10 md:absolute md:z-20 md:left-[74rem] md:top-[157.75rem] md:w-[30rem] md:h-[30rem] text-red-100 md:text-opacity-30 overflow-hidden"
        data-aos="flip-right" data-aos-duration="1750" dynamic />
      <!--
      <UIcon name="i-bx-baguette" 
        class="absolute z-20 left-[62em] top-[160.75rem] w-[30rem] h-[30rem] text-red-100 text-opacity-30 overflow-hidden"
        data-aos="flip-right" data-aos-duration="1750" dynamic />
      -->
    </div>
    <LandingPageSectionAllday/> 
  <UIcon name="i-bx-bowl-hot"
    class="absolute z-20 left-[6.5rem] top-[236.5rem] w-[15rem] h-[15rem] text-opacity-10 md:absolute md:z-20 md:left-[-13rem] md:top-[225.2rem] md:w-[30rem] md:h-[30rem] text-red-100 md:text-opacity-30 overflow-hidden" 
    data-aos="flip-left" data-aos-duration="1750" dynamic />
    <div class="overflow-hidden">
    <LandingPageSectionDinner/>
  <UIcon name="i-bx-bowl-rice" 
    class="absolute z-20 left-[15.5rem] top-[332rem] w-[15rem] h-[15rem] text-opacity-20 md:absolute md:z-20 md:left-[76rem] md:top-[285rem] md:w-[30rem] md:h-[30rem] text-red-100 md:text-opacity-30 overflow-hidden"
    data-aos="flip-right" data-aos-duration="1750" dynamic />
  </div>
    <LandingPageSectionContact/>
    <!--
    <LandingPageSectionContact/>
  -->
  </div>
</template>

<style>

landing-page-view {
background-color: white;
}

</style>
