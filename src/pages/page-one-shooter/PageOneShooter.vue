
<template>
  <h2>Single page Shooter</h2>
  <div class="page-content">
    <div class="functionality-description"><p>Taking single screenshot</p></div>
    <div class="functionality-container">
      <div class="url-input-container input">
        <input id="single-url-input" type="url" v-model="pageUrl" :placeholder="pageUrl">
      </div>
      <div class="url-input-container submit">
        <input id="single-url-input-submit" type="submit" value="get screen!" @click="">
      </div>
    </div>


  </div>
</template>

<script>
import "vue-loading-overlay/dist/vue-loading.css";
import {chromium, firefox} from "playwright";


export default {
  name: "PageShooter",
  data () {
    return {
      pageUrl: "https://komputronik.pl"
    }
  },
  methods: {
    getScreenshot () {
      async function getScreen(browserType, url, file) {
        let browser;
        if(browserType === "chrome") {
          browser = await chromium.launch();
        } else if (browserType === "firefox") {
          browser = await firefox.launch();
        }
        let page = await browser.newPage();
        await page.goto(url, { timeout: 5000 });

        let btn = page.getByRole('button', { name: 'Zgadzam się'})
        if (await btn.isVisible())
          btn.click();
        await page.screenshot({ path: file, fullPage: true });
        await browser.close();
      };

      getScreen( "firefox", this.pageUrl, "sraka.png")
    }
  }
};
</script>

<style scoped lang="scss">

.functionality-container {
  display: flex;
  flex-direction: row;
  padding-top: 10px;
  .url-input-container {
    display: block;
    width: auto;
    &.input input{
      width: 50vw;
    }
  }
}

</style>