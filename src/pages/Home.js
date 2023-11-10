import { React, Fragment } from 'react';
import { HomeBody } from '../Components/Home/HomeBody';
import { HomeHeader } from '../Components/Home/HomeHeader';
import { Botonera } from '../Components/Botonera';
import { Footer } from '../Components/Footer';

const Home = () => {
    return (
        <Fragment>
            <HomeHeader />
            <HomeBody />
            <Botonera page="Home" />
            {/* <Footer /> */}
        </Fragment>
    )
};

export default Home;