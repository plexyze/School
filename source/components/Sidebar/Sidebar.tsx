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
            <Link className={cn(`${CLASS_NAME}_logo`)} to={HOME_PAGE_ROUTE}>
                <Icon iconName="school" />
                School
            </Link>

            <Link className={cn(`${CLASS_NAME}_icon`)} to={HOME_PAGE_ROUTE}>
                <Icon iconName="home" />
                Главная
            </Link>
            <Link className={cn(`${CLASS_NAME}_icon`)} to={MATH_PAGE_ROUTE}>
                <Icon iconName="math" />
                Математика
            </Link>
            <Link className={cn(`${CLASS_NAME}_icon`)} to={FIGURES_PAGE_ROUTE}>
                {' '}
                <Icon iconName="figurs" />
                Фигуры
            </Link>
            <Link className={cn(`${CLASS_NAME}_icon`)} to={NUMBERS_PAGE_ROUTE}>
                {' '}
                <Icon iconName="number" />
                Числа
            </Link>
            <Link className={cn(`${CLASS_NAME}_icon`)} to={ALPHABET_PAGE_ROUTE}>
                {' '}
                <Icon iconName="letters" />
                Алфавит
            </Link>
            <Link className={cn(`${CLASS_NAME}_icon`)} to={COLORS_PAGE_ROUTE}>
                {' '}
                <Icon iconName="colors" />
                Цвета
            </Link>
        </div>
    );
};
