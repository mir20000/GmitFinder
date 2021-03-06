import { Col, Row,Button,Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import Name from './Name';

function CDCAcademicAction(props) {

    const [orderArray,setOrderArray]=useState()

    function handleLoad(){
                Axios.post('http://localhost:4555/getallacademic',{                                                                             
                }).then((response)=>{                       
                    setOrderArray(response.data)                                            
                    console.log(response.data)                                            
                }) 
        
    }

    function handleApprove(params) {
        Axios.post('http://localhost:4555/setflagacademic',{ 
            id:params,
            flag:true                                                                            
        }).then((response)=>{                       
            window.location.reload()                                          
        }) 
    }
    function handleDeny(params) {
        Axios.post('http://localhost:4555/setflagacademic',{ 
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
                        <th scope="col">Degree</th>
                        <th scope="col">Organization Name</th>
                        <th scope="col">Student</th>
                        <th scope="col">Started</th>
                        <th scope="col">Ended</th>
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
                                 <td>{order.degree}</td>
                                 <td>{order.org_name}</td>
                                 <Name id={order.user_id}/>
                                 <td>{order.start_date?((order.start_date).split("T"))[0]:null}</td>
                                 <td>{((order.end_date).split("T"))[0]}</td>
                                 <td><Button variant="success" size="sm" onClick={()=>{handleApprove(order._id)}}>Approve</Button></td>
                                 <td><Button variant="danger" size="sm" onClick={()=>{handleDeny(order._id)}}>Deny</Button></td>
                             </tr> 
                             )
                        }else{
                            return null
                        }
                            
                        
                    }
                    ):
                        null
                    }   
                    </tbody>
                </Table>
                </Col>
                
            </Row>
        </div>
    )
}
export default CDCAcademicAction;