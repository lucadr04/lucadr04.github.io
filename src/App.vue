<template>
  <div class="cursor"></div>
  <div class="background"></div>
  <div id="app">
    <Navbar />
    <main>
      <transition name="bounce">
        <router-view />
      </transition>
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer
  },
  mounted() {
    document.title = 'First portfolio';
    this.colors();
    const cursor = document.querySelector(".cursor");

    document.addEventListener("mousemove", (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });
  },
  methods: {
    colors() {
      let rc;
      do { rc = {r: Math.random()>0.5?50:0, g: Math.random()>0.5?50:0, b: Math.random()>0.5?50:0}; } while ((rc.r+rc.g+rc.b)%100===0||(rc.r+rc.g+rc.b)%150===0);
      //  pick a random color
      document.documentElement.style.setProperty('--bgcu', `rgba(${45*(1+(rc.r/700))}, ${45*(1+(rc.g/700))}, ${45*(1+(rc.b/700))}, 70%)`);
      document.documentElement.style.setProperty('--bgcd', `rgba(${60*(1+(rc.r/700))}, ${60*(1+(rc.g/700))}, ${60*(1+(rc.b/700))}, 70%)`);
      document.documentElement.style.setProperty('--fontc', `rgb(${180*(1-(rc.g/500))}, ${180*(1-(rc.b/500))}, ${180*(1-(rc.r/500))})`);
      document.documentElement.style.setProperty('--lightc', `rgb(${60+rc.r}, ${60+rc.g}, ${60+rc.b})`);
      document.documentElement.style.setProperty('--fontlc', `rgb(${120+rc.r}, ${120+rc.g}, ${120+rc.b})`);
      document.documentElement.style.setProperty('--shadowc', `rgb(${30+rc.r}, ${30+rc.g}, ${30+rc.b})`);
      document.documentElement.style.setProperty('--shadowcu', `rgba(${30+rc.r}, ${30+rc.g}, ${30+rc.b}, 60%)`);
      document.documentElement.style.setProperty('--cursc', `rgba(${30+rc.r}, ${30+rc.g}, ${30+rc.b}, 20%)`);
    }
  } 
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
html {
  font-family: 'Space Mono', monospace;
  font-size: 3vh;
  letter-spacing: -1px;
  background-size: 100% 100%;
  color: var(--fontc);
  text-align: center;
  text-shadow: 0.2rem 0.1rem 0.1rem var(--shadowc);  
  overflow: hidden;
  cursor: default;
}
a {
  color: var(--fontc);
  text-decoration: none;
}
::selection {
  background-color:var(--lightc);
}
.background {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-image: linear-gradient(135deg, var(--bgcd), var(--bgcu), var(--bgcd), var(--bgcu)), linear-gradient(135deg, var(--lightc), var(--shadowc));
  z-index: -1;
}
.cursor {
  position: fixed;
  width: 30vh;  /* Adjust size */
  height: 30vh;
  background: radial-gradient(var(--cursc), #ffffff00, #ffffff00); 
  border-radius: 50%; 
  transform: translate(-50%, -50%);
  pointer-events: none;  /* Prevent blocking clicks */
  z-index: -1;
  opacity: 0;
}
html:hover .cursor {
  opacity: 1;
}
.bounce-enter-active {
  animation: bounce-in 1s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0.95);
  }
  60% {
    transform: scale(1.02);
  }
  100% {
    transform: scale(1);
  }
}
</style>
