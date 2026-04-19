<script setup>
import MemberCardComponent from './MemberCardComponent.vue';

const captains = [
    { link: "/TeamMembers_images/Nina_Picture.jpg", name: "Nina", title: "Team Captain"},
    { link: "/TeamMembers_images/Timothee_Picture.jpg", name: "Timothée", title: "Dev Lead & Co-Captain"}
];

const members = [
    { link: "/TeamMembers_images/Maya_Picture.jpg", name: "Maya", title: "Communication Lead"},
    { link: "/TeamMembers_images/Alban_Picture.jpg", name: "Alban", title: "Construction Lead"},
    { link: "/TeamMembers_images/Nayl_Picture.png", name: "Nayl", title: "Dev Member"},
    { link: "/TeamMembers_images/Raphael_Picture.jpg", name: "Raphaël", title: "Dev Member"},
    { link: "/TeamMembers_images/Katherine_Picture.jpg", name: "Katherine", title: "Security Lead & Dev Member"}
];

const mentors = [
    { link: "/TeamMembers_images/Raphael_Mentor_Picture.jpg", name: "Raphaël", title: "Dev Mentor & Coach"},
    { link: "/TeamMembers_images/Teo_Picture.jpg", name: "Téo", title: "Construction Mentor & Coach"}

];
</script>

<template>
    <!-- image de l'organisation de StanRobotix?-->
    <h2 id="captains">Team Captains</h2>
    <div class="category">
        <member-card-component v-for="member in captains" :link="member.link">
            <template v-slot:name>{{ member.name }}</template>
            <template v-slot:title>{{ member.title }}</template>
        </member-card-component>
    </div>
    <h2 id="members">Team Members</h2>
    <div class="category">
        <member-card-component v-for="member in members" :link="member.link">
            <template v-slot:name>{{ member.name }}</template>
            <template v-slot:title>{{ member.title }}</template>
        </member-card-component>
    </div>
    <h2 id="mentors">Team Mentors</h2>
    <div class="category">
        <member-card-component v-for="member in mentors" :link="member.link">
            <template v-slot:name>{{ member.name }}</template>
            <template v-slot:title>{{ member.title }}</template>
        </member-card-component>
    </div>
</template>

<style scoped lang="scss">
@use "../assets/base.scss";

h2 {
    font-weight: 600;
    font-size: 300%;
    line-height: 125%;
    width: max-content;
    margin: 15px auto;

    border-bottom: 4px solid base.$blue;
}

.category {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 15px;
    padding: 15px 0;
}
</style>