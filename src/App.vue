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
      document.documentElement.style.setProperty('--bgcu', `rgba(${45*(1+(rc.r/700))}, ${45*(1+(rc.g/700))}, ${45*(1+(rc.b/700))}, 70%)`);
      document.documentElement.style.setProperty('--bgcd', `rgba(${60*(1+(rc.r/700))}, ${60*(1+(rc.g/700))}, ${60*(1+(rc.b/700))}, 70%)`);
      document.documentElement.style.setProperty('--fontc', `rgb(${180*(1-(rc.g/500))}, ${180*(1-(rc.b/500))}, ${180*(1-(rc.r/500))})`);
      document.documentElement.style.setProperty('--lightc', `rgb(${60+rc.r}, ${60+rc.g}, ${60+rc.b})`);
      document.documentElement.style.setProperty('--fontlc', `rgb(${120+rc.r}, ${120+rc.g}, ${120+rc.b})`);
      document.documentElement.style.setProperty('--fontlct', `rgba(${120+rc.r}, ${120+rc.g}, ${120+rc.b}, 0.5)`);      
      document.documentElement.style.setProperty('--shadowc', `rgb(${30+rc.r}, ${30+rc.g}, ${30+rc.b})`);
      document.documentElement.style.setProperty('--shadowcu', `rgba(${30+rc.r}, ${30+rc.g}, ${30+rc.b}, 60%)`);
      document.documentElement.style.setProperty('--cursc', `rgba(${30+rc.r}, ${30+rc.g}, ${30+rc.b}, 20%)`);
    }
  } 
};
</script>

