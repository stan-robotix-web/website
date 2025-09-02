<script setup></script>
<script>
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll('.subteam');

  cards.forEach(card => {
    const subteamName = card.querySelector('.subteamName');
    const subteamExplanation = card.querySelector('.subteamExplanation');
    const arrow = card.querySelector('.arrow')

    function toggleText() {
      if (subteamExplanation.style.maxHeight === '0px') 
      {
        // Affiche le texte et tourne la flèche
        subteamExplanation.style.maxHeight = '60%';
        arrow.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';
      } 
      else 
      {
        // Cache le texte et retourne la flèche
        subteamExplanation.style.maxHeight = '0px';
        arrow.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
      }
    }
    subteamName.addEventListener('click', toggleText);
  });
});
</script>

<template>
    <main>
        <div class="subteamsContainer">
            <h2 class="title">Subteams</h2>
            <div class="programming subteam">
                <div class="subteamName">
                    <h3>Programming&nbsp;<span class="arrow"><i class="fa-solid fa-chevron-up"></i></span></h3>
                </div>
                <div class="subteamExplanation">
                    <ul>
                        <li>Make the robot run using a popular programming language (C++)</li>
                        <li>Familiarize yourself with professional software (GitHub, VS Code)</li>
                        <li>Learn all throughout the year</li>
                        <li>Program an autonomous and teleoperated robot</li>
                        <li>Manipulate and learn to use electrical components</li>
                    </ul>
                </div>
            </div>
            <div class="SND subteam">
                <div class="subteamName">
                    <h3>SnD&nbsp;<span class="arrow"><i class="fa-solid fa-chevron-up"></i></span></h3>
                </div>
                <div class="subteamExplanation">
                    <ul>
                        <li>Brainstorm with your team to invent a robot to play the competitions's game</li>
                        <li>Plan game strategies for the competition based on the rulebook</li>
                        <li>Plan out the different subsystems that will be present on the robot</li>
                    </ul>
                </div>
            </div>
            <div class="design subteam">
                <div class="subteamName">
                    <h3>Design&nbsp;<span class="arrow"><i class="fa-solid fa-chevron-up"></i></span></h3>
                </div>
                <div class="subteamExplanation">
                    <ul>
                        <li>Use SND's ideas to recreate precisely the macanisms in CAD</li>
                        <li>Create models for the robot and other smaller parts</li>
                        <li>Use 3D software such as Onshape</li>
                        <li>Plan out the precise materials and screws that will be used by construction</li>
                    </ul>
                </div>
            </div>
            <div class="construction subteam">
                <div class="subteamName">
                    <h3>Construction&nbsp;<span class="arrow"><i class="fa-solid fa-chevron-up"></i></span></h3>
                </div>
                <div class="subteamExplanation">
                    <ul>
                        <li>Use SND's and Design's plans to build the robot</li>
                        <li>Construct the game pieces for the pilot to practice with</li>
                        <li>Learn to use the tools in the workshop</li>
                        <li>Work with different materials (Wood, Aluminum, Stell)</li>
                    </ul>
                </div>
            </div>
            <div class="marketing subteam">
                <div class="subteamName">
                    <h3>Marketing&nbsp;<span class="arrow"><i class="fa-solid fa-chevron-up"></i></span></h3>
                </div>
                <div class="subteamExplanation">
                    <ul>
                        <li>Build and maintain relations with brans to have sponsors</li>
                        <li>Prepare marketing campaings</li>
                        <li>Manage the team's finances and communacations with the school</li>
                    </ul>
                </div>
            </div>
            <div class="medias subteam">
                <div class="subteamName">
                    <h3>Medias&nbsp;<span class="arrow"><i class="fa-solid fa-chevron-up"></i></span></h3>
                </div>
                <div class="subteamExplanation">
                    <ul>
                        <li>Take pictures of all the activities of the team and of events</li>
                        <li>Manage all of the team's social accounts (<a href="https://www.instagram.com/stan.robotix.6622">Instagram</a>, <a href="https://www.facebook.com/stanrobotix6622/">Facebook</a>, <a href="https://ca.linkedin.com/in/stan-robotix-3bb0a6263">LinkedIn</a>)</li>
                    </ul>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
@import "../assets/base.scss";

$grid-columns: 3;
$grid-rows: 3;

.subteamsContainer {
    display: grid;
    grid-template-columns: $grid-columns;
    grid-template-rows: $grid-rows;
    grid-template-areas: 
        "title title title"
        "programming SND construction"
        "marketing medias design";
    width: 80%;
    gap: 15px;
    padding: 10px;
    margin: auto;
}

.title {
    justify-self: center;
    grid-area: title;

    font-weight: 600;
    font-size: 300%;
    line-height: 125%;
    text-align: center;
    width: max-content;
    margin: 15px auto;

    border-bottom: 4px solid $blue;
}

.programming {
    background-image: url("images/Subteams_images_Temp/ProgTeam_Picture.jpg");
    grid-area: programming;
}

.SND {
    background-image: url("images/Subteams_images_Temp/SnDTeam_Picture.jpg");
    grid-area: SND;
}

.construction {
    background-image: url("images/Subteams_images_Temp/ConstructionTeam_Picture.jpg");
    grid-area: construction;
}

.marketing {
    background-image: url("images/Subteams_images_Temp/MarketingTeam_Picture.jpg");
    grid-area: marketing;
}

.medias {
    background-image: url("images/Subteams_images_Temp/MediasTeam_Picture.jpg");
    grid-area: medias;
}

.design {
    background-image: url("images/Subteams_images_Temp/DesignTeam_Picture.jpg");
    grid-area: design;
}

.subteamName {
    display: flex;
    max-height: 20%;
    height: 100%;
    background-color: $primary;
    color: $text;
    align-items: center;
    justify-content: center;

    h3 {
        width: 100%;
        color: $blue;
        cursor: pointer;
        text-align: center;
        padding: calc(4vh - 12px) 0;
        margin: 0;

        .arrow {
            color: $accent;
        }
    }

    h3:hover {
        color: $accent;
        font-weight: 1000;
    }
}

.subteamExplanation {
    background-color: $primary;
    max-height: 0px;
    height: 100%;
    overflow: hidden;
    padding: 0 20px;
    overflow-y: auto;

    ul {
        padding-left: 20px;
        margin-top: 0;
    }
}

.subteam {
    min-height: 300px;
    min-width: 300px;
    display: flex;
    width: 25vw;
    height: 40vh;
    border-radius: 10px;
    flex-flow: column nowrap;
    justify-content: flex-end;
    transition: 0.5s ease-in-out;
    border: 5px solid $primary;

    * {  
        transition: inherit;
    }
}
</style>