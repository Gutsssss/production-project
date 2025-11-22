import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StateDecorator } from '@/shared/config/storybook/StateDecorator/StateDecorator';
import { LoginModal } from './LoginModal';

export default {
    title: 'feaqtures/LoginModal',
    component: LoginModal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof LoginModal> = (args) => <LoginModal {...args} />;

export const Light = Template.bind({});
Light.args = {
    isOpen: true,
};
Light.decorators = [StateDecorator({
    loginForm: { username: '123', password: '123' },
})];
export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StateDecorator({
    loginForm: { username: '123', password: '123' },
})];
