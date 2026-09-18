<template>
  <div class="projects">
    <div class="nav-button" @click="prevProject">&lt;</div>
    <transition name="fade" mode="out-in" @after-leave="handleAfterLeave">
      <div v-if="show" :key="currentIndex" class="project">
        <h1 class="highlight">
          <img v-if="projects[currentIndex].languages"
            :src="projects[currentIndex].languages[0].icon"
            :alt="projects[currentIndex].languages[0].name"
            :title="projects[currentIndex].languages[0].name"
            class="lang-icon"
          />
          <a :href="projects[currentIndex].link" target="_blank" rel="noopener" class="title-link">
            {{ projects[currentIndex].title }}
          </a>
        </h1>
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
          title: "Text Game Engine", 
          description: "Engine for text-based games",
          image: "/TextGame.png",
          link: "https://github.com/lucadr04/TextGame",
          languages: [
            { name: "Vue", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
          ]
        },
        { 
          title: "Trentus", 
          description: "Webapp for reporting local site malfunctions",
          image: "/Trentus.png",
          link: "https://github.com/lucadr04/Trentus-backend",
          languages: [
            { name: "NodeJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
          ]
        },
        { 
          title: "Newsinator", 
          description: "AI-powered news aggregator and summarizer",
          image: "/Newsinator.png",
          link: "https://github.com/lucadr04/Newsinator",
          languages: [
            { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
          ]
        },
        { 
          title: "PriceBot", 
          description: "Telegram bot for tracking product prices",
          image: "/PriceBot.png",
          link: "https://github.com/lucadr04/PriceBot",
          languages: [
            { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
          ]
        },
        { 
          title: "Voltorb Flip", 
          description: "Nintendo DS homebrew minigame",
          image: "/VoltorbFlip.png",
          link: "https://github.com/lucadr04/VoltorbFlip",
          languages: [
            { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
          ]
        },
      ],
      currentIndex: 0,
      nextIndex: null,
      show: true,
    };
  },
  mounted() {
    window.addEventListener("keydown", this.handleKeydown);
  },
  beforeUnmount() {
    window.removeEventListener("keydown", this.handleKeydown);
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
    // Move with arrows
    handleKeydown(e) {
      if (e.key === "ArrowRight") {
        this.nextProject();
      } else if (e.key === "ArrowLeft") {
        this.prevProject();
      }
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
  max-width: 90%;
  max-height: 45vh;
  width: auto;
  height: auto;
  object-fit: contain;
  margin: 0 auto 0;
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

/* icons and links */
.languages {
  display: flex;
  justify-content: center;
}
.lang-icon {
  width: 5vh;
  object-fit: fill;
}
.title-link {
  color: inherit;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: 1vw
}
.title-link:hover {
  text-decoration: underline;
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
