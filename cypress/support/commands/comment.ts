export const createComment = (text:string) => {
    cy.getByTestId('AddComment.Input').type(text);
    cy.getByTestId('AddComment.Button').click();
};

declare global {
  namespace Cypress {
    interface Chainable {
      createComment(text:string):Chainable<void>,
    }
  }
}
