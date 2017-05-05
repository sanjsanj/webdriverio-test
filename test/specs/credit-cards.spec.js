const chai = require('chai');
const expect = chai.expect;
const testHelper = require('../helpers/test-helper');

describe('Credit cards overview page - ', () => {
  let testUrl;
  switch(process.env.NODE_ENV) {
    case 'production':
      testUrl = 'https://money.comparethemarket.com/credit-cards/'; 
      break;
    case 'qa':
      testUrl = `https://money.${process.env.NODE_ENV}.internal.comparethemarket.com/credit-cards/`;
      break;
    default:
      testUrl = `https://${process.env.NODE_ENV}.money.comparethemarket.com/credit-cards/`;
  }

  const expectedTitle = 'Compare Our Best Credit Card Deals | CompareTheMarket';
  const filterList = '.basic-filter-list';
  const testDate = Date();

  beforeEach((done) => {
    browser.url(testUrl);
  });

  it('Should load with the right title', () => {
    testHelper.expectBrowserSuccess();
    testHelper.expectUrlToInclude('/credit-cards/');

    const actualTitle = browser.getTitle();
    expect(actualTitle).to.eql(expectedTitle);
  });

  describe('Can go to the subpage - ', () => {
    it('For 0% balance transfer cards', () => {
      browser.click(filterList);
      browser.click('#basic-filter-BalanceTransfer');

      testHelper.expectUrlToInclude('/balance-transfer/');
      testHelper.expectBrowserSuccess();
      testHelper.takeScreenshot(testDate, 'credit-cards-subpage--balance');
    });

    it('For 0% balance transfer and new purchase cards', () => {
      browser.click(filterList);
      browser.click('#basic-filter-BalanceTransferAndNewPurchase');

      testHelper.expectUrlToInclude('/balance-transfer-and-purchases/');
      testHelper.expectBrowserSuccess();
      testHelper.takeScreenshot(testDate, 'credit-cards-subpage--balance-and-purchase');
    });

    it('For new purchase cards', () => {
      browser.click(filterList);
      browser.click('#basic-filter-NewPurchase');

      testHelper.expectUrlToInclude('/purchases/');
      testHelper.expectBrowserSuccess();
      testHelper.takeScreenshot(testDate, 'credit-cards-subpage--new-purchase');
    });

    it('For cashback cards', () => {
      browser.click(filterList);
      browser.click('#basic-filter-Cashback');

      testHelper.expectUrlToInclude('/cashback/');
      testHelper.expectBrowserSuccess();
      testHelper.takeScreenshot(testDate, 'credit-cards-subpage--cashback');
    });

    it('For rewards cards', () => {
      browser.click(filterList);
      browser.click('#basic-filter-Rewards');

      testHelper.expectUrlToInclude('/rewards/');
      testHelper.expectBrowserSuccess();
      testHelper.takeScreenshot(testDate, 'credit-cards-subpage--rewards');
    });

    it('For low APR cards', () => {
      browser.click(filterList);
      browser.click('#basic-filter-LowestLongTermApr');

      testHelper.expectUrlToInclude('/low-apr/');
      testHelper.expectBrowserSuccess();
      testHelper.takeScreenshot(testDate, 'credit-cards-subpage--low-apr');
    });

    it('For bank cards', () => {
      browser.click(filterList);
      browser.click('#basic-filter-CardsFromYourBank');

      testHelper.expectUrlToInclude('/cards-from-your-bank/');
      testHelper.expectBrowserSuccess();
      testHelper.takeScreenshot(testDate, 'credit-cards-subpage--bank');
    });

    it('For credit building cards', () => {
      browser.click(filterList);
      browser.click('#basic-filter-CreditBuilder');

      testHelper.expectUrlToInclude('/credit-building/');
      testHelper.expectBrowserSuccess();
      testHelper.takeScreenshot(testDate, 'credit-cards-subpage--credit-building');
    });
  });

  describe('Can go to the third party landing page - ', () => {
    it('For 0% balance transfer cards', () => {
      testHelper.clickThroughToThirdParty('.balance-transfer');

      testHelper.waitForAndClickElement('.apply-with-no-rewards-action');
      testHelper.closeOtherTabs();

      testHelper.expectBrowserSuccess();
      testHelper.takeScreenshot(testDate, 'credit-cards-third-party--balance');
    });

    it('For 0% balance transfer and new purchase cards', () => {
      testHelper.clickThroughToThirdParty('.balance-transfer-and-new-purchase');

      testHelper.waitForAndClickElement('.apply-with-no-rewards-action');
      testHelper.closeOtherTabs();

      testHelper.expectBrowserSuccess();
      testHelper.takeScreenshot(testDate, 'credit-cards-third-party--balance-and-purchase');
    });

    it('For new purchase cards', () => {
      testHelper.clickThroughToThirdParty('.new-purchase');

      testHelper.waitForAndClickElement('.apply-with-no-rewards-action');
      testHelper.closeOtherTabs();

      testHelper.expectBrowserSuccess();
      testHelper.takeScreenshot(testDate, 'credit-cards-third-party--new-purchase');
    });

    it('For cashback cards', () => {
      testHelper.clickThroughToThirdParty('.cashback');

      testHelper.waitForAndClickElement('.apply-with-no-rewards-action');
      testHelper.closeOtherTabs();

      testHelper.expectBrowserSuccess();
      testHelper.takeScreenshot(testDate, 'credit-cards-third-party--cashback');
    });

    it('For rewards cards', () => {
      testHelper.clickThroughToThirdParty('.rewards');

      testHelper.waitForAndClickElement('.apply-with-no-rewards-action');
      testHelper.closeOtherTabs();

      testHelper.expectBrowserSuccess();
      testHelper.takeScreenshot(testDate, 'credit-cards-third-party--rewards');
    });

    it('For lowest APR cards', () => {
      testHelper.clickThroughToThirdParty('.lowest-long-term-apr');

      testHelper.waitForAndClickElement('.apply-with-no-rewards-action');
      testHelper.closeOtherTabs();

      testHelper.expectBrowserSuccess();
      testHelper.takeScreenshot(testDate, 'credit-cards-third-party--low-apr');
    });

    it('For bank cards', () => {
      testHelper.clickThroughToThirdParty('.cards-from-your-bank');

      testHelper.waitForAndClickElement('.apply-with-no-rewards-action');
      testHelper.closeOtherTabs();

      testHelper.expectBrowserSuccess();
      testHelper.takeScreenshot(testDate, 'credit-cards-third-party--bank');
    });

    it('For credit building cards', () => {
      testHelper.clickThroughToThirdParty('.credit-builder');

      testHelper.waitForAndClickElement('.apply-with-no-rewards-action');
      testHelper.closeOtherTabs();

      testHelper.expectBrowserSuccess();
      testHelper.takeScreenshot(testDate, 'credit-cards-third-party--credit-building');
    });
  });
});
