import * as React from 'react';

import { Body } from '../Body';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function XBodyContent({ data }) {

    console.log("/x data received from the previous page->" + JSON.stringify(data));

    return (
        <div className="bodyComponent">
            <Box width="80%">
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Twitter thingy
                        </Typography>
                        <a href={data.tweet} target="_blank">
                            <img id="tweetSnapshot" src={process.env.REACT_APP_BACKEND_SERVER + "/images/" + data.tweetSnapshot}/>
                        </a>
                    </CardContent>
                </Card>
            </Box>
        </div>
    )

}
export function XBody({ data }) {
    return (
        <Body>
            <XBodyContent data={data} />
        </Body>
    )
}