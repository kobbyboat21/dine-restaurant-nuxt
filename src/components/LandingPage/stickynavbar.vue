<script>

export default {
  data() {
    return {
      limitPosition: 500,
      scrolled: false,
      lastPosition: 0
    };
  },
  methods: {
    handleScroll() {
      if (typeof window !== 'undefined') {
        if (this.lastPosition < window.scrollY && this.limitPosition < window.scrollY) {
          this.scrolled = true;
          // move up!
        } 
        
        if (this.lastPosition > window.scrollY) {
          this.scrolled = false;
          // move down
        }
        
        this.lastPosition = window.scrollY;
      }
    }
  },
  created() {
    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", this.handleScroll);
    }
  },
  destroyed() {
    if (typeof window !== 'undefined') {
      window.removeEventListener("scroll", this.handleScroll);
    }
  }
};

</script>

<template>

<div id="app">
  <header :class="{'sticky': scrolled}"  v-on="handleScroll" class="headroom header">Header</header> 
 
</div>

</template>

<style>

* {
  box-sizing: border-box;
}

#app div {
  padding-top: 50vh;
  border: 10px solid black;
  width: 100%;
  height: 100vh;
}

.boom {
  background-color: red;
}

h2 {
  display: inline-block;
}

/*  */
.header {
  width: 100%;
  height: 50px;
  background: red;
  position: fixed;
  z-index: 1000;
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
</style>
