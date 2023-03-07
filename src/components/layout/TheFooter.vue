<template>
  <footer>
    <div class="footer-container">
      <div class="footer-container-flex-left"></div>
      <div class="footer-container-flex-center">
        <div class="copyright-notice">
          <p>Copyright © {{ year }} by AQUARIUS. All Rights Reserved.</p>
        </div>
      </div>
      <div class="footer-container-flex-right">
        <ThemeSwitcher></ThemeSwitcher>
      </div>


    </div>
  </footer>
</template>

<script>
import ThemeSwitcher from "@/components/elements/ThemeSwitcher.vue";

export default {
  name: "TheFooter",
  components: {ThemeSwitcher},
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>

<style scoped lang="scss">

footer {
  width: 100vw;
  height: $footer_height_desktop;
  position: fixed;
  bottom: 0;
  font-size: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;

  .footer-container {
    width: inherit;
    height: inherit;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-content: center;
    align-items: center;

    .footer-container-flex-left {
      height: inherit;
      order: 0;
      flex: 1 0 auto;
      align-self: center;
      display: flex;
      justify-content: center;
    }

    .footer-container-flex-center {
      height: inherit;
      order: 1;
      flex: 3 0 auto;
      align-self: center;
      display: flex;
      justify-content: center;
    }

    .footer-container-flex-right {
      height: inherit;
      order: 2;
      flex: 1 0 auto;
      align-self: center;
      display: flex;
      justify-content: center;
    }
  }

  .copyright-notice {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}


</style>