const chai = require('chai');
const testHelper = require('../helpers/test-helper');

const expect = chai.expect;

let oldMortgageLandingPage;
switch (process.env.NODE_ENV) {
  case 'production':
    oldMortgageLandingPage = 'https://money.comparethemarket.com/mortgages/';
    break;
  case 'qa':
    oldMortgageLandingPage = `https://money.${process.env.NODE_ENV}.internal.comparethemarket.com/mortgages/`;
    break;
  default:
    oldMortgageLandingPage = `https://${process.env.NODE_ENV}.money.comparethemarket.com/mortgages/`;
}

let oldMortgageDropdownPage;
switch (process.env.NODE_ENV) {
  case 'production':
    oldMortgageDropdownPage = 'https://money.comparethemarket.com/mortgages/remortgage/';
    break;
  case 'qa':
    oldMortgageDropdownPage = `https://money.${process.env.NODE_ENV}.internal.comparethemarket.com/mortgages/remortgage/`;
    break;
  default:
    oldMortgageDropdownPage = `https://${process.env.NODE_ENV}.money.comparethemarket.com/mortgages/remortgage/`;
}

const expectedTitle = 'Compare the Market - Compare the mortgages';
const testDate = Date();
const filterList = '.basic-filter-list';

describe('Old mortgages landing page - ', () => {
  beforeEach((done) => {
    browser.url(oldMortgageLandingPage);
  });

  it('Should load with the right title', () => {
    testHelper.expectBrowserSuccess();
    testHelper.expectUrlToInclude('/mortgages/');

    const actualTitle = browser.getTitle();
    expect(actualTitle).to.eql(expectedTitle);
  });

  it('Can click through to remortgage page', () => {
    browser.click('#lsc-remortgage');

    testHelper.expectUrlToInclude('/remortgage/');

    testHelper.expectBrowserSuccess();
    testHelper.takeScreenshot(testDate, 'old-mortgages--remortgage-landing-page');
  });

  it('Can click through to moving home page', () => {
    browser.click('#lsc-house-move');

    testHelper.expectUrlToInclude('/moving-home/');

    testHelper.expectBrowserSuccess();
    testHelper.takeScreenshot(testDate, 'old-mortgages--moving-home-landing-page');
  });

  it('Can click through to first time buyer page', () => {
    browser.click('#lsc-first-home');

    testHelper.expectUrlToInclude('/first-time-buyer/');

    testHelper.expectBrowserSuccess();
    testHelper.takeScreenshot(testDate, 'old-mortgages--first-time-buyer-landing-page');
  });

  it('Can click through to buy to let page', () => {
    browser.click('#lsc-buy-to-let');

    testHelper.expectUrlToInclude('/buy-to-let/');

    testHelper.expectBrowserSuccess();
    testHelper.takeScreenshot(testDate, 'old-mortgages--buy-to-let-landing-page');
  });
});

describe('From old mortgage dropdown - ', () => {
  beforeEach((done) => {
    browser.url(oldMortgageDropdownPage);
  });

  it('Can navigate to moving home page', () => {
    browser.click(filterList);
    browser.click('#basic-filter-MovingHome');

    testHelper.expectUrlToInclude('/moving-home/');

    testHelper.expectBrowserSuccess();
    testHelper.takeScreenshot(testDate, 'old-mortgages-dropdown--moving-home-landing-page');
  });

  it('Can navigate to first time buyer page', () => {
    browser.click(filterList);
    browser.click('#basic-filter-FirstTimeBuyer');

    testHelper.expectUrlToInclude('/first-time-buyer/');

    testHelper.expectBrowserSuccess();
    testHelper.takeScreenshot(testDate, 'old-mortgages-dropdown--first-time-buyer-landing-page');
  });

  it('Can navigate to buy to let page', () => {
    browser.click(filterList);
    browser.click('#basic-filter-BuyToLet');

    testHelper.expectUrlToInclude('/buy-to-let/');

    testHelper.expectBrowserSuccess();
    testHelper.takeScreenshot(testDate, 'old-mortgages-dropdown--buy-to-let-landing-page');
  });

  it('Can navigate to mortgage calculator page', () => {
    browser.click(filterList);
    browser.click('#basic-filter-MortgageCalculator');

    testHelper.expectUrlToInclude('/calculator/');

    testHelper.expectBrowserSuccess();
    testHelper.takeScreenshot(testDate, 'old-mortgages-dropdown--mortgage-calculator-landing-page');
  });
});
