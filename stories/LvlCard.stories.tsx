import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { LvlCardPropsType, LvlCard } from '../source/ui-kit';

export default {
    title: 'Example/LvlCard',
    background: '#EFEEEE',
    component: LvlCard,
    argTypes: {},
    args: {},
} as Meta;

export const Simple: Story<LvlCardPropsType> = () => <LvlCard>Карточка</LvlCard>;
