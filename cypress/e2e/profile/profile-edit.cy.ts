let profileId = '';

describe('Изменение профиля пользователя', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`profile/${profileId}`);
        });
    });
    afterEach(() => {
        cy.resetProfile(profileId);
    });
    it('Заходит на страницу пользователя', () => {
        cy.getByTestId('ProfileCard.firstname').should('be.visible');
    });
    it('Редактирует и сохраняет', () => {
        const newName = 'new';
        const newLastname = 'lastname';
        cy.updateProfile(newName, newLastname);
        cy.getByTestId('ProfileCard.firstname').should('have.value', newName);
        cy.getByTestId('ProfileCard.lastname').should('have.value', newLastname);
    });
});
