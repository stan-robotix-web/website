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
        // subteamName.style.borderRadius = '0px';
        subteamExplanation.style.maxHeight = '60%';
        arrow.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';
      } 
      else 
      {
        // Cache le texte et retourne la flèche
        // subteamName.style.borderRadius = '0px 0px 10px 10px';
        subteamExplanation.style.maxHeight = '0px';
        arrow.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
      }
    }
    subteamName.addEventListener('click', toggleText);
  });
});</script>

<template>
    <main>
        <div class="subteamsContainer">
            <div class="programming subteam">
                <div class="subteamName">
                    <p>Programming&nbsp;<span class="arrow"><i class="fa-solid fa-chevron-up"></i></span></p>
                </div>
                <div class="subteamExplanation">
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Sed leo nascetur integer facilisis accumsan
                    aliquet elementum phasellus vitae. Tempus dis mauris integer nostra hac. Metus porta lacus ultricies
                    fermentum mollis curabitur pharetra risus. Nam nullam class imperdiet iaculis felis taciti fringilla
                    porta. Congue taciti leo bibendum feugiat tristique. Nam dictumst id ligula at scelerisque ex
                    euismod. Imperdiet nisl natoque varius mauris quisque. Consequat lacinia nascetur tellus dignissim
                    nibh, dolor neque eleifend.
                </div>
            </div>
            <div class="SND subteam">
                <div class="subteamName">
                    <p>SnD&nbsp;<span class="arrow"><i class="fa-solid fa-chevron-up"></i></span></p>
                </div>
                <div class="subteamExplanation">
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Sed leo nascetur integer facilisis accumsan
                    aliquet elementum phasellus vitae. Tempus dis mauris integer nostra hac. Metus porta lacus ultricies
                    fermentum mollis curabitur pharetra risus. Nam nullam class imperdiet iaculis felis taciti fringilla
                    porta. Congue taciti leo bibendum feugiat tristique. Nam dictumst id ligula at scelerisque ex
                    euismod. Imperdiet nisl natoque varius mauris quisque. Consequat lacinia nascetur tellus dignissim
                    nibh, dolor neque eleifend.
                </div>
            </div>
            <div class="construction subteam">
                <div class="subteamName">
                    <p>Construction&nbsp;<span class="arrow"><i class="fa-solid fa-chevron-up"></i></span></p>
                </div>
                <div class="subteamExplanation">
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Sed leo nascetur integer facilisis accumsan
                    aliquet elementum phasellus vitae. Tempus dis mauris integer nostra hac. Metus porta lacus ultricies
                    fermentum mollis curabitur pharetra risus. Nam nullam class imperdiet iaculis felis taciti fringilla
                    porta. Congue taciti leo bibendum feugiat tristique. Nam dictumst id ligula at scelerisque ex
                    euismod. Imperdiet nisl natoque varius mauris quisque. Consequat lacinia nascetur tellus dignissim
                    nibh, dolor neque eleifend.
                </div>
            </div>
            <div class="marketing subteam">
                <div class="subteamName">
                    <p>Marketing&nbsp;<span class="arrow"><i class="fa-solid fa-chevron-up"></i></span></p>
                </div>
                <div class="subteamExplanation">
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Sed leo nascetur integer facilisis accumsan
                    aliquet elementum phasellus vitae. Tempus dis mauris integer nostra hac. Metus porta lacus ultricies
                    fermentum mollis curabitur pharetra risus. Nam nullam class imperdiet iaculis felis taciti fringilla
                    porta. Congue taciti leo bibendum feugiat tristique. Nam dictumst id ligula at scelerisque ex
                    euismod. Imperdiet nisl natoque varius mauris quisque. Consequat lacinia nascetur tellus dignissim
                    nibh, dolor neque eleifend.
                </div>
            </div>
            <div class="medias subteam">
                <div class="subteamName">
                    <p>Medias&nbsp;<span class="arrow"><i class="fa-solid fa-chevron-up"></i></span></p>
                </div>
                <div class="subteamExplanation">
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Sed leo nascetur integer facilisis accumsan
                    aliquet elementum phasellus vitae. Tempus dis mauris integer nostra hac. Metus porta lacus ultricies
                    fermentum mollis curabitur pharetra risus. Nam nullam class imperdiet iaculis felis taciti fringilla
                    porta. Congue taciti leo bibendum feugiat tristique. Nam dictumst id ligula at scelerisque ex
                    euismod. Imperdiet nisl natoque varius mauris quisque. Consequat lacinia nascetur tellus dignissim
                    nibh, dolor neque eleifend.
                </div>
            </div>
            <div class="design subteam">
                <div class="subteamName">
                    <p>Design&nbsp;<span class="arrow"><i class="fa-solid fa-chevron-up"></i></span></p>
                </div>
                <div class="subteamExplanation">
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Sed leo nascetur integer facilisis accumsan
                    aliquet elementum phasellus vitae. Tempus dis mauris integer nostra hac. Metus porta lacus ultricies
                    fermentum mollis curabitur pharetra risus. Nam nullam class imperdiet iaculis felis taciti fringilla
                    porta. Congue taciti leo bibendum feugiat tristique. Nam dictumst id ligula at scelerisque ex
                    euismod. Imperdiet nisl natoque varius mauris quisque. Consequat lacinia nascetur tellus dignissim
                    nibh, dolor neque eleifend.
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
@import "../assets/base.scss";

.subteamsContainer {
    display: flex;
    justify-content: space-evenly;
    width: 80vw;
    height: 90vh;
    gap: 15px;
    flex-flow: row wrap;
    padding: 10px;
    margin: auto;
}

.programming {
    background-image: url("images/Subteams_images_Temp/ProgTeam_Picture.jpg");
}

.SND {
    background-image: url("images/Subteams_images_Temp/SnDTeam_Picture.jpg");
}

.construction {
    background-image: url("images/Subteams_images_Temp/ConstructionTeam_Picture.jpg");
}

.marketing {
    background-image: url("images/Subteams_images_Temp/MarketingTeam_Picture.jpg");
}

.medias {
    background-image: url("images/Subteams_images_Temp/MediasTeam_Picture.jpg");
}

.design {
    background-image: url("images/Subteams_images_Temp/DesignTeam_Picture.jpg");
}

.subteamName {
    display: flex;
    max-height: 20%;
    height: 100%;
    background-color: $primary;
    // border-radius: 0 0 10px 10px;
    color: $text;
    align-items: center;
    justify-content: center;
    z-index: 2;
}

.subteamExplanation {
    background-color: $primary;
    // border-radius: 0 0 10px 10px;
    max-height: 0px;
    height: 100%;
    overflow: hidden;
    z-index: 2;
}

p {
    width: 100%;
    color: $text;
    cursor: pointer;
    text-align: center;
    padding: calc(4vh - 12px) 0;

    .arrow {
        color: $accent;
    }
}

p:hover {
    color: $accent;
    font-weight: 500;
}

.subteam {
    min-height: 300px;
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