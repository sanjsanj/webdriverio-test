const fs = require(`fs-extra`);
const expect = require(`chai`).expect;
const path = require(`path`);

module.exports = {
    clickThroughToThirdParty: (selector) => {
        browser.click(`${selector} a`);
        browser.click(`.apply-now .apply-action`);
    },

    waitForAndClickElement: (element, time = 6000) => {
        try {
            browser.waitForVisible(element, time);
            browser.click(element);
        } catch (event) {}
    },

    takeScreenshot: (testDate, testType) => {
        testDate =  testDate.replace(/:/g, '-');
        const date =  Date().replace(/:/g, '-');

        if (!fs.existsSync(path.resolve(`./screenshots/${testDate}`))) {
            fs.mkdirsSync(path.resolve(`./screenshots/${testDate}`));
        }

        browser.saveScreenshot(path.resolve(`./screenshots/${testDate}/${date}__${testType}.png`));
    },

    closeOtherTabs: () => {
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
