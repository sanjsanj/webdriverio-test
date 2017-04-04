const chai = require("chai");
const expect = chai.expect;
const testHelper = require("../helpers/test-helper");

describe("Loans - ", function () {
    const testUrl = `https://peg.money.comparethemarket.com/loans/`;
    const expectedTitle = `Compare Cheap Personal & Homeowner Loans | CompareTheMarket`;
    const testDate = Date();

    beforeEach(function (done) {
        browser.url(testUrl);
    });

    it("should load with the right title ", function () {
        testHelper.expectBrowserSuccess();

        let actualTitle = browser.getTitle();
        expect(actualTitle).to.eql(expectedTitle);
    });

    // it("Can navigate to third party ", function () {
    //
    //     testHelper.waitForPopup();
    //     testHelper.closeOtherTabs();
    //
    //     testHelper.expectBrowserSuccess();
    //     testHelper.takeScreenshot(testDate, "loans-third-party", "personal");
    // });
});
