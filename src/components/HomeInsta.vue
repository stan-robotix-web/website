<script setup>
(() => {
  const d = document,
    s = d.createElement("script");
  s.type = "module";
  s.src = "https://w.behold.so/widget.js";
  d.head.append(s);
})();
</script>

<template>
  <section>
    <main>
      <h2>Instagram <i class="fa-brands fa-instagram"></i></h2>
      <behold-widget feed-id="OXReOhMVH3clzilNHD0S"></behold-widget>
    </main>
  </section>
</template>

<style scoped lang="scss">
@use "../assets/base.scss";

main {
  padding: 20px;
  width: 60vw;
  margin: auto;
}

main > h2 {
  font-weight: 600;
  font-size: 300%;
  line-height: 140%;
  text-align: center;
  width: max-content;
  margin: 10px auto 40px;

  border-bottom: 4px solid base.$accent;

  i {
    color: base.$accent;
  }
}

@media screen and (max-width: 900px) {
  main {
    width: 90vw;
  }
}
</style>
