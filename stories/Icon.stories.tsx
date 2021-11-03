import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { IconPropsType, Icon } from '../source/ui-kit';

export default {
    title: 'Example/Icon',
    background: '#EFEEEE',
    component: Icon,
    argTypes: {},
    args: {
        iconName: 'school',
    },
} as Meta;

export const Simple: Story<IconPropsType> = (args) => <Icon {...args} />;
