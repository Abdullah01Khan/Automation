class SearchPage {

    navigate() {
        cy.visit('http://automationpractice.pl/index.php')
    }
    searchElement() {
        cy.get('#search_query_top').type('Women')
        cy.get('#searchbox> .btn').click()
        cy.get('#search_query_top').should('have.value','Women')
    }
    test() {
        cy.get("sf-with-ul").first().click()
    }
}
export default SearchPage