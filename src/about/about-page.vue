<script setup>
import BaseHeader from '../../src/components/BaseHeader.vue'
import BaseFooter from '../../src/components/BaseFooter.vue'
// import AboutExplanatoryText from '../../src/components/AboutExplanatoryText.vue'
import AboutSubteams from '../../src/components/AboutSubteams.vue';
import AboutOrganizationalChart from '../../src/components/AboutOrganizationalChart.vue';
import AboutExplanatoryText from '../../src/components/AboutExplanatoryText.vue';
</script>

<template>
    <BaseHeader></BaseHeader>
        <main>
            <h1>About <span>Us</span></h1>
            <h3>Team members</h3>
            <AboutExplanatoryText></AboutExplanatoryText>
            <AboutOrganizationalChart></AboutOrganizationalChart>
            <a id="subteams"><AboutSubteams></AboutSubteams></a>
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

h1 {
    font-size: min(13vw, 80px);
}
</style>