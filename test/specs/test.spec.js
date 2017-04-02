// var assert = require("assert");
var chai = require("chai");
var expect = chai.expect;
var fs = require("fs-extra");

describe("Credit cards", function() {
    var pegCreditCardsUrl = "http://peg.money.comparethemarket.com/credit-cards/";
    var expectedTitle = "Compare Our Best Credit Card Deals | CompareTheMarket";
    var filterList = ".basic-filter-list";
    var testDate = Date();

    it("should load ok and with the right title ", function () {
        browser.url(pegCreditCardsUrl);

        var browserState = browser.status().state;
        expect(browserState).to.eql("success");

        var actualTitle = browser.getTitle();
        expect(actualTitle).to.eql(expectedTitle);
    });

    describe("From the overview page", function() {

        it("can click on a 0% balance transfer card and be taken to its page", function () {
            browser.url(pegCreditCardsUrl);
            browser.click("#balance-transfer-credit-card-id-87");

            var card = $("input[id=CreditCard_GoTo_Provider_87]");
            expect(card).to.exist;
        });

        it("can click on a 0% balance transfers card and go through to the third party", function () {
            browser.url(pegCreditCardsUrl);
            browser.click('#balance-transfer-credit-card-id-87');
            browser.click("input#CreditCard_GoTo_Provider_87");

            try {
                browser.waitForVisible(".apply-with-no-rewards-action", 10000);
                browser.click(".apply-with-no-rewards-action");
            } catch (event) {
                console.log(event);
            }

            browser.switchTab(browser.getTabIds().slice(-1)[0]);

            var browserState = browser.status().state;
            expect(browserState).to.eql("success");

            if (!fs.existsSync(`./screenshots/${testDate}`)) {
                fs.mkdir(`./screenshots/${testDate}`);
            }

            browser.saveScreenshot(`./screenshots/${testDate}/${Date()}_balance.png`);
        });

        it("can click on a 0% balance transfers and purchases card and go through to the third party", function () {
            browser.url(pegCreditCardsUrl);
            browser.click('#balance-transfer-and-new-purchase-credit-card-id-93');
            browser.click("input#CreditCard_GoTo_Provider_93");

            try {
                browser.waitForVisible(".apply-with-no-rewards-action", 10000);
                browser.click(".apply-with-no-rewards-action");
            } catch (event) {
                console.log(event);
            }

            browser.switchTab(browser.getTabIds().slice(-1)[0]);

            var browserState = browser.status().state;
            expect(browserState).to.eql("success");

            if (!fs.existsSync(`./screenshots/${testDate}`)) {
                fs.mkdir(`./screenshots/${testDate}`);
            }

            browser.saveScreenshot(`./screenshots/${testDate}/${Date()}_balance_and_purchase.png`);
        });
    });
});
