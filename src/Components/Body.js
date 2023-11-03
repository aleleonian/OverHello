import React from "react";

export function Body() {
    function processInput(event) {

    }
    return (
        <div className="App-Body">
            <input type="text" oncChange={processInput} placeholder="Enter your name" />
        </div>
    )
}
