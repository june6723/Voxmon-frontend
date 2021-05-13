
import jwt_decode from "jwt-decode";
import React, {useEffect} from 'react';
import { useHistory } from 'react-router-dom';

export default function (SpecificComponent, option){

    //null => anybody
    //true => login user
    //false => non login user

    function AuthenticationCheck(){
        const history = useHistory();

        useEffect(() => {
            const accessToken = localStorage.getItem('accessToken')
            if(accessToken) {
                const decode = jwt_decode(accessToken)
                
                if(decode){
                    if(!option){
                        history.push('/')
                    }
                }else{
                    history.push('/login')
                }
                
            }

                //로그인 하지 않은 상태
                    
        
            
        }, [])

        return(
            <SpecificComponent />
        )


    }

return AuthenticationCheck
}
// const Auth = (props) => {
// //null => anybody
//     //true => login user
//     //false => non login user

//     useEffect(() => {

//         const decode = jwt_decode(localStorage.getItem('accessToken'))

//         if(this.props === false){
//                 alert('Your not LoggedIn');
//                 history.push('/');
//         }else{
//             return decode
//         }
//     }, [])


// }


