<script setup>
import BaseNav from './BaseNav.vue'
</script>

<template>
  <header>
    <a href="/"><img alt="logo" class="logo" src="../components/icons/Nombrotix.svg" height="100px"/></a>
    
    <div class="icons">
      <a href="https://www.instagram.com/stan.robotix.6622/" target="”_blank”"><i class="fa-brands fa-instagram"></i></a>
      <a href="https://www.facebook.com/stanrobotix6622" target="”_blank”"><i class="fa-brands fa-facebook"></i></a>
      <a href="mailto:stanrobotix@gmail.com"><i class="fa-regular fa-envelope"></i></a>
      <a href="https://ca.linkedin.com/company/stanrobotix" target="”_blank”"><i class="fa-brands fa-linkedin"></i></a>
    </div>
    <BaseNav/>
  </header>
</template>

<style scoped lang="scss">
@import "../assets/base.scss";

header {
  display: grid;
  grid-template-columns: 120px 50px 1fr 640px;
  justify-items: center;
  align-items: center;

  padding: 0 20px;
  height: 120px;
  margin-bottom: 10px;
}

header *:last-child {
  grid-column: 4;
}

header a {
  height:100px;

  svg {
    color: blue;
  }
}

.icons {
  height: 100px;
  display: flex;
  justify-content: center;
  align-content: space-evenly;
  align-items: center;
  flex-flow:column ;
  flex-wrap: wrap;
  font-size: 25px;
  gap: 15px;
  margin-left: 20px;
  transform: translateY(-2px);
}

.icons a {
  height: min-content;
  width: min-content;
  line-height: 1;
  color: rgba($text, 0.9);
}

.icons a:hover {
  color: rgba($secondary, $alpha: 0.6);
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
