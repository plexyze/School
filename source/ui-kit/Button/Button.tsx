import classNames from 'classnames/bind';
import React, { FunctionComponent } from 'react';
import { Text } from 'ui-kit';
import styles from './Button.module.scss';
import { BUTTON_COLORS, BUTTON_SIZES } from './_constants';

const cn = classNames.bind(styles);
const CLASS_NAME = 'Button';
export type ButtonColor = keyof typeof BUTTON_COLORS;
export type ButtonSizes = keyof typeof BUTTON_SIZES;

export type ButtonPropsType = {
    className?: string;
    text?: string;
    color?: ButtonColor;
    size?: ButtonSizes;
};

export const Button: FunctionComponent<ButtonPropsType> = ({
    className,
    text = '',
    color = 'primary',
    size = 'small',
}) => {
    return (
        <button
            type="reset"
            value={text}
            className={cn(CLASS_NAME, BUTTON_COLORS[color], BUTTON_SIZES[size], className)}
        >
            <Text text="кнопка" />
        </button>
    );
};

Button.displayName = 'Button';
