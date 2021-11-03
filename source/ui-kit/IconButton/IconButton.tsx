import classNames from 'classnames/bind';
import React, { FunctionComponent } from 'react';
import { Button, Icon, IconName, Text } from 'ui-kit';
import styles from './IconButton.module.scss';
import { BUTTON_COLORS, BUTTON_SIZES } from './_constants';

const cn = classNames.bind(styles);
const CLASS_NAME = 'IconButton';
export type ButtonColor = keyof typeof BUTTON_COLORS;
export type ButtonSizes = keyof typeof BUTTON_SIZES;

export type IconButtonPropsType = {
    iconName: IconName;
    className?: string;
    text: string;
};

export const IconButton: FunctionComponent<IconButtonPropsType> = ({
    iconName,
    className,
    text,
}) => {
    return (
        <Button className={cn(CLASS_NAME, className)}>
            <Icon iconName={iconName} />
            <Text text={text} className={cn(`${CLASS_NAME}_text`)} />
        </Button>
    );
};

IconButton.displayName = 'IconButton';
