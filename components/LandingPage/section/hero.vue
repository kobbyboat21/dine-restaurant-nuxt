<template>
<div class="flex flex-col relative mt-0 w-[100%] h-[60rem] ">
    <div class="hero-section-bgimage"></div>
  <div class="hero-section-hero">
      <div v-if="$viewport.isLessThan('tablet')">
        <LandingPageSectionHeroHeadlineMobile
          id="headline-mobile" 
          class="mt-[8rem] px-[1rem] text-[2.25rem] 
        font-sans-serif text-[rgba(89,76,76)]"
        />
        <LandingPageSectionHeroMessageMobile/>
     </div>
      <div v-else>
        <LandingPageSectionHeroHeadline/>
        <LandingPageSectionHeroMessage/>
        <div class="hero-section-heropic">
          <img
            alt="Rectangle82885"
            src="/external/rectangle82885-vs6-500w.png"
            class="hero-section-rectangle8 aos-item"
            data-aos="flip-left" data-aos-delay="0" data-aos-duration="1750" 
          />
        </div>
      </div>
        <UIcon name="i-bx-dish" class="absolute left-[3rem] top-[41rem] w-[20rem] h-[20rem] md:left-[33rem] md:top-[26.75rem] md:w-[24rem] md:h-[40rem] text-red-100 text-opacity-30 " data-aos="fade-down" data-aos-duration="1150" dynamic />
        <LandingPageSectionHeroReserveButton/> 
        <!-- <div class="hero-section-reservebutton"> -->
        <!-- <button @click="openBookingModal = true" type="button" class="hero-section-button button"> -->
        <!--     Reserve a table -->
        <!-- </button> -->
        <!-- </div> -->
  </div>
</div>
</template>


<style scoped>

.hero-section-bgimage {
  flex: 0 0 auto;
  width: 100%;
  filter: blur(3px);
  height: 100%;
  display: flex;
  align-items: flex-start;
  background-size: cover;
  background-image: url('https://images.pexels.com/photos/3201922/pexels-photo-3201922.jpeg');
}
.hero-section-hero {
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 50;
  position: absolute;
  align-self: center;
  align-items: flex-start;
  flex-shrink: 0;
  background-color: rgba(201, 201, 201, 0.76);
}
.hero-section-container1 {
  z-index: 100;
}
.hero-section-heropic {
  top: 8rem;
  left: 74rem;
  width: 479.4195556640625px;
  height: 576.3148803710938px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.hero-section-rectangle8 {
  top: 5rem;
  left: -23rem;
  width: 25.94rem;
  height: 31.125rem;
  position: absolute;
  border-radius: 20px;
}
.hero-section-reservebutton {
  left: 22rem;
  width: 323px;
  bottom: 275.2222023010254px;
  height: 67px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
  border-radius: 16px;
}
.hero-section-button {
  color: rgb(89,76,76);
  width: 323px;
  height: 67px;
  font-size: 32px;
  transition: 0.3s;
  font-family: "K2D";
  border-color: #665656;
  border-width: 3px;
  border-radius: 16px;
  background-color: transparent;
}
.hero-section-button:hover {
  background-color: #c7bfbf;
}

@media(max-width: 479px) {

.hero-section-button1 {
  color: #5d5050;
  width: 323px;
  height: 52px;
  font-size: 26px;
  transition: 0.3s;
  font-family: "Libre Baskerville";
  border-color: #6656565c;
  border-width: 3px;
  border-radius: 16px;
  background-color: transparent;
  text-align: left;
}
.hero-section-button{
    height: 58px;
    width: 100%;
    font-size: 20px;
    word-spacing: 0.25rem;
  }
.hero-section-reservebutton{
    top: 38.5rem;
    left: 1.25rem;
    width: 90%
  }

.hero-section-heropic {
    position: absolute;
    left: 0rem;
    width: 3rem;
    height: 100%;
    opacity: 0.1;
    filter: blur(4px);
    border-radius: 1rem;
    visibility: hidden;
  }
}
</style>
