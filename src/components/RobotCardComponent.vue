<script setup>

const props = defineProps({
  side: { // the default is right
    type: String,
    required: false
  },
  year: {
    type: String,
    required: false
  },
});
</script>

<script>
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const desc = card.querySelector('.desc');
    const dots = card.querySelector('.dots');
    const button = card.querySelector('a');

    if (desc.scrollHeight <= 200) {
      // Si la hauteur est inférieure ou égale à 180px, cacher le bouton et les trois petits points
      button.style.display = 'none';
      dots.style.display = 'none';
    }

    function toggleText() {
      if (desc.style.maxHeight === 'none') {
        // Rétrécit le texte et affiche les trois petits points
        desc.style.maxHeight = '180px';
        dots.style.display = 'inline';
        button.innerHTML = 'Read more <i class="fa-solid fa-chevron-down"></i>';
      } else {
        // Étend le texte et cache les trois petits points
        desc.style.maxHeight = 'none';
        dots.style.display = 'none';
        button.innerHTML = 'Read less <i class="fa-solid fa-chevron-up"></i>';
      }
    }

    dots.addEventListener('click', toggleText);
    button.addEventListener('click', toggleText);
  });
});</script>

<template>
  <div class="row" :class="side">
    <div class="card" :class="side" :id="year">
      <div class="logo"><slot name="logo"></slot></div>
      <div class="img"><slot name="img"></slot></div>
      <div class="desc"><p><slot name="desc"></slot></p><span class="dots">...</span></div>
      <a>Read more <i class="fa-solid fa-chevron-down"></i></a>
    </div>
    <div class="line">
      <div class="circle"></div>
      <div class="link" :class="side"></div>
    </div>
    <div class="date" :class="side"><h2><slot name="date"></slot></h2></div>
  </div>
</template>

<style scoped lang="scss">
@use "../assets/base.scss";

$line-distance : 50px;
$circle-radius : 15px;

@mixin content($card-background) {
  background: $card-background;

  .dots {
    background-color: $card-background;
    box-shadow: 0px 10px 5px 5px $card-background;
  }
}

.row {
  display: grid;
  grid-template-columns: 1fr 4px 1fr;
  grid-template-areas: "date timeline card";
}

.row.left {
  display: grid;
  grid-template-columns: 1fr 4px 1fr;
  grid-template-areas: "card timeline date";
}

.card {
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-template-rows: 3fr max-content max-content;
  grid-area: card;
  grid-template-areas:
    "logo img"
    "desc desc"
    "button button";


  width: 500px;
  margin: 0px calc($line-distance + $circle-radius/2 + 6px);
  padding: 20px;
  border-radius: 15px;

  a {
    font-weight: 400;
    grid-area: button;
    margin-top: 10px;
    transition: all 0.5s ease;
    cursor: pointer;

    i {
      color: base.$accent;
      transition: all 0.5s ease-out;
    }
  }

  a:hover {
    color: base.$accent;
    font-weight: 500;
  }

  .desc {
    grid-area: desc;
    max-height: 180px;
    overflow: hidden;
    position: relative;

    p {
      text-align: justify;
    }

    .dots {
      padding-left: 10px;
      font-weight: 600;
      position: absolute;
      bottom: 0;
      left: 35%;
      width: 65%;
      height: 20px;
      z-index: 1;
      cursor: pointer;
      transition: all 1.5s ease;

      &:hover {
        opacity: 0.5;
      }
    }
  }

  .logo {
    grid-area: logo;
    padding-right: 20px;
    display: flex;
    align-items: center;
  }

  .img {
    grid-area: img;
    display: flex;
    align-items: center;
  }

  .img > * {
    border-radius: 10px;
  }
}

.card.left {
  justify-self: right;
  grid-template-columns: 3fr 2fr;
  grid-template-areas:
    "img logo"
    "desc desc"
    "button button";

  .logo {
    grid-area: logo;
    padding-left: 20px;
    padding-right: 0;
  }

  .img {
    grid-area: img;
  }
}

.date {
  position: relative;
  grid-area: date;

  h2 {
    position: absolute;
    top: 50%;
    right: 30px;
    font-size: 38px;
    margin: 0;

    transform: translateY(-38%);
  }

  &.left {
    h2 {
      left:30px;
    }
  }
}

.line {
  position: relative;
  grid-area: timeline;
  background: base.$accent;
  width: 4px;
  height: 100%;

  .circle {
    position: absolute;
    top: 50%;
    left: 50%;
    width: $circle-radius;
    height: $circle-radius;
    border-radius: 50%;
    background: linear-gradient(base.$accent, base.$orange);
    transform: translate(-50%, -50%);
  }

  .link {
    position: absolute;
    top: 50%;
    left: calc(50% + $circle-radius/2 + 3px);
    width: $line-distance;
    border-top: 5px dotted base.$accent;
    transform: translateY(-50%);
  }

  .link.left {
    left: calc(50% - $line-distance - $circle-radius/2 - 3px);
  }
}

// Styles specific to year

.card { // DEFAULT
  @include content(base.$primary);
}

#reefscape_2025 {
  @include content(#b2e6f4);
}

#crescendo_2024 {
  @include content(#aedaca);
}

</style>