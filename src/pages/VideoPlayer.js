import React from 'react';
import { Botonera } from '../Components/Botonera';
import { VideoPlayerBody } from '../Components/VideoPlayer/VideoPlayerBody';
import { VideoPlayerHeader } from '../Components/VideoPlayer/VideoPlayerHeader';
import { useLocation } from 'react-router-dom';
import { Fragment } from 'react';

const VideoPlayer = () => {

    const location = useLocation();

    return (
        <Fragment>
            <VideoPlayerHeader />
            <VideoPlayerBody data={location.state.data} />
            <Botonera />
        </Fragment>
    )
};

export default VideoPlayer;
