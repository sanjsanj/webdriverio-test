const chai = require("chai");
const expect = chai.expect;
const testHelper = require("../helpers/test-helper");

describe("Credit cards - ", () => {
    const testUrl = "https://peg.money.comparethemarket.com/credit-cards/";
    const expectedTitle = "Compare Our Best Credit Card Deals | CompareTheMarket";
    const filterList = ".basic-filter-list";
    const testDate = Date();

    it("should load ok and with the right title ", () => {
        browser.url(testUrl);

        testHelper.expectBrowserSuccess();

        let actualTitle = browser.getTitle();
        expect(actualTitle).to.eql(expectedTitle);
    });

    describe("From the overview page - ", () => {

        describe("Can go to the subpage - ", () => {

            it("For 0% balance transfer cards", () => {
                browser.url(testUrl);

                browser.click(filterList);
                browser.click("#basic-filter-BalanceTransfer");

                testHelper.expectUrlToInclude(`/balance-transfer/`);
                testHelper.expectBrowserSuccess();
            });

            it("For 0% balance transfer and new purchase cards", () => {
                browser.url(testUrl);

                browser.click(filterList);
                browser.click("#basic-filter-BalanceTransferAndNewPurchase");

                testHelper.expectUrlToInclude(`/balance-transfer-and-purchases/`);
                testHelper.expectBrowserSuccess();
            });

            it("For new purchase cards", () => {
                browser.url(testUrl);

                browser.click(filterList);
                browser.click("#basic-filter-NewPurchase");

                testHelper.expectUrlToInclude(`/purchases/`);
                testHelper.expectBrowserSuccess();
            });

            it("For cashback cards", () => {
                browser.url(testUrl);

                browser.click(filterList);
                browser.click("#basic-filter-Cashback");

                testHelper.expectUrlToInclude(`/cashback/`);
                testHelper.expectBrowserSuccess();
            });

            it("For rewards cards", () => {
                browser.url(testUrl);

                browser.click(filterList);
                browser.click("#basic-filter-Rewards");

                testHelper.expectUrlToInclude(`/rewards/`);
                testHelper.expectBrowserSuccess();
            });

            it("For low APR cards", () => {
                browser.url(testUrl);

                browser.click(filterList);
                browser.click("#basic-filter-LowestLongTermApr");

                testHelper.expectUrlToInclude(`/low-apr/`);
                testHelper.expectBrowserSuccess();
            });

            it("For bank cards", () => {
                browser.url(testUrl);

                browser.click(filterList);
                browser.click("#basic-filter-CardsFromYourBank");

                testHelper.expectUrlToInclude(`/cards-from-your-bank/`);
                testHelper.expectBrowserSuccess();
            });

            it("For credit building cards", () => {
                browser.url(testUrl);

                browser.click(filterList);
                browser.click("#basic-filter-CreditBuilder");

                testHelper.expectUrlToInclude(`/credit-building/`);
                testHelper.expectBrowserSuccess();
            });
        });

        describe("Can go to the third party landing page - ", () => {

            it("For 0% balance transfer cards", () => {
                browser.url(testUrl);
                browser.click("#balance-transfer-credit-card-id-87");
                browser.click("input#CreditCard_GoTo_Provider_87");

                testHelper.waitForPopup();
                testHelper.switchToLastTab();

                testHelper.expectBrowserSuccess();
                testHelper.takeScreenshot(testDate, "balance");
            });

            it("For 0% balance transfer and new purchase cards", () => {
                browser.url(testUrl);
                browser.click("#balance-transfer-and-new-purchase-credit-card-id-93");
                browser.click("input#CreditCard_GoTo_Provider_93");

                testHelper.waitForPopup();
                testHelper.switchToLastTab();

                testHelper.expectBrowserSuccess();
                testHelper.takeScreenshot(testDate, "balance-and-purchase");
            });

            it("For new purchase cards", () => {
                browser.url(testUrl);
                browser.click("#new-purchase-credit-card-id-44");
                browser.click("input#CreditCard_GoTo_Provider_44");

                testHelper.waitForPopup();
                testHelper.switchToLastTab();

                testHelper.expectBrowserSuccess();
                testHelper.takeScreenshot(testDate, "new-purchase");
            });

            it("For cashback cards", () => {
                browser.url(testUrl);
                browser.click("#cashback-credit-card-id-15");
                browser.click("input#CreditCard_GoTo_Provider_15");

                testHelper.waitForPopup();
                testHelper.switchToLastTab();

                testHelper.expectBrowserSuccess();
                testHelper.takeScreenshot(testDate, "cashback");
            });

            it("For rewards cards", () => {
                browser.url(testUrl);
                browser.click("#rewards-credit-card-id-78");
                browser.click("input#CreditCard_GoTo_Provider_78");

                testHelper.waitForPopup();
                testHelper.switchToLastTab();

                testHelper.expectBrowserSuccess();
                testHelper.takeScreenshot(testDate, "rewards");
            });

            it("For lowest APR cards", () => {
                browser.url(testUrl);
                browser.click("#lowest-long-term-apr-credit-card-id-51");
                browser.click("input#CreditCard_GoTo_Provider_51");

                testHelper.waitForPopup();
                testHelper.switchToLastTab();

                testHelper.expectBrowserSuccess();
                testHelper.takeScreenshot(testDate, "lowest-APR");
            });

            it("For bank cards", () => {
                browser.url(testUrl);
                browser.click("#cards-from-your-bank-credit-card-id-52");
                browser.click("input#CreditCard_GoTo_Provider_52");

                testHelper.waitForPopup();
                testHelper.switchToLastTab();

                testHelper.expectBrowserSuccess();
                testHelper.takeScreenshot(testDate, "bank");
            });

            it("For credit building cards", () => {
                browser.url(testUrl);
                browser.click("#credit-builder-credit-card-id-63");
                browser.click("input#CreditCard_GoTo_Provider_63");

                testHelper.waitForPopup();
                testHelper.switchToLastTab();

                testHelper.expectBrowserSuccess();
                testHelper.takeScreenshot(testDate, "credit-building");
            });
        });
    });
});
