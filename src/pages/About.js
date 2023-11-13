import { ButtonsMenu } from '../Components/ButtonsMenu';
import { AboutHeader } from '../Components/About/AboutHeader';
import { AboutBody } from '../Components/About/AboutBody';
import { Fragment } from 'react';

export const About = () => {
    return (
        // <div className='App-About'>
        <Fragment>
            <AboutHeader />
            <AboutBody />
            <ButtonsMenu page="About" />
        </Fragment>
    )
};