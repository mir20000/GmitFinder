import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {PencilSquare} from 'react-bootstrap-icons'
import { Redirect } from 'react-router';
import { Col, Row, Card} from 'react-bootstrap';
import { useState,useEffect } from 'react';
import Axios from 'axios';
import HandleUserDetails from '../redux/logincheck';
// import {Link} from 'react-router-dom';

function StudentProfile(){
    const [profileInfo,setProfileInfo]=useState()

    var userInfo = HandleUserDetails()

    const profileData=()=>{
        Axios.post('http://localhost:4555/myprofiledata',
        {
            id:userInfo.id
        }
        ).then((dbData)=>{
            console.log(dbData)
            setProfileInfo(dbData.data)
        })
    }

    useEffect(() => {
        profileData();
   }, []);// eslint-disable-line react-hooks/exhaustive-deps

if(!userInfo){
    return(
        <Redirect to='login'/>
    )
}

console.log(profileInfo)
    return(
        <>
            <div className="fontstyle bodycss" style={{minHeight:"93%"}}>
                <div className="container">
                    <Row className='p-3'>
                        <Col sm={12} className='my-3'>
                          
                            <Card border="light" className="text-center">
                                <Card.Header>Featured</Card.Header>
                                {profileInfo?
                                <Card.Body>
                                    <img src={`/profilePic/${profileInfo.picture}`} alt="" className='rounded-circle mb-3' height="150px" width="150px"/>
                                    <Card.Title>{profileInfo.name}</Card.Title>
                                    <Card.Text>
                                        Gender: {profileInfo.gender}<PencilSquare/><br/>
                                        Email: {profileInfo.email}<PencilSquare/><br/>
                                        Phone: {profileInfo.phone}<PencilSquare/><br/>
                                        Date of Birth: {profileInfo.date_of_birth}<PencilSquare/><br/>
                                    </Card.Text>
                                </Card.Body>
                                :null}
                                <Card.Footer className="text-muted">GMITFinder</Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
}
export default StudentProfile;