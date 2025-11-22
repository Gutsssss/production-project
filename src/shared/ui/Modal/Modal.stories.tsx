import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Quo eligendi aperiam deserunt est ullam ut vel quam impedit. Excepturi, cum.',
    isOpen: true,
};
export const Dark = Template.bind({});
Dark.args = {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Quo eligendi aperiam deserunt est ullam ut vel quam impedit. Excepturi, cum.',
    isOpen: true,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
