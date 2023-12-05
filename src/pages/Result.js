import React from 'react';
import { ButtonsMenu } from '../Components/ButtonsMenu';
import { useLocation } from 'react-router-dom';
import { ResultBody } from '../Components/Result/ResultBody';
import { ResultHeader } from '../Components/Result/ResultHeader';
import { Fragment } from 'react';

export const Result = () => {
    const location = useLocation();

    // console.log("data received from previous page:", location.state.data);
    let data = location.state.data;
    if(data.scrapedData && data.scrapedData.equivalent){
        data.next = "/spreadsheet";
    }
    else {
        data.next = "/morse";
    }
    return (
        <Fragment>
            <ButtonsMenu data={location.state.data}/>
            <ResultHeader data={location.state.data} />
            <ResultBody data={location.state.data} />
        </Fragment>
    )
};

