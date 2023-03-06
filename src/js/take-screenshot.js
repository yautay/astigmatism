const { chromium, firefox} = require("playwright");
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

getScreen( "firefox", "https://www.komputronik.pl", "sraka.png")