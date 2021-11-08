import classNames from 'classnames/bind';
import React, { FunctionComponent } from 'react';
import { Button, Icon, IconName, Text } from 'ui-kit';
import styles from './IconButton.module.scss';

const cn = classNames.bind(styles);
const CLASS_NAME = 'IconButton';

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
