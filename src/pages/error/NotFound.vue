<template>
  <h2>NOT FOUND</h2>

</template>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  name: "PageHome",
  components: {Loading},
  data() {
    return {};
  },
  computed: {
    isLoading() {
      return this.$store.getters["homeLoading/getHomeLoading"];
    }
  }
};
</script>

<style scoped lang="scss">

.section_container {
  padding-top: $header_height_desktop;
}

</style>