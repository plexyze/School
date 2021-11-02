import classNames from 'classnames/bind';
import React, { FunctionComponent } from 'react';
import styles from './Button.module.scss';
import { BUTTON_COLORS, BUTTON_SIZES } from './_constants';

const cn = classNames.bind(styles);
const CLASS_NAME = 'Button';
export type ButtonColor = keyof typeof BUTTON_COLORS;
export type ButtonSizes = keyof typeof BUTTON_SIZES;

export type ButtonPropsType = {
    text?: string;
    color: ButtonColor;
    size: ButtonSizes;
};

export const Button: FunctionComponent<ButtonPropsType> = ({
    text = '',
    color,
    size,
    children,
}) => {
    return (
        <button
            type="reset"
            value={text}
            className={cn(CLASS_NAME, BUTTON_COLORS[color], BUTTON_SIZES[size])}
        >
            {text}
            {children}
        </button>
    );
};

Button.displayName = 'Button';
