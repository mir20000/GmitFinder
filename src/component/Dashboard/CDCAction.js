import { Container,Nav,ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

import CDCAcademicAction from './CDCAcademicAction'
import CDCSkillAction from './CDCSkillAction';
import CDCProjectAction from './CDCProjectAction';
import CDCAchievementAction from './CDCAchievementAction';


function CDCAction() {
    const [upperLineWidth,setUpperLineWidth]=useState(0)
    const [upperLineSize,setUpperLineSize]=useState(27)
    const [upperContent,setUpperContent]=useState('dashboard')



    function academic() {
        setUpperLineWidth(0);
        setUpperContent('academic')
        setUpperLineSize(27)
    }

    function skill() {
        setUpperLineWidth(28);
        setUpperContent('skill')
        setUpperLineSize(21)
    }

    function achievement() {
        setUpperLineWidth(50);
        setUpperContent('achievement')
        setUpperLineSize(31)
    }

    function project() {
        setUpperLineWidth(85);
        setUpperContent('project')
        setUpperLineSize(15)
    }

    
    return(
        
        <div >
            <Container>
                <div className="my-2">
                    <Nav>
                    <Nav.Item>
                        <Nav.Link onClick={()=>{academic()}} className="text-dark mx-2">Verify Academics</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={()=>{skill()}}  className="text-dark mx-2">Verify Skills</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={()=>{achievement()}} className="text-dark mx-2">Verify Achievements</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={()=>{project()}} className="text-dark mx-2">Verify Project</Nav.Link>
                    </Nav.Item>
                    </Nav>
                    <ProgressBar style={{backgroundColor:"#f8f9fa",height:'3px',width:'600px'}}>
                        <ProgressBar  variant="light" now={upperLineWidth} key={1} />
                        <ProgressBar variant="primary" now={upperLineSize} key={2} />
                    </ProgressBar>       
                </div>
                
                {upperContent==='skill'?<CDCSkillAction/>:
                upperContent==='achievement'?<CDCAchievementAction/>:
                upperContent==='project'?<CDCProjectAction/>:
                <CDCAcademicAction/>}

            </Container>
        </div>
    )
}
export default CDCAction;