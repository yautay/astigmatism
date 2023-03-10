<template>
  <div class="theme-switch-container">
    <label class="theme-slider" for="checkbox">
      <input type="checkbox" id="checkbox" v-model="darkMode"/>
      <div class="round slider"></div>
    </label>
    <div class="symbols">
      <div class="icon-div">
        <div class="icon">
          <font-awesome-icon icon="fa-solid fa-moon" style="color: aliceblue"/>
        </div>
      </div>
      <div class="icon-div">
        <div class="icon">
          <font-awesome-icon icon="fa-solid fa-sun" style="color: #AD9717"/>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  name: "ThemeSwitcher",
  components: {FontAwesomeIcon},
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
  height: 80%;
  aspect-ratio: 2/1;
  margin: auto;

  .theme-slider {
    position: absolute;
    display: block;
    height: inherit;
    aspect-ratio: inherit;

    input {
      display: none;
      width: inherit;

      &:checked + .slider {
        background-color: black;
      }

      &:checked + .slider:before {
        transform: translateX(100%);
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
        z-index: 999;

      }

      &.round {
        border-radius: 50px;
      }

      &.round:before {
        border-radius: 50px;
      }
    }
  }

  .symbols {
    height: inherit;
    aspect-ratio: inherit;
    position: absolute;

    .icon-div {
      position: relative;
      display: inline-block;
      height: 100%;
      aspect-ratio: 1;

      .icon {
        height: inherit;
        aspect-ratio: 1;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

  }


}

</style>