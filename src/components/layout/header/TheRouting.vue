<template>
  <ul>
    <li>
      <router-link class="route-home" :class="{night: this.isDarkTheme}" to="/">
        <div class="home">
          <div class="eye_logo">
            <font-awesome-icon icon="fa-solid fa-eye"/>
          </div>
          <div class="home_txt orbitron">
            <p>Astigmatism</p>
          </div>
        </div>
      </router-link>
    </li>
    <li>
      <router-link to="/one-shooter" class="orbitron" :class="{night: this.isDarkTheme}"><p>One Shooter</p></router-link>
    </li>
    <li>
      <router-link to="/placeholder-nav-2" class="orbitron" :class="{night: this.isDarkTheme}"><p>nav-2</p></router-link>
    </li>
    <li>
      <router-link to="/placeholder-nav-3" class="orbitron" :class="{night: this.isDarkTheme}"><p>nav-3</p></router-link>
    </li>
    <li>
      <router-link to="/placeholder-nav-4" class="orbitron" :class="{night: this.isDarkTheme}"><p>nav-4</p></router-link>
    </li>
    <li>
      <router-link to="/placeholder-nav-5" class="orbitron" :class="{night: this.isDarkTheme}"><p>nav-5</p></router-link>
    </li>
  </ul>
</template>

<script>

export default {
  name: "TheRouting",
  computed: {
    isDarkTheme() {
      return this.$store.getters["theme/getTheme"];
    }
  }
}

</script>

<style lang="scss">
ul {
  width: inherit;
  height: inherit;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

li {
  a {
    color: inherit;
    display: block;
    font-size: .80rem;
    font-weight: bold;
    text-decoration: none;
    &.router-link-active,
    {
      color: $link-active-day;
    }
    &.router-link-active.night,
    {
      color: $link-active-night;
    }
    &.router-link-active.route-home {
      color: inherit;
    }

    .home {
      .eye_logo {
        font-size: 1.5rem;
      }

      .home_txt {
        font-size: 1.2rem;
        margin-left: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      width: 50vw;
      display: flex;
      flex-direction: row;
      align-content: center;
      justify-content: flex-start;
    }
  }
}
</style>
