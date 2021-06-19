import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row,Form,Col , Button } from 'react-bootstrap'
import { useState,useEffect} from 'react'
import HandleUserDetails from '../../redux/logincheck';
import axios from 'axios';

function EditInformation(props) {
    const [name,setName]=useState('')
    const [emailName,setEmailName]=useState('')
    const [fatherName,setFatherName]=useState('')
    const [phone,setPhone]=useState('')
    const [address,setAddress]=useState('')
    const [dob,setDob]=useState('')
    const [gender,setGender]=useState('')
    const [gitHub,setGitHub]=useState('')
    const [linkedIn,setLinkedIn]=useState('')

    var userinfo = HandleUserDetails('')
    
    const profileData=()=>{
        axios.post('http://localhost:4555/allcvdata',
        {
            id:userinfo.id
        }
        ).then((dbData)=>{
            setName(dbData.data[0].name)
            setEmailName(dbData.data[0].email)
            setFatherName(dbData.data[0].father_name)
            setPhone(dbData.data[0].phone)
            setAddress(dbData.data[0].address)
            setDob(dbData.data[0].date_of_birth)
            setGender(dbData.data[0].gender)
            setGitHub(dbData.data[0].github)
            setLinkedIn(dbData.data[0].linkedin)
            
        })
    }
    useEffect(() => {
        profileData();
   }, []);// eslint-disable-line react-hooks/exhaustive-deps

    function handleInsert() {
        axios.post(
            "http://localhost:4555/insertyourinfo",
            {
                id:userinfo.id,
                name:name,
                phone:phone,
                email:emailName,
                dob:dob,
                gender:gender,
                father_name:fatherName,
                address:address,
                github:gitHub,
                linkedin:linkedIn
            }
        ).then((data)=>{
            window.location.reload()
        })
    }


    return(
        <>
        <Container fluid>
        <Row className="d-flex justify-content-center py-3">
            <h3 style={{backgroundColor:"#2c2a88",color:"white"}} className="d-flex justify-content-center w-100">Edit Presonal Information</h3>
        </Row>
        <Row className="d-flex justify-content-center p-3">
            <Col md="6">
                <Form.Control value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Your Name" />
            </Col>
            <Col md="6">
                <Form.Control value={emailName} onChange={(e)=>{setEmailName(e.target.value)}} placeholder="Your Email" />
            </Col>
        </Row>
        <Row className="d-flex justify-content-center p-3">
            <Col md="4">
                <Form.Control value={fatherName} onChange={(e)=>{setFatherName(e.target.value)}} placeholder="Your Father Name" />
            </Col>
            <Col md="4">
                <Form.Control value={phone} onChange={(e)=>{setPhone(e.target.value)}} placeholder="Your Phone" />
            </Col>
            <Col md="4">
                <Form.Control value={address} onChange={(e)=>{setAddress(e.target.value)}} placeholder="Your Address" />
            </Col>
        </Row>
        <Row className="d-flex justify-content-center p-3">
            <Col md="6">
                <Form.Label>
                    Your Date of Birth
                </Form.Label>
                <Form.Control value={dob} onChange={(e)=>{setDob(e.target.value)}} type="date" />
            </Col>
            <Col md="6">
                <Form.Label>
                    Your Gender
                </Form.Label>
                <select className="form-control" onChange={(e)=>{setGender(e.target.value)}} defaultValue={gender}>
                    <option value="" disabled></option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </Col>
        </Row>
        <Row className="d-flex justify-content-center p-3">
            <Col md='6'>
                <Form.Control value={gitHub} onChange={(e)=>{setGitHub(e.target.value)}} placeholder="GitHub Id" />
            </Col>
            <Col md='6'>
                <Form.Control value={linkedIn} onChange={(e)=>{setLinkedIn(e.target.value)}} placeholder="LinkedIn Id" />
            </Col>
        </Row>
        <Row >
            <Button className="mx-4" onClick={()=>{handleInsert()}}>Submit For Review</Button>
        </Row>
        </Container>
        </>
    )
}
export default EditInformation;