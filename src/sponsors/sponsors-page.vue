<script setup>
import BaseHeader from "../../src/components/BaseHeader.vue";
import BaseFooter from "../../src/components/BaseFooter.vue";
import SponsorsLogos from "../../src/components/SponsorsLogos.vue";
</script>

<template>
  <BaseHeader />
  <main>
    <h1>Sponsors</h1>
    <h3>Our Sponsors</h3>
    <SponsorsLogos />
    <section class="donating" id="donating">
      <h2>Interested in donating ?</h2>
      <p>
        A donation could help us with our future projects and competitions,
        especially with the cost of materials, tools and travel expenses.
      </p>
      <a class="wishlist" href="/pdf/Wishlist.pdf" download>
        <!-- the link on the deployed version goes to "public/pdf..." -->
        <img src="../../src/components/icons/PDF_file_icon.svg" />See our
        Wishlist PDF
      </a>

      <div class="donate-button">
        <a
          class="donate"
          href="https://fondation.stanislas.qc.ca/fcs-1/don-en-ligne/stan-robotix-40"
          target="_blank"
          rel="noopener noreferrer"
          >Donate <i class="fa-solid fa-chevron-right"></i
        ></a>
      </div>
    </section>

    <h2>Want to sponsors us ?</h2>
    <p>
      If you want to become a sponsor, please <br />
      Contact us at
      <a href="mailto:stanrobotix@gmail.com">stanrobotix@gmail.com</a>
    </p>

    <h3>Documents</h3>
    <section class="docs">
      <a class="wishlist" href="/pdf/Sponsorship_file.pdf" download>
        <!-- the link on the deployed version goes to "public/pdf..." -->
        <img src="../../src/components/icons/PDF_file_icon.svg" />
        Sponsorship File
      </a>
      <a class="wishlist" href="/pdf/FundingRequestLetter.pdf" download>
        <!-- the link on the deployed version goes to "public/pdf..." -->
        <img src="../../src/components/icons/PDF_file_icon.svg" />Funding
        Request Letter
      </a>
    </section>
  </main>
  <BaseFooter />
</template>

<style scoped lang="scss">
@import "../assets/base.scss";

section.docs {
  display: flex;
  justify-content: center;
  gap: 2em;
  margin: 0;

  a {
    font-size: 1.5em;
    font-weight: 500;
    color: $accent;
    text-decoration: none;
    display: flex;
    align-items: center;
    margin: 0;

    img {
      height: 2em;
      margin-right: 0.5em;
      transform: translateY(-0.4em);
    }
  }
}

main {
  text-align: center;

  h2 {
    font-weight: 200;
    font-size: 300%;
    text-align: center;
    width: max-content;
    margin: 0.75em auto 15px;
    color: darken($secondary, 10%);
  }
}

.donating {
  h2 {
    color: $text;
  }
  background-color: white;
  box-shadow: 0 0 10px rgba(black, 0.1);
}

a {
  color: $accent;

  &:hover {
    text-decoration: underline;
  }
}

a.wishlist {
  font-weight: 500;
  margin-top: 2em;
  width: max-content;

  img {
    height: 3em;
    display: block;
    margin: 1em auto 0.25em;
  }
}

p {
  margin: auto;
  max-width: 600px;
}

a.donate {
  background-color: $accent;
  color: white;
  font-size: 1.5em;
  padding: 0.5em 1.4em;
  border-radius: 2em;
  margin: 1.5em;
  display: inline-block;
  text-decoration: none;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;

  &:hover {
    background-color: rgba(white, 0.5);
    color: $accent;
    outline: 3px solid $accent;
  }
}
</style>
