import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex } from './Flex';

export default {
    title: 'shared/Flex',
    component: Flex,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
    children: (
        <>
            <div>child</div>
            <div>child</div>
            <div>child</div>
            <div>child</div>
        </>
    ),
    direction: 'row',
    gap: 16,
};

export const Column = Template.bind({});
Column.args = {
    children: (
        <>
            <div>child</div>
            <div>child</div>
            <div>child</div>
            <div>child</div>
        </>
    ),
    direction: 'column',
    gap: 8,
};
