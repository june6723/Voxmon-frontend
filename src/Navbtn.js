
import { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom';
import Logout from "./Logout";


const Navbtn = ({token}) => {

    const history = useHistory();
    const [isLoggedIn, setIsLoggedIn] = useState(null)
    useEffect(() => {
        if(token || localStorage.getItem('accessToken')){
            setIsLoggedIn('LOGOUT');
            console.log('token is accept Login')
        }else {
            setIsLoggedIn('LOGIN');
            console.log('token is gone Logout')
        }
    }, [token])


    const loghandler = () =>{
        if(localStorage.getItem('accessToken')){
            Logout(history)
    }else {
        history.push('/login')
    }
    }

    let btntext = <button onClick={loghandler}>{isLoggedIn}</button>


    return (
        <div>
            {btntext}
        </div>
    )
}

export default Navbtn;