const chai = require(`chai`);
const expect = chai.expect;
const testHelper = require(`../helpers/test-helper`);

describe(`Loans - `, function () {
    const testUrl = process.env.NODE_ENV == `production`
        ? `https://money.comparethemarket.com/loans/`
        : `https://${process.env.NODE_ENV}.money.comparethemarket.com/loans/`;

    const expectedTitle = `Compare Cheap Personal & Homeowner Loans | CompareTheMarket`;
    const testDate = Date();

    beforeEach( (done) => {
        browser.url(testUrl);
    });

    it(`Should load with the right title`, () => {
        testHelper.expectBrowserSuccess();
        testHelper.expectUrlToInclude(`/loans/`);

        let actualTitle = browser.getTitle();
        expect(actualTitle).to.eql(expectedTitle);
    });

    it(`Can load the "All loans" tab`, () => {
        browser.click(`.all-loans-tab`);

        testHelper.expectBrowserSuccess();
        testHelper.takeScreenshot(testDate, `loans-tab--all`);
    });

    it(`Can load the "Personal loans" tab`, () => {
        browser.click(`.personal-loans-tab`);

        testHelper.expectBrowserSuccess();
        testHelper.takeScreenshot(testDate, `loans-tab--personal`);
    });

    it(`Can load the "Homeowner loans" tab`, () => {
        browser.click(`.secured-loans-tab`);

        testHelper.expectBrowserSuccess();
        testHelper.takeScreenshot(testDate, `loans-tab--homeowner`);
    });

    it(`Can go through to a personal loan third party`, () => {
        browser.click(`.personal-loans-tab`);
        browser.click(`.more-details`);

        testHelper.waitForAndClickElement(`.apply-action`);
        testHelper.waitForAndClickElement(`.apply-with-no-rewards-action`);
        testHelper.closeOtherTabs();

        testHelper.expectBrowserSuccess();
        testHelper.takeScreenshot(testDate, `loans-third-party--personal`);
    });

    it(`Can get callback popup for homeowner loans`, () => {
        browser.click(`.secured-loans-tab`);
        browser.click(`.more-details`);

        testHelper.waitForAndClickElement(`.apply-action`);

        const actualText = browser.element(`#callback-splashtext-top`).getText();
        const expectedText = `To apply for this loan, we’ll need to call you back`;

        expect(actualText).to.include(expectedText);
        testHelper.expectBrowserSuccess();
        testHelper.takeScreenshot(testDate, `loans-popup--homeowner`);
    });
});
