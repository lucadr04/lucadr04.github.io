<template>
  <div class="home">
    <h1>Hi, I'm<br><div class="highlight">Luca Da Riz</div></h1>
    <h2 class="inline-h2">Building my way, </h2>
    <h2 class="inline-h2">one project at a time</h2>
  </div>
</template>

<style>
.home {
  margin-top: 18vh;
  font-size: 1.5rem;
}
.inline-h2 {
  display: inline;
  margin: 0;  /* Adjust margins as necessary */
}
@media (max-width: 600px) {
  .home {
    margin-top: 8vh;
  }
  .inline-h2 {
    display: inline-block;
    margin-right: 10px;  /* Space between the h2s when inline */
  }
}
.highlight{
  display: inline;
  color: var(--fontlc);
}
</style>