import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row,Form,Col , Button } from 'react-bootstrap'
import { useState } from 'react'
import HandleUserDetails from '../../redux/logincheck';
import axios from 'axios';

function EditSkill(props) {
    const [skillName,setSkillName]=useState('')
    const [date,setDate]=useState('')

    var userinfo = HandleUserDetails()

    function handleInsert() {
        axios.post(
            "http://localhost:4555/insertskill",
            {
                user_id:userinfo.id,
                skill:skillName,
                date:date
            }
        ).then((data)=>{
            window.location.reload()
        })
    }

    return(
        <>
        <Container fluid>
        <Row className="d-flex justify-content-center py-3">
            <h3 style={{backgroundColor:"#2c2a88",color:"white"}} className="d-flex justify-content-center w-100">Add Skill</h3>
        </Row>
        <Row className="d-flex justify-content-center p-3">
            <Col md="6">
            <Form.Label>
                .
            </Form.Label>
                <Form.Control onChange={(e)=>{setSkillName(e.target.value)}} placeholder="Skill Name" />
            </Col>
            <Col md="6">
            <Form.Label>
                Learned Date
            </Form.Label>
            <Form.Control onChange={(e)=>{setDate(e.target.value)}} type="date" />
            </Col>
            
        </Row>
        <Row >
            <Button className="mx-4" onClick={()=>{handleInsert()}}>Submit For Review</Button>
        </Row>
        </Container>
        </>
    )
}
export default EditSkill;