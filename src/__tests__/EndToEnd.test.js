import puppeteer from 'puppeteer-core';



describe('<App /> component', () => {

    test("browser" , () => { 
        (async () => {
            const browser = await puppeteer.launch(); // Launches the browser
            const page = await browser.newPage(); // Opens a new tab
            await page.goto('http://localhost:3000'); // Navigates to https://example.com
            await page.waitForSelector("#event-list");
            await browser.close(); // Closes the browser
          })();

    })


    
});