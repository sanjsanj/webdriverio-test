const fs = require("fs-extra");
const expect = require("chai").expect;

module.exports = {
    waitForPopup: function () {
        try {
            browser.waitForVisible(".apply-with-no-rewards-action", 10000);
            browser.click(".apply-with-no-rewards-action");
        } catch (event) {}
    },

    takeScreenshot: (testDate, suiteType, testType) => {
        if (!fs.existsSync(`./screenshots/${testDate}`)) {
            fs.mkdir(`./screenshots/${testDate}`);
        }

        browser.saveScreenshot(`./screenshots/${testDate}/${Date()}__${suiteType}--${testType}.png`);
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
