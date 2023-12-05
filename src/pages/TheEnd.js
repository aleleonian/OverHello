import { ButtonsMenu } from '../Components/ButtonsMenu';
import { TheEndHeader } from '../Components/TheEnd/TheEndHeader';
import { TheEndBody } from '../Components/TheEnd/TheEndBody';
import { Fragment } from 'react';

export const TheEnd = () => {
    return (
        <Fragment>
            <ButtonsMenu />
            <TheEndHeader />
            <TheEndBody />
        </Fragment>
    )
};