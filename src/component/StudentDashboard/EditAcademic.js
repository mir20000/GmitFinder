import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row,Form,Col , Button } from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios';
import HandleUserDetails from '../../redux/logincheck';

function EditAcademic(props) {
    const [examName,setExamName]=useState('')
    const [orgName,setOrgName]=useState('')
    const [marks,setMarks]=useState('')
    const [startDate,setStartDate]=useState('')
    const [endDate,setEndDate]=useState('')

    var userinfo = HandleUserDetails()

    function handleInsert(params) {
        axios.post(
            "http://localhost:4555/insertacademic",
            {
                user_id:userinfo.id,
                degree:examName,
                org_name:orgName,
                start_date:startDate,
                end_date:endDate,
                marks:marks
            }
        ).then((data)=>{
            window.location.reload()
        })
    }

    return(
        <>
        <Container fluid>
        <Row className="d-flex justify-content-center py-3">
            <h3 style={{backgroundColor:"#2c2a88",color:"white"}} className="d-flex justify-content-center w-100">Add Academic</h3>
        </Row>
        <Row className="d-flex justify-content-center p-3">
            <Col md="6">
                <Form.Control onChange={(e)=>{setExamName(e.target.value)}} placeholder="Examination Name" />
            </Col>
            <Col md="6">
                <Form.Control onChange={(e)=>{setOrgName(e.target.value)}} placeholder="Organization Name" />
            </Col>
        </Row>
        <Row className="d-flex justify-content-center p-3">
            <Col md="6">
                <Form.Control onChange={(e)=>{setMarks(e.target.value)}} placeholder="Marks" />
            </Col>
        </Row>
        <Row className="d-flex justify-content-center p-3">
            <Col md="6">
            <Form.Label>
                Starting Date
            </Form.Label>
            <Form.Control onChange={(e)=>{setStartDate(e.target.value)}} type="date" />
            </Col>
            <Col md="6">
            <Form.Label>
                Ending Date
            </Form.Label>
            <Form.Control onChange={(e)=>{setEndDate(e.target.value)}} type="date" />
            </Col>
        </Row>
        <Row >
            <Button className="mx-4" onClick={()=>{handleInsert()}}>Submit For Review</Button>
        </Row>
        </Container>
        </>
    )
}
export default EditAcademic;