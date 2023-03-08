<template>
  <nav>
    <TheRouting></TheRouting>
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
}


</style>