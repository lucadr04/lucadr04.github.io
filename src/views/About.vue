<template>
  <div class="scroll-container">
    <div class="topsh"></div>
    <div class="scroll">
      <div>
        <h1 class="stone highlight">Full-stack developer</h1>
        <p>A3 Belluno, July 2025 - September 2025</p>
        <h3></h3>
      </div>
      <div>
        <h1 class="stone highlight">IT Helper</h1>
        <p>SIT Belluno, July 2022 - August 2022</p>
        <h3></h3>
      </div>
      <div>
        <h1 class="stone highlight">IT Internship</h1>
        <p>SIT Belluno, May 2022</p>
        <h3></h3>
      </div>
        <hr>
      <div>
        <h1 class="stone highlight">CS Tutoring</h1>
        <p>Nov 2022 - Jan 2023</p>
        <h3></h3>
      </div>
        <hr>
      <div>
        <h1 class="stone highlight">Bachelor degree</h1><br>
        <h3 class="stone highlight">Computer Science</h3>
        <p>Trento, 2026</p>
        <h3></h3>
      </div>
        <hr>
      <div>
        <h1 class="stone highlight">English C1</h1>
        <p>Cambridge, Dec 2022</p>
        <h3></h3>
      </div>
    </div>
    <div class="bottomsh"></div>
  </div>
</template>

<style>
.scroll-container {
  margin: 8vh 16vw;
  position: relative;
  height: 70vh;
}
.scroll {
  font-size: 0.9rem;
  box-sizing: border-box;
  padding: 10vh 0;
  height: 100%;
  overflow: auto;
  text-overflow: ellipsis;
  scrollbar-width: none;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 95%);
}
.stone, p {
  margin: 0;
}
h3 {
  margin-top: 2rem;
  margin-bottom: 3rem;
}
hr {
  background-color: var(--fontlct);
  border: none;
  height: 0.3vh;
  width: 70%;           
  margin: 1vh auto;  
}
@media (max-width: 600px) {
  .scroll-container {
  margin: 10vh 5vw;
  position: relative;
  height: 70vh;
}
}
.topsh,
.bottomsh {
  position: absolute;
  width: 100%;
  height: 10%;
  left: 0;
}

.topsh {
  top: 0;
  border-radius: 50% / 100%;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0) 0%,                  
    rgba(0, 0, 0, 0.0) 60%,         
    rgba(30, 30, 30, 0.2) 100%            
  );
}

.bottomsh {
  bottom: 0;
  border-radius: 50% / 100%;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,                  
    rgba(0, 0, 0, 0.0) 60%,         
    rgba(30, 30, 30, 0.2) 100%          
  );
}
</style>
