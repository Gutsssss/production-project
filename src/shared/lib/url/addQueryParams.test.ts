import { getQueryParams } from './addQueryParams';

describe('queryParams', () => {
    test('with 1 arg', () => {
        const params = getQueryParams({
            test: 'value',
        });
        expect(params).toBe('?test=value');
    });
    test('with 2 arg', () => {
        const params = getQueryParams({
            test: 'value',
            test2: 'value2',
        });
        expect(params).toBe('?test=value&test2=value2');
    });
    test('with undefined arg', () => {
        const params = getQueryParams({
            test: 'value',
            test2: undefined,
        });
        expect(params).toBe('?test=value');
    });
});
