import React from 'react';
import { ButtonsMenu } from '../Components/ButtonsMenu';
import { useLocation } from 'react-router-dom';
import { XBody } from '../Components/X/XBody';
import { XHeader } from '../Components/X/XHeader';
import { Fragment } from 'react';

export const X = () => {
    const location = useLocation();

    // console.log("data received from previous page:", location.state.data);
    let data = location.state.data;
    return (
        <Fragment>
            <ButtonsMenu />
            <XHeader data={data} />
            <XBody data={data} />
            {/* <ButtonsMenu page="Result" /> */}
        </Fragment>
    )
};

