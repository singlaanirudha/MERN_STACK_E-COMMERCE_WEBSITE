import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './css/contactus.css';

function Contactus()
{

// ---------------------------------------------------GET

    const navigate = useNavigate();
    const [contact, setContact]=useState({
        email:'', username:'', contactno:'', msg:''
    }); 

    const callprofilepage = async()=> {
        try{
            const res=await fetch('/getdata', {
                method:"GET",
                headers:{
                    "Content-Type":"aplication/json"
                },
            });

            const data= await res.json();
            console.log(data);
            setContact({...contact, username:data.username, email:data.email, contactno:data.contactno, msg:data.msg});
            
            if(!res.status=== 200)
            {
                const error= new Error(res.error);
                throw error;
            }
        }
        catch(err){
            console.log(err);
            navigate('/signin')
        }
    }

    useEffect(()=>{
        callprofilepage();
    },
[]);

// --------------------------------------------------------------  POST

    let name, value;
    const handleInputs=(e)=>{
        console.log(e);
        name = e.target.name;
        value = e.target.value;
        setContact ({...contact, [name]:value});
    }    

    const postData=async(e) =>
    {
        e.preventDefault();
        const {email, username, contactno, msg} =contact;

            const res = await fetch("/contact", {         
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    email, username, contactno, msg
                })
            })

            const data= await res.json()

            console.log(data);
            if(data.status === 422 || !data){
                window.alert("Message not sent");
            }

            else
            {
                window.alert("Message sent");
                setContact({...contact, msg:""})
            }
    }

    return(
        <>

            <div className='container-fluid contact_bg py-5'>

                <div className='row text-center'>
                    <div className='col-lg-6 mx-auto text-center' style={{"fontSize":50}}>CONTACT US</div>

                    <h5 className='mt-4'>Enter your details to get a call back from Us.</h5>
                </div>

                <form method='post' className='mx-5 p-4  form_bg'>
                <div class="mb-3">
                    <label class="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" value={contact.email} onChange={handleInputs} />
                </div>
 
                <div class="mb-3">
                    <label class="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="username" value={contact.username} onChange={handleInputs} />
                </div>

                <div class="mb-3">
                    <label class="form-label">Contact Number</label>
                    <input type="text" className="form-control" id="number" name="contactno" value={contact.contactno} onChange={handleInputs} />
                </div>

                <div class="mb-3">
                    <label class="form-label">Your Message</label>
                    <textarea className="form-control" rows={5} placeholder="Leave Your Message Here ...." name="msg" onChange={handleInputs} value={contact.msg}></textarea>
                </div>
            
                <button type="submit" class="btn btn-primary w-100" onClick={postData}>Submit</button>
                </form>

                <h1 className='text-center mt-5'>
                <i class="fa-brands fa-twitter mx-4"></i>
                <i class="fa-brands fa-facebook-f mx-4"></i>
                <i class="fa-brands fa-instagram mx-4"></i>
                <i class="fa-brands fa-youtube mx-4"></i>
                <i class="fa-brands fa-pinterest-p mx-4"></i>
                </h1>

            </div>

        </>
    )
}

export default Contactus;