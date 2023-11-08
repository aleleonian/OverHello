import { Botonera } from '../Components/Botonera';
import { AboutHeader } from '../Components/About/AboutHeader';
import { AboutBody } from '../Components/About/AboutBody';
import { Footer } from '../Components/Footer';

const About = () => {
    return (
        <div className='App-About'>
            <AboutHeader />
            <AboutBody />
            <Botonera page="About"/>
            <Footer />
        </div>
    )
};

export default About;