<script setup>
import SponsorsLogos from "./SponsorsLogos.vue";
</script>
<script>
export default {
  // FONCTIONS JAVASCRIPT QUI PERMETTENT DE DÉTECTER SI ON EST SUR UNE CERTAINE PAGE
  // but : highlight le bouton de la page sur lequel on se trouve
  methods: {
    getBasePath() {
      const pathArray = window.location.pathname.split("/");
      // Supposons que le chemin de base soit le nom du dépôt, ici 'website'
      return `/${pathArray[1]}`;
    },
    isActive(path) {
      const basePath = this.getBasePath();
      const currentPath = window.location.pathname;

      // Vérifiez si le chemin est la racine et que le path spécifié est '/home.html'
      if (currentPath === `${basePath}/` && path === "/home.html") {
        return true;
      }
      return currentPath === `${basePath}${path}`;
    },
  },
};
</script>

<template>
  <main>
    <footer>
      <a href="/">
        <img
          alt="logo"
          class="logo"
          src="../components/icons/Logotix-Bluetext.svg"
          height="150px"
        />
        <div>
          <h1>Stan <span>Robotix</span></h1>
          <h3>Team 6622</h3>
        </div>
      </a>

      <!-- TODO-Dev : update links when pages are created -->
      <nav role="navigation">
        <ul>
          <li>
            <a :class="{ active: isActive('/home.html') }" href="/">Home</a>
          </li>
          <li>
            <p>Team <i class="fa-solid fa-caret-down"></i></p>
            <ul>
              <a :class="{ active: isActive('/about/') }" href="/about/">
                <li>About</li>
              </a>
              <a :class="{ active: isActive('/history/') }" href="#">
                <li>History</li>
              </a>
              <a :class="{ active: isActive('/join/') }" href="#">
                <li>Join</li>
              </a>
            </ul>
          </li>
          <li>
            <a :class="{ active: isActive('/robots/') }" href="/robots/"
              >Robots</a
            >
          </li>
          <li>
            <a :class="{ active: isActive('/outreach/') }" href="/outreach/"
              >Outreach</a
            >
          </li>
          <li>
            <a :class="{ active: isActive('/sponsors/') }" href="/sponsors/"
              >Sponsors</a
            >
          </li>
        </ul>
      </nav>

      <!-- TODO-Content : add links -->
      <div class="contact">
        <div class="icons">
          <a href="https://www.instagram.com/stan.robotix.6622/" id="insta" target="”_blank”"
            ><span><i class="fa-brands fa-instagram"></i> </span
          ></a>
          <a href="https://ca.linkedin.com/company/stanrobotix" id="linke" target="”_blank”"
            ><span><i class="fa-brands fa-linkedin-in"></i> </span
          ></a>
          <a href="https://www.facebook.com/stanrobotix6622" id="fb" target="”_blank”"
            ><span><i class="fa-brands fa-facebook-f"></i> </span
          ></a>
          <a href="https://github.com/PragmaCube/Stan-Robotix-Source" id="linke" target="”_blank”"
            ><span><i class="fa-brands fa-github"></i> </span
          ></a>
          <a href="mailto:stanrobotix@gmail.com" id="mail"
            ><span><i class="fa-regular fa-envelope"></i> </span
          ></a>
        </div>
      </div>
    </footer>

    <h2>Our Sponsors</h2>
    <SponsorsLogos />

    <hr />

    <h5>
      View site source on
      <a href="https://github.com/Stan-Robotix/website" target="”_blank”"
        >Github <i class="fa-brands fa-github"></i
      ></a>
    </h5>
  </main>
</template>

<style scoped lang="scss">
@import "../assets/base.scss";

main {
  position: relative;
}

h2 {
  text-transform: uppercase;
  font-weight: 500;
  font-size: 32px;
  text-align: center;
  margin: 10px 0px 0px;
}

