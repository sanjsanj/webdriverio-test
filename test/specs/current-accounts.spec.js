const chai = require('chai');
const expect = chai.expect;
const testHelper = require('../helpers/test-helper');

describe('Current accounts - Can go to the third party landing page - ', () => {
  let testUrl;
  switch(process.env.NODE_ENV) {
    case 'production':
      testUrl = 'https://money.comparethemarket.com/current-accounts/'; 
      break;
    case 'qa':
      testUrl = `https://money.${process.env.NODE_ENV}.internal.comparethemarket.com/current-accounts/`;
      break;
    default:
      testUrl = `https://${process.env.NODE_ENV}.money.comparethemarket.com/current-accounts/`;
  }

  const expectedTitle = 'Current Accounts - Compare Current Account Rates | Compare The Market';
  const testDate = Date();

  beforeEach((done) => {
    browser.url(testUrl);
  });

  it('Should load with the right title', () => {
    testHelper.expectBrowserSuccess();
    testHelper.expectUrlToInclude('/current-accounts/');

    const actualTitle = browser.getTitle();
    expect(actualTitle).to.eql(expectedTitle);
  });

  it('For standard accounts', () => {
    browser.pause(5000); 
    $('.button-green-small.apply-action').click();
    testHelper.closeOtherTabs();

    testHelper.expectBrowserSuccess();
    testHelper.takeScreenshot(testDate, 'current-accounts-third-party--standard');
  });

  // it('For packaged accounts', () => {
  //   browser.moveTo('#packaged-tab', 5, 5).click();
  //   // $('.button-green-small.apply-action').click();
  //   browser.moveTo('.button-green-small.apply-action').click();
  //   testHelper.closeOtherTabs();

  //   testHelper.expectBrowserSuccess();
  //   testHelper.takeScreenshot(testDate, 'current-accounts-third-party--packaged');
  // });

  // it('For student accounts', () => {
  //   $('#student-tab').click();
  //   $('.button-green-small.apply-action').click();
  //   testHelper.closeOtherTabs();

  //   testHelper.expectBrowserSuccess();
  //   testHelper.takeScreenshot(testDate, 'current-accounts-third-party--student');
  // });

  // it('For graduate accounts', () => {
  //   $('#graduate-tab').click();
  //   $('.button-green-small.apply-action').click();
  //   testHelper.closeOtherTabs();

  //   testHelper.expectBrowserSuccess();
  //   testHelper.takeScreenshot(testDate, 'current-accounts-third-party--graduate');
  // });

  // it('For basic accounts', () => {
  //   $('#basic-tab').click();
  //   $('.button-green-small.apply-action').click();
  //   testHelper.closeOtherTabs();

  //   testHelper.expectBrowserSuccess();
  //   testHelper.takeScreenshot(testDate, 'current-accounts-third-party--basic');
  // });
});
