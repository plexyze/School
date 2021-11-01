import classNames from 'classnames/bind';
import React, { FunctionComponent } from 'react';
import styles from './Text.module.scss';
import { TEXT_COLORS, TEXT_DECORS, TEXT_SIZES } from './_constants';

const cn = classNames.bind(styles);
const CLASS_NAME = 'Text';

export type TextColor = keyof typeof TEXT_COLORS;
export type TextSizes = keyof typeof TEXT_SIZES;
export type TextDecor = keyof typeof TEXT_DECORS;

export type TextPropsType = {
    text: string;
    color: TextColor;
    size: TextSizes;
    decor: TextDecor;
};

export const Text: FunctionComponent<TextPropsType> = ({ text, color, size, decor }) => {
    return (
        <span className={cn(CLASS_NAME, TEXT_COLORS[color], TEXT_SIZES[size], TEXT_DECORS[decor])}>
            {text}
        </span>
    );
};

Text.displayName = 'Text';
