import { Lvl, LvlList } from 'components/LvlList/LvlList';
import React, { FunctionComponent } from 'react';
import { ButtonEvent } from 'ui-kit/Button';

const NumberLvls: Array<Lvl> = [
    { id: 'NumberId1', lvl: 1, date: new Date(), time: 150, errors: 2, color: 'normal' },
    { id: 'NumberId2', lvl: 2, date: new Date(), time: 150, errors: 2, color: 'lost' },
    { id: 'NumberId3', lvl: 3, date: new Date(), time: 150, errors: 2, color: 'win' },
    { id: 'NumberId4', lvl: 4, date: new Date(), time: 150, errors: 2, color: 'normal' },
];

export const NumbersPage: FunctionComponent = () => {
    const handleChooseLvl: (e: ButtonEvent) => void = ({ id }) => {
        alert(id);
    };
    return <LvlList lvls={NumberLvls} onChooseLvl={handleChooseLvl} />;
};
