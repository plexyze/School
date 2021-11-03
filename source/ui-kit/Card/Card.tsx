import classNames from 'classnames/bind';
import React, { FunctionComponent } from 'react';
import styles from './Card.module.scss';

const cn = classNames.bind(styles);
const CLASS_NAME = 'Card';

export type CardPropsType = {
    className?: string;
};

export const Card: FunctionComponent<CardPropsType> = ({ className, children }) => {
    return <span className={cn(CLASS_NAME, className)}>{children}</span>;
};

Card.displayName = 'Card';
