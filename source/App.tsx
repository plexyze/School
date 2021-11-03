import {
    ALPHABET_PAGE_ROUTE,
    COLORS_PAGE_ROUTE,
    FIGURES_PAGE_ROUTE,
    HOME_PAGE_ROUTE,
    MATH_PAGE_ROUTE,
    NUMBERS_PAGE_ROUTE,
} from 'constants/routes';
import React, { FunctionComponent } from 'react';
import { AppLayout } from 'layouts/AppLayout';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { HomePage } from 'routes/HomePage';
import { MathPage } from 'routes/MathPage';
import { FiguresPage } from 'routes/FiguresPage';
import { NumbersPage } from 'routes/NumbersPage';
import { AlphabetPage } from 'routes/AlphabetPage';
import { ColorsPage } from 'routes/ColorsPage';

const App: FunctionComponent = () => {
    return (
        <Router>
            <AppLayout>
                <Switch>
                    <Route exact path={HOME_PAGE_ROUTE} component={HomePage} />
                    <Route path={MATH_PAGE_ROUTE} component={MathPage} />
                    <Route exact path={FIGURES_PAGE_ROUTE} component={FiguresPage} />
                    <Route exact path={NUMBERS_PAGE_ROUTE} component={NumbersPage} />
                    <Route exact path={ALPHABET_PAGE_ROUTE} component={AlphabetPage} />
                    <Route exact path={COLORS_PAGE_ROUTE} component={ColorsPage} />
                </Switch>
            </AppLayout>
        </Router>
    );
};

export { App };
