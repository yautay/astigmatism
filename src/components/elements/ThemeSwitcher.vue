<template>
  <div class="theme-switch-container">
    <label class="theme-slider" for="checkbox">
      <input type="checkbox" id="checkbox" v-model="darkMode"/>
      <div class="round slider"></div>
    </label>
  </div>
</template>

<script>
export default {
  name: "ThemeSwitcher",
  data() {
    return {
      darkThemeActive: false
    }
  },
  computed: {
    darkMode: {
      set(state) {
        this.darkThemeActive = state
        this.$store.commit("theme/setTheme", state)
      },
      get() {
        return this.darkThemeActive
      }
    }
  }
}
</script>

<style scoped lang="scss">
.theme-switch-container {
  width: inherit;
  height: inherit;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: center;
  align-items: center;

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
      }
    }
  }
}

</style>