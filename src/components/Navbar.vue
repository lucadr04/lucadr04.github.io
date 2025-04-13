<template>
  <nav>
    <router-link to="/" class="navdiv">Home</router-link>
    <router-link to="/about" class="navdiv">About</router-link>
    <router-link to="/projects" class="navdiv">Projects</router-link>
  </nav>
</template>

<style>
nav {
  display: inline;
  padding: 3vw;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 1px;
  user-select: none;
}
.navdiv {
  display: inline;
  padding: 1vw 4vw;
}
.navdiv:hover {
  background-color: var(--lightc);
  border-radius: 0.3rem;
  cursor: pointer;
}
.navdiv:active {
  background-color: var(--fontlc);
  font-style: italic;
}
.router-link-exact-active {
  font-style: italic;
  text-decoration: underline;
}
</style>