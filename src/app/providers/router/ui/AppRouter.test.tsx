import { screen, waitFor } from '@testing-library/react';
import { componentRender } from '@/shared/lib/tests/componentRender';
import { AppRouter } from './AppRouter';
import { getRouterAbout, getRouterAdmin } from '@/shared/const/router';
import { UserRole } from '@/entities/User';

describe('AppRouter', () => {
    test('Страница отрисовывается', async () => {
        componentRender(<AppRouter />, {
            route: getRouterAbout(),
        });
        screen.debug();
        await waitFor(() => expect(screen.getByTestId('AboutPage')).toBeInTheDocument());
        screen.debug();
    });
    test('Пользователь передал неправильный роут', async () => {
        componentRender(<AppRouter />, {
            route: '/sdasdasd',
        });
        await waitFor(() => expect(screen.getByTestId('NotFoundPage')).toBeInTheDocument());
    });
    test('Пользователь имеет доступ к странице', async () => {
        componentRender(<AppRouter />, {
            route: getRouterAdmin(),
            initialState: {
                user: { authData: { roles: [UserRole.ADMIN] } },
            },
        });
        await waitFor(() => expect(screen.getByTestId('AdminPanelPage')).toBeInTheDocument());
    });
    test('У пользователя отсутствуют права на доступ к странице', async () => {
        componentRender(<AppRouter />, {
            route: getRouterAdmin(),
            initialState: {
                user: { authData: { roles: [UserRole.USER] } },
            },
        });
        await waitFor(() => expect(screen.getByTestId('ForbiddenPage')).toBeInTheDocument());
    });
});
