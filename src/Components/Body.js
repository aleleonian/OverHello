import React from "react";

export function Body() {
    function processInput() {
        const name = document.getElementById('userName').value;
        console.log(name);
    }
    return (
        <div className="App-Body">
            <input type="text" id="userName" placeholder="Enter your name" />
            <button onClick={processInput}>submit</button>
        </div>
    )
}
