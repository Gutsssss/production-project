import { StateSchema } from '@/app/providers/StateProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
    test('get data', () => {
        const data = {
            username: 'admin',
            age: 22,
            country: Country.German,
            lastname: 'ulbi tv',
            first: 'asd',
            city: 'asf',
            currency: Currency.USD,
        };
        const state:DeepPartial<StateSchema> = {

            profile: {
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('with no data', () => {
        const state:DeepPartial<StateSchema> = {

            profile: {

            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
