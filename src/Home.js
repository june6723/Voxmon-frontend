import React from 'react';

const Home = (props) => {

    return(
        <div className="Home">

            <h2>Home</h2>

            <h3>Hello! {props.name}</h3> 
            
        </div>
    )

}

export default Home;