import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Header } from '../Header';
import { useEffect } from 'react';

function ResultHeaderBody({ data }) {

    const dataObj = JSON.parse(data);

    useEffect(() => {
        var msg = new SpeechSynthesisUtterance();
        msg.text = "Hello " + dataObj.name;
        window.speechSynthesis.speak(msg);
    });

    return (
        <Box>
            <Typography variant="h3" gutterBottom>
                Hello {dataObj.name}!
            </Typography>
        </Box>
    )
}
export function ResultHeader({ data }) {
    return (
        <Header headerBody={<ResultHeaderBody data={data} />} />
    )
}