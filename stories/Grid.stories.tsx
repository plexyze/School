import React, { ReactNode } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { GridPropsType, Grid } from '../source/ui-kit/Grid';
import { Card } from '../source/ui-kit/Card';

const args: GridPropsType = {
    count: 10,
    element: (index: number): ReactNode => {
        return <Card>{`Element ${index}`}</Card>;
    },
};

export default {
    title: 'Example/Grid',
    background: '#EFEEEE',
    component: Grid,
    argTypes: {},
    args,
} as Meta;

export const Simple: Story<GridPropsType> = (args) => <Grid {...args} />;
