import * as React from 'react';
import { Body } from '../Body';
import { VideoPlayer } from './VideoPlayer';

function VideoPlayerBodyContent({data}) {

    return (
        <div>
            <VideoPlayer videoUrl={`${process.env.REACT_APP_BACKEND_SERVER}/videos/${data.name}`}></VideoPlayer> <br />
        </div>
    );
}

export function VideoPlayerBody({data}) {
    return (
        <Body>
            <VideoPlayerBodyContent data={data} />
        </Body>
    )
}