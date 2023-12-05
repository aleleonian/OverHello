import React from 'react';
import { ButtonsMenu } from '../Components/ButtonsMenu';
import { useLocation } from 'react-router-dom';
import { SpreadsheetBody } from '../Components/Spreadsheet/SpreadsheetBody';
import { SpreadsheetHeader } from '../Components/Spreadsheet/SpreadsheetHeader';
import { Fragment } from 'react';

export const Spreadsheet = () => {
    const location = useLocation();

    console.log("data received from previous page:", location.state.data);

    let data = location.state.data;
    data.next = "/morse";

    return (
        <Fragment>
            <ButtonsMenu data={data} />
            <SpreadsheetHeader data={data} />
            <SpreadsheetBody data={data} />
        </Fragment>
    )
};
