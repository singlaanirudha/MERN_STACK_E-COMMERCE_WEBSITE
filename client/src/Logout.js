// import react from 'react';
// import {userContext} from './Header';
// import {useEffect, useContext} from 'react';
// import {useNavigate} from 'react-router-dom';
// import { header } from 'express/lib/request';

 
function Logout()
{

    // const [state, dispatch]= useContext(userContext)
    // const navigate = useNavigate();
    // useEffect(() =>
    // {
    //     fetch('/logout',{
    //         method:"GET",
    //         headers:{
    //             Accept:"application/json",
    //             "Content-Type":"application/json"
    //         },
    //         credentials:"include"
    //     }).then((res) =>{
    //         // dispatch({type:"USER", payload:false});
    //         navigate('/signin', {replace:true});
    //         if(res.status!=200){
    //             const error= new Error(res.error);
    //             throw error;
    //         }
    //     }).catch((err)=> {
    //         console.log(err);
    //     })
    // })
    return(
        <>
            <button type="button" class="btn btn-danger w-50">
                Logout <i class="fa-solid fa-person-walking" /> 
            </button>
        </>
    )
}

export default Logout;