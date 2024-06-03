<template>
  <div class="hero-section-container">
    <div class="hero-section-bgimage"></div>
    <div class="hero-section-hero">
      <div class="hero-section-container1">
        <div class="hero-section-heropic">
          <img
            alt="Rectangle82885"
            src="/external/rectangle82885-vs6-500w.png"
            class="hero-section-rectangle8 aos-item"
            data-aos="flip-left" data-aos-delay="0" data-aos-duration="1750" 
          />
        </div>
        <UIcon name="i-bx-dish" class="absolute left-[4rem] top-[40rem] w-[20rem] h-[20rem] md:left-[33rem] md:top-[26.75rem] md:w-[24rem] md:h-[40rem] text-red-100 text-opacity-30 " data-aos="fade-down" data-aos-duration="1150" dynamic />

        <div class="hero-section-reservebutton">
          <!--
          data-aos="slide-left" data-aos-duration="1150"
>-->
          <button @click="gotoBook" type="button" class="hero-section-button button">
            Reserve a table
          </button>
        </div>
        <div class="hero-section-menubutton"
         data-aos="fade-in" data-aos-delay="300" data-aos-duration="1750"
        >
        </div>
        <div class="hero-section-herobigtext" data-aos="slide-up" data-aos-duration="1150">
          <div class="hero-section-bigtext1">
            <span class="hero-section-text-word">Savor</span>
          </div>
          <div class="hero-section-bigtext2">
            <span class="hero-section-text-word">Elevated</span>
          </div>
          <div class="hero-section-bigtext3">
            <span class="hero-section-text-word">Elegance</span>
          </div>
        </div>
        <div class="hero-section-heromessasge" data-aos="fade-up" data-aos-duration="2150">
          <span class="hero-section-text2">
              <div class="hero-section-desc1">
              <span>Embark on a gastronomic journey with us.</span>
              </div>
              <div class="hero-section-desc2">
                <span>
                  Reserve your table now and let the allure 
                </span>
              </div>
              <div class="hero-section-desc3">
                <span>
                  of exquisite palettes and breathtaking 
                </span>
              </div>
              <div class="hero-section-desc4">
                <span>
                  views redefine your dining experience.
                </span>
              </div>
              <div class="hero-section-desc5 visible sm:invisible">
                <span>
                  Indulge in a culinary journey unlike any 
                </span>
              </div>
              <div class="hero-section-desc6 visible sm:invisible">
                <span>
                  other as you savor meticulously crafted
                </span>
              </div>
              <div class="hero-section-desc7 visible sm:invisible">
                <span>
                   dishes prepared.
                </span>
              </div>
            </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
   methods: { 
    gotoBook() {
      this.$router.push('/book');
    }
  },

}
</script>


<style scoped>
.hero-section-container {
  top: 0px;
  width: 100%;
  height: 60rem;
  display: flex;
  position: relative;
  flex-direction: column;
}
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
.hero-section-dishicon1 {
  top: 35rem;
  left: 50rem;
  width: 25rem;
  height: 25rem;
  position: absolute;
  filter: opacity(30%)
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
.hero-section-herobigtext {
  top: 10rem;
  left: 4rem;
  width: 783px;
  height: 215px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
  font-family: LibreBaskerville; 
  color: rgba(89, 76, 76);
  font-size: 5rem;
  /*animation: text-bounce 2s linear forwards;
  animation-timeline: scroll();*/
}

/*
@keyframes text-bounce {
      0%, 
            20%, 
            50%, 
            80%, 
            100% { 
                transform: translateY(0); 
            } 
  
            40% { 
                transform: translateY(-300px); 
            } 
  
            60% { 
                transform: translateY(-150px); 
            } 
        } 
*/

.hero-section-text {
  color: rgba(93, 80, 80, 1);
  width: 783px;
  height: auto;
  position: absolute;
  font-size: 6rem;
  font-style: Regular;
  text-align: left;
  font-family: Libre Baskerville;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.hero-section-heromessasge {
  top: 27rem;
  left: 22rem;
  width: 463px;
  height: 164px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.hero-section-text2 {
  color: rgb(89, 76, 76);
  width: 463px;
  height: auto;
  position: absolute;
  font-size: 1.5rem;
  text-align: left;
  font-family: K2D;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.hero-section-root-class-name {
  margin-top: 0px;
}
.hero-section-root-class-name1 {
  align-self: center;
}

.hero-section-bigtext1 {
  position: absolute;
  top: 2rem;
  left: 17rem;
}
.hero-section-bigtext2 {
  position: absolute;
  top: 2rem;
  left: 31rem;
}
.hero-section-bigtext3 {
  position: absolute;
  top: 6.5rem;
  left: 17rem;
}

.hero-section-text-word {
  font-family: Libre Baskerville
}

@media(max-width: 479px) {

.hero-section-text-word {
  font-family: Libre Baskerville
}
  .hero-section-menuicon1{
    top: 24.3rem;
    left: 16rem;
    position: absolute;
  }
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
    width: 80%;
    font-size: 20px;
    word-spacing: 0.25rem;
  }
.hero-section-reservebutton{
    top: 33.5rem;
    left: 3rem;
    width: 102%
  }
.hero-section-text2 {
    top: 2.5rem;
    left: -2.6rem
  }
.hero-section-menubutton {
  left: 7rem;
  width: 12.4rem;
  bottom: 275.2222023010254px;
  height: 55px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
  border-radius: 16px;
  top: 24rem
}
  .hero-section-dishicon1{
    left: 12rem;
    top: 41rem;
  }

.navbar-navbar{
  width:100vw;
  top: 0rem;
  position: absolute;
}

.navbar-logo1{
  left: 1rem;
  }

.navbar-menunavlink{
    left: 20rem;
    z-index: 60;
    position: absolute;
  }

.navbar-booknavlink{
    top: 0rem;
    left: 1rem;
    position: absolute;
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

  .hero-section-herobigtext {
    left:2rem;
  }

  .hero-section-text {
    font-size: 1.5rem;
  }
/*}*/

.hero-section-bigtext1 {
  position: absolute;
  font-size: 3rem;
  top: -3.75rem;
  left: 0rem;
}

.hero-section-bigtext2 {
  position: absolute;
  font-size: 3rem;
  top: -3.75rem;
  left: 8rem;
}

.hero-section-bigtext3 {
  position: absolute;
  font-size: 3rem;
  top: -0.5rem;
  left: 13rem;
}
.hero-section-heromessasge {
  top: 27rem;
  left: 6rem;
  width: 463px;
  height: 164px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}

.hero-section-text2,
.hero-section-desc1,
/*.hero-section-desc2,*/
.hero-section-desc3,
.hero-section-desc4, 
.hero-section-desc5, 
.hero-section-desc6 
.hero-section-desc7 
  {
  font-size:1.2rem;
  left:-2.6rem;
  line-height: normal;
  top: -10.5rem;
  font-family: "Source Code Pro", monospace;
  }

  .hero-section-desc2 {
    margin: 0rem 0rem;
    padding: 0rem 0rem;
    top: -10.5rem;

  }

}
</style>
