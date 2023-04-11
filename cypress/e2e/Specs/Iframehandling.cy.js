

describe('Iframe Testing', function() {
    it('Iframe', function() {
        cy.visit('https://the-internet.herokuapp.com/tinymce')
        cy.get('#mce_0_ifr').then(function($iframe) {
            let iframebody = $iframe.contents().find('body')
            cy.wrap(iframebody)
            .clear()
            .type('Hello World!')
            .type('{selectall}')
            cy.get('[aria-label="Italic"]').click()
        })
    })
})
