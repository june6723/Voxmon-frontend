

const Logout = (history) => {
    
    const reftoken = localStorage.getItem('refreshToken')
    const acctoken = localStorage.getItem('accessToken')
    const data = {refreshToken : reftoken}
    fetch('http://localhost:5000/auth/logout',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Authorization':'bearer '+ acctoken
                },
        mode: 'cors',
        credentials: 'same-origin',
        body:JSON.stringify(data)
    }).then(
        localStorage.clear()
    ).catch(error => console.error('Error:', error));
    history.push('/login')
}

export default Logout;