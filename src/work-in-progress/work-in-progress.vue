<script setup>
import BaseHeader from '../../src/components/BaseHeader.vue'
import BaseFooter from '../../src/components/BaseFooter.vue'
</script>

<template>
  <BaseHeader/>
  <main>
    <h1>This page is still being updated!</h1>
    <h3>Our team of students are actively working on this page. <br>Check back soon for updates!<br>
    If you want to contact us or get more information about the team, send us a mail : <a href="mailto:stanrobotix@gmail.com">stanrobotix@gmail.com</a></h3>
  </main>
  <BaseFooter/>
</template>

<style scoped lang="scss">
@use "../assets/base.scss";

h1 {
    font-size: 4em;
}

h3 {
    text-align: center;
    font-weight: 300;
}

main {
    margin-bottom: 6em;
}

</style>
