<template>
  <div class="contact-section-container" v-bind:class="rootClassName">
    <div class="contact-section-bgimage"></div>
    <div class="contact-section-contactslide">
      <!--
      <div class="contact-section-logo">
        <img
          alt="logo6823"
          src="/external/logo6823-t834-300h.png"
          class="contact-section-logo1"
          data-aos="zoom-in" data-aos-duration="1250"
        />
      </div>
-->
        <LandingPageContactCards/> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'CONTACTSECTION',
  props: {
    rootClassName: String,
  },
  data() {
    return {
      rawnyvq: ' ',
      raw7aoe: ' ',
    }
  },
}
</script>

<style scoped>
.contact-section-container {
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.contact-section-bgimage {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 1024px;
  display: flex;
  overflow: hidden;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  background-size: cover;
  background-image: url('https://images.pexels.com/photos/3201919/pexels-photo-3201919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
}
.contact-section-contactslide {
  width: 100%;
  height: 1024px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-self: flex-start;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(217, 217, 217, 0.77);
}

@media (max-width:479px) {
.contact-section-bgimage {
    height: 100vh;
}
 
.contact-section-container {
    height: 100vh;
}


.contact-section-contactslide {
  height: 100vh;
  overflow-y: scroll;
  top: 0rem;
}

}
</style>
