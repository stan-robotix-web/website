<script setup>
import BaseHeader from '../../src/components/BaseHeader.vue'
import BaseFooter from '../../src/components/BaseFooter.vue'
import RobotCardComponent from '../../src/components/RobotCardComponent.vue';
</script>
<template>

  <BaseHeader />

  <main>
    <h1>Robots</h1>

    <nav>
      <a href="#reefscape_2025">
        <h2>2025</h2>
        <img src="../components/images/Competition_logos/2025_REEFSCAPE/2025_logo_text.png" class="logo"
          min-width="336px">
      </a>
      <a href="#crescendo_2024">
        <h2>2024</h2>
        <img
          src="../components/images/Competition_logos/2024_CRESCENDO/Horizontal/Full Color/FIS_CRESCENDO_Logo_Horizontal_RGB.png"
          class="logo" min-width="336px">
      </a>
      <a href="#charged_up_2023">
        <h2>2023</h2>
        <img
          src="../components/images/Competition_logos/2023_CHARGED UP/Horizontal/Full Color/CHARGED_UP_Logo_Horiz_RGB_FullColor.png"
          class="logo" min-width="336px">
      </a>
      <a href="#rapid_react_2022">
        <h2>2022</h2>
        <img
          src="../components/images/Competition_logos/2022_RAPID REACT/Horizontal/Full Color/RAPID_REACT_Logo_Horizontal_RGB_FullColor-01.png"
          class="logo" min-width="378px">
      </a>
    </nav>



    <div class="timeline">
      <i class="fa-solid fa-chevron-up arrow"></i>
      <RobotCardComponent side="left" year="reefscape_2025">
        <template v-slot:logo>
          <img src="../components/images/Competition_logos/2025_REEFSCAPE/2025_logo_patch.png" min-width="116px"
            width="100%">
        </template>
        <template v-slot:img>
          <img src="../components/images/Robot_images/2025_robot.jpg" width="100%">
        </template>
        <template v-slot:desc>
          Our robot for Reefscape had three mecanisms: the first one was able to pickup coral on the ground and on for
          the feeding station, the second one was able to grab algea from the ground and put it into the processor, the
          third one was able to reach up and remove the algea from the reef and drop it on the ground to be later picked
          up.
        </template>
        <template v-slot:date>Reefscape<sup>SM</sup> - 2025</template>
      </RobotCardComponent>
      <RobotCardComponent side="right" year="crescendo_2024">
        <template v-slot:logo>
          <img
            src="../components/images/Competition_logos/2024_CRESCENDO/Horizontal/Full Color/FIS_CRESCENDO_Logo_Horizontal_RGB.png"
            min-width="116px" width="100%">
        </template>
        <template v-slot:img>
          <img src="../components/images/Robot_images/2024_robot.jpg" width="100%">
        </template>
        <template v-slot:desc>
          Our robot for Crescendo had an arm with an intake able to pickup from the ground and output into the Amp. This
          arm was installed on an elevator which was also used as our climbing mechanism with the help of hooks mounted
          on the elevator. We were able to score in the trap during endgame but multiple problems led to this never
          happening during a match.
        </template>
        <template v-slot:date>Crescendo<sup>SM</sup> - 2024</template>
      </RobotCardComponent>
      <RobotCardComponent side="left" year="charged_up_2023">
        <template v-slot:logo>
          <img
            src="../components/images/Competition_logos/2023_CHARGED UP/Vertical/Full Color/CHARGED_UP_Logo_Vert_RGB_FullColor.png"
            min-width="116px" width="100%">
        </template>
        <template v-slot:img>
          <img src="../components/images/Robot_images/2023_robot.jpg" width="100%">
        </template>
        <template v-slot:desc>
          Our robot for Charged Up was driven with a mecanum drive and a U shapped frame. In order to pickup the game
          pieces, we had a suction cup which was mounted on a custom angled elevator. To correctly position the cones
          and cubes in the robot, we had two wheels on either sides of the U.
        </template>
        <template v-slot:date>Charged Up<sup>SM</sup> - 2023</template>
      </RobotCardComponent>
      <RobotCardComponent side="right" year="rapid_react_2022">
        <template v-slot:logo>
          <img
            src="../components/images/Competition_logos/2022_RAPID REACT/Vertical/Full Color/RAPID_REACT_Logo_Vertical_RGB_FullColor.png"
            min-width="224px" width="100%">
        </template>
        <template v-slot:img>
          <img src="../components/images/Robot_images/2022_robot_practice.png" width="100%">
        </template>
        <template v-slot:desc>
          Our robot for Rapid React was driven with a tank drive and a U shapped frame. Our intake lead the balls into
          the shooter which had a fixed shooting angle designed to fall directly into the basket. During the endgame,
          our climber was able to pull itself from the second level bar.
        </template>
        <template v-slot:date>RAPID REACT<sup>SM</sup> - 2022</template>
      </RobotCardComponent>
    </div>
  </main>
  <BaseFooter />
</template>

<style scoped lang="scss">
@use "../assets/base.scss";

nav {
  display: flex;
  justify-content: space-around;
  width: 80vw;
  margin: auto;

  img {
    height: 100px;
  }
}

.timeline {
  margin: 20px;
  margin-top: 40px;

  .arrow {
    position: absolute;
    left: 50%;
    font-size: 32px;
    width: min-content;
    color: base.$accent;
    transform: translateX(-50%) translateY(-10px);
  }
}
</style>
