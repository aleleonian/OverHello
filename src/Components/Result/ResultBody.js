import * as React from 'react';
import { Body } from '../Body';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function ResultBodyContent({ data }) {
    let nationality, eqNames, moreThanOneEquivalent;
    if (data.scrapedData && data.scrapedData.equivalent) {
        data.scrapedData.equivalent = data.scrapedData.equivalent.replace(/\s+/g, " ");
        nationality = data.scrapedData.equivalent.substring(0, data.scrapedData.equivalent.indexOf(" "));;
        eqNames = data.scrapedData.equivalent.substring(data.scrapedData.equivalent.indexOf(" "), data.scrapedData.equivalent.length);
        if (eqNames.indexOf(",") > -1) {
            moreThanOneEquivalent = true;
        }
    }
    return (
        <div className="App-Body">
            <Box width="80%">
                {
                    data.scrapedData ?
                        <Typography variant="h4" gutterBottom color='primary'>
                            According to <a href="https://www.behindthename.com">behindthename.com</a>:
                        </Typography>
                        : ""}

                {
                    data.scrapedData && data.scrapedData.nameData ?
                        <Typography variant="h5" gutterBottom>
                            {data.scrapedData.nameData}
                        </Typography>
                        : ""}

                {
                    data.scrapedData && data.scrapedData.equivalent ?
                        <>
                            <Typography variant="h5" gutterBottom>
                                {`The ${nationality} equivalent${moreThanOneEquivalent ? "s" : ""} of your name ${moreThanOneEquivalent ? "are:" : "is:"}`}
                            </Typography>
                            <Typography variant="h5" color="primary" gutterBottom>
                                {`${eqNames}`}
                            </Typography>
                        </>
                        : ""
                }

            </Box>
        </div>
    )

}
export function ResultBody({ data }) {
    return (
        <Body>
            <ResultBodyContent data={data}/>
        </Body>
    )
}