const chai = require(`chai`);
const expect = chai.expect;
const testHelper = require(`../helpers/test-helper`);

describe(`Old mortgages landing page - `, function () {
    const testUrl = process.env.NODE_ENV == `production`
        ? `https://money.comparethemarket.com/mortgages/`
        : `https://${process.env.NODE_ENV}.money.comparethemarket.com/mortgages/`;

    const expectedTitle = `Mortgages - Compare Mortgage Rates Online | CompareTheMarket`;
    const testDate = Date();

    beforeEach( (done) => {
        browser.url(testUrl);
    });

    it(`Should load with the right title`, () => {
        testHelper.expectBrowserSuccess();
        testHelper.expectUrlToInclude(`/mortgages/`);

        let actualTitle = browser.getTitle();
        expect(actualTitle).to.eql(expectedTitle);
    });

    it(`Can click through to remortgage page`, () => {
        browser.click(`#mortgage-remortgage`);

        testHelper.expectUrlToInclude(`/remortgage/`);

        testHelper.expectBrowserSuccess();
        testHelper.takeScreenshot(testDate, `old-mortgages--remortgage-landing-page`);
    });

    it(`Can click through to moving home page`, () => {
        browser.click(`#mortgage-purchase`);

        testHelper.expectUrlToInclude(`/moving-home/`);

        testHelper.expectBrowserSuccess();
        testHelper.takeScreenshot(testDate, `old-mortgages--moving-home-landing-page`);
    });

    it(`Can click through to first time buyer page`, () => {
        browser.click(`#mortgage-first-time-buyer`);

        testHelper.expectUrlToInclude(`/first-time-buyer/`);

        testHelper.expectBrowserSuccess();
        testHelper.takeScreenshot(testDate, `old-mortgages--first-time-buyer-landing-page`);
    });

    it(`Can click through to buy to let page`, () => {
        browser.click(`#mortgage-buy-to-let`);

        testHelper.expectUrlToInclude(`/buy-to-let/`);

        testHelper.expectBrowserSuccess();
        testHelper.takeScreenshot(testDate, `old-mortgages--buy-to-let-landing-page`);
    });
});
