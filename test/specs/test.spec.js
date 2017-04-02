var assert = require("assert");
var chai = require("chai");
var expect = chai.expect;
// var chaiHttp = require("chai-http");
// chai.use(chaiHttp);

describe("Credit cards", function() {
    var pegCreditCardsUrl = "http://peg.money.comparethemarket.com/credit-cards/";
    var expectedTitle = "Compare Our Best Credit Card Deals | CompareTheMarket";
    var filterList = ".basic-filter-list";

    // it("should have the right title ", function () {
    //     browser.url(pegCreditCardsUrl);
    //     var actualTitle = browser.getTitle();
    //     assert.equal(actualTitle, expectedTitle);
    // });

    describe("From the overview page", function() {
        // it("can click on a 0% balance transfer card and be taken to its page", function () {
        //     browser.url(pegCreditCardsUrl);
        //     browser.click("#balance-transfer-credit-card-id-87");
        //     var card = $("input[id=CreditCard_GoTo_Provider_87]");
        //     expect(card).to.exist;
        // });

        it("can click on a 0% balance transfer card and go through to the third party", function () {
            browser.url(pegCreditCardsUrl);
            browser.click('#balance-transfer-credit-card-id-87');
            browser.click("input#CreditCard_GoTo_Provider_87");
            browser.waitForVisible(".apply-with-no-rewards-action", 10000);
            browser.click(".apply-with-no-rewards-action");
            expect(browser.status().state).to.eql("success");
        });

        // it("can click on a ... card and be taken to its page", function () {
        //     browser.url(pegCreditCardsUrl);
        //     browser.click(filterList);
        //     browser.click("#balance-transfer-credit-card-id-93");
        //     var card = browser.getHTML("#CreditCard_GoTo_Provider_93");
        //     assert.notEqual(card, "undefined");
        // });
    });
});
