import React, { FunctionComponent } from 'react';
import classnames from 'classnames/bind';
import { Header } from 'components/Header';
import { Footer } from 'components/Footor';
import { Sidebar } from 'components/Sidebar';
import styles from './AppLayout.module.scss';

const cn = classnames.bind(styles);
const CLASS_NAME = 'AppLayout';

const AppLayout: FunctionComponent = ({ children }) => {
    return (
        <div className={cn(CLASS_NAME)}>
            <Sidebar />
            <div className={cn(`${CLASS_NAME}__right`)}>
                <Header />
                <div className={cn(`${CLASS_NAME}__content`)}>{children}</div>
                <Footer />
            </div>
        </div>
    );
};

export { AppLayout };
