import React from 'react';
import { HomeBody } from '../Components/Home/HomeBody';
import { HomeHeader } from '../Components/Home/HomeHeader';
import { Botonera } from '../Components/Botonera';
import { Footer } from '../Components/Footer';

const Home = () => {
    return (
        <div>
            <HomeHeader />
            <HomeBody />
            <Botonera page="Home" />
            <Footer />
        </div>
    )
};

export default Home;