import React from 'react';
import { ButtonsMenu } from '../Components/ButtonsMenu';
import { useLocation } from 'react-router-dom';
import { XBody } from '../Components/X/XBody';
import { XHeader } from '../Components/X/XHeader';
import { Fragment } from 'react';

export const X = () => {
    const location = useLocation();

    // console.log("data received from previous page:", location.state.data);

    return (
        <Fragment>
            <XHeader data={location.state.data} />
            <XBody data={location.state.data} />
            {/* <ButtonsMenu page="Result" /> */}
        </Fragment>
    )
};

