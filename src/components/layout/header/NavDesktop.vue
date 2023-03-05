<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">
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
      <TheRouting></TheRouting>
    </ul>
  </nav>
</template>

<script>
import TheRouting from "@/components/layout/header/TheRouting";

export default {
  name: "NavDesktop",
  components: {TheRouting}
}
</script>

<style lang="scss">
nav {
  width: inherit;
  height: inherit;

  ul {
    width: inherit;
    height: inherit;
    display: flex;
    justify-content: space-around;
    align-items: center;


  }
}


</style>