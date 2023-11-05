import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Header } from '../Header';

function ResultHeaderBody() {
    return (
        <Box>
            <Typography variant="h3" gutterBottom>
                Results
            </Typography>
        </Box>
    )
}
export function ResultHeader() {
    return (
        <Header headerBody={<ResultHeaderBody />} />
    )
}