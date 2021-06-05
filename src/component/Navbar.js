
import {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import Logout from "./Logout";
import {Link} from 'react-router-dom';
import {Button} from './Button';
import './Navbar.css'
const Navbar = ({ token, setToken }) =>{

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        
        if(window.innerWidth <= 960){
            setButton(false);
        }else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);
    window.addEventListener('resize', showButton);

    const history = useHistory()
        
    const loghandler = () =>{
        if(token){
            Logout(history)
            setToken(null)
        } else {
            history.push('/login')
        }
    }

    return(
        <div>
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link  to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <p></p><p className="bive">VOXMON</p>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/room1' className='nav-links' onClick={closeMobileMenu}>
                            Search
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/room2' className='nav-links' onClick={closeMobileMenu}>
                            Channel
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/room3' className='nav-links' onClick={closeMobileMenu}>
                            Message
                        </Link>
                    </li>
                </ul>

                {button && <Button onClick={loghandler} buttonstyle="button-outline">{ token ? "Sign Out" : "Sign In" }</Button>}

            </div>
        </nav>
        </>
        
        </div>
    )
}




export default Navbar;