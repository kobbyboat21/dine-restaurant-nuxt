<template>
  <div class="breakfast-section-container" v-bind:class="rootClassName">
    <div class="breakfast-section-breakfastslide Content">
      <div class="breakfast-section-container1">
        <div class="breakfast-section-breakfastmessage">
          <div class="breakfast-section-breakfastbutton">
            <button @click="gotoBreakfastMenu" type="button" class="breakfast-section-button button">
              Breakfast menu
            </button>
          </div>
          <div class="breakfast-section-breakfastmessage1" data-aos="fade-up" data-aos-duration="1250">
            <span class="breakfast-section-text">
              <span class="breakfast-section-text01">
                Indulge in a
                <span></span>
              </span>
              <span class="breakfast-section-text02">symphony</span>
              <span class="breakfast-section-text03">
                of flavors crafted with
                <span></span>
              </span>
              <span class="breakfast-section-text04">precision</span>
              <span class="breakfast-section-text05">
                and
                <span v-html="rawchbu"></span>
              </span>
              <span class="breakfast-section-text06">passion</span>
              <span>
                , where the first meal of the day is a celebration of
                sophistication.
              </span>
            </span>
          </div>
        </div>
        <div class="breakfast-section-breakfastpic">
          <img
            alt="Rectangle182811"
            src="https://images.pexels.com/photos/3138576/pexels-photo-3138576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            class="breakfast-section-rectangle18 aos-item"
            data-aos="flip-left"  data-aos-duration="1750"
          />
        </div>
        <!--
        <UIcon name="i-bx-baguette" class="absolute left-[65rem] top-[27.75rem] w-[40rem] h-[40rem] text-red-100 text-opacity-30" data-aos="fade-down" data-aos-duration="1150" dynamic />

        <img
          alt="sunicon17071"
          src="/external/sun icon.png"
          class="breakfast-section-sunicon1"
        />
-->
        <UIcon name="i-bx-sun" 
          class="absolute z-20 left-[40rem] top-[4.5rem] w-[7rem] h-[7rem] text-red-100 text-opacity-30"
          data-aos="zoom-in-up" data-aos-duration="1750" dynamic />
        <div class="breakfast-section-bigtext" data-aos="zoom-in-down" data-aos-duration="1150">
          <div class="breakfast-section-bigtext1">
            <span class="breakfast-section-text08">Morning</span>
          </div>
          <div class="breakfast-section-bigtext2">
            <span class="breakfast-section-text08">Splendor</span>
          </div>
          <div class="breakfast-section-bigtext3">
            <span class="breakfast-section-text08">at the Summit</span>
          </div>
        </div>
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
.breakfast-section-breakfastmessage {
  top: 244.00001525878906px;
  right: 29px;
  width: 560px;
  height: 371px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
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
.breakfast-section-breakfastmessage1 {
  top: 2rem;
  left: 3.375rem;
  width: 27rem;
  height: 11rem;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
  border-radius: var(--dl-radius-radius-radius4);
  background-color: rgba(189, 173, 173, 0.44999998807907104);
}
.breakfast-section-text {
  top: 1.4375rem;
  left: -0.5625rem;
  color: rgba(74, 70, 65);
  width: 25.875rem;
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
.breakfast-section-text01 {
  font-weight: 500;
}
.breakfast-section-text02 {
  font-weight: 700;
}
.breakfast-section-text03 {
  font-weight: 500;
}
.breakfast-section-text04 {
  font-weight: 700;
}
.breakfast-section-text05 {
  font-weight: 500;
}
.breakfast-section-text06 {
  font-weight: 700;
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
.breakfast-section-baguetteicon1 {
  top: -2.75rem;
  left: 27rem;
  width: 400px;
  height: 400px;
  position: absolute;
  transform: rotate(30deg);
  visibility: hidden;
}
.breakfast-section-bigtext {
  top: 2.56rem;
  left: 27.95rem;
  width: 45.875rem;
  height: 13.4375rem;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.breakfast-section-bigtext1 {
  top: 0rem;
  left: -17.5rem;
  width: 734px;
  height: 215px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}

.breakfast-section-bigtext2 {
  top: 0rem;
  left: -2rem;
  width: 734px;
  height: 215px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}

.breakfast-section-bigtext3 {
  top: 4.5rem;
  left: -2rem;
  width: 734px;
  height: 215px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.breakfast-section-text08 {
  color: rgb(74, 70, 65);
  width: 734px;
  height: auto;
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
.breakfast-section-breakfastmessage1 {
  top: 2rem;
  left: 0rem;
  width: 529px;
  height: 235px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
  border-radius: var(--dl-radius-radius-radius4);
  background-color: rgba(189, 173, 173, 0);
}

.breakfast-section-text {
  top: 3rem;
  left: 5.8rem;
  color: rgba(74, 70, 65);
  width: 364px;
  height: auto;
  position: absolute;
  font-size: 1.2rem;
  text-align: justify;
  font-family: K2D;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.breakfast-section-breakfastmessage {
  top: 49rem;
  left: -2rem;
}

.breakfast-section-breakfastbutton {
  top: 22.5rem;
  left: 4.9rem;
  width: 28.2rem
}

.breakfast-section-button {
  top: 0rem;
  left: 2rem;
  z-index: 1;
  width: 85%;
  font-size: 20px;
}

.breakfast-section-bigtext {
  top: 40rem;
  left: -1rem;
}

.breakfast-section-text08 {
  font-size: 2.85rem;
  text-align: left;
}

.breakfast-section-bigtext1 {
  top: 5rem;
  left: 3rem;
  width: 734px;
  height: 215px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}

.breakfast-section-bigtext2 {
  top: 5rem;
  left: 14rem;
  width: 734px;
  height: 215px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}


.breakfast-section-bigtext3 {
  top: 8rem;
  left: 11rem;
  width: 734px;
  height: 215px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}

.breakfast-section-baguetteicon1 {

    top: 2rem;
    left: -2rem;
    bottom: 0rem;
    right: 0rem;
    width: 80vw;
    height: 40vh;
    position: absolute;
    transform: rotate(30deg);
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
