<template>
  <div class="all-day-section-container" v-bind:class="rootClassName">
    <div class="all-day-section-lunchslide">
        <div v-if="$viewport.isLessThan('tablet')">
          <LandingPageSectionAlldayHeadlineMobile
            class="absolute top-[40rem] px-[0rem]
          text-[2.25rem] text-[rgb(72,64,77)]"/> 
          <LandingPageSectionAlldayMessageMobile
            class="absolute top-[46rem]"/> 
        </div>
        <div v-else>
          <LandingPageSectionAlldayHeadline/>
          <LandingPageSectionAlldayMessage/>
          <UIcon name="i-bx-time-five" 
            class="absolute z-20 left-[35rem] top-[7.5rem] w-[7rem] h-[7rem] text-red-100 text-opacity-30"
            data-aos="zoom-in-down" data-aos-duration="1750" dynamic />
        </div>
        <div class="all-day-section-lunchbutton">
          <button @click="gotoAllDayMenu" type="button" class="all-day-section-button button border border-2 border-red-400">
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
.all-day-section-container1 {
  top: 146px;
  left: 0px;
  right: 0px;
  width: 1270.9999885559082px;
  height: 781.9999847412109px;
  margin: auto;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.all-day-section-ellipse2 {
  left: 622.9999885559082px;
  width: 382px;
  bottom: 0px;
  height: 337px;
  position: absolute;
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
.all-day-section-text {
  top: 7.90911865234375px;
  left: 34.090911865234375px;
  color: rgba(93, 80, 80, 1);
  width: 257px;
  height: auto;
  margin: auto;
  display: none;
  position: absolute;
  font-size: 36px;
  font-style: Regular;
  text-align: left;
  font-family: K2D;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
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
.all-day-section-lunchmessage {
  top: 22.9rem;
  left: 13.2rem;
  width: 25.3rem;
  height: 12.1rem;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
  background-color: rgba(189, 173, 173, 0.44999998807907104);
}
.all-day-section-lunchmessage1 {
  top: 1.375rem;
  left: 1.7rem;
  width: 34.125rem;
  height: 14.875rem;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.all-day-section-text05 {
  color: rgb(72,64,77);
  width: 22rem;
  height: auto;
  position: absolute;
  font-size: 24px;
  text-align: left;
  font-family: K2D;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.all-day-section-text06 {
  font-weight: 500;
}
.all-day-section-text07 {
  font-weight: 700;
}
.all-day-section-text08 {
  font-weight: 500;
}
.all-day-section-text09 {
  font-weight: 700;
}
.all-day-section-text10 {
  font-weight: 500;
}
.all-day-section-text11 {
  font-weight: 700;
}
.all-day-section-rectangle8 {
  top: 5rem;
  left: 45rem;
  width: 28.9rem;
  height: 36.25rem;
  position: absolute;
}
.all-day-section-lunchbigtext {
  gap: 10px;
  top: 0px;
  left: 0px;
  width: 724px;
  height: 215px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.all-day-section-lunchbigtext1 {
  top: 126px;
  left: 38px;
  width: 734px;
  height: 215px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.all-day-section-lunchbigtext2 {
  top: 0px;
  left: 1rem;
  width: 734px;
  height: 215px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.all-day-section-text13 {
  color: rgb(72,64,77);
  width: 734px;
  height: auto;
  position: absolute;
  font-size: 64px;
  font-style: Regular;
  text-align: center;
  font-family: Libre Baskerville;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
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
.all-day-section-lunchbigtext_timeless {
  top: 2rem;
  left: -13rem;
  width: 734px;
  height: 215px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.all-day-section-lunchbigtext_indulgence {
  top: 2rem;
  left: 4.3rem;
  width: 734px;
  height: 215px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}

.all-day-section-lunchbigtext_alldaylong {
  top: 6rem;
  left: 3.4rem;
  width: 734px;
  height: 215px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
@media (max-width:479px) {

.all-day-section-lunchbigtext1 {
  top: 38rem;
  left: 1.75rem;
}

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
.all-day-section-lunchmessage {
  top: 44rem;
  left: 1.75rem;
  width: 560px;
  height: 235px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
  background-color: rgba(189, 173, 173, 0)
}
.all-day-section-text05 {
  width: 385px;
  height: auto;
  position: absolute;
  font-size: 1.25rem;
  text-align: left;
  font-family: K2D;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.all-day-section-text13 {
  width: 734px;
  height: auto;
  position: absolute;
  font-size: 2.85rem;
  font-style: Regular;
  text-align: center;
  font-family: Libre Baskerville;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.all-day-section-lunchbigtext_timeless {
  top: -1rem;
  left: -18.5rem;
  width: 734px;
  height: 215px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.all-day-section-lunchbigtext_indulgence {
  top: -1rem;
  left: -6.5rem;
  width: 734px;
  height: 215px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}

.all-day-section-lunchbigtext_alldaylong {
  top: 2rem;
  left: -4.5rem;
  width: 734px;
  height: 215px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
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
