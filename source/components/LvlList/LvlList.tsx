import React, { FunctionComponent } from 'react';
import classnames from 'classnames/bind';
import { LvlCard } from 'ui-kit/LvlCard';
import styles from './LvlList.module.scss';

const cn = classnames.bind(styles);
const CLASS_NAME = 'LvlList';

export const LvlList: FunctionComponent = () => {
    return (
        <div className={cn(CLASS_NAME)}>
            <LvlCard />
            <LvlCard />
            <LvlCard />
            <LvlCard />
            <LvlCard />
            <LvlCard />
            <LvlCard />
            <LvlCard />
            <LvlCard />
            <LvlCard />
            <LvlCard />
            <LvlCard />
            <LvlCard />
            <LvlCard />
            <LvlCard />
            <LvlCard />
        </div>
    );
};
