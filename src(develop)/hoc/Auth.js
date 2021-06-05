
import React, {useEffect} from 'react';
import { useHistory } from "react-router-dom";

export default function (SpecificComponent, option, adminRoute = null){

    //null => anybody
    //true => login user
    //false => non login user



    function AuthenticationCheck(){

        const history = useHistory();

        useEffect(() => {
            const accessToken = localStorage.getItem('accessToken')
            
            if(!accessToken){
                
                if(option){
                    history.push('/login')
                }
            }else{
                if(adminRoute && !accessToken){
                    history.push('/')
                }else{
                    if(option === false){
                        history.push('/')
                    }
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


