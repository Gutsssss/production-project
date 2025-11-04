import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Tabs } from './Tabs';

export default {
    title: 'shared/Tabs',
    component: Tabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    tabs: [
        {
            value: 'text',
            content: 'text',
        },
        {
            value: 'text2',
            content: 'text2',
        },
        {
            value: 'text3',
            content: 'text3',
        },
    ],
    value: 'text2',
    onTabClick: action('onTabClick'),
};
