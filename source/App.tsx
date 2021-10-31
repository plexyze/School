import React, { FunctionComponent } from 'react';
import classnames from 'classnames/bind';
import { BrowserRouter as Router } from 'react-router-dom';
import { Button } from 'ui-kit';
import styles from './App.module.scss';

const cn = classnames.bind(styles);
const CLASS_NAME = 'App';

const App: FunctionComponent = () => {
    return (
        <Router>
            <Button text="Button" />
            <div className={cn(CLASS_NAME)}>Hello world!</div>
        </Router>
    );
};

export { App };
