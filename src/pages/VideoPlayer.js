import React from 'react';
import { Botonera } from '../Components/Botonera';
import { VideoPlayerBody } from '../Components/VideoPlayer/VideoPlayerBody';
import { VideoPlayerHeader } from '../Components/VideoPlayer/VideoPlayerHeader';
import { Footer } from '../Components/Footer';

const Result = () => {
    return (
        <div>
            <VideoPlayerHeader />
            <VideoPlayerBody />
            <Botonera />
            <Footer />
        </div>
    )
};

export default Result;
