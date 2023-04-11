import SearchPage from "../PageObject/Search.page.cy";

describe("search item", function() {

    afterEach("Login", function() {
        cy.test()
    })

    it("Search", function () {
        const se = new SearchPage();

        se.navigate();
        se.searchElement();
    })

})