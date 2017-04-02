const fs = require("fs-extra");
const expect = require("chai").expect;
const path = require("path");

module.exports = {
    waitForPopup: function () {
        try {
            browser.waitForVisible(".apply-with-no-rewards-action", 10000);
            browser.click(".apply-with-no-rewards-action");
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

    handleTabs: function () {
        // console.log(`all tabs: ${browser.getTabIds()}`);
        // console.log(`first tab: ${browser.getTabIds().slice(0)[0]}`);
        // console.log(`last in array: ${browser.getTabIds().slice(-1)[0]}`);
        browser.close(browser.getTabIds().slice(-1)[0]);
    },

    expectBrowserSuccess: function () {
        let browserState = browser.status().state;
        expect(browserState).to.eql("success");
    },

    expectUrlToInclude: function (string) {
        let browserUrl = browser.url().value;
        expect(browserUrl).to.include(string);
    },
}