hr {
  border-width: 0px;
  border-top: 1px solid $primary;
  width: 50vw;
  margin: 10px auto;
}

h5 {
  font-weight: 300;
  font-size: 14px;
  text-align: center;
  margin: 15px;

  a {
    font-weight: 500;
    color: $accent;
    padding: 5px;
    border-radius: 10px;
  }

  a:hover {
    background-color: $accent;
    color: white;
  }
}

footer {
  position: relative;
  z-index: 1;
  outline: 1px solid $primary;
  background-color: $background;
  padding: 25px;
  margin: 25px 0px 25px;
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-template-rows: max-content max-content;
  justify-items: center;
  align-items: start;

  a {
    grid-column: 1;
    grid-row: 1/3;
    width: 90%;
    align-self: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: min(40px, 4vw);

    img {
      transition: all 0.5s ease;
    }

    div {
      h1 {
        font-size: 32px;
        line-height: 1.5;
        color: $text;

        span {
          background-color: $accent;
          border-radius: 8vh;
          padding: 5px 0.6em;
          color: white;
        }
      }

      h3 {
        text-align: center;
        font-weight: 300;
        font-size: 18px;
        margin: 5px;
      }
    }
  }

  a:hover img {
    transform: scale(1.05);
  }

  nav {
    display: block;
    width: max-content;
    height: 150px;
    margin-top: 5px;
    margin-bottom: 10px;

    ul {
      font-size: 14px;
      font-weight: 400;
      height: 100%;
      background: transparent;
      list-style: none;
      margin: 0;
      padding-left: 0;
      display: flex;
      gap: 25px;
    }

    li {
      font-weight: 500;
      width: 60px;
      height: 100%;
      color: inherit;
      background: transparent;
      display: block;
      position: relative;
      text-align: left;

      ul {
        height: auto;
        padding-top: 40px;
        transform: translateY(-40px);
        border-radius: 10px;
        width: 100%;
        position: absolute;
        transition: all 0.5s ease;
        left: 0;
        display: block;

        a:hover {
          background-color: rgba($secondary, $alpha: 0.2);
        }

        li {
          color: $secondary;
          font-weight: 300;
          margin-left: 0px;
          clear: both;
          width: 90%;
        }
      }
    }

    a,
    p {
      margin: 0;
      text-decoration: none;
      color: inherit;
      transition-duration: 0.5s;
      border-radius: 10px;
      width: max-content;
      padding: 5px;

      display: flex;
      justify-content: left;
      align-items: center;
      outline: 0px solid $primary;
      position: relative;
      z-index: 2;
    }

    a:hover {
      transition: all 0.5s ease;
      background-color: rgba($secondary, $alpha: 0.2);
      outline: 1px solid $secondary;
    }

    a.active {
      color: white;
      background-color: $secondary;
    }
  }
}

.contact {
  width: 30vw;
  text-align: center;
  grid-column: 2;
  height: max-content;

  .icons {
    width: 400px;
    height: 40px;
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-flow: row;
    flex-wrap: wrap;
    font-size: 24px;
    transition: all 0.5s ease;

    span {
      transition: all 0.5s ease;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      outline: 1px solid transparent;
    }

    i {
      padding: 5px;
      text-align: center;
    }

    a {
      position: relative;
      height: auto;
      color: $text;
      width: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    a:hover {
      span {
        background-color: rgba($secondary, $alpha: 0.2);
        outline: 1px solid $secondary;
      }
    }
  }
}

@media screen and (max-width: 900px) {
  footer {
    display: block;

    nav {
      display: none;
      visibility: hidden;
    }

    a {
      width: auto;

      div {
        h1 {
          font-size: 28px;

          span {
            padding: 5px 0.3em;
          }
        }
      }
    }
  }

  .contact {
    margin: 30px auto 0px;
    width: auto;

    .icons {
      width: auto;

      a {
        width: 60px;
      }
    }
  }
}
</style>
