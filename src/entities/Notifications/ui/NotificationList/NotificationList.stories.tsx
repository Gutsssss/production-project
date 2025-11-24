// NotificationList.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { http, HttpResponse } from 'msw';
import { NotificationList } from './NotificationList';
import { StateDecorator } from '@/shared/config/storybook/StateDecorator/StateDecorator';

const meta = {
    title: 'entities/NotificationList',
    component: NotificationList,
    decorators: [
        StateDecorator({
            user: {
                authData: {
                    id: '1',
                    username: 'testuser',
                },
            },
        }),
    ],
} satisfies Meta<typeof NotificationList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    parameters: {
        msw: {
            handlers: [
                http.get(`${__API__}/notifications`, () => HttpResponse.json([
                    {
                        id: '1',
                        title: 'Test Notification 1',
                        description: 'This is a test notification',
                        userId: '1',
                    },
                    {
                        id: '2',
                        title: 'Test Notification 2',
                        description: 'Another test notification',
                        userId: '1',
                    },
                ])),
            ],
        },
    },
    args: {},

};
