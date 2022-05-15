import { NavLink, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

import './css/login.css'


function Signin()
{

    const navigate = useNavigate();
    const [user, setUser]=useState({
        email:'', password:''
    });  

    let name, value;
    const handleInputs=(e)=>{
        console.log(e);
        name = e.target.name;
        value = e.target.value;
        setUser ({...user, [name]:value});
    }    

    const postData=async(e) =>
    {
        e.preventDefault();
        const {email, password} =user;

            const res = await fetch("/login", {         
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    email, password
                })
            })

            const data= await res.json()

            if(data.status === 422 || !data){
                window.alert("Invalid Login");
                console.log("Invalid Login");
            }

            else
            {
                window.alert("Login Successful");
                console.log("Login Successful");
                navigate("/MyProfile")
            }
    }

    return(

        <>
            <div className='login_page container-fluid mt-5 pb-5' style={{"backgroundSize":"100% 100%"}}>
                
                <div className="row">
                    <div className="col-md-4 mx-auto text-center mb-4" style={{"fontSize": "25px"}}>
                        MY ACCOUNT 
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-4 mx-auto m-3 ">
                        
                    <center> <h2> Sign in </h2> </center>

                        <form method='post'>
                            
                            <div className="input-group my-4">
                            <span className="input-group-text">@</span>
                            <input type="text" className="form-control" placeholder="Username / e-mail" name="email" value={user.email} onChange={handleInputs} />
                            </div>

                            <div className="input-group my-4">
                            <span className="input-group-text"> <i className="fa-solid fa-lock"></i> </span>
                            <input type="password" className="form-control" placeholder="Password" name="password" value={user.password} onChange={handleInputs} />
                            </div>

                            <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">
                                Keep me logged in
                            </label>
                            </div>

                            <button type="submit" className="btn w-100 my-3 sign_in_btn" onClick={postData}> Sign in <i className="fa-solid fa-arrow-right-to-bracket"></i> </button>

                            <h6 className="text-center"><a href="#"> Forgot Your Password? </a></h6>

                            <NavLink to={'/signup'} className="nav-link">
                                <button type="submit" className="btn w-100 my-4 sign_up_btn"> <i class="fa-solid fa-user"></i> Create a New Account </button>
                            </NavLink>
                        
                        </form>
                    </div>
                </div>    
            
            </div>
        </>
    )
}


export default Signin;