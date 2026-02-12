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
      <a href="#crescendo">
        <h2>2024</h2>
        <img
          src="https://www.chiefdelphi.com/uploads/default/original/3X/e/3/e368a7acb70c869b89fee0382bfe312c595bb781.svg"
          class="logo">
      </a>
      <a href="#chargedup">
        <h2>2023</h2>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/Charged_Up_Logo.svg/1920px-Charged_Up_Logo.svg.png"
          class="logo">
      </a>
      <a href="#rapidreact">
        <h2>2022</h2>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Rapid_React_Logo.svg/1024px-Rapid_React_Logo.svg.png"
          class="logo">
      </a>
    </nav>



    <div class="timeline">
      <i class="fa-solid fa-chevron-up arrow"></i>
      <RobotCardComponent side="left" year="reefscape">
        <template v-slot:logo>
          <img src="./../components/images/fd_frc_reefscape_logo_patch_full color_rgb.png" width="100%">
        </template>
        <template v-slot:img>
          <img src="../components/images/robot.jpg" width="100%">
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
        <template v-slot:date>Reefscape - 2025</template>
      </RobotCardComponent>
      <RobotCardComponent year="crescendo">
        <template v-slot:logo>
          <img src="https://www.chiefdelphi.com/uploads/default/original/3X/e/3/e368a7acb70c869b89fee0382bfe312c595bb781.svg" width="100%">
        </template>
        <template v-slot:img>
          <img src="../components/images/robot.jpg" width="100%">
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
        <template v-slot:date>Crescendo - 2024</template>
      </RobotCardComponent>
      <RobotCardComponent side="left" year="chargedup">
        <template v-slot:logo>
          <img src="https://www.chiefdelphi.com/uploads/default/original/3X/e/3/e368a7acb70c869b89fee0382bfe312c595bb781.svg" width="100%">
        </template>
        <template v-slot:img>
          <img src="../components/images/robot.jpg" width="100%">
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
        <template v-slot:date>Charged Up - 2023</template>
      </RobotCardComponent>
    </div>
  </main>
  <BaseFooter />
</template>

<style scoped lang="scss">
@use "../assets/base.scss";

$line-distance : 50px;
$circle-radius : 15px;

@mixin content($card-background) {
  background: $card-background;

  .dots {
    background-color: $card-background;
    box-shadow: 0px 10px 5px 5px $card-background;
  }
}


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

// Styles specific to year

.card { // DEFAULT
  @include content(base.$primary);
}

#reefscape {
  @include content(#b2e6f4);
}

#crescendo {
  @include content(#aedaca);
}
</style>
