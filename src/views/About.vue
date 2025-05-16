<template>
  <div class="scroll-container">
    <div class="topsh"></div>
    <div class="scroll">
      <br>
      <br>
      <div>
        <h1 class="stone highlight">IT Helper</h1>
        <p>SIT Belluno, July 2022</p>
        <h4></h4>
      </div>
      <div>
        <h1 class="stone highlight">IT Internship</h1>
        <p>SIT Belluno, May 2022</p>
        <h4></h4>
      </div>
                <hr>
      <div>
        <h1 class="stone highlight">CS Tutoring</h1>
        <p>Nov 2022 - Jan 2023</p>
        <h4></h4>
      </div>
                <hr>
      <div>
        <h1 class="stone highlight">English C1</h1>
        <p>Cambridge, Dec 2022</p>
        <h4></h4>
      </div>
      <br>
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
  font-size: 1rem;
  height: 100%;
  overflow: auto;
  text-overflow: ellipsis;
  white-space: nowrap;
  scrollbar-width: none;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 95%);
}
.stone, p {
  margin: 0;
}
h4 {
  margin-top: 1rem;
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
  margin: 10vh 16vw;
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
