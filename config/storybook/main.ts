import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
    stories: [
        '../../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        // '@storybook/addon-links',
        // '@storybook/addon-essentials',
        // '@storybook/addon-interactions',
        'msw-storybook-addon',
        // '@storybook/addon-themes',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    staticDirs: ['../../public'],
};
export default config;
