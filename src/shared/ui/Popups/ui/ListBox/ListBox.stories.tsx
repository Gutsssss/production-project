import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Listbox } from './ListBox';
import { Theme } from '@/shared/lib/context/ThemeContext';

export default {
    title: 'shared/Listbox',
    component: Listbox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => <div style={{ padding: '100px' }}><Story /></div>,
    ],
} as ComponentMeta<typeof Listbox>;

const Template: ComponentStory<typeof Listbox> = (args) => <Listbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Введите имя',
    defaultValue: 'Привет',
    options: [
        { value: '123', content: 'asd' },
        { value: '124', content: 'asd1' },
        { value: '125', content: 'asd2' },
    ],
};
Primary.decorators = [ThemeDecorator(Theme.GREEN)];

export const DirectionTop = Template.bind({});
DirectionTop.args = {
    label: 'Введите имя',
    defaultValue: 'Привет',
    direction: 'bottom left',
    options: [
        { value: '123', content: 'asd' },
        { value: '124', content: 'asd1' },
        { value: '125', content: 'asd2' },
    ],
};
DirectionTop.decorators = [ThemeDecorator(Theme.GREEN)];
