<script setup>

</script>

<template>
  <section>
    <main>
      <!-- TODO-Content: photo date and description -->
      <h5>March 6, 2025 - Team Photo</h5>
    </main>
  </section>
</template>

<style scoped lang="scss">
@import "../assets/base.scss";

section {
  width: 98vw;
  height: 100%;
  padding: 20px;
  margin: 40px 0px 0px;
}

main {
  // TODO-Content: put a team photo
  background-image: url("../components/images/TeamPic-2025.jpg");

  min-height: 90vh;
  width: 90vw;
  margin: auto;

  background-attachment: fixed;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-flow: row-reverse;
  align-items: flex-end;
  border-radius: 10px;
  // box-shadow: 0px 10px 12px rgba($text, $alpha: 0.4);
}

h5 {
  color: $background;
  text-shadow: 1px 1px 0px rgba($text, $alpha: 0.8);
  font-weight: 400;
  display: inline;
  font-size: 16px;
  margin: 20px;
}

@media screen and (max-width: 900px) {
  section {
    width: 100vw;
    padding: 0;
    margin: 0;
  }

  main {
    width: 100%;
    min-height: 80vw;
    background-size: cover;
    background-attachment: local;
  }

  h5 {
    font-size: 14px;
    margin: 10px;
  }
}
</style>