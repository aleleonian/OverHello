import { Botonera } from '../Components/Botonera';
import { AboutHeader } from '../Components/About/AboutHeader';
import { AboutBody } from '../Components/About/AboutBody';
import { Fragment } from 'react';

const About = () => {
    return (
        // <div className='App-About'>
        <Fragment>
            <AboutHeader />
            <AboutBody />
            <Botonera page="About" />
        </Fragment>
    )
};

export default About;