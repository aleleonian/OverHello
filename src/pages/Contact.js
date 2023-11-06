import { Botonera } from '../Components/Botonera';
import { ContactHeader } from '../Components/Contact/ContactHeader';
import { ContactBody } from '../Components/Contact/ContactBody';

const Contact = () => {
    return (
        <div>
            <ContactHeader />
            <ContactBody />
            <Botonera page="Contact"/>
        </div>
    )
};

export default Contact;