<script setup>
import BaseHeader from '../../src/components/BaseHeader.vue'
import BaseFooter from '../../src/components/BaseFooter.vue'
// import AboutExplanatoryText from '../../src/components/AboutExplanatoryText.vue'
import AboutSubteams from '../../src/components/AboutSubteams.vue';
import AboutOrganizationalChart from '../../src/components/AboutOrganizationalChart.vue';
</script>

<template>
    <BaseHeader></BaseHeader>
        <main>
            <h1>About <span>Us</span></h1>
            <h3>Team members</h3>
            <AboutOrganizationalChart></AboutOrganizationalChart>
            <AboutSubteams></AboutSubteams>
        </main>
    <BaseFooter></BaseFooter>
</template>

<style scoped lang="scss">
@import "../assets/base.scss";

main {
    font-family: Inter, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;;
}

template {
    color: $text;
}

h1 span {
  background-color: $accent;
  border-radius: 1em;
  padding: 5px 0.5em;
  color:white;
}

h3 {
  text-align: center;
  font-weight: 300;
  font-size: 24px;
  margin: 1.75em;
}

</style>