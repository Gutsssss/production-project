import type { Meta, StoryObj } from '@storybook/react';
import { http, HttpResponse } from 'msw';
import { RatingCard } from './RatingCard';
import { StateDecorator } from '@/shared/config/storybook/StateDecorator/StateDecorator';

const meta = {
    title: 'entities/RatingCard',
    component: RatingCard,
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
} satisfies Meta<typeof RatingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    parameters: {
        msw: {
            handlers: [
                http.get(`${__API__}/article-ratings?articleId=1&userId=1`, () => HttpResponse.json([
                    { articleId: '1', userId: '1' },
                ])),
            ],
        },
    },
    args: {
        title: 'Оцените статью',
    },

};

export const SelectedStars: Story = {
    parameters: {
        msw: {
            handlers: [
                http.get(`${__API__}/article-ratings?articleId=1&userId=1`, () => HttpResponse.json([
                    { articleId: '1', userId: '1' },
                ])),
            ],
        },
    },
    args: {
        title: 'Оцените статью',
        rate: 4,
    },

};
