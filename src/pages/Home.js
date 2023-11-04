import React from 'react';
import { Body } from '../Components/Body';
import { Link } from 'react-router-dom';
import { Header } from '../Components/Header';

const Home = () => {
    return (
        <div>
            <Header />
            <Body />
            <Link to="/contact">Contact</Link>
        </div>
    )
};

export default Home;