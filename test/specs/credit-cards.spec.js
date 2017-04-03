const chai = require("chai");
const expect = chai.expect;
const testHelper = require("../helpers/test-helper");

describe("Credit cards overview page - ", function () {
    const testUrl = "https://peg.money.comparethemarket.com/credit-cards/";
    const expectedTitle = "Compare Our Best Credit Card Deals | CompareTheMarket";
    const filterList = ".basic-filter-list";
    const testDate = Date();

    beforeEach(function (done) {
        browser.url(testUrl);
    });

    it("Should load with the right title ", function () {
        testHelper.expectBrowserSuccess();

        let actualTitle = browser.getTitle();
        expect(actualTitle).to.eql(expectedTitle);
    });

    describe("Can go to the subpage - ", function () {

        it("For 0% balance transfer cards", function () {
            browser.click(filterList);
            browser.click("#basic-filter-BalanceTransfer");

            testHelper.expectUrlToInclude(`/balance-transfer/`);
            testHelper.expectBrowserSuccess();
            testHelper.takeScreenshot(testDate, "credit-cards-subpage", "balance");
        });

        it("For 0% balance transfer and new purchase cards", function () {
            browser.click(filterList);
            browser.click("#basic-filter-BalanceTransferAndNewPurchase");

            testHelper.expectUrlToInclude(`/balance-transfer-and-purchases/`);
            testHelper.expectBrowserSuccess();
            testHelper.takeScreenshot(testDate, "credit-cards-subpage", "balance-and-purchase");
        });

        it("For new purchase cards", function () {
            browser.click(filterList);
            browser.click("#basic-filter-NewPurchase");

            testHelper.expectUrlToInclude(`/purchases/`);
            testHelper.expectBrowserSuccess();
            testHelper.takeScreenshot(testDate, "credit-cards-subpage", "new-purchase");
        });

        it("For cashback cards", function () {
            browser.click(filterList);
            browser.click("#basic-filter-Cashback");

            testHelper.expectUrlToInclude(`/cashback/`);
            testHelper.expectBrowserSuccess();
            testHelper.takeScreenshot(testDate, "credit-cards-subpage", "cashback");
        });

        it("For rewards cards", function () {
            browser.click(filterList);
            browser.click("#basic-filter-Rewards");

            testHelper.expectUrlToInclude(`/rewards/`);
            testHelper.expectBrowserSuccess();
            testHelper.takeScreenshot(testDate, "credit-cards-subpage", "rewards");
        });

        it("For low APR cards", function () {
            browser.click(filterList);
            browser.click("#basic-filter-LowestLongTermApr");

            testHelper.expectUrlToInclude(`/low-apr/`);
            testHelper.expectBrowserSuccess();
            testHelper.takeScreenshot(testDate, "credit-cards-subpage", "low-apr");
        });

        it("For bank cards", function () {
            browser.click(filterList);
            browser.click("#basic-filter-CardsFromYourBank");

            testHelper.expectUrlToInclude(`/cards-from-your-bank/`);
            testHelper.expectBrowserSuccess();
            testHelper.takeScreenshot(testDate, "credit-cards-subpage", "bank");
        });

        it("For credit building cards", function () {
            browser.click(filterList);
            browser.click("#basic-filter-CreditBuilder");

            testHelper.expectUrlToInclude(`/credit-building/`);
            testHelper.expectBrowserSuccess();
            testHelper.takeScreenshot(testDate, "credit-cards-subpage", "credit-building");
        });
    });

    describe("Can go to the third party landing page - ", function () {

        it("For 0% balance transfer cards", function () {
            browser.click("#balance-transfer-credit-card-id-87");
            browser.click("input#CreditCard_GoTo_Provider_87");

            testHelper.waitForPopup();
            testHelper.closeOtherTabs();

            testHelper.expectBrowserSuccess();
            testHelper.takeScreenshot(testDate, "credit-cards-third-party", "balance");
        });

        it("For 0% balance transfer and new purchase cards", function () {
            browser.click("#balance-transfer-and-new-purchase-credit-card-id-93");
            browser.click("input#CreditCard_GoTo_Provider_93");

            testHelper.waitForPopup();
            testHelper.closeOtherTabs();

            testHelper.expectBrowserSuccess();
            testHelper.takeScreenshot(testDate, "credit-cards-third-party", "balance-and-purchase");
        });

        it("For new purchase cards", function () {
            browser.click("#new-purchase-credit-card-id-44");
            browser.click("input#CreditCard_GoTo_Provider_44");

            testHelper.waitForPopup();
            testHelper.closeOtherTabs();

            testHelper.expectBrowserSuccess();
            testHelper.takeScreenshot(testDate, "credit-cards-third-party", "new-purchase");
        });

        it("For cashback cards", function () {
            browser.click("#cashback-credit-card-id-15");
            browser.click("input#CreditCard_GoTo_Provider_15");

            testHelper.waitForPopup();
            testHelper.closeOtherTabs();

            testHelper.expectBrowserSuccess();
            testHelper.takeScreenshot(testDate, "credit-cards-third-party", "cashback");
        });

        it("For rewards cards", function () {
            browser.click("#rewards-credit-card-id-78");
            browser.click("input#CreditCard_GoTo_Provider_78");

            testHelper.waitForPopup();
            testHelper.closeOtherTabs();

            testHelper.expectBrowserSuccess();
            testHelper.takeScreenshot(testDate, "credit-cards-third-party", "rewards");
        });

        it("For lowest APR cards", function () {
            browser.click("#lowest-long-term-apr-credit-card-id-51");
            browser.click("input#CreditCard_GoTo_Provider_51");

            testHelper.waitForPopup();
            testHelper.closeOtherTabs();

            testHelper.expectBrowserSuccess();
            testHelper.takeScreenshot(testDate, "credit-cards-third-party", "low-apr");
        });

        it("For bank cards", function () {
            browser.click("#cards-from-your-bank-credit-card-id-52");
            browser.click("input#CreditCard_GoTo_Provider_52");

            testHelper.waitForPopup();
            testHelper.closeOtherTabs();

            testHelper.expectBrowserSuccess();
            testHelper.takeScreenshot(testDate, "credit-cards-third-party", "bank");
        });

        it("For credit building cards", function () {
            browser.click("#credit-builder-credit-card-id-63");
            browser.click("input#CreditCard_GoTo_Provider_63");

            testHelper.waitForPopup();
            testHelper.closeOtherTabs();

            testHelper.expectBrowserSuccess();
            testHelper.takeScreenshot(testDate, "credit-cards-third-party", "credit-building");
        });
    });
});
