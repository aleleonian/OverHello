import * as React from 'react';
import { Body } from '../Body';

function AboutBodyContent() {

    return (
        <div className="App-Body">
            <p>
                Dis the body
            </p>
        </div>
    )

}
export function AboutBody() {
    return (
        <Body bodyContent={<AboutBodyContent />} />
    )
}