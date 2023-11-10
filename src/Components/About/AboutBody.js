import * as React from 'react';
import { Body } from '../Body';

function AboutBodyContent() {

    return (
        <div className="bodyComponent">
            <p>
                Dis the body
            </p>
        </div>
    )

}
export function AboutBody() {
    return (
        <Body>
            <AboutBodyContent />
        </Body>
    )
}