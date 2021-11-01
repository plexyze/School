import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { TextPropsType, Text } from '../source/ui-kit';

export default {
    title: 'Example/Text',
    background: '#EFEEEE',
    component: Text,
    argTypes: {},
    args: {
        text: 'Hi freinds',
        color: 'yellow',
        decore: 'large',
    },
} as Meta;

export const Simple: Story<TextPropsType> = (args) => <Text {...args} />;
