<template>
<!--  <Loading v-model:active="isLoading"-->
<!--           :can-cancel="false"-->
<!--           :is-full-page="true"-->
<!--           :lock-scroll="false"-->
<!--           :enforce-focus="false"-->
<!--           :background-color="'rgba(0,0,0,0.37)'"-->
<!--           :opacity="1"-->
<!--           :blur="'5px'">-->

<!--    <template v-slot:default>-->
<!--      <img src="@/assets/loader.gif" alt="This is an animated gif image, but it does not move"/>-->
<!--    </template>-->
<!--  </Loading>-->
  <h2>placeholder NAV 1</h2>
</template>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  name: "PageNav1",
  components: { Loading },
  data() {
    return {

    };
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