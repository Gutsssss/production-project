let currentArticleId = '';
describe('Пользователь заходит на страницу статьи', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((article) => {
            currentArticleId = article.id;
            cy.visit(`articles/${article.id}`);
        });
    });
    afterEach(() => {
        cy.removeArticle(currentArticleId);
    });
    it('И видит содержимое статьи', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
    });
    it('И оставляет комментарий', () => {
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.createComment('text');
        cy.getByTestId('CommentCard.Content').should('have.length', 1);
    });
});
