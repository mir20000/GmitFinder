
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect} from 'react-router-dom';
import { Container, Row,Col } from 'react-bootstrap';
import SideNavBar from './SideNavBar';
import { useState } from 'react';
import EditInformation from './EditInformation';
import YourInformation from './YourInformation';
import HandleUserDetails from '../../redux/logincheck';
import EditAcademic from './EditAcademic';
import EditSkill from './EditSkill';
import EditProject from './EditProject';
import EditAchievement from './EditAchievement';
function StudentDashboard(props){
    const [sideNavBarOption,setSideNavBarOption]=useState('your_details')
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
                    <SideNavBar sideNavBarOption={sideNavBarOption} setSideNavBarOption={setSideNavBarOption}/>
                </Col>
                <Col md='9'>
                    {sideNavBarOption==="edit_details"?
                    <EditInformation/>:
                    sideNavBarOption==="add_academic"?
                    <EditAcademic/>:
                    sideNavBarOption==="add_skill"?
                    <EditSkill/>:
                    sideNavBarOption==="add_project"?
                    <EditProject/>:
                    sideNavBarOption==="add_achievement"?
                    <EditAchievement/>:
                    sideNavBarOption==="your_details"?
                    <YourInformation/>:null}
                </Col>
            </Row>
        </Container>
        </div>
        </>
    );
}
export default StudentDashboard;