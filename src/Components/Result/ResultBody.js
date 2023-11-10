import * as React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Body } from '../Body';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function ResultBodyContent({ data }) {

    const [videoCreated, setVideoCreated] = useState(false);
    const navigate = useNavigate();

    function navigateToVideo() {
        navigate(`/video`, {
            state: {
                data: data,
            }
        });
    }
    useEffect(() => {
        console.log(process.env.REACT_APP_BACKEND_SERVER + "/merge?name=" + data.name);
        fetch(process.env.REACT_APP_BACKEND_SERVER + "/merge?name=" + data.name.toLowerCase(), {
            method: 'get',
        })
            .then(async (response) => {
                const videoCreationResponse = await response.text();
                if (videoCreationResponse === "OK!") {
                    console.log("videoCreationResponse", videoCreationResponse);
                    setVideoCreated(true);
                }
                else {
                    console.log("something wrong with videoCreationResponse", videoCreationResponse);
                }
            })
            .catch((err) => {
                console.log("err!->", err);
            });
    }, []);

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
        <div className="bodyComponent">
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


            {videoCreated && <a onClick={navigateToVideo} href="/video">GO</a>}
            {/* {videoCreated && <MyAlert severity="success" message={"The video was created!"} />} */}
        </div>
    )

}
export function ResultBody({ data }) {
    return (
        <Body>
            <ResultBodyContent data={data} />
        </Body>
    )
}