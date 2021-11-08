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
import { Button } from 'ui-kit/Button';
import styles from './Sidebar.module.scss';

const cn = classnames.bind(styles);
const CLASS_NAME = 'Sidebar';

export const Sidebar: FunctionComponent = () => {
    return (
        <div className={cn(CLASS_NAME)}>
            <Link to={HOME_PAGE_ROUTE}>
                <Button iconName="home" text="Главная" />
            </Link>
            <Link to={MATH_PAGE_ROUTE}>
                <Button iconName="math" text="Математика" />
            </Link>
            <Link to={FIGURES_PAGE_ROUTE}>
                <Button iconName="figurs" text="Фигуры" />
            </Link>
            <Link to={NUMBERS_PAGE_ROUTE}>
                <Button iconName="numbers" text="Числа" />
            </Link>
            <Link to={ALPHABET_PAGE_ROUTE}>
                <Button iconName="alphabet" text="Буквы" />
            </Link>
            <Link to={COLORS_PAGE_ROUTE}>
                <Button iconName="colors" text="Цвета" />
            </Link>
        </div>
    );
};
