import classNames from 'classnames/bind';
import React, { FunctionComponent, MouseEvent } from 'react';
import { Icon, IconName } from 'ui-kit/Icon';
import { Text } from 'ui-kit/Text';
import styles from './Button.module.scss';
import { BUTTON_COLORS } from './_constants';

const cn = classNames.bind(styles);
const CLASS_NAME = 'Button';
export type ButtonColor = keyof typeof BUTTON_COLORS;

export type ButtonEvent = {
    id?: string;
    event: MouseEvent<HTMLButtonElement>;
};

export type ButtonPropsType = {
    className?: string;
    iconName: IconName;
    text: string;
    color?: ButtonColor;
    id?: string;
    onClick?: (e: ButtonEvent) => void;
};

export const Button: FunctionComponent<ButtonPropsType> = ({
    className,
    iconName,
    text,
    color,
    id,
    onClick,
}) => {
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        onClick && onClick({ id: event.currentTarget.id, event });
    };

    let buttonColor = BUTTON_COLORS['primary'];
    if (color && color in BUTTON_COLORS) {
        buttonColor = BUTTON_COLORS[color];
    }

    return (
        <button
            id={id}
            onClick={handleClick}
            className={cn(CLASS_NAME, buttonColor.style, className)}
        >
            <Icon iconName={iconName} />
            <Text text={text} className={cn(`${CLASS_NAME}_text`)} color={buttonColor.textColor} />
        </button>
    );
};

Button.displayName = 'Button';
