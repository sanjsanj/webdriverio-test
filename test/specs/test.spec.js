var assert = require('assert');
var chai = require('chai');
global.expect = chai.expect;
// chai.Should();

describe('Credit cards', function() {
    var pegCreditCardsUrl = "http://peg.money.comparethemarket.com/credit-cards/";
    var expectedTitle = "Compare Our Best Credit Card Deals | CompareTheMarket";
    var filterList = ".basic-filter-list";

    // it('should have the right title ', function () {
    //     browser.url(pegCreditCardsUrl);
    //     var actualTitle = browser.getTitle();
    //     assert.equal(actualTitle, expectedTitle);
    // });

    describe('overview page', function() {
        it('can click on a 0% balance transfer card and be taken to its page', function () {
            browser.url(pegCreditCardsUrl);
            browser.click(filterList);
            browser.click("#balance-transfer-credit-card-id-87");
            var card = browser.getHTML("#CreditCard_GoTo_Provider_87");
            console.log(card);
            assert.notEqual(card, "undefined");
        });
    });
});
