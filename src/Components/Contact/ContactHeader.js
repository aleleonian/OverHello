import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Header } from '../Header';

function ContactHeaderBody() {
    return (
        <Box>
            <Typography variant="h3" gutterBottom>
                Get in touch
            </Typography>
        </Box>
    )
}
export function ContactHeader() {
    return (
        <Header headerBody={<ContactHeaderBody />} />
    )
}