import React,{ useEffect } from 'react'
import axios from 'axios';
import { withRouter } from 'react-router-dom'



function LandingPage(props) {

    

    const onClikcHandler = () => {
        axios.get(`/api/users/logout`)
        .then(response => {
            if(response.data.success){
                props.history.push('/login')
            }else{
                alert('your not logged in')
                
            }
            
        })
    }

    const isLoggedIn = () => {
        axios.get('/api/users/auth')
        .then(response => {
            if(response.data.success);
        })
    }



    useEffect(() => {
    axios.get('/api/Hello')
    .then(response => console.log(response.data))
    }, [])

    return (
        <div style={{display:'flex', justifyContent:'center',alignItems:'center',width:'100%',height:'100vh'}}>
            <h2>LandingPage</h2>
            <button onClick={onClikcHandler}>
                login
            </button>

        </div>
    )
}

export default withRouter(LandingPage)

