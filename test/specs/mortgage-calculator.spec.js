const chai = require('chai');
const testHelper = require('../helpers/test-helper');

const expect = chai.expect;

let mortgageCalculatorPage;
  switch(process.env.NODE_ENV) {
    case 'production':
      mortgageCalculatorPage = 'https://www.comparethemarket.com/mortgages/information/calculator/'; 
      break;
    case 'qa':
      mortgageCalculatorPage = `https://cms.${process.env.NODE_ENV}.internal.comparethemarket.com/mortgages/information/calculator/`;
      break;
    default:
      mortgageCalculatorPage = `https://cms.${process.env.NODE_ENV}.comparethemarket.com/mortgages/information/calculator/`;
  }


const expectedTitle = 'Mortgage Calculator: How Much Can I Borrow? | comparethemarket.com';
const testDate = Date();

describe('Mortgage calculator landing page - ', () => {
  beforeEach((done) => {
    browser.url(mortgageCalculatorPage);
  });

  it('Should load with the right title', () => {
    testHelper.expectBrowserSuccess();
    testHelper.expectUrlToInclude('/calculator/');

    const actualTitle = browser.getTitle();
    expect(actualTitle).to.eql(expectedTitle);

    testHelper.takeScreenshot(testDate, 'mortgage-calculator--landing-page');
  });

  it('Can show results when form is filled in', () => {
    expect('#information-section').to.be.hidden;
    browser.setValue('#income-input-0', '50000');
    browser.click('label*=No');
    browser.click('#btn-calculate');

    browser.waitForVisible('#information-section', 2000);
    expect('#information-section').to.be.visible;
    testHelper.takeScreenshot(testDate, 'mortgage-calculator--fill-form');
  });
});
