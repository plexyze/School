import classNames from 'classnames/bind';
import React, { FunctionComponent } from 'react';
import styles from './Card.module.scss';

const cn = classNames.bind(styles);
const CLASS_NAME = 'Card';

export type CardPropsType = {
    text: string;
};

export const Card: FunctionComponent<CardPropsType> = ({ children }) => {
    return <span className={cn(CLASS_NAME)}>{children}</span>;
};

Card.displayName = 'Card';
