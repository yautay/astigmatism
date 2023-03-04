<template>
  <header>
    <h1 class="hidden">Astigmatism Framework</h1>
    <NavDesktop></NavDesktop>
  </header>
</template>

<script>
import NavDesktop from "@/components/layout/header/NavDesktop";

export default {
  name: "TheHeader",
  components: {NavDesktop},
};
</script>

<style scoped lang="scss">

header {
  height: $header_height_desktop;
  width: 100%;
  position: fixed;
  background-color: $overshadow;
  z-index: 100;

}
</style>