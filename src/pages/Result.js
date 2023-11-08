import React from 'react';
import { Botonera } from '../Components/Botonera';
import { useLocation } from 'react-router-dom';
import { ResultBody } from '../Components/Result/ResultBody';
import { ResultHeader } from '../Components/Result/ResultHeader';
import { Footer } from '../Components/Footer';

const Result = () => {
    const location = useLocation();

    console.log("data received from previous page:", location.state.data);

    return (
        <div>
            <ResultHeader data={location.state.data} />
            <ResultBody data={location.state.data} />
            <Botonera page="Result" />
            <Footer />
        </div>
    )
};

export default Result;
