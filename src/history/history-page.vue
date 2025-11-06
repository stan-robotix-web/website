<script setup>
import BaseHeader from '../../src/components/BaseHeader.vue'
import BaseFooter from '../../src/components/BaseFooter.vue'
</script>

<template>

  <BaseHeader/>

  <main>
    <h1>6622 History</h1>

    <div class="member band" id="student">
      <h3><span>20</span>17
      </h3>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac lectus vitae enim egestas eleifend. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque a aliquet nisl. Nunc condimentum mauris quis facilisis tempus. Integer quis metus viverra, tristique magna vel, fermentum felis. Aenean in volutpat ipsum, nec tincidunt leo. Etiam ultrices eros sapien, non pellentesque ligula accumsan ut.

Nullam efficitur non urna at aliquam. Nunc euismod rhoncus leo et lacinia. Sed a orci a risus euismod blandit eget vitae ipsum. Curabitur quis dui non sem elementum lacinia. Donec dignissim vitae est vitae suscipit. Suspendisse in diam ut ante imperdiet sodales eu sed tortor. Fusce fermentum consectetur metus a porta. Phasellus eu tincidunt tellus, sed congue felis. Integer ultricies quam quam, maximus laoreet ante feugiat vitae. Integer sit amet dictum augue. Mauris scelerisque mauris id massa euismod volutpat. 
      </p>
    </div>
    <div class="member band" id="student">
      <h3><span>20</span>20
      </h3>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac lectus vitae enim egestas eleifend. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque a aliquet nisl. Nunc condimentum mauris quis facilisis tempus. Integer quis metus viverra, tristique magna vel, fermentum felis. Aenean in volutpat ipsum, nec tincidunt leo. Etiam ultrices eros sapien, non pellentesque ligula accumsan ut.

Nullam efficitur non urna at aliquam. Nunc euismod rhoncus leo et lacinia. Sed a orci a risus euismod blandit eget vitae ipsum. Curabitur quis dui non sem elementum lacinia. Donec dignissim vitae est vitae suscipit. Suspendisse in diam ut ante imperdiet sodales eu sed tortor. Fusce fermentum consectetur metus a porta. Phasellus eu tincidunt tellus, sed congue felis. Integer ultricies quam quam, maximus laoreet ante feugiat vitae. Integer sit amet dictum augue. Mauris scelerisque mauris id massa euismod volutpat. 
      </p>
    </div>
    <div class="member band" id="student">
      <h3><span>20</span>24
      </h3>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac lectus vitae enim egestas eleifend. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque a aliquet nisl. Nunc condimentum mauris quis facilisis tempus. Integer quis metus viverra, tristique magna vel, fermentum felis. Aenean in volutpat ipsum, nec tincidunt leo. Etiam ultrices eros sapien, non pellentesque ligula accumsan ut.

Nullam efficitur non urna at aliquam. Nunc euismod rhoncus leo et lacinia. Sed a orci a risus euismod blandit eget vitae ipsum. Curabitur quis dui non sem elementum lacinia. Donec dignissim vitae est vitae suscipit. Suspendisse in diam ut ante imperdiet sodales eu sed tortor. Fusce fermentum consectetur metus a porta. Phasellus eu tincidunt tellus, sed congue felis. Integer ultricies quam quam, maximus laoreet ante feugiat vitae. Integer sit amet dictum augue. Mauris scelerisque mauris id massa euismod volutpat. 
      </p>
    </div>

  </main>

  <BaseFooter/>
</template>

<style scoped lang="scss">
@import "../assets/base.scss";

h1 {
    font-size: min(13vw, 80px);
}

h2 {
  text-align: center;
  font-size: min(17vw, 70px);
  line-height: calc(min(17vw, 70px) + 15px);
  font-weight: 700;
  margin: 0;
  text-transform: uppercase;
  font-family: "New Amsterdam", sans-serif;
}

h3 {
  text-align: center;
  font-size: min(13vw, 50px);
  line-height: calc(min(13vw, 50px) + 15px);
  font-weight: 700;
  margin: 0;
  text-transform: uppercase;
  font-family: "New Amsterdam", sans-serif;

  a {
    color: $accent;
  }
}

.band {
  background-color: $grey;
  border: 10px solid $secondary;
  margin: auto;
  margin-top: 50px;
  width: 60%;
  padding: 0 15px;

  h3 {
    color: $accent;

    span {
      color: $blue;
    }
  }

  p {
    text-align: justify;
    font-size: large;
    margin: 15px auto;
  }
  li {
    text-align: justify;
    font-size: large;
    margin: 5px auto;
    margin-left: 3%;
  }
  div {
    font-weight: bold;
    text-align: justify;
    font-size: large;
  }
  a span {
    color: $blue;
  }
}
</style>
