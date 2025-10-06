import { classNames } from './classNames';

describe('classNames', () => {
    test('simple test', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('test with additional class', () => {
        const expectstr = 'someClass class1 class2';
        expect(classNames(
            'someClass',
            {},
            ['class1', 'class2'],
        )).toBe(expectstr);
    });
    test('test with mods', () => {
        const expectstr = 'someClass class1 disabled clearable';
        expect(classNames(
            'someClass',
            { disabled: true, clearable: true },
            ['class1'],
        )).toBe(expectstr);
    });
    test('test with false mods', () => {
        const expectstr = 'someClass disabled';
        expect(classNames(
            'someClass',
            {
                disabled: true,
                clearable: false,
            },
            [],
        )).toBe(expectstr);
    });
    test('test with undefined mods', () => {
        const expectstr = 'someClass disabled';
        expect(classNames(
            'someClass',
            { disabled: true, clearable: undefined },
            [],
        )).toBe(expectstr);
    });
});
