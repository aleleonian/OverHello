import { ButtonsMenu } from '../Components/ButtonsMenu';
import { ContactHeader } from '../Components/Contact/ContactHeader';
import { ContactBody } from '../Components/Contact/ContactBody';
import { Fragment } from 'react';

export const Contact = () => {
    return (
        <Fragment>
            <ContactHeader />
            <ContactBody />
            <ButtonsMenu page="Contact" />
        </Fragment>
    )
};