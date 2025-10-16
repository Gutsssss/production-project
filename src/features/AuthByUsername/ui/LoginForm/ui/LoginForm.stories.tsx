import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StateDecorator } from 'shared/config/storybook/StateDecorator/StateDecorator';
import { LoginForm } from './LoginForm';

export default {
    title: 'feaqtures/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Light = Template.bind({});
Light.args = {
};
Light.decorators = [StateDecorator({
    loginForm: { username: '123', password: '123' },
})];
export const WithError = Template.bind({});
WithError.args = {
};
WithError.decorators = [StateDecorator({
    loginForm: { username: '123', password: '123', error: 'error' },
})];
export const WithLoading = Template.bind({});
WithLoading.args = {
};
WithLoading.decorators = [StateDecorator({
    loginForm: { isLoading: true },
})];
