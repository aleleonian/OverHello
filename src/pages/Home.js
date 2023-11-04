import React from 'react';
import { Body } from '../Components/Body';
import { Link } from 'react-router-dom';
import { Header } from '../Components/Header';
import { Botonera} from '../Components/Botonera';

const Home = () => {
    return (
        <div>
            <Header />
            <Body />
            <Link to="/contact">Contact</Link>
            <Botonera />
        </div>
    )
};

export default Home;