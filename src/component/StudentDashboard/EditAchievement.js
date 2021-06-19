import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row,Form,Col , Button } from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios';
import HandleUserDetails from '../../redux/logincheck';

function EditAchievement(props) {
    const [achievementName,setAchievementName]=useState('')
    const [eventName,setEventName]=useState('')
    const [date,setDate]=useState('')
    const [decriptionName,setDecriptionName]=useState('')

    var userinfo = HandleUserDetails()

    function handleInsert(params) {
        axios.post(
            "http://localhost:4555/insertachievement",
            {
                user_id:userinfo.id,
                topic:achievementName,
                org_name:eventName,
                date:date,
                note:decriptionName
            }
        ).then((data)=>{
            window.location.reload()
        })
    }

    return(
        <>
        <Container fluid>
        <Row className="d-flex justify-content-center py-3">
            <h3 style={{backgroundColor:"#2c2a88",color:"white"}} className="d-flex justify-content-center w-100">Add Achievement</h3>
        </Row>
        <Row className="d-flex justify-content-center p-3">
            <Col md="6">
                <Form.Control onChange={(e)=>{setAchievementName(e.target.value)}} placeholder="Achievement Name" />
            </Col>
            <Col md="6">
                <Form.Control onChange={(e)=>{setEventName(e.target.value)}} placeholder="Event Name" />
            </Col>
        </Row>
        <Row className="d-flex justify-content-center p-3">
            <Col md="12">
            <Form.Label>
                 Date
            </Form.Label>
            <Form.Control onChange={(e)=>{setDate(e.target.value)}} type="date" />
            </Col>
        </Row>
        <Row className="d-flex justify-content-center p-3">
            <Col md="12">
            <Form.Control as="textarea" onChange={(e)=>{setDecriptionName(e.target.value)}} placeholder="Description" />
            </Col>
        </Row>
        <Row >
            <Button className="mx-4" onClick={()=>{handleInsert()}}>Submit For Review</Button>
        </Row>
        </Container>
        </>
    )
}
export default EditAchievement;