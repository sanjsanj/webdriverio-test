const chai = require("chai");
const expect = chai.expect;
const testHelper = require("../helpers/test-helper");

describe("Credit cards", function() {
    const pegCreditCardsUrl = "https://peg.money.comparethemarket.com/credit-cards/";
    const expectedTitle = "Compare Our Best Credit Card Deals | CompareTheMarket";
    const filterList = ".basic-filter-list";
    const testDate = Date();

    it("should load ok and with the right title ", function () {
        browser.url(pegCreditCardsUrl);

        let browserState = browser.status().state;
        expect(browserState).to.eql("success");

        let actualTitle = browser.getTitle();
        expect(actualTitle).to.eql(expectedTitle);
    });

    describe("From the overview page", function() {

        it("can click on a 0% balance transfer card and be taken to its page", function () {
            browser.url(pegCreditCardsUrl);
            browser.click("#balance-transfer-credit-card-id-87");

            let card = $("input[id=CreditCard_GoTo_Provider_87]");
            expect(card).to.exist;
        });

        it("can click on a 0% balance transfers card and go through to the third party", function () {
            browser.url(pegCreditCardsUrl);
            browser.click("#balance-transfer-credit-card-id-87");
            browser.click("input#CreditCard_GoTo_Provider_87");

            testHelper.waitForPopup();

            browser.switchTab(browser.getTabIds().slice(-1)[0]);

            let browserState = browser.status().state;
            expect(browserState).to.eql("success");

            testHelper.takeScreenshot(testDate, "balance");
        });

        it("can click on a 0% balance transfers and purchases card and go through to the third party", function () {
            browser.url(pegCreditCardsUrl);
            browser.click("#balance-transfer-and-new-purchase-credit-card-id-93");
            browser.click("input#CreditCard_GoTo_Provider_93");

            testHelper.waitForPopup();

            browser.switchTab(browser.getTabIds().slice(-1)[0]);

            let browserState = browser.status().state;
            expect(browserState).to.eql("success");

            testHelper.takeScreenshot(testDate, "balance-and-purchase");
        });
    });
});
