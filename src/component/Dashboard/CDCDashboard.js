
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect, useHistory} from 'react-router-dom';
import { Container, Row,Col } from 'react-bootstrap';
import CDCSideNavBar from './CDCSideNavBar';
import { useState } from 'react';

import HandleUserDetails from '../../redux/logincheck';
import CDCAction from './CDCAction';
function CDCDashboard(props){
    const [sideNavBarOption,setSideNavBarOption]=useState('edit_details')
    var userinfo = HandleUserDetails()
    const history = useHistory()

    if(!userinfo){
        return <Redirect to="/login"/>
    }
     if(userinfo.user_type!=='CDC'){
        history.push("/")
    }
    return(
        <>
        <div className="bodycss py-2" style={{minHeight:"93%"}}>
        <Container className="bg-light rounded p-1">
            <Row>
                <Col md='3'>
                    <CDCSideNavBar sideNavBarOption={sideNavBarOption} setSideNavBarOption={setSideNavBarOption}/>
                </Col>
                <Col md='9'>
                    {sideNavBarOption==="edit_details"?
                    <CDCAction/>:
                    sideNavBarOption==="add_academic"?
                    <h1>add_academic</h1>:null}
                </Col>
            </Row>
        </Container>
        </div>
        </>
    );
}
export default CDCDashboard;