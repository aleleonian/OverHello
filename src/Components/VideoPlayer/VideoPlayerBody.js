import * as React from 'react';
import { Body } from '../Body';

function VideoPlayerBodyContent() {

    return (
        <div className="App-Body">
            <p>
                Dis the video player body
            </p>
        </div>
    )

}
export function VideoPlayerBody() {
    return (
        <Body>
            <VideoPlayerBodyContent />
        </Body>
    )
}