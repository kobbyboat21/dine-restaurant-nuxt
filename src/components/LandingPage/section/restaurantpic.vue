<template>
  <div class="restaurant-pic-section-container" v-bind:class="rootClassName">
    <div class="restaurant-pic-section-container1"></div>
    <div class="restaurant-pic-section-restaurantslide">
      <div class="restaurant-pic-section-restaurantpic"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RESTAURANTPICSECTION',
  props: {
    image_alt: {
      type: String,
      default: 'image',
    },
    rootClassName: String,
    image_src: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
  },
}
</script>

<style scoped>

.restaurant-pic-section-container {
  width: 100%;
  height: 55rem;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.restaurant-pic-section-container1 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-self: center;
  align-items: flex-start;
  background-size: cover;
  background-image: url('https://images.pexels.com/photos/3201920/pexels-photo-3201920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
}
.restaurant-pic-section-restaurantslide {
  width: 100%;
  height: 100%;
  display: none;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  background-image: linear-gradient(180deg, rgba(175, 155, 155, 0.75) 0%, rgba(161, 139, 141, 1) 99%);
}
.restaurant-pic-section-restaurantpic {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}


@media(max-width: 479px) {

.restaurant-pic-section-container1 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  left: 0rem;
  margin: 0rem 0rem;
  padding: 0rem 0rem;
  display: flex;
  align-self: left;
  align-items: flex-start;
  background-size: fill;
  background-image: url('https://images.pexels.com/photos/3201920/pexels-photo-3201920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-position: center;
}
.restaurant-pic-section-restaurantpic {
  top: -10rem;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-shrink: 1;
}
}

</style>
