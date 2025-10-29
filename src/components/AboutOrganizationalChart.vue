<script setup></script>

<template>
    <!-- image de l'organisation de StanRobotix?-->
     <h2>Team Captains</h2>
     <ul class = "category">
        <li class = "Nina member" >
            <div>
                <h4>Nina</h4>
            </div>
            <h5 class="description">Team Captain</h5>
        </li>
        <li class = "Timothee member">
            <div>
                <h4>Timothée</h4>
            </div>
            <h5 class="description">Dev Team Captain</h5>
        </li>
     </ul>
     <h2>Team Members</h2>
     <ul  class = "category">
        <li class = "Maya member">
            <div>
                <h4>Maya</h4>
            </div>
            <h5 class="description">Construction Team</h5>
        </li>
        <li class = "Alban member">
            <div>
                <h4>Alban</h4>
            </div>
            <h5 class="description">Dev Team</h5>
        </li>
        <li class = "Nayl member">
            <div>
                <h4>Nayl</h4>
            </div>
            <h5 class = "description">Dev Team</h5>
        </li>
        <li class = "Katherine member">
            <div>
                <h4>Katherine</h4>
            </div>
            <h5 class = "description">Dev Team</h5>
        </li>
        <li class = "RaphaelA member">
            <div>
                <h4>Raphaël</h4>
            </div>
            <h5 class = "description">Dev Team</h5>
        </li>
     </ul>
     <h2>Team Mentors</h2>
     <ul class = "category">
        <li class = "Raphael member">
            <div>
                <h4>Raphaël</h4>
            </div>
            <h5 class="description">Dev Team Mentor</h5>
        </li>
        <li class = "Teo member">
            <div>
                <h4>Téo</h4>
            </div>
            <h5 class="description">Construction Mentor</h5>
        </li>
     </ul>
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

ul {
    display: grid;
    height: calc($nombre_rangee * 250px);
    padding: 0 10px;
    grid-template-columns: repeat($nombre_colonne, 1fr);
    grid-template-rows: repeat($nombre_rangee, 1fr);
    gap: 15px;
    justify-items: stretch;
}

li {
    display: flex;
    background-color: $primary;
    text-align: center;
    border-radius: 10px;
    flex-direction: column;
    align-content: stretch;
    height: 75%;
    width: 15%;
    min-width: 175px;
    h4, h5 {
        margin: 0;
        height: 6%;
        color: white;

    }
    div {
        border-radius: 10px 10px 0px 0px;
        padding: 1px 5px;
        background: #6a829f;
        
        h4{

            background: linear-gradient(#cd2d3a, #e35730);
            width: min-content;
            height: 108%;
            padding: 0 12px;
            margin: auto;
            border-radius: 8px;

        }
    }
    h5{
        border-radius: 0px 0px 10px 10px;
        padding: 4px 1px;
        background: #6a829f;
        text-transform: uppercase;
    }
}

.category{
    display: flex;
    justify-content: center;
    align-items: center;

}

.image {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.Nina {
    @extend .image;
    background-image: url("images/Subteams_images/DesignTeam_Picture.jpg");
    // grid-row: 1;i
    // grid-column: 1;
}

.Timothee {
    @extend .image;
    background-image: url("");
    // grid-row: 1;
    // grid-column: 2;
}

.Maya {
    @extend .image;
    background-image: url("");
    // grid-row: 1;
    // grid-column: 3;
}

.Alban {
    @extend .image;
    background-image: url("");
    // grid-row: 1;
    // grid-column: 4;
}

.Nayl {
    @extend .image;
    background-image: url("");
    // grid-row: 1;
    // grid-column: 5;
}

.Katherine {
    @extend .image;
    background-image: url("");
    // grid-row: 2;
    // grid-column: 1;
}

</style>