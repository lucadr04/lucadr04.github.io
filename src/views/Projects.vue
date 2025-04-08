<template>
  <div class="projects">
    <div class="nav-button" @click="prevProject"><</div>
    <transition name="fade">
      <div v-show="show" :key="currentIndex" class="project">
        <h1 class="highlight">{{ projects[currentIndex].title }}</h1>
        <h4>{{ projects[currentIndex].description }}</h4>
        <img :src="projects[currentIndex].image" alt="Project image" class="project-image" />
      </div>
    </transition>
    <div class="nav-button" @click="nextProject">></div>
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
      show: true,
    };
  },
  methods: {
    nextProject() {
      this.currentIndex = (this.currentIndex + 1) % this.projects.length;
    },
    prevProject() {
      this.currentIndex = (this.currentIndex - 1 + this.projects.length) % this.projects.length;
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
  margin-top: 0;
}
.nav-button {
  padding: 2vw 1vw;
  text-align: center;
  font-size: 6vh;
  user-select: none;
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
