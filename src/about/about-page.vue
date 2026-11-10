<script setup>
import BaseHeader from '../../src/components/BaseHeader.vue';
import BaseFooter from '../../src/components/BaseFooter.vue';
import AboutSubteams from '../../src/components/AboutSubteams.vue';
import AboutOrganizationalChart from '../../src/components/AboutOrganizationalChart.vue';
import AboutExplanatoryText from '../../src/components/AboutExplanatoryText.vue';
</script>

<template>

    <BaseHeader />

        <main>
            <h1>About <span>Us</span></h1>
            <AboutExplanatoryText id="explanatory-text" />
            <AboutOrganizationalChart id="organizational-chart" />
            <AboutSubteams id="subteams" />
        </main>

    <BaseFooter />

</template>

<style scoped lang="scss">
@use "../assets/base.scss";

template {
    color: base.$text;
}

h1 {
    font-size: min(13vw, 80px);
}
</style>