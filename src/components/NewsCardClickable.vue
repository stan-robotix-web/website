<script setup>

const props = defineProps({
  link: {
    type: String,
    required: true
  },
  target: {
    type: String,
    required: false
  }
});
</script>

<template>
  <div>
    <a :href="link" :target="target" rel="noopener noreferrer" class="img"><i class="fa-solid fa-location-arrow"></i>
      <slot name="img"></slot>
    </a>
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
      <a :href="link" :target="target" rel="noopener noreferrer">Learn More <i class="fa-solid fa-arrow-right-long"></i></a>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../assets/base.scss";

h3 {
  color: base.$blue;
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

.img>i+* {
  border-radius: 10px 10px 0px 0px;
  height: 300px;
  width: 100%;
  object-fit: cover;
}

a.img {
  background-color: black;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: inline-grid;
  grid-template: "mid" 1fr/
    1fr;

  margin: 0;
  border-radius: 10px 10px 0px 0px;

  i+* {
    transition: all 0.5s ease;
    vertical-align: middle;
    grid-area: mid;
  }

  >i {
    grid-area: mid;
    margin: auto;
    z-index: 2;
    color: white;
    font-size: 0px;
  }
}


a.img:hover i+* {
  opacity: 0.7;
  transform: scale(1.1);
}

a.img:hover i {
  font-size: 32px;
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
  background: linear-gradient(base.$accent, base.$orange);
  width: max-content;
  height: min-content;
}

h5 {
  text-align: justify;
  font-weight: 300;
  margin-left: 15px;
  color: base.$secondary;
}

a {
  font-weight: 400;
  grid-area: bot;
  margin-top: 10px;
  transition: all 0.5s ease;

  i {
    color: base.$accent;
    transition: all 0.5s ease-out;
  }
}

h3+a:hover {
  color: base.$accent;
  font-weight: 500;

  i {
    margin-left: calc(100% - 105px);
  }
}
</style>