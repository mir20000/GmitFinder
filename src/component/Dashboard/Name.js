import { useState,useEffect } from "react"
import Axios from 'axios';

function Name(params) {
    const [name,setName]=useState()
    function handleName(){
        Axios.post('http://localhost:4555/myprofiledata',{ 
            id:params.id,                                                                          
        }).then((response)=>{                       
            setName(response.data.name)                                      
        }) 
    }
    
    useEffect(() => {
        window.addEventListener("load", handleName());
    }, []);// eslint-disable-line react-hooks/exhaustive-deps
    return(
        <td>{name}</td>
    )
}
export default Name