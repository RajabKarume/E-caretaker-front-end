import React, {  useState } from "react";

export default function Logout(){
    const [status, setStatus]= useState("")

    function handleClick(){
        fetch('http://127.0.0.1:3000/logout', {method:'DELETE'})
            .then(()=> setStatus('Successfully Deleted'))
        console.log(status)
    }
    return(
        <button onClick={()=>handleClick}>Log Out</button>
    )
}