const chai = require("chai");
const expect = chai.expect;
const testHelper = require("../helpers/test-helper");

describe("Loans - ", () => {
    const testUrl = "https://peg.money.comparethemarket.com/loans/";
    const expectedTitle = `Compare Cheap Personal & Homeowner Loans | CompareTheMarket`;
    const filterList = ".basic-filter-list";
    const testDate = Date();

    it("should load ok and with the right title ", () => {
        browser.url(testUrl);

        testHelper.expectBrowserSuccess();

        let actualTitle = browser.getTitle();
        expect(actualTitle).to.eql(expectedTitle);
    });

    // describe("From the overview page - ", () => {
    // });
});
