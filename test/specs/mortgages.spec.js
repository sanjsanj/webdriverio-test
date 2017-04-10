const chai = require('chai');
const testHelper = require('../helpers/test-helper');

const expect = chai.expect;

const oldMortgageLandingPage = process.env.NODE_ENV === 'production'
    ? 'https://money.comparethemarket.com/mortgages/'
    : `https://${process.env.NODE_ENV}.money.comparethemarket.com/mortgages/`;

const oldMortgageDropdownPage = process.env.NODE_ENV === 'production'
    ? 'https://money.comparethemarket.com/mortgages/remortgage/'
    : `https://${process.env.NODE_ENV}.money.comparethemarket.com/mortgages/remortgage/`;

const expectedTitle = 'Mortgages - Compare Mortgage Rates Online | CompareTheMarket';
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
    browser.click('#mortgage-remortgage');

    testHelper.expectUrlToInclude('/remortgage/');

    testHelper.expectBrowserSuccess();
    testHelper.takeScreenshot(testDate, 'old-mortgages--remortgage-landing-page');
  });

  it('Can click through to moving home page', () => {
    browser.click('#mortgage-purchase');

    testHelper.expectUrlToInclude('/moving-home/');

    testHelper.expectBrowserSuccess();
    testHelper.takeScreenshot(testDate, 'old-mortgages--moving-home-landing-page');
  });

  it('Can click through to first time buyer page', () => {
    browser.click('#mortgage-first-time-buyer');

    testHelper.expectUrlToInclude('/first-time-buyer/');

    testHelper.expectBrowserSuccess();
    testHelper.takeScreenshot(testDate, 'old-mortgages--first-time-buyer-landing-page');
  });

  it('Can click through to buy to let page', () => {
    browser.click('#mortgage-buy-to-let');

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
