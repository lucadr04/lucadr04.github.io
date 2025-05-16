<template>
  <div class="projects">
    <div class="nav-button" @click="prevProject">&lt;</div>
    <transition name="fade" mode="out-in" @after-leave="handleAfterLeave">
      <div v-if="show" :key="currentIndex" class="project">
        <h1 class="highlight">{{ projects[currentIndex].title }}</h1>
        <h4>{{ projects[currentIndex].description }}</h4>
        <img :src="projects[currentIndex].image" alt="Project image" class="project-image" />
      </div>
    </transition>
    <div class="nav-button" @click="nextProject">&gt;</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        { 
          title: "Portfolio", 
          description: "Made with Vue.js",
          image: "/Portfolio.png"
        },
        { 
          title: "Text Game", 
          description: "Made with Vue.js",
          image: "/Start.png"
        },
        { 
          title: "Trentus", 
          description: "Made with Node.js and Express, using MongoDB",
          image: "/Trentus.png"
        },
      ],
      currentIndex: 0,
      nextIndex: null, // Temporarily store the index change
      show: true,
    };
  },
  methods: {
    nextProject() {
      this.nextIndex = (this.currentIndex + 1) % this.projects.length;
      this.show = false; // trigger leave transition
    },
    prevProject() {
      this.nextIndex = (this.currentIndex - 1 + this.projects.length) % this.projects.length;
      this.show = false; // trigger leave transition
    },
    // This hook is called when the leave transition ends.
    handleAfterLeave() {
      if (this.nextIndex !== null) {
        this.currentIndex = this.nextIndex;
        this.nextIndex = null;
      }
      this.show = true; // trigger enter transition for new content
    },
  },
};
</script>

<style>
.projects {
  display: grid;
  grid-template-columns: 6% 60% 6%;
  margin: 8vh 5vw;
  font-size: 1rem;
  height: 70vh;
  align-items: center;
  justify-content: center;
}
.project {
  text-align: center;
}
.project-image {
  width: 40vw;
  height: 25vh;
  object-fit: scale-down;
  margin-top: 1vw;
}
.nav-button {
  padding: 2vw 1vw;
  text-align: center;
  font-size: 2rem;
  user-select: none;
  cursor: pointer;
}
.nav-button:hover {
  background-color: var(--lightc);
  border-radius: 0.3rem;
  cursor: pointer;
}
.nav-button:active {
  background-color: var(--fontlc);
  font-style: italic;
}
@media (max-width: 600px) {
  .projects {
    grid-template-columns: 6% 80% 6%;
  }
  .project-image {
    margin-top: 0vw;
    width: 50vw;
    height: 30vh;
  }
}

/* Simplified fade transition styles */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
