<template>
  <div class="breakfast-section-container" v-bind:class="rootClassName">
    <div class="breakfast-section-breakfastslide Content">
      <div v-if="$viewport.isLessThan('tablet')">
        <LandingPageSectionBreakfastHeadlineMobile
          class="absolute top-[52rem] px-[1rem] 
        text-[2.25rem] font-sans-serif text-[rgba(89,76,76)]"/>
        <LandingPageSectionBreakfastMessageMobile
          class="absolute top-[58rem]"/>
      </div>
      <div v-else>
        <LandingPageSectionBreakfastHeadline/>
        <LandingPageSectionBreakfastMessage/>
        <UIcon name="i-bx-sun" 
          class="absolute z-20 left-[40rem] top-[4.5rem] w-[7rem] h-[7rem] text-red-100 text-opacity-30"
          data-aos="zoom-in-up" data-aos-duration="1750" dynamic />
      </div>
      <div class="breakfast-section-breakfastpic">
        <img
          alt="Rectangle182811"
          src="https://images.pexels.com/photos/3138576/pexels-photo-3138576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          class="breakfast-section-rectangle18 aos-item"
          data-aos="flip-left"  data-aos-duration="1750"
        />
      </div>
      <div class="breakfast-section-breakfastbutton">
        <button @click="gotoBreakfastMenu" type="button" class="breakfast-section-button button">
          Breakfast menu
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BREAKFASTSECTION',
  props: {
    rootClassName: String,
  },

  methods: { 
    gotoBreakfastMenu() {
      this.$router.push('/menus/breakfast');
    }
  },
  data() {
    return {
      rawt6v5: ' ',
      rawvwfu: ' ',
      rawchbu: ' ',
    }
  },
}
</script>

<style scoped>
.breakfast-section-container {
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.breakfast-section-breakfastslide {
  width: 100%;
  height: 1062px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-self: center;
  align-items: flex-start;
  flex-shrink: 0;
  background-image: linear-gradient(180deg, rgba(161, 139, 141, 1) 0%, rgba(161, 154, 139, 1) 100%);
}
.breakfast-section-container1 {
  top: 13rem;
  left: 0px;
  right: 0px;
  width: 1243.999984741211px;
  height: 638px;
  margin: auto;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.breakfast-section-breakfastbutton {
  top: 16.25rem;
  left: 10rem;
  width: 20.18rem;
  height: 5.583rem;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.breakfast-section-button {
  color: rgb(74, 70, 65);
  width: 323px;
  height: 67px;
  font-size: 32px;
  transition: 0.3s;
  font-family: "K2D";
  border-color: #665656;
  border-width: 3px;
  border-radius: 16px;
  background-color: #a1948c;
}
.breakfast-section-button:hover {
  background-color: #cebeb3;
}

.breakfast-section-breakfastpic {
  top: 0rem;
  left: 5.8rem;
  width:  28.9rem;
  height: 24rem;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.breakfast-section-rectangle18 {
  top: 2.31rem;
  left: 0px;
  width: 28.9rem;
  height: 36.25rem;
  position: absolute;

}
@media (max-width:479px) {
  
.breakfast-section-sunicon1 {
    top: 42rem;
    left: 14rem;
    bottom: 0rem;
    right: 0rem;
    width: 90vw;
    height: 50vh;
    position: absolute;
    filter: opacity(40%)
}

.breakfast-section-rectangle18 {
  object-fit: cover;
  height: 83vh;
  width: 100vw;
  top: -0.7rem;
  left: 2.2rem
}

.breakfast-section-breakfastbutton {
  top: 73rem;
  left: 1.25rem;
  width: 90%
}

.breakfast-section-button {
  z-index: 1;
  width: 100%;
  font-size: 20px;
}

.breakfast-section-breakfastpic {
  top: -0.5rem;
  left:-2.3rem;
  display: flex;
  position: absolute;
  align-items: flex-start;
  z-index: 0;
  object-fit: cover;
  height: 100vh;
}

.breakfast-section-container1 {
  top: 0rem;
  object-fit: cover;
  height: 100vh;
  }

.breakfast-section-breakfastslide{
    height: 1311px;
  }
}
</style>
