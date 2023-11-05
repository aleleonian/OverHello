import { Botonera } from '../../Botonera';
import { useLocation } from 'react-router-dom';


const Result = (props) => {
    const location = useLocation();

    console.log("data received from previous page:", location.state.data);
    return (
        <div>
            <h1>Result</h1>
            <Botonera />
        </div>
    )
};

export default Result;