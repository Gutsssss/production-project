import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { StateDecorator } from '@/shared/config/storybook/StateDecorator/StateDecorator';
import avatar from '@/shared/assets/icons/storybook.jpg';
import { ProfilePage } from '../ui/ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StateDecorator({
    profile: {
        form: {
            first: 'Матвей',
            lastname: 'Мастерских',
            age: 24,
            currency: Currency.USD,
            country: Country.German,
            city: 'Tymen',
            username: 'Areuss',
            avatar,
        },
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StateDecorator({
    profile: {
        form: {
            first: 'Матвей',
            lastname: 'Мастерских',
            age: 24,
            currency: Currency.USD,
            country: Country.German,
            city: 'Tymen',
            username: 'Areuss',
            avatar,
        },
    },
})];
