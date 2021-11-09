import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { TextPropsType, Text } from '../source/ui-kit/Text';
const args: TextPropsType = { text: 'Hi freinds', size: 'large' };
export default {
    title: 'Example/Text',
    background: '#EFEEEE',
    component: Text,
    argTypes: {},
    args,
} as Meta;

export const Simple: Story<TextPropsType> = (args) => <Text {...args} />;
