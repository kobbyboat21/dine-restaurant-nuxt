<script setup>
  import { ref } from 'vue';
  let createBookingModal = ref(false)

function toggleBookingModal() {
  createBookingModal.value = !createBookingModal.value
  console.log(createBookingModal.value)
}
</script>

<template>
  <div>
    <button @click="toggleBookingModal()" type="button" class="hero-section-button button">
        Reserve a table
    </button>
  </div>
  <BookingModal v-if="createBookingModal" />
</template>

<style>
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
  position: absolute;
  top: 37rem;
  left: 22rem
}
.hero-section-button:hover {
  background-color: #c7bfbf;
}


@media(max-width: 479px) {
.hero-section-button{
    height: 58px;
    width: 90%;
    font-size: 20px;
    word-spacing: 0.25rem;
    top: 38.5rem;
    left: 1.25rem;
  }
}

</style>
