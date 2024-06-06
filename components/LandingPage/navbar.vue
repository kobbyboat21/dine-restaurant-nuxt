<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const limitPosition = ref(500);
const scrolled = ref(false);
const lastPosition = ref(0);
let openMenuModal = ref(false)
let createBookingModal = ref(false) 

function toggleBookingModal(){
    if (createBookingModal == true){
      createBookingModal = false
  } else {
      createBookingModal = true
  }
}

const handleScroll = () => {
  if (typeof window !== 'undefined') {
    if (lastPosition.value < window.scrollY && limitPosition.value < window.scrollY) {
      scrolled.value = true;
      // move up!
    }

    if (lastPosition.value > window.scrollY) {
      scrolled.value = false;
      // move down
    }

    lastPosition.value = window.scrollY;
  }
};

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', handleScroll);
  }
});

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('scroll', handleScroll);
  }
});

</script>

<template>
  <div class="navbar-container">
    <header :class="{'sticky': scrolled}"  v-on="handleScroll" class="headroom navbar-navbar">
      <div class="navbar-logo">
        <NuxtLink :to="{ path: '/' }">
        <img
          alt="logo627"
          src="/LOGO.png"
          class="navbar-logo1 z-100"
        />
        </NuxtLink>
      </div>
      
      <div v-if="$viewport.isLessThan('tablet')" class="navbar-menunavlink">
        <UButton @click="openMenuModal = true"
            icon="i-heroicons-book-open"
            color="brown"
            variant="plain"
            size="xl"
            label="MENU"
            class="text-xl text-stone-700 absolute"
            trailing
        />
      </div>
      <div v-else class="navbar-menunavlink">
        <UButton @click="openMenuModal = true" 
            icon="i-heroicons-book-open"
            color="brown"
            variant="plain"
            size="xl"
            label="MENU"
            class="text-3xl text-stone-700"
            trailing
        />
      </div>
      
      <UModal v-model="openMenuModal">
        <div class="p-4">
          <Placeholder class="h-48" />
        </div>
      </UModal>

      <div class="navbar-booknavlink-1 absolute right-0 ">
        <BookingButton/>

      </div>
    </header>
  </div>
</template>


<style scoped>
.navbar-container {
  width: 100%;
  height: 98px;
  display: flex;
  z-index: 100;
  position: absolute;
  align-items: flex-start;
  flex-direction: column;
}
.navbar-navbar {
  width: 1302px;
  height: 115px;
  display: flex;
  position: fixed;
  align-self: center;
  align-items: flex-start;
  flex-shrink: 1;
  z-index: 1000;
}
.navbar-logo {
  top: 0px;
  left: 632px;
  width: 82px;
  height: 82px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.navbar-logo1 {
  top: -4px;
  width: 60px;
  height: 60px;
  position: absolute;
}
.navbar-menunavlink {
  top: 0rem;
  left: -69px;
  width: 180px;
  height: 68px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.navbar-text {
  color: rgba(93, 80, 80, 1);
  width: 140px;
  height: auto;
  position: absolute;
  font-size: 36px;
  font-style: Regular;
  text-align: left;
  font-family: Libre Baskerville;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.navbar-menuicon1 {
  top: 0px;
  left: 120px;
  width: 40px;
  height: 40px;
  position: absolute;
}
.navbar-button {
  color: transparent;
  width: 178px;
  height: 66px;
  border-width: 0px;
  background-color: transparent;
}
.navbar-booknavlink {
  top: 0rem;
  left: 1228px;
  width: 180px;
  height: 68px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.navbar-calendaraddicon1 {
  top: 0px;
  left: 140px;
  width: 40px;
  height: 40px;
  position: absolute;
}
.navbar-text2 {
  color: rgba(93, 80, 80, 1);
  width: 140px;
  height: auto;
  position: absolute;
  font-size: 36px;
  font-style: Regular;
  text-align: left;
  font-family: Libre Baskerville;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.navbar-button1 {
  color: transparent;
  width: 178px;
  height: 66px;
  border-width: 0px;
  background-color: transparent;
}
.navbar-root-class-name1 {
  top: var(--dl-space-space-halfunit);
}

.headroom {
    will-change: transform;
    transition: transform 200ms linear;
}
.headroom--pinned {
    transform: translateY(0%);
}
.headroom--unpinned {
    transform: translateY(-100%);
}

/* Media Queries (Mobile Screen Size) */


@media(max-width: 479px) {

  .navbar-logo{
    position:fixed;
    top:0rem; 
    left:0rem;
    width: 90vw;
    justify-content: center;
  }
  .navbar-menuicon1{
    left:0rem;
  }

.navbar-navbar{ 
  width:100vw;
  top: 0.5rem;
}

.headroom {
    will-change: transform;
    transition: transform 200ms linear;
}
.headroom--pinned {
    transform: translateY(0%);
}
.headroom--unpinned {
    transform: translateY(-100%);
}

.navbar-menunavlink{
    z-index: 60;
    left: 0rem;
  }

.navbar-booknavlink{
    left: 18.5rem;
    z-index: 60;
    position: absolute;
  }

  .navbar-logo1{
    width: 45px;
    height: 45px;
    position: absolute;
    top:-4px
  }
}
</style>
