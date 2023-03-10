<template>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
export default {
  name: "TheMain"
};
</script>

<style lang="scss">
main {
  height: 100vh;
  padding: $header_height_desktop 0 $footer_height_desktop;
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h2 {
  font-size: 1rem !important;
}
.page-content {
  width: inherit;
  padding: 1%;
}
</style>