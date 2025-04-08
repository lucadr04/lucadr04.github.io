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
          title: "Project 1", 
          description: "Description of project 1",
          image: "https://placehold.co/600x400?font=roboto"
        },
        { 
          title: "Project 2", 
          description: "Description of project 2",
          image: "https://placehold.co/200x100?font=roboto"
        },
        { 
          title: "Project 3", 
          description: "Description of project 3",
          image: "https://placehold.co/200x100?font=roboto"
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
  grid-template-columns: 6% 54% 6%;
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
  width: 200px;
  height: 200px;
  object-fit: scale-down;
  margin-top: 1rem;
}
.nav-button {
  padding: 2vw 1vw;
  text-align: center;
  font-size: 6vh;
  user-select: none;
  cursor: pointer;
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
