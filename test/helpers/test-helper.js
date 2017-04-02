const fs = require("fs-extra");

module.exports = {
    waitForPopup: function () {
        try {
            browser.waitForVisible(".apply-with-no-rewards-action", 10000);
            browser.click(".apply-with-no-rewards-action");
        } catch (event) {}
    },

    takeScreenshot: function (testDate, type) {
        if (!fs.existsSync(`./screenshots/${testDate}`)) {
            fs.mkdir(`./screenshots/${testDate}`);
        }

        browser.saveScreenshot(`./screenshots/${testDate}/${Date()}__${type}.png`);
    }
}
