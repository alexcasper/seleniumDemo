// talk about the Selenium libray and the components we're using
const {Builder, By, Key, until} = require('selenium-webdriver');

// talk about async programming, yikes!
(async function example() {
  // talk about headless browsers vs this Builder()
  let driver = await new Builder().forBrowser('firefox').build();
  // talk about try, catch, finally
  try {
    // we access the selenium test page
    // talk about await
    await driver.get('https://www.seleniumeasy.com/test/basic-first-form-demo.html');
    // we select the user message
    await driver.findElement(By.id('user-message')).sendKeys('Nutella');
    // we click the button
    await driver.findElement(By.className('btn btn-default')).click()
    // scrolls down the page
    await driver.executeScript("window.scrollBy(0,100)", "");
    // we get the text from the button, then log it locally
    await driver.findElement(By.id('display')).getText()
    .then(function (text) { console.log(`message from box \n--- \n${text}`); });


    // wait till lightbox appears and destroy it!
    
    let lightbox = await driver.findElement(By.id('at-cv-lightbox-close'))
    let lightboxIsVisible = await driver.wait(until.elementIsVisible(lightbox),10000);
    lightboxIsVisible.click()
    

    // we wait until the end of the world, or 20 seconds
    await driver.wait(until.titleIs('End of the World'),20000)
  } 
  // if we get an error, this is what we do with the error
  catch (error) {
    console.log(error)
  }
  finally {
       
    await driver.quit();
  }
})();