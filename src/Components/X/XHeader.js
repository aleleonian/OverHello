import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Header } from '../Header';

function XHeaderContent({ data }) {

    return (
        <Box>
            <Typography variant="h3" gutterBottom>
                Your X/Twitter greeting, {data.name}!
            </Typography>
        </Box>
    )
}
export function XHeader({ data }) {
    return (
        <Header>
            <XHeaderContent data={data}/>
        </Header>
    )
}