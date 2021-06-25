
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect} from 'react-router-dom';
import { Container, Row,Col } from 'react-bootstrap';
import HRSideNavBar from './HRSideNavBar';
import { useState } from 'react';
import HandleUserDetails from '../../redux/logincheck';

function HRDashboard(props){
    const [sideNavBarOption,setSideNavBarOption]=useState('edit_details')
    var userinfo = HandleUserDetails()

    if(!userinfo){
        return <Redirect to="/login"/>
    }
    return(
        <>
        <div className="bodycss py-2" style={{minHeight:"93%"}}>
        <Container className="bg-light rounded p-1">
            <Row>
                <Col md='3'>
                    <HRSideNavBar sideNavBarOption={sideNavBarOption} setSideNavBarOption={setSideNavBarOption}/>
                </Col>
                <Col md='9'>
                <h1>HR Dashboard</h1>
                    {sideNavBarOption==="edit_details"?
                    <h1>edit_details</h1>:
                    sideNavBarOption==="add_academic"?
                    <h1>add_academic</h1>:null}
                </Col>
            </Row>
        </Container>
        </div>
        </>
    );
}
export default HRDashboard;