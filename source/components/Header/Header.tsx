import React, { FunctionComponent } from 'react';
import classnames from 'classnames/bind';
import { Icon } from 'ui-kit';
import styles from './Header.module.scss';

const cn = classnames.bind(styles);
const CLASS_NAME = 'Header';

const Header: FunctionComponent = () => {
    return (
        <header className={cn(CLASS_NAME)}>
            <Icon iconName="school" />
        </header>
    );
};

export { Header };
