const puppeteer = require('puppeteer');


(async () => {

    var url = 'https://10fastfingers.com/typing-test/english';

    var browser = await puppeteer.launch({ headless: false });
    var page = await browser.newPage();

    await page.goto(url, { waitUntil: 'networkidle2' });

    await page.waitForSelector("#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll");

    await page.click("#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll");

    await page.waitForSelector("#row1 > span.highlight");

    while (true) {

        var word = await page.$eval("#row1 > span.highlight", el => el.textContent);

        console.log(word);

        await page.waitForSelector('#inputfield');

        await page.focus('#inputfield');

        await page.keyboard.type(word + " ", 0);

    }

})();