import React, { FunctionComponent } from 'react';
import classnames from 'classnames/bind';
import styles from './Footer.module.scss';

const cn = classnames.bind(styles);
const CLASS_NAME = 'Footer';

export const Footer: FunctionComponent = () => {
    return <footer className={cn(CLASS_NAME)}>Footer</footer>;
};
