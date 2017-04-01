var assert = require('assert');

describe('Credit cards journey', function() {
    var pegCreditCardsUrl = "http://peg.money.comparethemarket.com/credit-cards/";
    var expectedTitle = "Compare Our Best Credit Card Deals | CompareTheMarket";
    var filterList = ".basic-filter-list";

    it('should have the right title ', function () {
        browser.url(pegCreditCardsUrl);
        var actualTitle = browser.getTitle();
        assert.equal(actualTitle, expectedTitle);
    });

    describe('credit cards overview', function() {
        it('should have the right title ', function () {
            browser.click(filterList);
            var a = browser.getText("*=Pay 0% on your balance transfers");
            console.log(a);
            browser.debug();
        });
    });
});
