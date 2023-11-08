import * as React from 'react';
import { Body } from '../Body';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function ResultBodyContent({ data }) {
    console.log(data);
    let nationality, eqNames;
    if (data.scrapedData.equivalent) {
        data.scrapedData.equivalent = data.scrapedData.equivalent.replace(/\s+/g, " ");
        nationality = data.scrapedData.equivalent.substring(0, data.scrapedData.equivalent.indexOf(" "));;
        eqNames = data.scrapedData.equivalent.substring(data.scrapedData.equivalent.indexOf(" "), data.scrapedData.equivalent.length);
    }
    return (
        <div className="App-Body">
            <Box width="80%">
                <Typography variant="h5" gutterBottom>
                    {data.scrapedData.nameData ? data.scrapedData.nameData : ""}
                </Typography>
                {
                    data.scrapedData.equivalent ?
                        <Typography variant="h5" gutterBottom>
                            {`The ${nationality} equivalent of your name is ${eqNames}`}
                        </Typography>
                        : ""
                }

            </Box>
        </div>
    )

}
export function ResultBody({ data }) {
    return (
        <Body bodyContent={<ResultBodyContent data={data} />} />
    )
}