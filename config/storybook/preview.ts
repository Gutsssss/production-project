// .storybook/preview.js

import { initialize, mswLoader } from 'msw-storybook-addon';

import StyleDecorator from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';

import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { Theme } from '../../src/shared/lib/context/ThemeContext';

// Initialize MSW

initialize({

    onUnhandledRequest: 'bypass',

});

const decorators = [

    StyleDecorator,

    ThemeDecorator(Theme.LIGHT),

    RouterDecorator,

];

const preview = {

    parameters: {

        controls: {

            matchers: {

                color: /(background|color)$/i,

                date: /Date$/i,

            },

        },
    },

};

const loaders = [mswLoader];

export default { preview, loaders, decorators };
