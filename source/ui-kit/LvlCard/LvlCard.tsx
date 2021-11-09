import classNames from 'classnames/bind';
import React, { FunctionComponent } from 'react';
import { Button, ButtonEvent } from 'ui-kit/Button';
import { Card } from 'ui-kit/Card';
import { Text } from 'ui-kit/Text';
import styles from './LvlCard.module.scss';
import { CARD_COLORS } from './_constants';

const cn = classNames.bind(styles);
const CLASS_NAME = 'LvlCard';
export type LvlCardColors = keyof typeof CARD_COLORS;
export type LvlCardPropsType = {
    id: string;
    className?: string;
    lvl: number;
    date: Date;
    time: number;
    errors: number;
    color: LvlCardColors;
    onClick?: (e: ButtonEvent) => void;
};

export const LvlCard: FunctionComponent<LvlCardPropsType> = ({
    id,
    className,
    lvl,
    date,
    time,
    errors,
    color,
    onClick,
}) => {
    return (
        <Card className={cn(CLASS_NAME, CARD_COLORS[color], className)}>
            <div className={cn(`${CLASS_NAME}__text`)}>
                <Text
                    text={`Уровень ${lvl}`}
                    size="large"
                    className={cn(`${CLASS_NAME}__title-text`)}
                />
                <Text
                    text={`Время ${time}`}
                    size="small"
                    className={cn(`${CLASS_NAME}__normal-text`)}
                />
                <Text
                    text={`Ошибок ${errors}`}
                    size="small"
                    className={cn(`${CLASS_NAME}__normal-text`)}
                />
                <Text
                    text={`Дата ${date.toLocaleString()}`}
                    size="small"
                    className={cn(`${CLASS_NAME}__normal-text`)}
                />
            </div>

            <Button
                id={id}
                onClick={onClick}
                className={cn(`${CLASS_NAME}__iconButton`)}
                iconName="play"
                text="Играть"
            />
        </Card>
    );
};

LvlCard.displayName = 'LvlCard';
