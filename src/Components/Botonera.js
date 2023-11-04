import React from 'react';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';

export function Botonera() {
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();

    function handleChange(event, newValue) {
        console.log(event);
        console.log(newValue);
        setValue(newValue);
        navigate(`/${newValue}`);

    }
    return (
        <div className='App-Botonera'>
            <Box sx={{ width: 500 }}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={handleChange}
                >
                    <BottomNavigationAction label="Home" value="" icon={<HomeIcon color="primary" />} />
                    <BottomNavigationAction label="About" value="about" icon={<InfoIcon color="primary" />} />
                    <BottomNavigationAction label="Contact" value="contact" icon={<CallIcon color="primary" />} />
                </BottomNavigation>
            </Box>
        </div>
    );
}