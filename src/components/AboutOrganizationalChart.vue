<script setup>
import MemberCardComponent from './MemberCardComponent.vue';

const captains = [
    { link: "/src/components/images/TeamMembers_images/Nina_Picture.jpg", name: "Nina", title: "Team Captain", category: "Team Captains" },
    { link: "/src/components/images/TeamMembers_images/Timothee_Picture.jpg", name: "Timothée", title: "Dev Lead & Co-Captain", category: "Team Captains" }
];

const members = [
    { link: "/src/components/images/TeamMembers_images/Maya_Picture.jpg", name: "Maya", title: "Communication Lead", category: "Team Members" },
    { link: "/src/components/images/TeamMembers_images/Alban_Picture.jpg", name: "Alban", title: "Construction Lead", category: "Team Members" },
    { link: "/src/components/images/TeamMembers_images/Nayl_Picture.jpg", name: "Nayl", title: "Dev Member", category: "Team Members" },
    { link: "/src/components/images/TeamMembers_images/Raphael_Picture.jpg", name: "Raphaël", title: "Dev Member", category: "Team Members" },
    { link: "/src/components/images/TeamMembers_images/Katherine_Picture.jpg", name: "Katherine", title: "Security Lead & Dev Member", category: "Team Members" }
];

const mentors = [
    { link: "/src/components/images/TeamMembers_images/Raphael_Mentor_Picture.jpg", name: "Raphaël", title: "Dev Mentor & Coach", category: "Team Mentors" },
    { link: "/src/components/images/TeamMembers_images/Teo_Picture.jpg", name: "Téo", title: "Construction Mentor & Coach", category: "Team Mentors" }

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
@import "../assets/base.scss";

h2 {
    font-weight: 600;
    font-size: 300%;
    line-height: 125%;
    width: max-content;
    margin: 15px auto;

    border-bottom: 4px solid $blue;
}

.category {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 15px;
}
</style>