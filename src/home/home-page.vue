<script setup>
import BaseHeader from "../../src/components/BaseHeader.vue";
import BaseFooter from "../../src/components/BaseFooter.vue";
import HomeRecently from "../components/HomeRecently.vue";
import HomePhoto from "../components/HomePhoto.vue";
import HomeInstaFeed from "../components/HomeInsta.vue";
</script>

<template>
  <BaseHeader />

  <main>
    <h1>Stan <span>Robotix</span></h1>
    <h3>Team 6622</h3>
    <img
      alt="logo"
      class="logo"
      src="../components/icons/Logotix-Bluetext.svg"
      height="200px"
    />
    <HomeRecently />
    <HomePhoto />
    <HomeInstaFeed />
  </main>
  <BaseFooter />
</template>

<style scoped lang="scss">
@import "../assets/base.scss";

h1 span {
  background-color: $accent;
  border-radius: 1em;
  padding: 5px 0.5em;
  color: white;
}

h3 {
  text-align: center;
  font-weight: 300;
  font-size: 24px;
  margin: 1.75em;
}

img {
  margin: 0.5em auto;
  margin-bottom: 3em;
  display: block;
}
</style>
