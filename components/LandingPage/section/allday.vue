<template>
  <div class="all-day-section-container" v-bind:class="rootClassName">
    <div class="all-day-section-lunchslide">
        <div v-if="$viewport.isLessThan('tablet')">
          <LandingPageSectionAlldayHeadlineMobile
            class="absolute top-[40rem] px-[1rem]
          text-[2.25rem] text-[rgb(72,64,77)]"/> 
          <LandingPageSectionAlldayMessageMobile
            class="absolute top-[46rem]"/> 
        </div>
        <div v-else>
          <LandingPageSectionAlldayHeadline/>
          <LandingPageSectionAlldayMessage/>
          <UIcon name="i-bx-time-five" 
            class="absolute z-20 left-[35rem] top-[7.5rem] 
                   w-[7rem] h-[7rem] text-red-100 text-opacity-30"
            data-aos="zoom-in-down" data-aos-duration="1750" dynamic />
        </div>
        <div class="all-day-section-lunchbutton">
          <button @click="gotoAllDayMenu" type="button"
          class="all-day-section-button button border border-2 border-red-400">
            All day menu
          </button>
        </div>
        <img
          alt="Rectangle82811"
          src="https://images.pexels.com/photos/6851931/pexels-photo-6851931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          class="all-day-section-rectangle8 aos-item"
          data-aos="flip-right" data-aos-duration="1750"
        />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ALLDAYSECTION',
  props: {
    rootClassName: String,
  },

  methods: { 
    gotoAllDayMenu() {
      this.$router.push('/menus/lunch');
    }
  },

  data() {
    return {
      rawgdxl: ' ',
      rawd2qa: ' ',
      rawpngl: ' ',
    }
  },
}
</script>

<style scoped>
.all-day-section-container {
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.all-day-section-lunchslide {
  width: 100%;
  height: 1024px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  background-image: linear-gradient(180deg, rgba(161, 153, 139, 1) 0%, rgba(148, 139, 161, 0.9635416865348816) 100%, rgba(233, 199, 149, 0) 100%);
}
.all-day-section-lunchbutton {
  top: 37rem;
  left: 20.875rem;
  width: 283px;
  bottom: 101px;
  height: 67px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.all-day-section-reservebutton {
  top: -760.727294921875px;
  left: -336.5px;
  width: 283px;
  height: 67px;
  display: none;
  position: absolute;
}
.all-day-section-button {
  color: rgb(72,64,77);
  width: 323px;
  height: 67px;
  font-size: 32px;
  transition: 0.3s;
  font-family: "K2D";
  border-color: #665656;
  border-width: 3px;
  border-radius: 16px;
  background-color: #9a919e;
}
.all-day-section-button:hover {
  background-color: #b9aebe;
}

.all-day-section-rectangle8 {
  top: 5rem;
  left: 45rem;
  width: 28.9rem;
  height: 36.25rem;
  position: absolute;
}

.all-day-section-timeicon1 {
  top: 2.4rem;
  left: 31rem;
  width: 10rem;
  height: 10rem;
  position: absolute;
}

.all-day-hotbowlicon1 {
  top: 20rem;
  left: -45rem;
  position: absolute;
  filter: opacity(30%);
  width: 800px;
  height: 800px;
  visibility: hidden
}

@media (max-width:479px) {


.all-day-hotbowlicon1 {
  top: 12rem;
  left: -49rem;
  position: absolute;
  filter: opacity(40%);
  width: 50rem;
  height: 50rem;
}

.all-day-section-lunchslide {
  top: 0rem;
  width: 100%;
  height: 1299px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  background-image: linear-gradient(180deg, rgba(161, 153, 139, 1) 0%, rgba(148, 139, 161, 0.9635416865348816) 100%, rgba(233, 199, 149, 0) 100%);
}
.all-day-section-rectangle8 {
  top: -9rem;
  right: 0px;
  width: 478px;
  height: 81vh;
  left: 0rem;
  z-index: 0;
}
.all-day-section-lunchbutton {
  left: 1.25rem;
  width: 90%;
  bottom: 13rem;
  height: 67px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
  z-index: 10;
  top: 68.5rem
}

.all-day-section-button {
    width: 100%;
    font-size: 20px;
  }

.all-day-section-timeicon1 {
  top: -7rem;
  left: 4.5rem;
  width: 300px;
  height: 300px;
  position: absolute;
}

}
</style>
