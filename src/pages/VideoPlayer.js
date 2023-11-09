import React from 'react';
import { Botonera } from '../Components/Botonera';
import { VideoPlayerBody } from '../Components/VideoPlayer/VideoPlayerBody';
import { VideoPlayerHeader } from '../Components/VideoPlayer/VideoPlayerHeader';
import { Footer } from '../Components/Footer';
import { useLocation } from 'react-router-dom';

const VideoPlayer = () => {

    const location = useLocation();

    return (
        <div>
            <VideoPlayerHeader />
            <VideoPlayerBody data={location.state.data}/>
            <Botonera />
            <Footer />
        </div>
    )
};

export default VideoPlayer;
