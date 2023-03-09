<template>
  <div class="theme-switch-container">
    <label class="theme-slider" for="checkbox">
      <input type="checkbox" id="checkbox" v-model="darkMode"/>
      <div class="round slider"></div>
    </label>
    <div class="symbol sun">
      <font-awesome-icon icon="fa-solid fa-sun"/>
    </div>
    <div class="symbol moon">
      <font-awesome-icon icon="fa-solid fa-moon"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "ThemeSwitcher",
  computed: {
    darkMode: {
      set(state) {
        this.$store.commit("theme/setTheme", state)
      },
      get() {
        return this.$store.state.theme
      }
    }
  }
}
</script>

<style scoped lang="scss">
.theme-switch-container {
  width: inherit;
  height: $footer_height_desktop;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  .symbol {
    display: flex;
    position: absolute;
    font-size: 1.1rem;
    z-index: 2;
    &.sun {
      margin-left: 27px;
    }
    &.moon {
      margin-left: 7px;
    }
  }

  .theme-slider {
    display: inline-block;
    height: inherit;
    aspect-ratio: 2/1;
    position: relative;


    input {
      display: none;

      &:checked + .slider {
        background-color: black;
      }

      &:checked + .slider:before {
        transform: translateX(25px);
      }
    }

    .slider {
      background-color: lightyellow;
      bottom: 0;
      cursor: pointer;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      transition: .4s;

      &:before {
        background-color: gray;
        content: "";
        height: 100%;
        aspect-ratio: 1;
        position: absolute;
        transition: .4s;

      }

      &.round {
        border-radius: 50px;
      }

      &.round:before {
        border-radius: 50px;
        z-index: 4;
      }
    }
  }
}

</style>