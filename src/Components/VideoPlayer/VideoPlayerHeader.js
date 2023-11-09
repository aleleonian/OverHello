import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Header } from '../Header';

function VideoPlayerHeaderContent() {
    return (
        <Box>
            <Typography variant="h3" gutterBottom>
            VideoPlayerHeaderContent
            </Typography>
        </Box>
    )
}
export function VideoPlayerHeader() {
    return (
        <Header>
            <VideoPlayerHeaderContent />
        </Header>
    )
}