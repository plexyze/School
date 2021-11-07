import classNames from 'classnames/bind';
import React, { FunctionComponent } from 'react';
import styles from './Icon.module.scss';
import { ICONS, ICON_COLORS } from './_constants';

const cn = classNames.bind(styles);
const CLASS_NAME = 'Icon';
export type IconColor = keyof typeof ICON_COLORS;
export type IconName = keyof typeof ICONS;
export type IconPropsType = {
    className?: string;
    iconName: IconName;
    color?: IconColor;
};

export const Icon: FunctionComponent<IconPropsType> = ({
    className,
    color = 'primary',
    iconName,
}) => {
    const SvgIcon: any = ICONS[iconName];
    return <SvgIcon className={cn(CLASS_NAME, ICON_COLORS[color], className)} />;
};

Icon.displayName = 'Icon';
