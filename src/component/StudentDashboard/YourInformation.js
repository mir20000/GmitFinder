import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row,Col , Table } from 'react-bootstrap'
import { useState,useEffect } from 'react'
import axios from 'axios';
import HandleUserDetails from '../../redux/logincheck';

function YourInformation(props) {
        const [profileInfo,setProfileInfo]=useState()
        const [skillInfo,setSkillInfo]=useState()
        const [academicInfo,setAcademicInfo]=useState()
        const [AchievementInfo,setAchievementInfo]=useState()
        const [projectInfo,setProjectInfo]=useState()


        var userinfo = HandleUserDetails()
        
        const profileData=()=>{
            axios.post('http://localhost:4555/allcvdata',
            {
                id:userinfo.id
            }
            ).then((dbData)=>{
                setProfileInfo(dbData.data[0])
                
            })
        }
        const acadData=()=>{
            axios.post('http://localhost:4555/getacademic',
            {
                user_id:userinfo.id
            }
            ).then((dbData)=>{
                setAcademicInfo(dbData.data)
                
            })
        }
       
        const skillData=()=>{
            axios.post('http://localhost:4555/getskill',
            {
                user_id:userinfo.id
            }
            ).then((dbData)=>{
                setSkillInfo(dbData.data)
                
            })
        }
        const achieveData=()=>{
            axios.post('http://localhost:4555/getachievement',
            {
                user_id:userinfo.id
            }
            ).then((dbData)=>{
                setAchievementInfo(dbData.data)
                
            })
        }
        const projectData=()=>{
            axios.post('http://localhost:4555/getproject',
            {
                user_id:userinfo.id
            }
            ).then((dbData)=>{
                setProjectInfo(dbData.data)
                
            })
        }
    
        useEffect(() => {
            profileData();
            acadData();
            skillData();
            achieveData();
            projectData()
       }, []);// eslint-disable-line react-hooks/exhaustive-deps

    return(
        <>
        <Container fluid>
           { profileInfo?<>
           <Row className="d-flex justify-content-center py-3">
                <h3 style={{backgroundColor:"#2c2a88",color:"white"}} className="d-flex justify-content-center w-100">Web CV</h3>
            </Row>
            <Row className="d-flex justify-content-center p-3">
                <Col md="6" className="d-flex justify-content-center ">
                    <h4>{profileInfo.name}</h4>
                </Col>
                <Col md="6" className="#2c2a88">
                    
                </Col>
            </Row>
            <Row style={{backgroundColor:"#ba58ff"}} className="text-white px-3 mx-1">
                Presonal Information
            </Row>
            <Row className="p-4">
                <Col>
                Phone: {profileInfo.phone}<br/>
                Email: {profileInfo.email}<br/>
                Date of Birth: {profileInfo.date_of_birth}<br/>
                Gender: {profileInfo.gender}<br/>
                Father Name: {profileInfo.father_name}<br/>
                Address: {profileInfo.address} <br/>
                GitHub: {profileInfo.github} <br/>
                LinkedIn: {profileInfo.linkedin} <br/>

                </Col>
            </Row>
            <Row style={{backgroundColor:"#ba58ff"}} className="text-white px-3 mx-1">
                Academic Information
            </Row>
            <Row className="text-white px-3 mx-1">
            <Table responsive striped borderless hover>
            <thead>
                <tr>
                <th>Examination Name</th>
                <th>Organization Name</th>
                <th>Marks</th>
                <th>Starting Date</th>
                <th>Ending Date</th>
                </tr>
            </thead>
            <tbody>
            {
                    Array.isArray(academicInfo) ?
                        academicInfo.length!==0?
                            academicInfo.map((result,index)=>{
                                return(
                                <tr key={index}>
                                    <td>{result.degree}</td>
                                    <td>{result.org_name}</td>
                                    <td>{result.marks}</td>
                                    <td>{result.start_date?((result.start_date).split("T"))[0]:null}</td>
                                    <td>{((result.end_date).split("T"))[0]}</td>
                                   
                                </tr>
                                ) 
                            }):
                            null:
                        null
                    }
            </tbody>
            </Table>
            </Row>
            <Row style={{backgroundColor:"#ba58ff"}} className="text-white px-3 mx-1">
                Skill Information
            </Row>
            <Row className="text-white px-3 mx-1">
            <Table responsive striped borderless hover>
            <thead>
                <tr>
                <th>Skill Name</th>
                <th>Learned In</th>
                </tr>
            </thead>
            <tbody>
            {
                    Array.isArray(skillInfo) ?
                        skillInfo.length!==0?
                            skillInfo.map((result,index)=>{
                                return(
                                <tr key={index}>
                                    <td>{result.skill}</td>
                                    <td>{((result.date).split("T"))[0]}</td>
                                   
                                </tr>
                                ) 
                            }):
                            null:
                        null
                    }
            </tbody>
            </Table>
            </Row>
            <Row style={{backgroundColor:"#ba58ff"}} className="text-white px-3 mx-1">
                Achievement Information
            </Row>
            <Row className="text-white px-3 mx-1">
            <Table responsive striped borderless hover>
            <thead>
                <tr>
                <th>Achievement Name</th>
                <th>Event Name</th>
                <th>Description</th>
                <th>Date</th>
                </tr>
            </thead>
            <tbody>
            {
                    Array.isArray(AchievementInfo) ?
                        AchievementInfo.length!==0?
                            AchievementInfo.map((result,index)=>{
                                return(
                                <tr key={index}>
                                    <td>{result.topic}</td>
                                    <td>{result.org_name}</td>
                                    <td>{result.note}</td>
                                    <td>{((result.date).split("T"))[0]}</td>
                                   
                                </tr>
                                ) 
                            }):
                            null:
                        null
                    }
            </tbody>
            </Table>
            </Row>
            <Row style={{backgroundColor:"#ba58ff"}} className="text-white px-3 mx-1">
                Project Information
            </Row>
            <Row className="text-white px-3 mx-1">
            <Table responsive striped borderless hover>
            <thead>
                <tr>
                <th>Project Name</th>
                <th>Description</th>
                <th>Project Link</th>
                <th>Git Link</th>
                <th>Start Date</th>
                <th>End Date</th>
                </tr>
            </thead>
            <tbody>
            {
                    Array.isArray(projectInfo) ?
                        projectInfo.length!==0?
                            projectInfo.map((result,index)=>{
                                return(
                                <tr key={index}>
                                    <td>{result.topic}</td>
                                    <td>{result.note}</td>
                                    <td>{result.project_link}</td>
                                    <td>{result.git_link}</td>
                                    <td>{((result.start_date).split("T"))[0]}</td>
                                    <td>{((result.end_date).split("T"))[0]}</td>
                                   
                                </tr>
                                ) 
                            }):
                            null:
                        null
                    }
            </tbody>
            </Table>
            </Row>
            </>: null}
           
           
        </Container>
        </>
    )
}
export default YourInformation;