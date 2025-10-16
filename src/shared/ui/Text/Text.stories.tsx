import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { TextTheme, Text } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const TitlePrimary = Template.bind({});
TitlePrimary.args = {
    title: 'title title title',
};

export const TitleDark = Template.bind({});
TitleDark.args = {
    title: 'title title title',
};
TitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TextPrimary = Template.bind({});
TextPrimary.args = {
    text: 'sub text sub text sub text',
};

export const TextDark = Template.bind({});
TextDark.args = {
    text: 'sub text sub text sub text',
};
TextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ErrorTitle = Template.bind({});
ErrorTitle.args = {
    title: 'sub text sub text sub text',
    theme: TextTheme.ERROR,
};

export const ErrorText = Template.bind({});
ErrorText.args = {
    text: 'sub text sub text sub text',
    theme: TextTheme.ERROR,
};
