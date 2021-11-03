import {
    ADDITION_PAGE_ROUTE,
    DIVISION_PAGE_ROUTE,
    MULTIPLICATION_PAGE_ROUTE,
    SUBTRACTION_PAGE_ROUTE,
} from 'constants/routes';
import React, { FunctionComponent } from 'react';
import { Route, Switch } from 'react-router';
import { AdditionPage } from './MathRoutes/Addition/addition';
import { DefaultPage } from './MathRoutes/DefaultPage';
import { DivisionPage } from './MathRoutes/Division/DivisionPage';
import { MultiplicationPage } from './MathRoutes/Multiplication/MultiplicationPage';
import { SubtractionPage } from './MathRoutes/Subtraction/SubtractionPage';

export const MathPage: FunctionComponent = () => {
    return (
        <div>
            <Switch>
                <Route exact path={ADDITION_PAGE_ROUTE} component={AdditionPage} />
                <Route exact path={SUBTRACTION_PAGE_ROUTE} component={DivisionPage} />
                <Route exact path={MULTIPLICATION_PAGE_ROUTE} component={MultiplicationPage} />
                <Route exact path={DIVISION_PAGE_ROUTE} component={SubtractionPage} />
                <Route component={DefaultPage} />
            </Switch>
        </div>
    );
};
