import React from 'react';
import { ButtonsMenu } from '../Components/ButtonsMenu';
import { VideoPlayerBody } from '../Components/VideoPlayer/VideoPlayerBody';
import { VideoPlayerHeader } from '../Components/VideoPlayer/VideoPlayerHeader';
import { useLocation } from 'react-router-dom';
import { Fragment } from 'react';

export const VideoPlayer = () => {

    const location = useLocation();

    return (
        <Fragment>
            <VideoPlayerHeader />
            <VideoPlayerBody data={location.state.data} />
            <ButtonsMenu />
        </Fragment>
    )
};

