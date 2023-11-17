import React from 'react';
import { ButtonsMenu } from '../Components/ButtonsMenu';
import { MorseCodeBody } from '../Components/MorseCode/MorseCodeBody';
import { MorseCodeHeader } from '../Components/MorseCode/MorseCodeHeader';
import { useLocation } from 'react-router-dom';
import { Fragment } from 'react';

export const MorseCode = () => {

    const location = useLocation();

    return (
        <Fragment>
            <MorseCodeHeader />
            <MorseCodeBody data={location.state.data} />
            <ButtonsMenu />
        </Fragment>
    )
};

