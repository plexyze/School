import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Progress, ProgressPropsType } from '../source/ui-kit/Progress';

const args: ProgressPropsType = { value: 50, max: 100 };
export default {
    title: 'Example/Progress',
    background: '#EFEEEE',
    component: Progress,
    argTypes: {},
    args,
} as Meta;

export const Simple: Story<ProgressPropsType> = (args) => <Progress {...args} />;
