import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Header } from '../Header';

function ResultHeaderBody({ name }) {
    return (
        <Box>
            <Typography variant="h3" gutterBottom>
                Hello {name}!
            </Typography>
        </Box>
    )
}
export function ResultHeader({ data }) {
    const name = JSON.parse(data).name;
    return (
        <Header headerBody={<ResultHeaderBody name={name} />} />
    )
}