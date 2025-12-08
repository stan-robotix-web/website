<script>
export default {
  // FONCTIONS JAVASCRIPT QUI PERMETTENT DE DÉTECTER SI ON EST SUR UNE CERTAINE PAGE
  // but : highlight le bouton de la page sur lequel on se trouve
  methods: {
    getBasePath() {
      const pathArray = window.location.pathname.split('/');
      // Supposons que le chemin de base soit le nom du dépôt, ici 'website'
      return `/${pathArray[1]}`;
    },
    isActive(path) {
      const basePath = this.getBasePath();
      const currentPath = window.location.pathname;

      // Vérifiez si le chemin est la racine et que le path spécifié est '/home.html'
      if (currentPath === `${basePath}/` && path === '/home.html') {
        return true;
      }
      return currentPath === `${basePath}${path}`;
    },

    openNav() {
      this.$refs.nav.style.transform = "translateX(0px)";
    },
    closeNav() {
      this.$refs.nav.style.transform = "translateX(110%)";
    }
  }
};
</script>
<template>
  <a @click="openNav()" class="openButton"><i class="fa-solid fa-bars"></i></a>
  <nav role="navigation" ref="nav">
    <a @click="closeNav()" class="closeButton"><i class="fa-solid fa-xmark"></i></a>
    <ul>
      <li>
        <a :class="{ active: isActive('/home.html') }" href="/">Home</a>
      </li>
      <li>
        <p>Team <i class="fa-solid fa-caret-down"></i></p>
        <ul>
          <a :class="{ active: isActive('/about/') }" href="/wip/">
            <li>About</li>
          </a>
          <a :class="{ active: isActive('/history/') }" href="/wip/">
            <li>History</li>
          </a>
          <a :class="{ active: isActive('/join/') }" href="/wip/">
            <li>Join</li>
          </a>
        </ul>
      </li>
      <li><a :class="{ active: isActive('/robots/') }" href="/robots/">Robots</a></li>
      <li><a :class="{ active: isActive('/outreach/') }" href="/wip/">Outreach</a></li>
      <li><a :class="{ active: isActive('/sponsors/') }" href="/sponsors/">Sponsors</a></li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
@import "../assets/base.scss";

.openButton {
  display: none;
}

nav {
  transition: all 0.5s ease;

  display: block;
  width: max-content;
  height: 40px;
  font-size: 18px;
  font-weight: 400;

  .closeButton {
    display: none;
  }

  ul {
    height: 100%;
    background: transparent;
    list-style: none;
    margin: 0;
    padding-left: 0;
    display: flex;
    gap: 10px;

    a,
    p {
      margin: 0;
      text-decoration: none;
      color: inherit;
      transition-duration: 0.5s;
      border-radius: 10px;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      outline: 0px solid $primary;
      position: relative;
      z-index: 2;
    }

    i {
      position: absolute;
      right: 25px;
      top: 11px;
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

  li {
    width: 120px;
    height: 100%;
    color: inherit;
    background: transparent;
    display: block;
    position: relative;
    text-align: center;

    ul {
      height: auto;
      background: $grey;
      padding-top: 40px;
      transform: translateY(-40px);
      border-radius: 10px;
      width: 100%;
      position: absolute;
      transition: all 0.5s ease;
      left: 0;
      display: none;

      li {
        margin-left: 0px;
        clear: both;
        width: 90%;
        padding: 0.5em;
      }
    }
  }
}

ul li:hover>ul,
ul li:focus-within>ul,
ul li ul:hover,
ul li ul:focus {
  display: block;
  transition: all 1s ease;
}

@media screen and (max-width: 900px) {

  .openButton {
    cursor: pointer;
    display: flex;
    position: fixed;
    top: 10px;
    right: 10px;
    font-size: 24px;
    background-color: $background;
    width: 40px;
    height: 40px;
    border-radius: 50%;

    justify-content: center;
    align-items: center;
    z-index: 3;
  }

  nav {
    height: 100vh;
    position: fixed;
    top: 0px;
    right: 0px;
    padding: 8px 20px;
    background-color: $background;
    z-index: 3;
    transform: translateX(110%);

    .closeButton {
      cursor: pointer;
      display: block;
      transform: translateX(80px);
      height: min-content;
    }

    ul {
      display: flex;
      flex-direction: column;
      align-items: end;

      li {
        width: 100%;
        height: max-content;
        text-align: center;
        margin: 5px 0px;

        ul {
          height: max-content;
          padding: 0;
          display: block;
          position: relative;
          transform: translate(0, 0);
          background-color: transparent;
          font-size: 90%;
          color: $secondary;

          li {
            padding: 0;
            margin: 0;
          }
        }

        a {
          padding: 3px 3px;
        }
      }

      a {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      p {
        height: fit-content;
        transform: translateX(-6px);
        margin-bottom: 10px;
      }

      i {
        transform: translate(24px, -7px);
      }
    }

  }
}
</style>
