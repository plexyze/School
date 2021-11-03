import {
    ALPHABET_PAGE_ROUTE,
    COLORS_PAGE_ROUTE,
    FIGURES_PAGE_ROUTE,
    HOME_PAGE_ROUTE,
    MATH_PAGE_ROUTE,
    NUMBERS_PAGE_ROUTE,
} from 'constants/routes';
import React, { FunctionComponent } from 'react';
import classnames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Icon } from 'ui-kit';
import styles from './Sidebar.module.scss';

const cn = classnames.bind(styles);
const CLASS_NAME = 'Sidebar';

export const Sidebar: FunctionComponent = () => {
    return (
        <div className={cn(CLASS_NAME)}>
            <Link to={HOME_PAGE_ROUTE}>
                <Icon iconName="home" />
            </Link>
            <Link to={MATH_PAGE_ROUTE}>
                <Icon iconName="math" />
            </Link>
            <Link to={FIGURES_PAGE_ROUTE}>
                {' '}
                <Icon iconName="figurs" />
            </Link>
            <Link to={NUMBERS_PAGE_ROUTE}>
                {' '}
                <Icon iconName="number" />
            </Link>
            <Link to={ALPHABET_PAGE_ROUTE}>
                {' '}
                <Icon iconName="letters" />
            </Link>
            <Link to={COLORS_PAGE_ROUTE}>
                {' '}
                <Icon iconName="colors" />
            </Link>
        </div>
    );
};
