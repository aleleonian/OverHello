import * as React from 'react';
import { Body } from '../Body';
import { Fragment } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function ContactBodyContent() {

    return (

        <Fragment>
            <Card>
                <CardContent>
                    <Typography variant="h5" color="text.secondary" gutterBottom>
                    I can be reached at:
                        <ul class="contactUl">
                            <li className='aboutLi'><a href="https://www.linkedin.com/in/alejandro-leonian/"><img className="contactImg" src="/images/linkedin.png" /></a></li>
                            <li className='aboutLi'><a href="https://github.com/aleleonian"><img className="contactImg" src="/images/github.png" /></a></li>
                        </ul>
                    </Typography>

                </CardContent>
            </Card>

        </Fragment>
    )

}
export function ContactBody() {
    return (
        <Body>
            <ContactBodyContent />
        </Body>
    )
}