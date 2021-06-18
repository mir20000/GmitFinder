import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useHistory } from 'react-router-dom'
import jwt from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { login } from '../redux/useSlice';
// import HandleUserDetails from '../redux/logincheck.js'
import { useState } from 'react';
import Axios from 'axios'
function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [massage, setMassage] = useState();
    const history = useHistory()
    const dispatch =useDispatch()

    // const userinfo=HandleUserDetails()

    const handleLogin = (e) =>{
        e.preventDefault()
        Axios.post('http://localhost:4555/login',{
            email: email,
            password: password,
        }).then((response)=>{
            console.log(response)
            if (response.data.access){
                const token1=response.data.access;
                localStorage.setItem('token',token1)
                const user = jwt(token1)
                console.log(user);
                dispatch(
                    login({
                        id: user.id,
                        name: user.username,
                        user_type: user.user_type,
                       
                    })
                )
                if(user.user_type==='Student'){
                    history.push('/studentdashboard')
                }else{
                    history.push('/')
                }
                
                console.log(user.username);
            }
            if (response.data.message) {
                setMassage(response.data.message)
            }
        })
    }

    return(
        <>
        <div className="d-flex justify-content-center align-items-center fontstyle bodycss" style={{height:'93%'}}>
            <div className="container" style={{marginRight: "50%",marginLeft: "50%"}}>
                <div className="card carddesign formround" style={{minWidth: "30rem",backgroundColor: "rgba(255, 255, 255, 0.4)",borderRadius: "3rem"}}>
                    <div className="p-4">
                        <form>
                            <h1 className="text-white">&nbsp;LogIn</h1>
                            <div className="form-group">
                            <input type="email" className="form-control form-round" id="exampleInputEmail1" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter email"/>
                            </div>
                            <div className="form-group">
                            <input type="password" className="form-control form-round" id="exampleInputPassword1" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password"/>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block  form-round" onClick={(e)=>{handleLogin(e)}}>Login</button>
                        </form>
                        <h5 className='text-white'>{massage}</h5>
                        
                        <div className="p-1 d-flex justify-content-center">
                        <Link to="/signup"><button type="submit" className="btn btn-sm btn-info  form-round" >SignUp</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>

        </>
    );
}
export default Login;