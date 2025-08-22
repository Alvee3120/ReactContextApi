import React, { useState } from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const {setUser} = useContext(UserContext) 

    const handleSubmit = (e) => {

        e.preventDefault()
        setUser({username,password})

    }

    return (

        <>

            <div>Login</div>
            <input type="text"
                value={username}
                onChange={(e) => { setUsername(e.target.value) }}
                placeholder="Enter your username" />
                {"    "}
            <input type="text"
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                placeholder="Enter your password" />
            <button onClick={handleSubmit}>Submit</button>

        </>
    )
}

export default Login