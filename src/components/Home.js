import React from 'react';

const Home = ({onMessageHandler}) => {
    return (
        <div>
            <button type="button" onClick={()=>onMessageHandler()}>Click On</button>
        </div>
    )
}


export default Home;