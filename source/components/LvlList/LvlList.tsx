import React, { FunctionComponent } from 'react';
import classnames from 'classnames/bind';
import { ButtonEvent } from 'ui-kit/Button';
import { LvlCardColors, LvlCard } from 'ui-kit/LvlCard';
import styles from './LvlList.module.scss';

const cn = classnames.bind(styles);
const CLASS_NAME = 'LvlList';

export type Lvl = {
    id: string;
    lvl: number;
    date: Date;
    time: number;
    errors: number;
    color: LvlCardColors;
};

type PropsType = {
    lvls: Array<Lvl>;
    onChooseLvl?: (e: ButtonEvent) => void;
};

export const LvlList: FunctionComponent<PropsType> = ({ lvls, onChooseLvl }) => {
    return (
        <div className={cn(CLASS_NAME)}>
            {lvls.map(({ id, lvl, date, time, errors, color }) => {
                return (
                    <LvlCard
                        id={id}
                        lvl={lvl}
                        date={date}
                        time={time}
                        errors={errors}
                        onClick={onChooseLvl}
                        color={color}
                    />
                );
            })}
        </div>
    );
};
