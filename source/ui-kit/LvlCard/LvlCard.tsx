import classNames from 'classnames/bind';
import React, { FunctionComponent } from 'react';
import { Card, Text } from 'ui-kit';
import { IconButton } from 'ui-kit/IconButton';
import styles from './LvlCard.module.scss';

const cn = classNames.bind(styles);
const CLASS_NAME = 'LvlCard';

export type LvlCardPropsType = {
    className?: string;
};

export const LvlCard: FunctionComponent<LvlCardPropsType> = ({ className }) => {
    return (
        <Card className={cn(CLASS_NAME, className)}>
            <div className={cn(`${CLASS_NAME}__text`)}>
                <Text text="Уровень 1" size="large" className={cn(`${CLASS_NAME}__title-text`)} />
                <Text text="Время:0s" size="small" className={cn(`${CLASS_NAME}__normal-text`)} />
                <Text text="Ошибок:0" size="small" className={cn(`${CLASS_NAME}__normal-text`)} />
                <Text text="Дата:" size="small" className={cn(`${CLASS_NAME}__normal-text`)} />
            </div>

            <IconButton className={cn(`${CLASS_NAME}__iconButton`)} iconName="home" text="Играть" />
        </Card>
    );
};

LvlCard.displayName = 'LvlCard';
