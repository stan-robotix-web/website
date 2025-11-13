<script setup>
import MemberCardComponent from './MemberCardComponent.vue';

const members = [
    {link : "images/TeamMembers_images/Nina_Picture.jpg", name : "Nina", title : "Team Captain", category : "Team Captains"},
    {link : "images/TeamMembers_images/Timothee_Picture.jpg", name : "Timothée", title : "Dev Lead & Co-Captain", category : "Team Captains"},
    {link : "images/TeamMembers_images/Maya_Picture.jpg", name : "Maya", title : "Communication Lead", category : "Team Members"},
    {link : "images/TeamMembers_images/Alban_Picture.jpg", name : "Alban", title : "Construction Lead", category : "Team Members"},
    {link : "images/TeamMembers_images/Nayl_Picture.jpg", name : "Nayl", title : "Dev Member", category : "Team Members"},
    {link : "images/TeamMembers_images/Raphael_Picture.jpg", name : "Raphaël", title : "Dev Member", category : "Team Members"},
    {link : "images/TeamMembers_images/Katherine_Picture.jpg", name : "Katherine", title : "Security Lead & Dev Member", category : "Team Members"},
    {link : "images/TeamMembers_images/Raphael_Mentor_Picture.jpg", name : "Raphaël", title : "Dev Mentor & Coach", category : "Team Mentors"},
    {link : "images/TeamMembers_images/Teo_Picture.jpg", name : "Téo", title : "Construction Mentor & Coach", category : "Team Mentors"}
    ];
</script>

<template>
    <!-- image de l'organisation de StanRobotix?-->
    <h2 id="captains">Team Captains</h2>

    <div class="category">
        <div v-for="member in members">
            <member-card-component v-if="member.category === 'Team Captains'">
                <template v-slot:name>{{member.name}}</template>
                <template v-slot:title>{{member.title}}</template>
                <template v-slot:image><img></template>
            </member-card-component>
        </div>
    </div>
    <h2 id="members">Team Members</h2>
    <div class="category">
        <div v-for="member in members">
            <member-card-component v-if="member.category === 'Team Members'">
                <template v-slot:name>{{member.name}}</template>
                <template v-slot:title>{{member.title}}</template>
                <template v-slot:image><img></template>
            </member-card-component>
        </div>
    </div>
    <h2 id="mentors">Team Mentors</h2>
    <div class="category">
        <div v-for="member in members">
            <member-card-component v-if="member.category === 'Team Mentors'">
                <template v-slot:name>{{member.name}}</template>
                <template v-slot:title>{{member.title}}</template>
                <template v-slot:image><img></template>
            </member-card-component>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "../assets/base.scss";

$nombre_colonne: 5;
$nombre_rangee: 2;

h2 {
    font-weight: 600;
    font-size: 300%;
    line-height: 125%;
    text-align: center;
    width: max-content;
    margin: 15px auto;

    border-bottom: 4px solid $blue;
}

.category {
    display: grid;
    height: 500px;
    padding: 0 10px;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 15px;
    justify-items: stretch;
}

.member {
    display: flex;
    background-color: $primary;
    text-align: center;
    border-radius: 10px;
    flex-direction: column;
    align-content: stretch;
    height: 75%;
    width: 15%;
    min-width: 175px;

    background-position-y: 120%;
    background-size: contain;
    background-repeat: no-repeat;

    h4,
    h5 {
        margin: 0;
        height: 6%;
        color: white;
    }

    div {
        border-radius: 10px 10px 0px 0px;
        padding: 1px 5px;
        background: #6a829f;

        h4 {

            background: linear-gradient(#cd2d3a, #e35730);
            width: min-content;
            height: 108%;
            padding: 0 12px;
            margin: auto;
            border-radius: 8px;
        }
    }

    h5 {
        border-radius: 0px 0px 10px 10px;
        padding: 4px 1px;
        background: #6a829f;
        text-transform: uppercase;
    }
}

.category {
    display: flex;
    justify-content: center;
    align-items: center;

}

.Nina {
    background-image: url("images/TeamMembers_images/Nina_Picture.jpg");
}

.Timothee {
    background-image: url("images/TeamMembers_images/Timothee_Picture.jpg");
}

.Maya {
    background-image: url("images/TeamMembers_images/Maya_Picture.jpg");
}

.Alban {
    background-image: url("images/TeamMembers_images/Alban_Picture.jpg");
}

.Nayl {
    background-image: url("");
}

.Katherine {
    background-image: url("images/TeamMembers_images/Katherine_Picture.jpg");
}

.Raphael {
    background-image: url("");
}
</style>