import { Botonera } from '../Components/Botonera';
import { ContactHeader } from '../Components/Contact/ContactHeader';
import { ContactBody } from '../Components/Contact/ContactBody';
import { Footer } from '../Components/Footer';

const Contact = () => {
    return (
        <div>
            <ContactHeader />
            <ContactBody />
            <Botonera page="Contact"/>
            <Footer />
        </div>
    )
};

export default Contact;