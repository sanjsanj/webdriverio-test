const chai = require(`chai`);
const expect = chai.expect;
const testHelper = require(`../helpers/test-helper`);

describe(`Credit cards overview page - `, function () {
    const testUrl = `https://peg.money.comparethemarket.com/credit-cards/`;
    const expectedTitle = `Compare Our Best Credit Card Deals | CompareTheMarket`;
    const filterList = `.basic-filter-list`;
    const testDate = Date();

    beforeEach(function (done) {
        browser.url(testUrl);
    });

    it(`Should load with the right title `, function () {
        testHelper.expectBrowserSuccess();

        let actualTitle = browser.getTitle();
        expect(actualTitle).to.eql(expectedTitle);
    });

    describe(`Can go to the subpage - `, function () {

        it(`For 0% balance transfer cards`, function () {
            browser.click(filterList);
            browser.click(`#basic-filter-BalanceTransfer`);

            testHelper.expectUrlToInclude(`/balance-transfer/`);
            testHelper.expectBrowserSuccess();
            testHelper.takeScreenshot(testDate, `credit-cards-subpage`, `balance`);
        });

        it(`For 0% balance transfer and new purchase cards`, function () {
            browser.click(filterList);
            browser.click(`#basic-filter-BalanceTransferAndNewPurchase`);

            testHelper.expectUrlToInclude(`/balance-transfer-and-purchases/`);
            testHelper.expectBrowserSuccess();
            testHelper.takeScreenshot(testDate, `credit-cards-subpage`, `balance-and-purchase`);
        });

        it(`For new purchase cards`, function () {
            browser.click(filterList);
            browser.click(`#basic-filter-NewPurchase`);

            testHelper.expectUrlToInclude(`/purchases/`);
            testHelper.expectBrowserSuccess();
            testHelper.takeScreenshot(testDate, `credit-cards-subpage`, `new-purchase`);
        });

        it(`For cashback cards`, function () {
            browser.click(filterList);
            browser.click(`#basic-filter-Cashback`);

            testHelper.expectUrlToInclude(`/cashback/`);
            testHelper.expectBrowserSuccess();
            testHelper.takeScreenshot(testDate, `credit-cards-subpage`, `cashback`);
        });

        it(`For rewards cards`, function () {
            browser.click(filterList);
            browser.click(`#basic-filter-Rewards`);

            testHelper.expectUrlToInclude(`/rewards/`);
            testHelper.expectBrowserSuccess();
            testHelper.takeScreenshot(testDate, `credit-cards-subpage`, `rewards`);
        });

        it(`For low APR cards`, function () {
            browser.click(filterList);
            browser.click(`#basic-filter-LowestLongTermApr`);

            testHelper.expectUrlToInclude(`/low-apr/`);
            testHelper.expectBrowserSuccess();
            testHelper.takeScreenshot(testDate, `credit-cards-subpage`, `low-apr`);
        });

        it(`For bank cards`, function () {
            browser.click(filterList);
            browser.click(`#basic-filter-CardsFromYourBank`);

            testHelper.expectUrlToInclude(`/cards-from-your-bank/`);
            testHelper.expectBrowserSuccess();
            testHelper.takeScreenshot(testDate, `credit-cards-subpage`, `bank`);
        });

        it(`For credit building cards`, function () {
            browser.click(filterList);
            browser.click(`#basic-filter-CreditBuilder`);

            testHelper.expectUrlToInclude(`/credit-building/`);
            testHelper.expectBrowserSuccess();
            testHelper.takeScreenshot(testDate, `credit-cards-subpage`, `credit-building`);
        });
    });

    describe(`Can go to the third party landing page - `, function () {

        it(`For 0% balance transfer cards`, function () {
            testHelper.clickThroughToThirdParty(`.balance-transfer`);

            testHelper.waitForPopup();
            testHelper.closeOtherTabs();

            testHelper.expectBrowserSuccess();
            testHelper.takeScreenshot(testDate, `credit-cards-third-party`, `balance`);
        });

        it(`For 0% balance transfer and new purchase cards`, function () {
            testHelper.clickThroughToThirdParty(`.balance-transfer-and-new-purchase`);

            testHelper.waitForPopup();
            testHelper.closeOtherTabs();

            testHelper.expectBrowserSuccess();
            testHelper.takeScreenshot(testDate, `credit-cards-third-party`, `balance-and-purchase`);
        });

        it(`For new purchase cards`, function () {
            testHelper.clickThroughToThirdParty(`.new-purchase`);

            testHelper.waitForPopup();
            testHelper.closeOtherTabs();

            testHelper.expectBrowserSuccess();
            testHelper.takeScreenshot(testDate, `credit-cards-third-party`, `new-purchase`);
        });

        it(`For cashback cards`, function () {
            testHelper.clickThroughToThirdParty(`.cashback`);

            testHelper.waitForPopup();
            testHelper.closeOtherTabs();

            testHelper.expectBrowserSuccess();
            testHelper.takeScreenshot(testDate, `credit-cards-third-party`, `cashback`);
        });

        it(`For rewards cards`, function () {
            testHelper.clickThroughToThirdParty(`.rewards`);

            testHelper.waitForPopup();
            testHelper.closeOtherTabs();

            testHelper.expectBrowserSuccess();
            testHelper.takeScreenshot(testDate, `credit-cards-third-party`, `rewards`);
        });

        it(`For lowest APR cards`, function () {
            testHelper.clickThroughToThirdParty(`.lowest-long-term-apr`);

            testHelper.waitForPopup();
            testHelper.closeOtherTabs();

            testHelper.expectBrowserSuccess();
            testHelper.takeScreenshot(testDate, `credit-cards-third-party`, `low-apr`);
        });

        it(`For bank cards`, function () {
            testHelper.clickThroughToThirdParty(`.cards-from-your-bank`);

            testHelper.waitForPopup();
            testHelper.closeOtherTabs();

            testHelper.expectBrowserSuccess();
            testHelper.takeScreenshot(testDate, `credit-cards-third-party`, `bank`);
        });

        it(`For credit building cards`, function () {
            testHelper.clickThroughToThirdParty(`.credit-builder`);

            testHelper.waitForPopup();
            testHelper.closeOtherTabs();

            testHelper.expectBrowserSuccess();
            testHelper.takeScreenshot(testDate, `credit-cards-third-party`, `credit-building`);
        });
    });
});
