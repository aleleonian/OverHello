import * as React from 'react';
import { Body } from '../Body';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function ResultBodyContent({ data }) {

    return (
        <div className="App-Body">
            <Box>
                <Typography variant="h5" gutterBottom>
                    {/* Hello {name}! */}
                </Typography>
            </Box>
        </div>
    )

}
export function ResultBody({ data }) {
    return (
        <Body bodyContent={<ResultBodyContent data={data} />} />
    )
}