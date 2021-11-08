import classNames from 'classnames/bind';
import React, { FunctionComponent } from 'react';
import styles from './Button.module.scss';
import { BUTTON_COLORS } from './_constants';

const cn = classNames.bind(styles);
const CLASS_NAME = 'Button';
export type ButtonColor = keyof typeof BUTTON_COLORS;

export type ButtonPropsType = {
    className?: string;
    text?: string;
    color?: ButtonColor;
};

export const Button: FunctionComponent<ButtonPropsType> = ({
    className,
    text = '',
    color = 'primary',
    children,
}) => {
    return (
        <button
            type="reset"
            value={text}
            className={cn(CLASS_NAME, BUTTON_COLORS[color], className)}
        >
            {text}
            {children}
        </button>
    );
};

Button.displayName = 'Button';
