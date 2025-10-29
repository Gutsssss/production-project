import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentList } from './CommentList';

export default {
    title: 'entities/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comments: [{
        text: '123',
        user: {
            id: '123',
            avatar: 'https://avatars.mds.yandex.net/i?id=0a8c5d2f9de0efafee6fd6ae7cb92be86eb82c20-9181478-images-thumbs&n=13',
            username: 'Саня',
        },
    },
    {
        text: 'hello',
        user: {
            id: '123',
            avatar: 'https://avatars.mds.yandex.net/i?id=0a8c5d2f9de0efafee6fd6ae7cb92be86eb82c20-9181478-images-thumbs&n=13',
            username: 'Не Саня',
        },
    }],
};
export const Loading = Template.bind({});
Loading.args = {
    comments: [{}, {}],
    isLoading: true,
};
