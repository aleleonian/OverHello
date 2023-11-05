import React from 'react';
import { Botonera } from '../Components/Botonera';
import { useLocation } from 'react-router-dom';
import { ResultBody } from '../Components/Result/ResultBody';
import { ResultHeader } from '../Components/Result/ResultHeader';

const Result = () => {
    const location = useLocation();

    console.log("data received from previous page:", location.state.data);

    return (
        <div>
            <ResultHeader />
            <ResultBody data={location.state.data}/>
            <Botonera />
        </div>
    )
};

export default Result;
