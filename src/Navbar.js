import Logout from './Logout'
import { useHistory } from 'react-router-dom';


const Navbar = () => {
    const history = useHistory();
    return(
        <div className="Navbar">
            <h2>Navbar</h2>
            <button onClick={() => { Logout(history) }}>Logout</button>
            <hr></hr>
        </div>
    )
}

export default Navbar;