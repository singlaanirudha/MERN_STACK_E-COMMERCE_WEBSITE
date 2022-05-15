// SIGN UP PAGE

import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import './css/login.css'


function Signup()
{

    const navigate = useNavigate();
        const [user, setUser]=useState({
            email:'', fname:'', mobile:'', pswd:'', cnfmpswd:''
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
        const {email, fname, mobile, pswd, cnfmpswd} =user;

            const res = await fetch("/register", {         
                method:"POST",
                headers:{   
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    email, fname, mobile, pswd, cnfmpswd
                })
            })

            const data= await res.json()

            if(data.status === 422 || !data)
            {
                window.alert("Invalid Register");
                console.log("Invalid Register");
            }

            else
            {
                window.alert("Registration Successful");
                console.log("Registration Successful");
                navigate("/Signin")
            }
    }

    return(
        <>
        <div className="login_page mt-5 pb-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 mx-auto text-center mb-4" style={{"fontSize": "25px"}}>
                        MY ACCOUNT 
                    </div>
                </div>


                <div className="row justify-content-center">
                    
                    <div className="col-md-4 mx-auto m-3" style={{"background": "#f3f3f3"}}>
                        
                        <center> <h2> Create a new Account </h2> </center>

                        <form method='post'>

                            <div className="input-group my-4">
                            <span className="input-group-text"> <i className="fa-regular fa-envelope"></i> </span>
                            <input id="email" type="email" className="form-control" placeholder="e-mail*" name='email' value={user.email} onChange={handleInputs}  />
                            </div>

                            <div className="input-group my-4">
                            <span className="input-group-text"> <i className="fa-regular fa-user"></i> </span>
                            <input  type="text" className="form-control" placeholder="full name*" name='fname' value={user.fname} onChange={handleInputs} />
                            </div>

                            <div className="input-group my-4">
                            <span className="input-group-text"> <i class="fa-solid fa-mobile-screen-button"></i> </span>
                            <input id="contactno" type="text" className="form-control" placeholder="mobile number*" name='mobile' value={user.mobile} onChange={handleInputs} />
                            </div>

                            <div className="input-group my-4">
                            <span className="input-group-text"> <i className="fa-solid fa-lock"></i> </span>
                            <input id="pswd" type="password" className="form-control" placeholder="password*" name='pswd' value={user.pswd} onChange={handleInputs} />
                            </div>

                            <div className="input-group my-4">
                            <span className="input-group-text"> <i className="fa-solid fa-lock"></i> </span>
                            <input id="cnfmpswd" type="password" className="form-control" placeholder="confirm password*" name='cnfmpswd' value={user.cnfmpswd} onChange={handleInputs} />
                            </div>

                            <button id="submit" type="submit" className="btn w-100 my-4 sign_in_btn" onClick={postData}> Create Account <i className="fa-solid fa-arrow-right-to-bracket"></i> </button>

                            <h6 style={{"line-height": "1.7"}}>By clicking “Create Account” you agree to the xyz.com <a href="#"> Terms of Use </a> and <a href="#"> Privacy Policy. </a> </h6>

                            <NavLink to={'/signin'} className="nav-link">
                                <button className="btn w-100 my-4 fb_signin_btn">  <i class="fa-solid fa-user"></i> Already have an account ? Login. </button>
                            </NavLink>    

                        </form>

                        <h6>*We will never share your details with anyone.</h6>
                        
                    </div>
                </div>
            </div>
        </div>    
        </>
    )
}

export default Signup;