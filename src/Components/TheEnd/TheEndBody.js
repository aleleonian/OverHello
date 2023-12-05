import * as React from 'react';
import { Fragment } from 'react';
import { Body } from '../Body';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function TheEndBodyContent() {

    return (
        <Fragment>
            <Card>
                <CardContent>
                    <Typography variant="h5" color="text.secondary" gutterBottom>
                        I hope you enjoyed my silly little app. <br />
                        I certainly enjoyed building it!<br />
                        Bye!
                    </Typography>

                </CardContent>
            </Card>

        </Fragment>
    )

}
export function TheEndBody() {
    return (
        <Body>
            <TheEndBodyContent />
        </Body>
    )
}