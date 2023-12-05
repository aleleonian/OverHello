import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Header } from '../Header';

function TheEndHeaderContent() {
    return (
        <Box>
            <Typography variant="h3" gutterBottom>
                This is the end...
            </Typography>
            <Typography variant="h6" gutterBottom>
                My only friend, the end.
            </Typography>
        </Box>
    )
}
export function TheEndHeader() {
    return (
        <Header>
            <TheEndHeaderContent />
        </Header>
    )
}