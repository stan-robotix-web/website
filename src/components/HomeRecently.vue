<script setup>
import NewsCardClickable from "./NewsCardClickable.vue";
import NewsCardUnclick from "./NewsCardUnclick.vue";
</script>

<template>
  <main>
    <h2>Recently</h2>

    <div class="grid">
      <!-- TODO-Content: Complete with events and possibly links to learn more if needed ; if not, use NewsCardUnclick -->
      <NewsCardClickable link="/robots/">
        <template v-slot:img>
          <img src="../components/images/robot-2025.jpg" /> <!-- image a changer -->
        </template>
        <template v-slot:tag>Event</template>
        <template v-slot:date>March 6, 2025</template>
        <template v-slot:title
          >Festival de Robotique 2025 - FIRST Reefscape</template
        >
      </NewsCardClickable>

      <NewsCardUnclick>
        <template v-slot:img>
          <img class="img" src="../components/images/GalaRobot-2025.jpg" />
        </template>
        <template v-slot:tag>Event</template>
        <template v-slot:date>June 18, 2025</template>
        <template v-slot:title>Our robot at the Gala</template>
        <template v-slot:desc
          >Our students decorated and drove the team's robot the our school gala. The idea behind this was to show everyone how cool robotics is and how far you can go making robots.</template
        >
      </NewsCardUnclick>

      <NewsCardClickable link="https://lesserpuariens.com/">
        <template v-slot:img>
          <img
            src="../components/images/Serpuarien-2025.jpg"
          />
        </template>
        <template v-slot:tag>Outreach</template>
        <template v-slot:date>Fall 2024</template>
        <template v-slot:title
          >Serpuarien Initiative in College Stanislas</template
        >
      </NewsCardClickable>
    </div>
  </main>
</template>

<style scoped lang="scss">
@import "../assets/base.scss";

main {
  background-color: $primary;
  margin: auto;
  padding: 15px;

  > h2 {
    font-weight: 600;
    font-size: 300%;
    line-height: 125%;
    text-align: center;
    width: max-content;
    margin: 15px auto;

    border-bottom: 4px solid $blue;
  }
}

.grid {
  width: max(880px, 70vw);
  display: grid;
  margin: 40px auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  gap: 20px;

  > div {
    width: auto;
    max-width: 600px;
    min-width: 200px;
    border-radius: 10px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
    height: min-content;
  }

  img {
    border-radius: 10px 10px 0px 0px;
    height: 300px;
    width: 100%;
    object-fit: cover;
  }
}

@media screen and (max-width: 900px) {
  .grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 90vw;
  }
}
</style>
