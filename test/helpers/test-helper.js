const fs = require(`fs-extra`);
const expect = require(`chai`).expect;
const path = require(`path`);

module.exports = {
    clickThroughToThirdParty: (selector) => {
        browser.click(`${selector} a`);
        browser.click(`.apply-now .apply-action`);
    },

    waitForPopup: () => {
        try {
            browser.waitForVisible(`.apply-with-no-rewards-action`, 6000);
            browser.click(`.apply-with-no-rewards-action`);
        } catch (event) {}
    },

    takeScreenshot: (testDate, suiteType, testType) => {
        testDate =  testDate.replace(/:/g, '');
        const date =  testDate.replace(/:/g, '');

        if (!fs.existsSync(path.resolve(`./screenshots/${testDate}`))) {
            fs.mkdirsSync(path.resolve(`./screenshots/${testDate}`));
        }

        browser.saveScreenshot(path.resolve(`./screenshots/${testDate}/${date}__${suiteType}--${testType}.png`));
    },

    closeOtherTabs: () => {
        // console.log(`all tabs: ${browser.getTabIds()}`);
        // console.log(`first tab: ${browser.getTabIds().slice(0)[0]}`);
        // console.log(`last in array: ${browser.getTabIds().slice(-1)[0]}`);
        // console.log(`function on: ${browser.getTabIds().slice(-1)[0]}`);
        // console.log(`--------`);
        browser.close(browser.getTabIds().slice(-1)[0]);
    },

    expectBrowserSuccess: () => {
        let browserState = browser.status().state;
        expect(browserState).to.eql(`success`);
    },

    expectUrlToInclude: (string) => {
        let browserUrl = browser.url().value;
        expect(browserUrl).to.include(string);
    },
}
