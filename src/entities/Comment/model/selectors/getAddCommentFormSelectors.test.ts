import { StateSchema } from 'app/providers/StateProvider';
import { getAddCommentFormError, getAddCommentFormText } from './getAddCommentFormSelectors';

describe('getAddCommentFormSelectors.test', () => {
    test('get text', () => {
        const state:DeepPartial<StateSchema> = {
            addCommentForm: {
                text: '123',
            },
        };
        expect(getAddCommentFormText(state as StateSchema)).toEqual('123');
    });
    test('text with no data', () => {
        const state:DeepPartial<StateSchema> = {

            addCommentForm: {
            },
        };
        expect(getAddCommentFormText(state as StateSchema)).toEqual('');
    });
    test('get error', () => {
        const state:DeepPartial<StateSchema> = {
            addCommentForm: {
                error: 'error',
            },
        };
        expect(getAddCommentFormError(state as StateSchema)).toEqual('error');
    });
    test('error with no data', () => {
        const state:DeepPartial<StateSchema> = {

            addCommentForm: {
            },
        };
        expect(getAddCommentFormError(state as StateSchema)).toEqual(undefined);
    });
});
