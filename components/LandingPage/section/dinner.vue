<template>
  <div class="dinner-section-container" v-bind:class="rootClassName">
    <div class="dinner-section-dinnerslide">
      <div v-if="$viewport.isLessThan('tablet')">
        <LandingPageSectionDinnerHeadlineMobile 
          class="mt-[8rem] px-[1rem] text-[2.25rem] 
          font-sans-serif text-[rgba(89,76,76)]
          absolute top-[38rem]"/>
        <LandingPageSectionDinnerMessageMobile
          class="absolute top-[52rem]"/>
      </div>
      <div v-else>
        <LandingPageSectionDinnerHeadline/>
        <LandingPageSectionDinnerMessage/>
        <UIcon name="i-bx-wine" 
          class="absolute z-20 left-[52rem] top-[11rem] w-[7rem] h-[7rem] text-red-100 text-opacity-30"
          data-aos="zoom-in-down" data-aos-duration="1750" dynamic />
      </div>
      <div class="dinner-section-button_layout">
        <button @click="gotoDinnerMenu" type="button" class="dinner-section-button button">
          Dinner menu
        </button>
      </div>
      <div class="dinner-section-dinnerpic">
        <img
          alt="Rectangle82895"
          src="/external/pexels-tuğba-kobal-yılmaz-14935798_out.jpg"
          class="dinner-section-rectangle8"
          data-aos="flip-left"  data-aos-duration="1750"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DINNERSECTION',
  props: {
    rootClassName: String,
  },

  methods: { 
    gotoDinnerMenu() {
      this.$router.push('/menus/dinner');
    }
  },
  data() {
    return {
      raw43n4: ' ',
    }
  },
}
</script>

<style scoped>
.dinner-section-container {
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.dinner-section-dinnerslide {
  width: 100%;
  height: 1024px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  background-image: linear-gradient(180deg, rgba(149, 139, 161, 1) 0%, rgba(166, 180, 200, 0.5699999928474426) 100%);
}
.dinner-section-dinnerpic {
  top: 0px;
  left: 133.00000303983688px;
  width: 478px;
  height: 638px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.dinner-section-rectangle8 {
  top: 5rem;
  left: 2.75rem;
  width: 28.9rem;
  height: 36.25rem;
  position: absolute;
}
.dinner-section-dinnerbutton {
  top: 36rem;
  left: 52.44rem;
  width: 327px;
  bottom: 209px;
  height: 67px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}

.dinner-section-button {
  color: rgb(53,55,66);
  width: 327px;
  height: 67px;
  font-size: 32px;
  transition: 0.3s;
  font-family: "K2D";
  border-color: #665656;
  border-width: 3px;
  border-radius: 16px;
  background-color: #c1c5d2;
}

.dinner-section-button:hover {
  background-color: #d6dae8;
}

.dinner-section-riceicon1 {
  top: 13rem;
  left: 81.2rem;
  width: 50rem;
  height: 50rem;
  position: absolute;
  filter: opacity(30%)
}

@media (max-width:479px) {

.dinner-section-dinnerslide{
    top: 0rem;
    height: 1299px
  }
.dinner-section-riceicon1 {
  top: 32rem;
  left: -5rem;
  width: 360px;
  height: 360px;
  position: absolute;
}

.dinner-section-dinnerbutton {
  top: 0rem;
  left: 0rem;  
  width: 255px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.dinner-section-dinnerpic {
    left: 0rem;
    top: -14rem;
    height: 84vh;
    width: 100vw;
    position: absolute;
}

.dinner-section-button {
    left: 1.25rem;
    top: 70rem;
    position: absolute;
    z-index:1;
    background-color: #c1c5d3;
    width: 90%;
    font-size: 20px;
}

.dinner-section-rectangle8 {
    left: 0rem;
    top: 0rem;
    height: 90vh;
  }
}
</style>
