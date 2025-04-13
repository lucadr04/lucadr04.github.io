<template>
  <footer>
    <div 
        class="contact" 
        @mouseover="mail = 'luca.dariz@proton.me'" 
        @mouseleave="mail = 'Mail'"
        @click="copyMail()">
      {{ mail }}
    </div>
    <div 
        class="contact" 
        @mouseover="git = 'lucadr04'" 
        @mouseleave="git = 'Github'">
      <a href="https://github.com/lucadr04" target="_blank">{{ git }}</a>
    </div>
    <div 
        class="contact" 
        @mouseover="linkedin = 'lucadariz04'" 
        @mouseleave="linkedin = 'LinkedIN'">
        <a href="https://www.linkedin.com/in/lucadariz04/" target="_blank">{{ linkedin }}</a>
    </div>
    <div 
        class="contact" 
        @mouseover="location = 'Trento|Belluno'" 
        @mouseleave="location = 'Location'">
      {{ location }}
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      mail: 'Mail',
      git: 'Github',
      linkedin: 'LinkedIN',
      location: 'Location'
    };
  },
  methods: {
    async copyMail() {
      try {
        await navigator.clipboard.writeText(this.mail);
      } catch { }
      this.mail = 'Copied!';
    }
  }
};
</script>


<style>
footer {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  display: grid;
  min-width: 80%;
  grid-template-columns: 25% 25% 25% 25%;
  justify-items: center;
  text-shadow: none;
  font-size: 0.7rem;
  font-weight: bold;
  letter-spacing: 1px;
  text-align: center;
}
@media (max-width: 600px) {
  footer {
    grid-template-columns: 50% 50%;
  }
}

.contact {
  display: inline;
  padding: 1.5vw 4vw;
  white-space: nowrap;
  user-select: none;
}
.contact:hover {
  background-color: var(--lightc);
  border-radius: 0.3rem;
  cursor: pointer;
}
.contact:active {
  background-color: var(--fontlc);
  font-style: italic;
}
.default {
  cursor: pointer;
  transition: color 0.3s;
}
</style>
