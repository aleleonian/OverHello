import * as React from 'react';
import { Body } from '../Body';

function ContactBodyContent() {

    return (

        <div className="App-Body">
            <p>
                Dis the body
            </p>
        </div>
    )

}
export function ContactBody() {
    return (
        <Body>
            <ContactBodyContent />
        </Body>
    )
}