import React, { FunctionComponent } from 'react';
import { Grid } from 'ui-kit';

export const AlphabetPage: FunctionComponent = () => {
    const element = (index: number) => <h1>{`Index: ${index}`}</h1>;
    return (
        <div>
            <Grid isList count={1000} element={element} />
        </div>
    );
};
