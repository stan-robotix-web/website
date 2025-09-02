<script setup></script>

<template>
    <!-- image de l'organisation de StanRobotix?-->
     <ul>
        <li class = "Stuph">
            <p>Stéphanie</p>
            <h5 class="description">Team Captain</h5>
        </li>
        <li class = "Micha">
            <p>Micha</p>
            <h5 class="description">Captain Dev Team</h5>
        </li>
        <li class = "Zach">
            <p>Zachary</p>
            <h5 class="description">Construction Captain</h5>
        </li>
        <li class = "Ines">
            <p>Inès</p>
            <h5 class="description">Design Captain</h5>
        </li>
        <li class = "Sara">
            <p>Sara</p>
            <h5 class = "description">Security Captain</h5>
        </li>
        <li class = "Emma">
            <p>Emma</p>
            <h5 class = "description">Medias Captain</h5>
        </li>
        <li class = "Raphael">
            <p>Raphaël</p>
            <h5 class="description">Coach</h5>
        </li>
        <li class = "Teo">
            <p>Téo</p>
            <h5 class="description">Coach</h5>
        </li>
     </ul>
</template>

<style scoped lang="scss">
@import "../assets/base.scss";

$nombre_colonne: 5;
$nombre_rangee: 2;

ul {
    display: grid;
    height: calc($nombre_rangee * 400px);
    padding: 0 40px;
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
    p, h5 {
        margin: 0;
        height: 8%;
    }
}

.image {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.Stuph {
    @extend .image;
    background-image: url("images/TeamMembers_images/Stéphanie_Picture.jpg");
    // grid-row: 1;
    // grid-column: 1;
}

.Ines {
    @extend .image;
    background-image: url("images/TeamMembers_images/Ines_Picture.jpg");
    // grid-row: 1;
    // grid-column: 2;
}

.Zach {
    @extend .image;
    background-image: url("images/TeamMembers_images/Zachary_Picture.jpg");
    // grid-row: 1;
    // grid-column: 3;
}

.Micha {
    @extend .image;
    background-image: url("images/TeamMembers_images/Micha_Picture.jpg");
    // grid-row: 1;
    // grid-column: 4;
}

.Sara {
    @extend .image;
    background-image: url("images/TeamMembers_images/Sara_Picture.jpg");
    // grid-row: 1;
    // grid-column: 5;
}

.Emma {
    @extend .image;
    background-image: url("images/TeamMembers_images/Emma_Picture.jpg");
    // grid-row: 2;
    // grid-column: 1;
}

</style>