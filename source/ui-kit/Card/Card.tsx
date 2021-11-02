import classNames from 'classnames/bind';
import React, { FunctionComponent } from 'react';
import styles from './Card.module.scss';

const cn = classNames.bind(styles);
const CLASS_NAME = 'Card';

export type CardPropsType = {
    text: string;
};

export const Card: FunctionComponent<CardPropsType> = ({ text = '', children }) => {
    return (
        <div className={cn(CLASS_NAME)}>
            {text}
            {children}
        </div>
    );
};

Card.displayName = 'Card';
