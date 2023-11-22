import React from 'react'
import Login from './Login'


const Home = (props) => {
    const { showAlert } = props;
    return (
        <>
            <div >
                <Login showAlert={showAlert} />
            </div>
        </>
    )
}

export default Home
