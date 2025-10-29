import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentItem } from './CommentItem';

export default {
    title: 'entities/CommentItem',
    component: CommentItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentItem>;

const Template: ComponentStory<typeof CommentItem> = (args) => <CommentItem {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comment: {
        text: '123',
        user: {
            id: '123',
            avatar: 'https://avatars.mds.yandex.net/i?id=0a8c5d2f9de0efafee6fd6ae7cb92be86eb82c20-9181478-images-thumbs&n=13',
            username: 'Саня',
        },
    },
};
export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
