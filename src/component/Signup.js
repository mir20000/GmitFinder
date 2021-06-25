import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useHistory} from 'react-router-dom';
import { useState } from 'react';
import Axios from 'axios'

function Signup(){
    const [name,setName]=useState()
    const [phone,setPhone]=useState()
    const [email,setEmail]=useState()
    const [dateOfBirth,setDateOfBirth]=useState()
    const [gender,setGender]=useState()
    const [userType,setUserType]=useState()
    const [password,setPassword]=useState()
    const [confirmPassword,setConfirmPassword]=useState()
    const [message,setMessage]=useState()
    //console.log([name,phone,email,dateOfBirth,gender,userType,password,confirmPassword])
    const history = useHistory()

    const handleSignup = (e) =>{
        e.preventDefault()
        Axios.post('http://localhost:4555/signup',{
            name:name,
            user_type:userType,
            email: email,
            phone:phone,
            password: password,
            confirm_password: confirmPassword,
            gender:gender,
            dob:dateOfBirth
        }).then((response)=>{
            if (response.data.message) {
                setMessage(response.data.message)
            }else{
                console.log(response)
                history.push('/login')
            }
            
        })
    }


    return(
        <>
            <div className="d-flex justify-content-center align-items-center fontstyle bodycss" style={{height:'93%'}}>
                <div className="container" style={{marginRight: "50%",marginLeft: "50%"}}>
                    <div className="card carddesign formround" style={{width: "30rem",backgroundColor: "rgba(255, 255, 255, 0.4)",borderRadius: "3rem"}}>
                        <div className="p-4">
                            <form>
                                <h1 className="text-white">&nbsp;<i className="fa fa-user" aria-hidden="true"></i>&nbsp; SignUp</h1>
                                <div className="form-group">
                                    <input type="text" className="rounded-pill form-control form-round" id="exampleInputname1" aria-describedby="nameHelp" onChange={(e)=>{setName(e.target.value)}} placeholder="Enter name"/>
                                </div>
                                <div className="form-group">
                                <input type="number" className="rounded-pill form-control form-round" id="exampleInputPhone1" aria-describedby="phoneHelp" onChange={(e)=>{setPhone(e.target.value)}} placeholder="Enter phone"/>
                                </div>
                                <div className="form-group">
                                <input type="email" className="rounded-pill form-control form-round" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter email"/>
                                </div>
                                <div className="form-group">
                                    <label className="text-white">&nbsp; Date of Birth:</label>
                                <input type="date" onChange={(e)=>{setDateOfBirth(e.target.value)}} className="rounded-pill form-control form-round" id="exampleInputdate1" aria-describedby="" placeholder=""/>
                                </div>
                                <div className="form-group">
                                    <select className="rounded-pill form-control" onChange={(e)=>{setGender(e.target.value)}} defaultValue=''>
                                        <option value='' disabled>Gender</option>
                                        <option value='Male'>Male</option>
                                        <option value='Female'>Female</option>
                                        <option value='Other'>Other</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <select className="rounded-pill form-control" onChange={(e)=>{setUserType(e.target.value)}} defaultValue=''>
                                        <option value='' disabled>User Type</option>
                                        <option value='Student'>Student</option>
                                        <option value='HR'>HR</option>
                                        <option value='Other'>Other</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                <input type="password" className="rounded-pill form-control form-round" id="exampleInputPassword1" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password"/>
                                </div>
                                <div className="form-group">
                                <input type="password" className="rounded-pill form-control form-round" id="exampleInputConfPassword1" onChange={(e)=>{setConfirmPassword(e.target.value)}} placeholder="Confirm Password"/>
                                </div>
                                <h5 className='text-white'>{message}</h5>
                                <button type="submit" className="btn btn-primary btn-block rounded-pill form-round" onClick={(e)=>{handleSignup(e)}}
                                disabled={name&&phone&&email&&dateOfBirth&&gender&&userType&&password&&confirmPassword?false:true}
                                >SignUp</button>
                            </form>
                            <div className="p-1 d-flex justify-content-center">
                            <Link to="/login"><button type="submit" className="btn btn-sm btn-info rounded-pill form-round">LogIn</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Signup;