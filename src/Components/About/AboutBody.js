import * as React from 'react';
import { Body } from '../Body';

function AboutBodyContent() {

    return (
        <div>
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