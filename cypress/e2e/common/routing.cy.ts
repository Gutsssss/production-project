import { selectByTestId } from 'cypress/helpers/selectByTestId';

describe('Роутинг', () => {
    describe('Пользователь авторизован', () => {
        beforeEach(() => {
            cy.login('testuser', '123');
        });
        it('Переход на страницу пользователя', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('ProfilePage')).should('exist');
        });
        it('Переход на главную страницу', () => {
            cy.visit('/');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Переход на страницу со статьями', () => {
            cy.visit('/articles');
            cy.get(selectByTestId('ArticlesPage')).should('exist');
        });
    });
    describe('Пользователь не авторизован', () => {
        it('Переход на страницу профиля', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Переход на несуществующий маршрут', () => {
            cy.visit('/asdasda');
            cy.get(selectByTestId('NotFoundPage')).should('exist');
        });
    });
});
