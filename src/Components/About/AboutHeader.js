import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Header } from '../Header';

function AboutHeaderBody() {
    return (
        <Box>
            <Typography variant="h3" gutterBottom>
                About OverHello
            </Typography>
            {/* <Typography variant="h6" gutterBottom>
                ...
            </Typography> */}
        </Box>
    )
}
export function AboutHeader() {
    return (
        <Header>
            <AboutHeaderBody />
        </Header>
    )
}