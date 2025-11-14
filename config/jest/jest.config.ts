/*

 * For a detailed explanation regarding each configuration property and type check, visit:

 * https://jestjs.io/docs/configuration

 */

import path from 'path';

export default {

    clearMocks: true,

    testEnvironment: 'jsdom',

    coveragePathIgnorePatterns: [

        '\\\\node_modules\\\\',

    ],

    moduleFileExtensions: [

        'js',

        'jsx',

        'ts',

        'tsx',

        'json',

        'node',

    ],
    globals: {
        __IS_DEV__: true,
        __API__: '',
        __PROJECT__: 'jest',
    },
    moduleDirectories: [

        'node_modules',

    ],
    modulePaths: [
        '<rootDir>src',
    ],
    setupFilesAfterEnv: ['<rootDir>config/jest/setupJest.ts'],
    testMatch: [

        // Обнаружил разницу между МАК ОС и ВИНДОУС!!!

        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',

    ],
    moduleNameMapper: {
        '\\.s?css$': 'identity-obj-proxy',
        '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
    },

    rootDir: '../../',
    reporters: [
        'default',
        ['jest-html-reporters', {
            publicPath: '<rootDir>/reports',
            filename: 'report.html',
            openReport: true,
            inlineSource: true,
        }],
    ],
};
