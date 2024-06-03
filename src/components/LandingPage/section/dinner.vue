<template>
  <div class="dinner-section-container" v-bind:class="rootClassName">
    <div class="dinner-section-dinnerslide">
      <div class="dinner-section-container1">
        <div class="dinner-section-dinnerpic">
          <img
            alt="Rectangle82895"
            src="/external/pexels-tuğba-kobal-yılmaz-14935798_out.jpg"
            class="dinner-section-rectangle8"
            data-aos="flip-left"  data-aos-duration="1750"
          />
        </div>
        <div class="dinner-section-dinnerbutton">
          <div class="dinner-section-dinnercalltoaction">
            <div class="dinner-section-reservebutton">
              <img
                alt="RESERVEBUTTON5957"
                src="/external/reservebutton5957-rbig.svg"
                class="dinner-section-reservebutton1"
              />
              <span class="dinner-section-text">Dinner menu</span>
            </div>
            <div class="dinner-section-button_layout">
              <button @click="gotoDinnerMenu" type="button" class="dinner-section-button button">
                Dinner menu
              </button>
            </div>
          </div>
        </div>
        <div class="dinner-section-dinnermessage" data-aos="fade-up" data-aos-duration="1250">
          <span class="dinner-section-text1">
            <span>
              From succulent cuts of aged steak to the delicate dance of flavors
              in our signature seafood creations, every bite is a celebration of
              indulgence.
              <span v-html="raw43n4"></span>
            </span>
          </span>
        </div>
        <div class="dinner-section-dinnerbigtext" data-aos="zoom-in-down" data-aos-duration="1150">
          <div class="dinner-section-dinnerbigtext_evening">
            <span class="dinner-section-text3"> Evening </span>
          </div>
          <div class="dinner-section-dinnerbigtext_elegance">
            <span class="dinner-section-text3"> Elegance </span>
          </div>
          <div class="dinner-section-dinnerbigtext_unveiled">
            <span class="dinner-section-text3"> Unveiled </span>
          </div>
        </div>
        <!--
        <box-icon name="bowl-rice" class="dinner-section-riceicon1" data-aos="fade-down" data-aos-duration="1750"></box-icon> 
        <UIcon name="i-bx-bowl-rice"  class="absolute left-[85rem] top-[15.75rem] w-[40rem] h-[40rem] text-red-100 text-opacity-30" data-aos="fade-down" data-aos-duration="1150" dynamic />
-->
        <!--
        <img
          alt="Ellipse37081"
          src="/external/ellipse37081-ha9l-400h.png"
          class="dinner-section-ellipse3"
/>-->
        <UIcon name="i-bx-wine" 
          class="absolute z-20 left-[52rem] top-[11rem] w-[7rem] h-[7rem] text-red-100 text-opacity-30"
          data-aos="zoom-in-down" data-aos-duration="1750" dynamic />
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
.dinner-section-container1 {
  left: 0px;
  right: 0px;
  width: 1369.9999877810478px;
  bottom: -16px;
  height: 879.9999847412109px;
  margin: auto;
  display: flex;
  position: absolute;
  align-items: flex-start;
  justify-content: center;
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
.dinner-section-dinnercalltoaction {
  top: 0px;
  left: 0px;
  width: 327px;
  height: 67px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.dinner-section-reservebutton {
  top: 0px;
  left: 0px;
  width: 255px;
  height: 67px;
  display: none;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: #665656;
  border-width: 3px;
  border-radius: 16px;
}
.dinner-section-reservebutton1 {
  top: 0px;
  left: 0px;
  width: 255px;
  height: 67px;
  display: none;
  position: absolute;
  border-color: #665656;
  border-width: 3px;
  border-radius: Radius4;
}
.dinner-section-text {
  top: 8px;
  left: 34px;
  color: rgb(93, 80, 80);
  width: 204px;
  height: auto;
  margin: auto;
  position: absolute;
  font-size: 32px;
  font-style: Regular;
  text-align: left;
  font-family: "K2D";
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
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
.dinner-section-dinnermessage {
  top: 22.5rem;
  left: 45.6rem;
  width: 27.25rem;
  height: 10.875rem;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
  background-color: rgba(189, 173, 173, 0.44999998807907104);
}
.dinner-section-text1 {
  top: 1.0625rem;
  left: 0.625rem;
  color: rgb(53,55,66);
  width: 25rem;
  height: auto;
  position: absolute;
  font-size: 24px;
  text-align: right;
  font-family: K2D;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.dinner-section-dinnerbigtext {
  top: 3.4375rem;
  left: 27.6rem;
  width: 737px;
  height: 215px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.dinner-section-text3 {
  left: 0px;
  color: rgb(53,55,66);
  right: 0px;
  width: 737px;
  height: auto;
  margin: auto;
  position: absolute;
  font-size: 64px;
  font-style: Regular;
  text-align: right;
  font-family: Libre Baskerville;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.dinner-section-riceicon1 {
  top: 13rem;
  left: 81.2rem;
  width: 50rem;
  height: 50rem;
  position: absolute;
  filter: opacity(30%)
}
.dinner-section-ellipse3 {
  left: 0px;
  width: 382px;
  bottom: 0px;
  height: 337px;
  position: absolute;
}

.dinner-section-dinnerbigtext_evening {
  top: 3.5rem;
  left: -16.5rem;
  position: absolute;
}

.dinner-section-dinnerbigtext_elegance {
  top: 3.5rem;
  left: -0.5rem;
  position: absolute;
}

.dinner-section-dinnerbigtext_unveiled {
  top: 8rem;
  left: -0.5rem;
  position: absolute;

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
.dinner-section-text1 {
  top: -4.5rem;
  left: 4.3rem;
  width: 380px;
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
.dinner-section-text3{
  font-size: 2.85rem;
  text-align: right;

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
.dinner-section-dinnerbigtext_evening {
  top: 0.5rem;
  left: -13.5rem;
  position: absolute;
}

.dinner-section-dinnerbigtext_elegance {
  top: 0.5rem;
  left: -2rem;
  position: absolute;
}

.dinner-section-dinnerbigtext_unveiled {
  top: 3.25rem;
  left: 2.5rem;
  position: absolute;

}

.dinner-section-dinnerbigtext {
  top: 28rem;
  left: -20.5rem;
  width: 737px;
  height: 215px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.dinner-section-dinnerpic {
    left: 1rem;
    top: -14rem;
    height: 84vh;
    width: 100vw;
    position: absolute;
}

.dinner-section-button {
    left: 4rem;
    top: 55rem;
    position: absolute;
    z-index:1;
    background-color: #c1c5d3;
    width: 375px;
    font-size: 20px;
}

.dinner-section-dinnermessage {
    left: 0rem;
    top: 42rem;
    height: 23vh;
    position: absolute;
    background-color: rgba(189, 173, 173, 0);
}

.dinner-section-rectangle8 {
    left: 0rem;
    top: 0rem;
    height: 84vh;
    position: absolute;
  }
.dinner-section-container1 {
  top: -10rem;
  left: -1rem;
  right: 0px;
  width: 1369.9999877810478px;
  bottom: -16px;
  height: 100vh;
  margin: auto;
  display: flex;
  position: absolute;
  align-items: flex-start;
  justify-content: center;
}
}
</style>
