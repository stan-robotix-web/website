<script setup>
</script>

<template>
  <div>
      <slot name="img" class="img"></slot>
    <div>
      <h4>
        <slot name="tag"></slot>
      </h4>
      <h5>
        <slot name="date"></slot>
      </h5>
      <h3>
        <slot name="title"></slot>
      </h3>
      <p>
        <slot name="desc"></slot>
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/base.scss";

h3 {
  color: $blue;
  margin: 15px 0px 0px;
  grid-area: mid;

  +p {
    grid-area: bot;
    text-align: justify;
    font-size: 14px;
  }
}

div>div {
  width: auto;
  max-width: 600px;
  min-width: 200px;
  border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  height: min-content;
}

.img+div {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content min-content auto;
  grid-template-areas:
    "top top"
    "mid mid"
    "bot bot"
  ;
  margin-top: -5px;
  border-radius: 0px 0px 10px 10px;
  background-color: white;
  height: min-content;
  padding: 20px;
}

h4,
h5 {
  display: inline;
  font-size: 14px;
  margin: 0;
  grid-row: 1;
}

h4 {
  text-transform: uppercase;
  color: white;
  border-radius: 10px;
  padding: 2px 10px;
  background: linear-gradient($accent, $orange);
  width: max-content;
  height: min-content;
}

h5 {
  text-align: justify;
  font-weight: 300;
  margin-left: 15px;
  color: $secondary;
}
</style>