import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row,Form,Col , Button } from 'react-bootstrap'
// import { useState } from 'react'
// import axios from 'axios';

function EditProject(props) {


    return(
<>
        <Container fluid>
        <Row className="d-flex justify-content-center py-3">
            <h3 style={{backgroundColor:"#2c2a88",color:"white"}} className="d-flex justify-content-center w-100">Add Project</h3>
        </Row>
        <Row className="d-flex justify-content-center p-3">
            <Col md="4">
                <Form.Control placeholder="First name" />
            </Col>
            <Col md="4">
                <Form.Control placeholder="Last name" />
            </Col>
            <Col md="4">
                <Form.Control placeholder="Last name" />
            </Col>
        </Row>
        <Row className="d-flex justify-content-center p-3">
            <Col md="6">
                <Form.Control placeholder="First name" />
            </Col>
            <Col md="6">
                <Form.Control placeholder="Last name" />
            </Col>
        </Row>
        <Row className="d-flex justify-content-center p-3">
            <Col>
                <Form.Control as="textarea" placeholder="Leave a comment here" />
            </Col>
        </Row>
        <Row >
            <Button className="mx-4">Submit For Review</Button>
        </Row>
        </Container>
        </>
    )
}
export default EditProject;