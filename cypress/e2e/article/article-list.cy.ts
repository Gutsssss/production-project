describe('Переходим на страницу статей', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then(() => {
            cy.visit('/articles');
        });
    });
    it('Загрузка статей', () => {
        cy.getByTestId('ArticleDetails').should('exist');
    });
});
