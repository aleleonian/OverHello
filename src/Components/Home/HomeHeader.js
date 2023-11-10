import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Header } from '../Header';

function HomeHeaderBody() {
    return (
        <Box>
            <Typography variant="h3" gutterBottom>
                Welcome to OverHello
            </Typography>
            <Typography variant="h5" gutterBottom>
                The world's most over engineered Hello World App
            </Typography>
        </Box>
    )
}
export function HomeHeader() {
    return (
        <Header>
            <HomeHeaderBody />
        </Header>
    )
}