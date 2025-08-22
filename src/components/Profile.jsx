import React from "react";
import UserContext from "../context/UserContext";
import { useContext } from "react";


function Profile() {

    const {user} =  useContext(UserContext)

    if(!user) return <h1>No User Found. Please Login</h1>

    return(

        <>
        <h1>Welcome {user.username}</h1> 
        <h4>I know your pass ; Hehe </h4>
        <h4>It's {user.password} </h4>

        </>
    )
}

export default Profile