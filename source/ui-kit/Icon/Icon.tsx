import classNames from 'classnames/bind';
import React, { FunctionComponent } from 'react';
import styles from './Icon.module.scss';
import { ICONS } from './_constants';

const cn = classNames.bind(styles);
const CLASS_NAME = 'Icon';
export type IconName = keyof typeof ICONS;
export type IconPropsType = {
    iconName: IconName;
};

export const Icon: FunctionComponent<IconPropsType> = ({ iconName }) => {
    const SvgIcon: any = ICONS[iconName];
    return <SvgIcon className={cn(CLASS_NAME)} src={ICONS[iconName]} />;
};

Icon.displayName = 'Icon';
