import { Botonera } from '../Components/Botonera';
import { ContactHeader } from '../Components/Contact/ContactHeader';
import { ContactBody } from '../Components/Contact/ContactBody';
import { Fragment } from 'react';

const Contact = () => {
    return (
        <Fragment>
            <ContactHeader />
            <ContactBody />
            <Botonera page="Contact" />
        </Fragment>
    )
};

export default Contact;