import React from 'react';
import { HomeBody } from '../Components/Home/HomeBody';
import { HomeHeader } from '../Components/Home/HomeHeader';
import { Botonera} from '../Components/Botonera';

const Home = () => {
    return (
        <div>
            <HomeHeader />
            <HomeBody />
            <Botonera />
        </div>
    )
};

export default Home;