<template>

  <li>
    <router-link to="/placeholder-nav-1" class="orbitron"><p>nav-1</p></router-link>
  </li>
  <li>
    <router-link to="/placeholder-nav-2" class="orbitron"><p>nav-2</p></router-link>
  </li>
  <li>
    <router-link to="/placeholder-nav-3" class="orbitron"><p>nav-3</p></router-link>
  </li>
  <li>
    <router-link to="/placeholder-nav-4" class="orbitron"><p>nav-4</p></router-link>
  </li>
  <li>
    <router-link to="/placeholder-nav-5" class="orbitron"><p>nav-5</p></router-link>
  </li>

</template>

<script>
export default {
  name: "TheRouting",
}
</script>

<style lang="scss">
li {
  a {
    color: inherit;
    display: block;
    font-size: .80rem;
    font-weight: bold;
    text-decoration: none;

    &:active,
    &:hover,
    &.router-link-active {
      color: $color-complement-3;
      text-shadow: transparentize($color-complement-2, .5) 5px 3px 50px;
    }

    .home {
      width: 50vw;
      display: flex;
      flex-direction: row;
      align-content: center;
      justify-content: flex-start;
    }

    .home_txt {
      margin-left: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
}
</style>
