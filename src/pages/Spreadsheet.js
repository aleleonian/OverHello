import React from 'react';
import { ButtonsMenu } from '../Components/ButtonsMenu';
import { useLocation } from 'react-router-dom';
import { SpreadsheetBody } from '../Components/Spreadsheet/SpreadsheetBody';
import { SpreadsheetHeader } from '../Components/Spreadsheet/SpreadsheetHeader';
import { Fragment } from 'react';

export const Spreadsheet = () => {
    const location = useLocation();

    console.log("data received from previous page:", location.state.data);

    return (
        <Fragment>
            <SpreadsheetHeader data={location.state.data} />
            <SpreadsheetBody data={location.state.data} />
            <ButtonsMenu />
        </Fragment>
    )
};
