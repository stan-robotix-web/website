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
            <h1>About</h1>
        </main>
    <AboutExplanatoryText></AboutExplanatoryText>
    <AboutOrganizationalChart></AboutOrganizationalChart>
    <AboutSubteams></AboutSubteams>
    <BaseFooter></BaseFooter>
</template>

<style scoped lang="scss">
@import "../assets/base.scss";

template {
    color: $text;
}

</style>