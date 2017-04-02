const fs = require("fs-extra");
const expect = require("chai").expect;

module.exports = {
    waitForPopup: () => {
        try {
            browser.waitForVisible(".apply-with-no-rewards-action", 10000);
            browser.click(".apply-with-no-rewards-action");
        } catch (event) {}
    },

    takeScreenshot: (testDate, type) => {
        if (!fs.existsSync(`./screenshots/${testDate}`)) {
            fs.mkdir(`./screenshots/${testDate}`);
        }

        browser.saveScreenshot(`./screenshots/${testDate}/${Date()}__${type}.png`);
    },

    switchToLastTab: () => {
        browser.switchTab(browser.getTabIds().slice(-1)[0]);
    },

    expectBrowserSuccess: () => {
        let browserState = browser.status().state;
        expect(browserState).to.eql("success");
    },
}
