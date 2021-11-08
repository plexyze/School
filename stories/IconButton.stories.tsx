import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { IconButton, IconButtonPropsType } from '../source/ui-kit';

export default {
    title: 'Example/IconButton',
    background: '#EFEEEE',
    component: IconButton,
    argTypes: {},
    args: {
        text: 'Button',
        color: 'primary',
        size: 'large',
    },
} as Meta;

export const Simple: Story<IconButtonPropsType> = (args) => <IconButton {...args} />;
