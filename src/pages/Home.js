import React from 'react';
import { Body } from '../../Body';
import { HomeHeader } from '../HomeHeader';
import { Botonera} from '../../Botonera';

const Home = () => {
    return (
        <div>
            <HomeHeader />
            <Body />
            <Botonera />
        </div>
    )
};

export default Home;