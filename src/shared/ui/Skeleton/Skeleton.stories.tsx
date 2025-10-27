import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Skeleton } from './Skeleton';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Base = Template.bind({});
Base.args = {
    width: '90%',
    height: 50,
};
export const Circle = Template.bind({});
Circle.args = {
    width: 100,
    height: 100,
    border: '50%',
};

export const BaseDark = Template.bind({});
BaseDark.args = {
    width: '90%',
    height: 50,
};
BaseDark.decorators = [ThemeDecorator(Theme.DARK)];
export const CircleDark = Template.bind({});
CircleDark.args = {
    width: 100,
    height: 100,
    border: '50%',
};
CircleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BaseGreen = Template.bind({});
BaseGreen.args = {
    width: '90%',
    height: 50,
};
BaseGreen.decorators = [ThemeDecorator(Theme.GREEN)];
export const CircleGreen = Template.bind({});
CircleGreen.args = {
    width: 100,
    height: 100,
    border: '50%',
};
CircleGreen.decorators = [ThemeDecorator(Theme.GREEN)];
