<template>
  <footer>
    <p>Copyright © {{ year }} by AQUARIUS. All Rights Reserved.</p>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
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
}

p {
  margin: 0;
}
</style>