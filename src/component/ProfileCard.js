import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';

function ProfileCard(props){
    const [userdata, setUserData]=useState()
    function getUserdata(){
        axios.post(
            "http://localhost:4555/profiledata",
            {
                id:props.id
            }
        ).then((dbData)=>{
            setUserData(dbData.data[0])

        })

    }
    useEffect(() => {
        getUserdata();
        
   }, []);// eslint-disable-line react-hooks/exhaustive-deps

    return(
        <>
        {userdata?<Link to={`/profileviewer/${userdata.id}`} style={{textDecoration: 'none',color: 'inherit'}}>
            <div className="card mb-3" >
                {userdata?<div className="row no-gutters">
                    <div className="col-md-3 text-center">
                        <img src="" alt="..." width='100%'/>
                    </div>
                    <div className="col-md-9">
                        <div className="card-body">
                            <h5 className="card-title">{userdata.name}</h5>
                            <p className="card-text">{userdata.email}</p>
                            <p className="card-text">{userdata.phone}</p>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>:null}
            </div>     
        </Link>:null}
        </>
    );
}
export default ProfileCard;