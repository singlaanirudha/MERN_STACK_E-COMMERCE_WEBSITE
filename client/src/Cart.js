import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './css/cart.css'

function Cart()
{

    const navigate = useNavigate();
    const [cart, setcart]=useState({
        username:''
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
            setcart({...cart, username:data.username});
            
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
        <div className='cart_box pb-5'>
                <center className='mt-3'>
                    <h3>Welcome Back !! <i class="fa-solid fa-hands-clapping" style={{"fontSize":50}}></i></h3>
                    <h1> <u> {cart.username} </u> </h1>
                    <h3>Start Where You Left !!</h3>
                    <h2 className='mt-5'> <u> MY CART </u> </h2>
                </center>

                {/* product in card start */}

                <div className='container-fluid mt-5'>
                    <div className='row  p-2 my-5'>
                        
                        <div className='col-md-5 offset-md-1 mx-auto cart_item_card'>

                            <div className='p-5 text-start ps-0' style={{"float":"left"}}>
                                <h2>Product Name</h2>   
                                <h6>In Stock</h6>
                                <h5>Prime Included</h5>
                                <h3>Delivery Date</h3>       
                            </div>

                            <div className='p-3 mt-5 text-center' style={{"float":"right"}}>
                                <h3 className='mrp'><i class="fa-solid fa-indian-rupee-sign me-2"></i>MRP</h3>
                                <h1><i class="fa-solid fa-indian-rupee-sign me-2"></i>Selling Price</h1>       
                            </div>

                        </div>

                    </div>
                </div>

                {/* product in card end */}

                {/* total amount start */}

                <div className='container-fluid my-5 text-center'>
                    <div className='row'>
                        <div className='col-md-4 mx-auto py-3 total_amt_card'>
                            <h4>Total Amount - </h4> <br />
                            <h1> <i class="fa-solid fa-indian-rupee-sign me-2"></i> 
                            <u> Amount </u>
                            </h1>

                            <button className='btn w-75 buy_btn mt-5' type='button'>
                                <h4>Proceed To Checkout</h4>
                            </button>
                        </div>
                    </div>
                </div>

                {/* total amount end */}

        </div>

        </>
    )
}

export default Cart;