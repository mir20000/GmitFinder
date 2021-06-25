import { Col, Row,Button,Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import Name from './Name';

function CDCProjectAction(props) {

    const [orderArray,setOrderArray]=useState()

    function handleLoad(){
                Axios.post('http://localhost:4555/getallproject',{                                                                             
                }).then((response)=>{                       
                    setOrderArray(response.data)                                            
                    console.log(response.data)                                            
                }) 
        
    }

    function handleApprove(params) {
        Axios.post('http://localhost:4555/setflagproject',{ 
            id:params,
            flag:true                                                                            
        }).then((response)=>{                       
            window.location.reload()                                          
        }) 
    }
    function handleDeny(params) {
        Axios.post('http://localhost:4555/setflagproject',{ 
            id:params,
            flag:false                                                                            
        }).then((response)=>{                       
            window.location.reload()                                          
        }) 
    }
    
    

        useEffect(() => {
            window.addEventListener("load", handleLoad());
        }, []);// eslint-disable-line react-hooks/exhaustive-deps

    return(
        <div className="bg-light rounded shadow">
            <Row className='px-4' style={{minHeight:'150px'}}>
                <Col>
                <Table responsive>
                    <thead>
                        <tr>
                        <th scope="col">Project Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Project Link</th>
                        <th scope="col">Git Link</th>
                        <th scope="col">Student</th>
                        <th scope="col">Starting Date</th>
                        <th scope="col">Ending Date</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                       Array.isArray(orderArray)
                       ? 
                       orderArray.map(function(order, i){
                        if (!('flag' in order)) {
                            return(
                             <tr key={i}>
                                 <td>{order.topic}</td>
                                 <td>{order.note}</td>
                                 <td>{order.project_link}</td>
                                 <td>{order.git_link}</td>
                                 <Name id={order.user_id}/>
                                 <td>{((order.start_date).split("T"))[0]}</td>
                                 <td>{((order.end_date).split("T"))[0]}</td>
                                 <td><Button variant="success" size="sm" onClick={()=>{handleApprove(order._id)}}>Approve</Button></td>
                                 <td><Button variant="danger" size="sm" onClick={()=>{handleDeny(order._id)}}>Deny</Button></td>
                             </tr> 
                             )
                        }else{
                            return null
                        }
                            
                        
                    }
                    ):null
                    }   
                    </tbody>
                </Table>
                </Col>
                
            </Row>
        </div>
    )
}
export default CDCProjectAction;