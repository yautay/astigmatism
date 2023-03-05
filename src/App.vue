<template>
  <TheHeader class="bckg-night font-night"></TheHeader>
  <TheMain class="bckg-night font-night"></TheMain>
  <TheFooter class="bckg-night font-night"></TheFooter>
</template>

<script>
import TheHeader from "@/components/layout/header/TheHeader";
import TheFooter from "@/components/layout/TheFooter";
import TheMain from "@/components/layout/TheMain";

export default {
  name: "astigmatism",
  components: {TheFooter, TheHeader, TheMain}
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
  color: $color-complement-4;
}

.font-night {
  color: $color-primary-0;
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