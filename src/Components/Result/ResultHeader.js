import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Header } from '../Header';

function ResultHeaderBody({ data }) {
    return (
        <Box>
            <Typography variant="h3" gutterBottom>
                Hello {JSON.parse(data).name}!
            </Typography>
        </Box>
    )
}
export function ResultHeader({ data }) {
    return (
        <Header headerBody={<ResultHeaderBody data={data} />} />
    )
}