import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export function Header() {
    return (
        <div className='App-Header'>
            <Box sx={{ width: '100%', maxWidth: 500 }}>
                <Typography variant="h3" gutterBottom>
                    Welcome to OverHello
                </Typography>
                <Typography variant="h4" gutterBottom>
                    The world's most over engineered Hello World App
                </Typography>
            </Box>
        </div>
    );
}
