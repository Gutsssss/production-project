import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from '../../types/editableProfileCardSchema';
import { validateProfileData } from './validateProfileData';

const data = {
    username: 'admin',
    age: 22,
    country: Country.German,
    lastname: 'ulbi tv',
    first: 'asd',
    city: 'asf',
    currency: Currency.USD,
};
describe('validateProfileData.test', () => {
    test('success fetch data', async () => {
        const result = validateProfileData(data);
        expect(result).toBe([]);
    });
    test('error fetch data', async () => {
        const result = validateProfileData({ ...data, first: '', lastname: '' });
        expect(result).toBe([ValidateProfileError.SERVER_ERROR]);
    });
});
