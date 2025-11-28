import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Card } from './Card';
import { Text } from '../Text/Text';
import { Theme } from '@/shared/lib/context/ThemeContext';

export default {
    title: 'shared/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    children: <Text title="text" text="text text" />,
};

export const Dark = Template.bind({});
Dark.args = {
    children: <Text title="text" text="text text" />,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
