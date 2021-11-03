import {
    ADDITION_PAGE_ROUTE,
    DIVISION_PAGE_ROUTE,
    MULTIPLICATION_PAGE_ROUTE,
    SUBTRACTION_PAGE_ROUTE,
} from 'constants/routes';
import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import './Default.module.scss';
import classnames from 'classnames/bind';
import styles from './Default.module.scss';
const cn = classnames.bind(styles);
const CLASS_NAME = 'Default';

export const DefaultPage: FunctionComponent = () => {
    return (
        <div className={cn(`${CLASS_NAME}__p`)}>
            <button className={cn(CLASS_NAME)}>
                <Link to={ADDITION_PAGE_ROUTE}>ADDITION</Link>
                <Link to={SUBTRACTION_PAGE_ROUTE}>SUBTRACTION</Link>
                <Link to={MULTIPLICATION_PAGE_ROUTE}>MULTIPLICATION</Link>
                <Link to={DIVISION_PAGE_ROUTE}>DIVISION</Link>
            </button>
        </div>
    );
};
