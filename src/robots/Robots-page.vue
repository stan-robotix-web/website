<script setup>
import BaseHeader from '../../src/components/BaseHeader.vue'
import BaseFooter from '../../src/components/BaseFooter.vue'
import RobotCardComponent from '../../src/components/RobotCardComponent.vue';
</script>
<template>

  <BaseHeader/>

  <main>
    <h1>Robots</h1>

    <nav>
      <a href="#reefscape_2025">
        <h2>2025</h2>
        <img
          src="../components/images/Competition_logos/2025_REEFSCAPE/2025_logo_text.png"
          class="logo" min-width="336px">
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
          <img src="../components/images/Competition_logos/2025_REEFSCAPE/2025_logo_patch.png" min-width="116px" width="100%">
        </template>
        <template v-slot:img>
          <img src="../components/images/Robot_images/2025_robot.jpg" width="100%">
        </template>
        <template v-slot:desc>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Sed leo nascetur integer facilisis accumsan aliquet
          elementum phasellus vitae. Tempus dis mauris integer nostra hac. Metus porta lacus ultricies fermentum
          mollis
          curabitur pharetra risus. Nam nullam class imperdiet iaculis felis taciti fringilla porta. Congue taciti leo
          bibendum feugiat tristique. Nam dictumst id ligula at scelerisque ex euismod. Imperdiet nisl natoque varius
          mauris quisque. Consequat lacinia nascetur tellus dignissim nibh, dolor neque eleifend.
          <br>
          Et dis nostra maximus suscipit cursus viverra quisque. Cursus malesuada elementum euismod consequat
          condimentum pellentesque vulputate. Curabitur leo praesent amet maecenas, rhoncus facilisi adipiscing. Magna
          magnis donec egestas dui erat vitae fames dui. Faucibus integer enim faucibus; sem et nisl! Augue felis
          nostra
          inceptos; curae ultrices accumsan. Sed finibus faucibus vitae vulputate accumsan ad. Blandit neque ipsum
          dictumst sociosqu pretium non.
        </template>
        <template v-slot:date>Reefscape<sup>SM</sup> - 2025</template>
      </RobotCardComponent>
      <RobotCardComponent side="right" year="crescendo_2024">
        <template v-slot:logo>
          <img src="../components/images/Competition_logos/2024_CRESCENDO/Horizontal/Full Color/FIS_CRESCENDO_Logo_Horizontal_RGB.png" min-width="116px" width="100%">
        </template>
        <template v-slot:img>
          <img src="../components/images/Robot_images/2024_robot.jpg" width="100%">
        </template>
        <template v-slot:desc>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Sed leo nascetur integer facilisis accumsan aliquet
          elementum phasellus vitae. Tempus dis mauris integer nostra hac. Metus porta lacus ultricies fermentum
          mollis
          curabitur pharetra risus. Nam nullam class imperdiet iaculis felis taciti fringilla porta. Congue taciti leo
          bibendum feugiat tristique. Nam dictumst id ligula at scelerisque ex euismod. Imperdiet nisl natoque varius
          mauris quisque. Consequat lacinia nascetur tellus dignissim nibh, dolor neque eleifend.
          <br>
          Et dis nostra maximus suscipit cursus viverra quisque. Cursus malesuada elementum euismod consequat
          condimentum pellentesque vulputate. Curabitur leo praesent amet maecenas, rhoncus facilisi adipiscing. Magna
          magnis donec egestas dui erat vitae fames dui. Faucibus integer enim faucibus; sem et nisl! Augue felis
          nostra
          inceptos; curae ultrices accumsan. Sed finibus faucibus vitae vulputate accumsan ad. Blandit neque ipsum
          dictumst sociosqu pretium non.
        </template>
        <template v-slot:date>Crescendo<sup>SM</sup> - 2024</template>
      </RobotCardComponent>
      <RobotCardComponent side="left" year="charged_up_2023">
        <template v-slot:logo>
          <img src="../components/images/Competition_logos/2023_CHARGED UP/Vertical/Full Color/CHARGED_UP_Logo_Vert_RGB_FullColor.png" min-width="116px" width="100%">
        </template>
        <template v-slot:img>
          <img src="../components/images/Robot_images/2023_robot.jpg" width="100%">
        </template>
        <template v-slot:desc>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Sed leo nascetur integer facilisis accumsan aliquet
          elementum phasellus vitae. Tempus dis mauris integer nostra hac. Metus porta lacus ultricies fermentum
          mollis
          curabitur pharetra risus. Nam nullam class imperdiet iaculis felis taciti fringilla porta. Congue taciti leo
          bibendum feugiat tristique. Nam dictumst id ligula at scelerisque ex euismod. Imperdiet nisl natoque varius
          mauris quisque. Consequat lacinia nascetur tellus dignissim nibh, dolor neque eleifend.
          <br>
          Et dis nostra maximus suscipit cursus viverra quisque. Cursus malesuada elementum euismod consequat
          condimentum pellentesque vulputate. Curabitur leo praesent amet maecenas, rhoncus facilisi adipiscing. Magna
          magnis donec egestas dui erat vitae fames dui. Faucibus integer enim faucibus; sem et nisl! Augue felis
          nostra
          inceptos; curae ultrices accumsan. Sed finibus faucibus vitae vulputate accumsan ad. Blandit neque ipsum
          dictumst sociosqu pretium non.
        </template>
        <template v-slot:date>Charged Up<sup>SM</sup> - 2023</template>
      </RobotCardComponent>
      <RobotCardComponent side="right" year="rapid_react_2022">
        <template v-slot:logo>
          <img src="../components/images/Competition_logos/2022_RAPID REACT/Vertical/Full Color/RAPID_REACT_Logo_Vertical_RGB_FullColor.png" min-width="224px" width="100%">
        </template>
        <template v-slot:img>
          <!-- <img src="../components/images/Robot_images/2022_robot.jpg" width="100%"> -->
        </template>
        <template v-slot:desc>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Sed leo nascetur integer facilisis accumsan aliquet
          elementum phasellus vitae. Tempus dis mauris integer nostra hac. Metus porta lacus ultricies fermentum
          mollis
          curabitur pharetra risus. Nam nullam class imperdiet iaculis felis taciti fringilla porta. Congue taciti leo
          bibendum feugiat tristique. Nam dictumst id ligula at scelerisque ex euismod. Imperdiet nisl natoque varius
          mauris quisque. Consequat lacinia nascetur tellus dignissim nibh, dolor neque eleifend.
          <br>
          Et dis nostra maximus suscipit cursus viverra quisque. Cursus malesuada elementum euismod consequat
          condimentum pellentesque vulputate. Curabitur leo praesent amet maecenas, rhoncus facilisi adipiscing. Magna
          magnis donec egestas dui erat vitae fames dui. Faucibus integer enim faucibus; sem et nisl! Augue felis
          nostra
          inceptos; curae ultrices accumsan. Sed finibus faucibus vitae vulputate accumsan ad. Blandit neque ipsum
          dictumst sociosqu pretium non.
        </template>
        <template v-slot:date>RAPID REACT<sup>SM</sup> - 2022</template>
      </RobotCardComponent>
    </div>
  </main>
  <BaseFooter />
</template>

<style scoped lang="scss">
@import "../assets/base.scss";

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
    color: $accent;
    transform: translateX(-50%) translateY(-10px);
  }
}

</style>