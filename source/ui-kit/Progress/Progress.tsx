import classNames from 'classnames/bind';
import React, { FunctionComponent } from 'react';
import styles from './Progress.module.scss';
import { PROGRESS_COLORS } from './_constants';

const cn = classNames.bind(styles);
const CLASS_NAME = 'Progress';
export type ProgressColor = keyof typeof PROGRESS_COLORS;

export type ProgressPropsType = {
    value: number;
    max: number;
    color?: ProgressColor;
};

export const Progress: FunctionComponent<ProgressPropsType> = ({ value, max, color = 'green' }) => {
    const carr = (value * 100) / max;
    return (
        <div className={cn(CLASS_NAME)}>
            <div
                className={cn(`${CLASS_NAME}__p1`, PROGRESS_COLORS[color])}
                style={{ width: `${carr}%` }}
            ></div>
        </div>
    );
};

Progress.displayName = 'Progress';
