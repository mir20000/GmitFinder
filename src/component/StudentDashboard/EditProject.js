import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row,Form,Col , Button } from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios';
import HandleUserDetails from '../../redux/logincheck';

function EditProject(props) {
    const [projectName,setProjectName]=useState('')
    const [ProjectLink,setProjectLink]=useState('')
    const [gitHubLink,setGitHubLink]=useState('')
    const [startDate,setStartDate]=useState('')
    const [endDate,setEndDate]=useState('')
    const [discription,setDiscription]=useState('')
    
    var userinfo = HandleUserDetails('')

    function handleInsert() {
        axios.post(
            "http://localhost:4555/insertproject",
            {
                user_id:userinfo.id,
                topic:projectName,
                note:discription,
                start_date:startDate,
                end_date:endDate,
                project_link:ProjectLink,
                git_link:gitHubLink
            }
        ).then((data)=>{
            window.location.reload()
        })
    }

    return(
<>
        <Container fluid>
        <Row className="d-flex justify-content-center py-3">
            <h3 style={{backgroundColor:"#2c2a88",color:"white"}} className="d-flex justify-content-center w-100">Add Project</h3>
        </Row>
        <Row className="d-flex justify-content-center p-3">
            <Col md="4">
                <Form.Control onChange={(e)=>{setProjectName(e.target.value)}} placeholder="Project Name" />
            </Col>
            <Col md="4">
                <Form.Control onChange={(e)=>{setProjectLink(e.target.value)}} placeholder="Project Link" />
            </Col>
            <Col md="4">
                <Form.Control onChange={(e)=>{setGitHubLink(e.target.value)}} placeholder="Git Link" />
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
        <Row className="d-flex justify-content-center p-3">
            <Col>
                <Form.Control as="textarea" onChange={(e)=>{setDiscription(e.target.value)}} placeholder="Description" />
            </Col>
        </Row>
        <Row >
            <Button className="mx-4" onClick={()=>{handleInsert()}}>Submit For Review</Button>
        </Row>
        </Container>
        </>
    )
}
export default EditProject;