import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { CardPropsType, Card } from '../source/ui-kit';

export default {
    title: 'Example/Card',
    background: '#EFEEEE',
    component: Card,
    argTypes: {},
    args: {},
} as Meta;

export const Simple: Story<CardPropsType> = (args) => <Card {...args} />;
