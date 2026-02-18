<script setup>
import BaseHeader from '../../src/components/BaseHeader.vue'
import BaseFooter from '../../src/components/BaseFooter.vue'
import ProjectCard from "../../src/components/ProjectsCard.vue";

</script>

<template>

  <BaseHeader />

  <main class="outreach-main">
    <h1>Outreach</h1>
    <h2>Our Projects</h2>
    <div class="grid">
      <ProjectCard>
        <template v-slot:img>
          <img class="img" src="../components/images/outreach_images/OR-2025.jpg" />
        </template>
        <template v-slot:tag>Outreach</template>
        <template v-slot:date>October 18, 2025</template>
        <template v-slot:title>We were supporting Breast Cancer by participating in "octobre-rose"</template>
        <template v-slot:desc>
          During the month of October, we supported "octobre-rose", a breast cancer awareness initiative. We tried to
          support the initiative by making social media posts to spread the messag even further.
        </template>
      </ProjectCard>
      <ProjectCard>
        <template v-slot:img>
          <img class="img" src="../components/images/outreach_images/PO-2025.jpg" />
        </template>
        <template v-slot:tag>Outreach</template>
        <template v-slot:date>October 14, 2025</template>
        <template v-slot:title>Our team presenting robotics to parents</template>
        <template v-slot:desc>
          When our school was open so parents could visit their kids school, we made a small booth where we presented
          robotics to parents and answered their questions about robotics and our team.
        </template>
      </ProjectCard>
      <ProjectCard>
        <template v-slot:img>
          <img class="img" src="../components/images/outreach_images/GalaRobot-2025.jpg" />
        </template>
        <template v-slot:tag>Event</template>
        <template v-slot:date>June 18, 2025</template>
        <template v-slot:title>Our robot at the Gala</template>
        <template v-slot:desc>
          Our students decorated and drove the team's robot the our school gala. We were trying to spread awareness
          about what is really a robotics team and how hard we work, enven off-season to make the robotic world better.
        </template>
      </ProjectCard>
      <ProjectCard>
        <template v-slot:img>
          <img class="img" src="../components/images/Robot_images/2025_robot.jpg" />
        </template>
        <template v-slot:tag>Event</template>
        <template v-slot:date>March 6-8, 2025</template>
        <template v-slot:title>Festival de Robotique 2025 - FIRST Reefscape</template>
        <template v-slot:desc>
          We participated in the Festival de Robotique 2025 where we presented our robot for the FIRST Robotics
          Competition.
          This event allowed us to showcase our hard work and dedication to robotics while engaging with the community.
        </template>
      </ProjectCard>
      <ProjectCard>
        <template v-slot:img>
          <img class="img" src="../components/images/outreach_images/Serpuarien-2025.jpg" />
        </template>
        <template v-slot:tag>Outreach</template>
        <template v-slot:date>Fall 2024</template>
        <template v-slot:title>Serpuarien Initiative in College Stanislas</template>
        <template v-slot:desc>
          Our team helped the serpuarien initiative in our school. Their names, "serpuarien", means "don't have a
          purpose anymore", because they recycle old useless elecronics.
        </template>
      </ProjectCard>
    </div>
  </main>

  <BaseFooter />
</template>

<style scoped lang="scss">
@import "../assets/base.scss";

h1 {
  font-size: min(13vw, 80px);
}

.outreach-main {
  background-color: $primary;
  margin: auto;
  padding: 15px;

  >h2 {
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
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  gap: 20px;

  >div {
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
