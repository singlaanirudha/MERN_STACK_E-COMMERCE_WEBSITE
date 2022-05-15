import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './css/profile.css'

import profile_img from './imgs/demo_profile.png'

function Profile()
{

    const navigate = useNavigate();
    const[userData, setUserData]= useState({});

    const callprofilepage = async()=> {
        try{
            const res=await fetch('/getdata', {
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"aplication/json"
                },
                credentials:"include"
            });

            const data= await res.json();
            console.log(data);
            setUserData(data);
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

    return(
        <>

        <div className="container-fluid">

            <div className="row row1">

                <div className="col-md-5 mx-auto text-center mt-5"> 
                <h3> Welcome Back !! <i class="fa-solid fa-hands-clapping"></i></h3> <br />
                <h1>{userData.username} <i class="fa-solid fa-hand-peace"></i></h1> 
                </div>

            </div>

            <div className="row">
                
                <div className="col-lg-2 mx-auto p-0 profile_cont">
                    <img src={profile_img} className="profile_img" alt='' />
                </div>
                
            </div>

            <div className="row py-5 mt-5 row3" style={{"overflowX":"hidden"}}>
                
                <div className="col-md-5 p-4 text-center mx-auto profile_card">

                    <h4>Name - </h4>  
                    <h1><b> {userData.username} </b></h1>

                    <h4 class="mt-5">E-Mail id - </h4>  
                    <h1><b> {userData.email} </b></h1>

                    <h4 class="mt-5">Contact Number - </h4>  
                    <h1><b> {userData.contactno} </b></h1>
                    
                </div>

            </div>
                
        </div>
                        
        </>
    )
}

export default Profile;