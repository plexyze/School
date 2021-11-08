import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button, ButtonPropsType } from '../source/ui-kit';

export default {
    title: 'Example/Button',
    background: '#EFEEEE',
    component: Button,
    argTypes: {},
    args: {
        text: 'Button',
        color: 'primary',
        size: 'large',
    },
} as Meta;

export const Simple: Story<ButtonPropsType> = (args) => <Button {...args} />;
