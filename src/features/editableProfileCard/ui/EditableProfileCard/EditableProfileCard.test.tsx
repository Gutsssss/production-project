import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { componentRender } from 'shared/lib/tests/componentRender';
import { Profile } from 'entities/Profile';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { $api } from 'shared/api/api';
import { profileReducer } from '../../model/slices/ProfileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profile:Profile = {
    id: '1',
    first: 'admin',
    lastname: 'admin',
    age: 123,
    city: 'Tymen',
    country: Country.Belarus,
    currency: Currency.RUB,
    username: 'areuss',
};

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
        },
        user: {
            authData: { id: '1', username: 'admin' },
        },
    },
    asyncReducers: {
        profile: profileReducer,
    },
};

describe('EditableProfileCard', () => {
    test('Edit button', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'));
        expect(screen.getByTestId('EditableProfileCardHeader.CancelBtn')).toBeInTheDocument();
    });
    test('cancel button', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'));
        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
        await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));

        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user');
        await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'user');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelBtn'));
        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('admin');
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('admin');
    });
    test('Должна появится ошибка', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'));
        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveBtn'));
        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
    });
    test('Сохранение данных и отправка запроса', async () => {
        const mockedFnPut = jest.spyOn($api, 'put');
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'));

        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user');
        await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'user');
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveBtn'));
        expect(mockedFnPut).toHaveBeenCalled();
    });
});
