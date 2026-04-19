<script setup></script>

<template>
  <section class="sponsors">
    <a href="https://www.msfoundation.org/accueil.html" target="_blank">
      <img src="./images/Sponsors-logo/Fondation-Macdonald-Steward-logo.png" alt="Fondation Macdonald Steward" />
    </a>
    <a href="/sponsors/#donating">
      <i class="fa-solid fa-plus"></i>
      <h3>Add Your <br />Logo Here</h3>
    </a>
    <a href="/sponsors/#donating">
      <i class="fa-solid fa-plus"></i>
      <h3>Add Your <br />Logo Here</h3>
    </a>
  </section>
</template>

<style scoped lang="scss">
@use "../assets/base.scss";

.sponsors {
  background-color: base.$background;

  display: flex;
  height: 75px;
  width: 80vw;
  margin: 10px auto;
  // position: absolute;
  // top: -110px;
  padding-bottom: 15px;
  border-radius: 150px;
  justify-content: space-evenly;
  align-items: center;
  z-index: 0;
  // box-shadow: 0px -5px 0px 0 base.$accent, 0 -10px 0px 0px base.$text , 0 -15px 0px 0px base.$primary;

  a,
  img {
    height: 100%;
    color: base.$accent;
    transition: all 0.5s ease;
  }

  a:hover,
  img:hover {
    transform: scale(1.1);
  }

  a {
    display: flex;
    align-items: center;
    gap: 10px;

    i {
      font-size: 24px;
    }

    h3 {
      text-transform: uppercase;
      font-weight: 300;
    }
  }
}
</style>
