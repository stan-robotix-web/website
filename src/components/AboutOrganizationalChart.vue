<script setup></script>

<template>
    <!-- image de l'organisation de StanRobotix?-->
    <h2 id="captains">Team Captains</h2>
    <div class="category">
        <div class="Nina member">
            <div>
                <h4>Nina</h4>
            </div>
            <h5 class="description">Team Captain</h5>
        </div>
        <div class="Timothee member">
            <div>
                <h4>Timothée</h4>
            </div>
            <h5 class="description">Dev Team Captain</h5>
        </div>
    </div>
    <h2 id="members">Team Members</h2>
    <div class="category">
        <div class="Maya member">
            <div>
                <h4>Maya</h4>
            </div>
            <h5 class="description">Construction Team</h5>
        </div>
        <div class="Alban member">
            <div>
                <h4>Alban</h4>
            </div>
            <h5 class="description">Dev Team</h5>
        </div>
        <div class="Nayl member">
            <div>
                <h4>Nayl</h4>
            </div>
            <h5 class="description">Dev Team</h5>
        </div>
        <div class="Katherine member">
            <div>
                <h4>Katherine</h4>
            </div>
            <h5 class="description">Dev Team</h5>
        </div>
        <div class="Raphael member">
            <div>
                <h4>Raphaël</h4>
            </div>
            <h5 class="description">Dev Team</h5>
        </div>
    </div>
    <h2 id="mentors">Team Mentors</h2>
    <div class="category">
        <div class="Raphael member">
            <div>
                <h4>Raphaël</h4>
            </div>
            <h5 class="description">Dev Team Mentor</h5>
        </div>
        <div class="Teo member">
            <div>
                <h4>Téo</h4>
            </div>
            <h5 class="description">Construction Mentor</h5>
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
    grid-template-rows: repeat(1, 1fr);
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