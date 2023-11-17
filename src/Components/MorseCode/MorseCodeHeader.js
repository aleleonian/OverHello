import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Header } from '../Header';

function MorseCodeHeaderContent() {
    return (
        <Box>
            <Typography variant="h3" gutterBottom>
            Your name spelled in morse code!
            </Typography>
        </Box>
    )
}
export function MorseCodeHeader() {
    return (
        <Header>
            <MorseCodeHeaderContent />
        </Header>
    )
}