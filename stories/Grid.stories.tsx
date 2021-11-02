import React, { ReactNode } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { GridPropsType, Grid, Card } from '../source/ui-kit';

export default {
    title: 'Example/Grid',
    background: '#EFEEEE',
    component: Grid,
    argTypes: {},
    args: {
        count: 10,
        element: (index: number): ReactNode => {
            return <Card>{`Element ${index}`}</Card>;
        },
    },
} as Meta;

export const Simple: Story<GridPropsType> = (args) => <Grid {...args} />;
