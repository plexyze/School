import classNames from 'classnames/bind';
import React, { FunctionComponent, ReactNode } from 'react';
import styles from './Grid.module.scss';

const cn = classNames.bind(styles);
const CLASS_NAME = 'Grid';

export type GridPropsType = {
    className?: string;
    count: number;
    element: (index: number) => ReactNode;
    isList?: boolean;
};

const range = (start: number, end: number): Array<number> => {
    const out = [];
    for (let i = start; i < end; i++) {
        out.push(i);
    }
    return out;
};

export const Grid: FunctionComponent<GridPropsType> = ({ className, count, element, isList }) => {
    const arr = range(0, count);
    return (
        <div className={cn(CLASS_NAME, isList ? '-isList' : '', className)}>{arr.map(element)}</div>
    );
};

Grid.displayName = 'Grid';
