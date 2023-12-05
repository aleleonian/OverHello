// this file is deprectated.
// only kept for future referene

import React from 'react';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import RestoreIcon from '@mui/icons-material/Restore';
import ForwardIcon from '@mui/icons-material/Forward';
import { TemporaryDrawer } from './Sidebar/TemporaryDrawer';

export function ButtonsMenu({ data = null }) {
    const navigate = useNavigate();

    return (
        <div className='topMenu'>
            <Box>
                <BottomNavigation
                    showLabels
                >
                    {/* <BottomNavigationAction onClick={() => navigate(-1)} label="Back" icon={<RestoreIcon />} /> */}
                    <TemporaryDrawer />
                    {
                        data && data.next ?
                            <BottomNavigationAction label={data.next} onClick={() => {
                                navigate(data.next, {
                                    state: {
                                        data: data,
                                    }
                                });
                            }} value={data.next} icon={<ForwardIcon sx={{ fontSize: 40 }} color='primary' />} />
                            : ""
                    }

                </BottomNavigation>
            </Box>
        </div>
    );
}


// export function Header({ children }) {
//     const [value, setValue] = React.useState(0);

//     return (
//         <div className="appHeader">
//             <Box className="headerButtons">
//                 <BottomNavigation
//                     showLabels
//                     value={value}
//                     onChange={(event, newValue) => {
//                         setValue(newValue);
//                     }}
//                 >
//                     <BottomNavigationAction label="Back" icon={<RestoreIcon />} className='backButton' />
//                     {children}
//                     <BottomNavigationAction label="Spreadsheet" icon={<ForwardIcon />} />
//                 </BottomNavigation>
//             </Box>
//             {children}
//         </div>
//     );
// }
