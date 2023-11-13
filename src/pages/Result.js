import React from 'react';
import { ButtonsMenu } from '../Components/ButtonsMenu';
import { useLocation } from 'react-router-dom';
import { ResultBody } from '../Components/Result/ResultBody';
import { ResultHeader } from '../Components/Result/ResultHeader';
import { Fragment } from 'react';

export const Result = () => {
    const location = useLocation();

    // console.log("data received from previous page:", location.state.data);

    return (
        <Fragment>
            <ResultHeader data={location.state.data} />
            <ResultBody data={location.state.data} />
            <ButtonsMenu page="Result" />
        </Fragment>
    )
};

