import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button, ButtonPropsType } from '../source/ui-kit/Button';

const args: ButtonPropsType = {
    iconName: 'home',
    text: 'Button',
    id: 'Button.onclick',
    onClick: ({ id }) => {
        alert(id);
    },
};

export default {
    title: 'Example/Button',
    background: '#EFEEEE',
    component: Button,
    argTypes: {},
    args,
} as Meta;

export const Simple: Story<ButtonPropsType> = (args) => <Button {...args} />;
