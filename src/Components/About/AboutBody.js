import * as React from 'react';
import { Fragment } from 'react';
import { Body } from '../Body';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function AboutBodyContent() {

    return (
        <Fragment>
            <Card>
                <CardContent>
                    <Typography variant="h5" color="text.secondary" gutterBottom>
                        OverHello was built by <a href="https://www.linkedin.com/in/alejandro-leonian/" target="_blank">Alejandro Leonian</a> using:
                        <ul>
                            <li className='aboutLi'><img className="aboutImg" src="/images/react.png" />   React.js</li>
                            <li className='aboutLi'><img className="aboutImg" src="/images/mui.png" />   Material UI</li>
                            <li className='aboutLi'><img className="aboutImg" src="/images/nodejs.png" />   Node.js</li>
                            <li className='aboutLi'><img className="aboutImg" src="/images/mongodb.png" />   MongoDB</li>
                        </ul>
                    </Typography>

                </CardContent>
            </Card>

        </Fragment>
    )

}
export function AboutBody() {
    return (
        <Body>
            <AboutBodyContent />
        </Body>
    )
}