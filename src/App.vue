<template>
  <Loading v-model:active="isLoading"
           :can-cancel="false"
           :is-full-page="true"
           :lock-scroll="false"
           :enforce-focus="false"
           :background-color="'rgba(0,0,0,0.37)'"
           :opacity="1"
           :blur="'5px'">

    <template v-slot:default>
      <img src="@/assets/loader.gif" alt="This is an animated gif image, but it does not move"/>
    </template>
  </Loading>
  <TheHeader :class="this.isDarkTheme ? 'bckg-night font-night' : 'bckg-day font-day'"></TheHeader>
  <TheMain :class="this.isDarkTheme ? 'bckg-night font-night' : 'bckg-day font-day'"></TheMain>
  <TheFooter :class="this.isDarkTheme ? 'bckg-night font-night' : 'bckg-day font-day'"></TheFooter>
</template>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

import TheHeader from "@/components/layout/header/TheHeader";
import TheFooter from "@/components/layout/TheFooter";
import TheMain from "@/components/layout/TheMain";

export default {
  name: "astigmatism",
  components: {Loading, TheFooter, TheHeader, TheMain},
  computed: {
    isLoading() {
      return this.$store.getters["isLoading/getIsLoading"];
    },
    isDarkTheme() {
      return this.$store.getters["theme/getTheme"];
    }
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,500;0,700;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Tinos:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');
@import "./scss/colours.scss";

/*MAYER RESET*/

html, body, div, span, applet, object, iframe, table, caption, tbody, tfoot, thead, tr, th, td,
del, dfn, em, font, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var,
h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code,
dl, dt, dd, ol, ul, li, fieldset, form, label, legend {
  vertical-align: baseline;
  font-family: inherit;
  font-weight: inherit;
  font-style: inherit;
  font-size: 100%;
  outline: 0;
  padding: 0;
  margin: 0;
  border: 0;
}

/* remember to define focus styles! */
:focus {
  outline: 0;
}

body {
  line-height: 1;
}

ol, ul {
  list-style: none;
}

/* tables still need cellspacing="0" in the markup */
table {
  border-collapse: separate;
  border-spacing: 0;
}

caption, th, td {
  font-weight: normal;
  text-align: left;
}

/* remove possible quote marks (") from <q> & <blockquote> */
blockquote:before, blockquote:after, q:before, q:after {
  content: "";
}

blockquote, q {
  quotes: "" "";
}

/* astigmatism */

* {
  box-sizing: border-box;
}

html {
  font-family: "Barlow", sans-serif;
}

body {
  margin: 0;
  font-size: 10px;
}

.tinos {
  font-family: 'Tinos', sans-serif;
}

.orbitron {
  font-family: 'Orbitron', sans-serif;
}

.font-day {
  color: $font_day;
}

.font-night {
  color: $font_night;
}

.bckg-day {
  background-color: $bckg_day;
}

.bckg-night {
  background-color: $bckg_night;
}

.hidden {
  display: block;
  position: absolute;
  color: transparent;
}


</style>