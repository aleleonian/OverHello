import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Header } from '../Header';

function SpreadsheetHeaderContent({ data }) {

    return (
        <Box>
            <Typography variant="h3" gutterBottom>
                Your spreadsheet, {data.name}!
            </Typography>
            <Typography variant="h6" gutterBottom>
                Here's a list of international equivalents to your name:
            </Typography>
        </Box>
    )
}
export function SpreadsheetHeader({ data }) {
    return (
        <Header>
            <SpreadsheetHeaderContent data={data}/>
        </Header>
    )
}