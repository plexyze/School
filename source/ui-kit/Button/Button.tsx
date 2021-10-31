import classNames from 'classnames/bind';
import React, { FunctionComponent } from 'react';
import styles from './Button.module.scss';

const cn = classNames.bind(styles);
const CLASS_NAME = 'Button';

export type ButtonPropsType = {
    text?: string;
};

export const Button: FunctionComponent<ButtonPropsType> = ({ text = '', children }) => {
    return (
        <button className={cn(CLASS_NAME)}>
            {text}
            {children}
        </button>
    );
};

Button.displayName = 'Button';
