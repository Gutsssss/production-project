import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileCard } from './ProfileCard';
import avatar from '../../../../shared/assets/icons/storybook.jpg';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    data: {
        username: 'admin',
        age: 22,
        country: Country.German,
        lastname: 'ulbi tv',
        first: 'asd',
        city: 'asf',
        currency: Currency.USD,
        avatar,
    },
};
export const Error = Template.bind({});
Error.args = {
    error: {},
};
export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
