import { useState, useEffect } from 'react';

import './css/samsungshop.css'

function Samsung()
{

// Get API for Products ----------------------------------------------------------

const[product, setproduct]= useState([{
        product_img:'',
        product_name:'',
        product_mrp:'',
        product_price:'',
        product_date:''
    }]);

useEffect(()=> {
    fetch('/getproduct').then(res =>{
        if(res.ok){
            return res.json()
        }
    }).then(jsonRes =>setproduct(jsonRes));
},[]);

// --------------------------------------------------------------

// const [cart, setcart]=useState({
//     product_name:'', product_mrp:'', product_price:'', product_date:'' 
// });  

let name, value;
const handleInputs=(e)=>{
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setproduct ({...product, [name]:value});
}    

const postData=async(e) =>
{
    e.preventDefault();
    const {product_name, product_mrp, product_price, product_date} =product;

        const res = await fetch("/cart", {         
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                product_name, product_mrp, product_price, product_date
            })
        })

        const data= await res.json()

        if(data.status === 422 || !data){
            window.alert("Added To Cart");
        }

        else
        {
            window.alert("Please Add To Cart Again");
        }
}

// -------------------------------------------------------------

    return(
        <>

<div className='container-fluid'>
    <div className='row text-center'>
        <div className='col-4 my-4 mx-auto'><u><h1>SAMSUNG SHOP</h1></u></div>
    </div>
    <div className='row banner_bg'>
        <div className='col-md-4 offset-md-7 text-center text-light pt-5'>
            <h1 className='my-4'>Galaxy Note</h1>
            <h4 className='my-4'>The Powerphone that empowers your work and play</h4>
            <button className='btn bg-light w-25 my-4'>See All</button>
        </div>
    </div>
</div>        
    

<div className='container-fluid mt-5'>
    <div className='row'>
       
        {product.map((productloop)=> {
            return(
                <>
                {/* key={productloop.id} */}
                    <div className='col'>
                        <div className='product_form'>
                            <div className='product_card_dmns p-0 pb-2 text-center m-5'>

                                <div className='w-100 p_img_dmns mb-3'> <img src={'http://localhost:3000/product_imgs/'+productloop.product_img} alt='Product_Image' className='p_img_size' /> </div>

                            {/* form start */}

                            <form method='post'>  

                                <div className='w-100 text-center h6' style={{"fontWeight":600}}>
                                    <input type='text' name='product_name' className='form-control text-center product_name' value={productloop.product_name} onChange={handleInputs}></input>
                                </div>

                                <i className="fa-solid fa-star rating_checked"></i>
                                <i className="fa-solid fa-star rating_checked"></i>
                                <i className="fa-solid fa-star rating_checked"></i>
                                <i className="fa-solid fa-star rating_checked"></i>
                                <i className="fa-solid fa-star"></i>

                                <div className='w-100'>
                                
                                    <input type='text' name='product_mrp' className='form-control product_mrp_css text-center' value={productloop.product_mrp} onChange={handleInputs}></input>
                                
                                </div>
                                
                                <div className='w-100'>
                                    
                                    <input type='text' name='product_price' className='form-control text-center product_price_css' value={productloop.product_price} onChange={handleInputs}></input>
                                
                                </div>
                                
                                <div className='w-100'>
                                    
                                    <input type='text' name='product_date' className='form-control text-center h6 fw-bold' value={productloop.product_date} onChange={handleInputs}></input>
                                
                                </div>

                                <h6> <b> FREE Delivery </b> by Prime </h6>

                                <button type='submit' className="btn w-75 atc_btn" onClick={postData}> Add To Cart <i className="fa-solid fa-cart-plus"></i> </button>

                            </form>   

                            {/* form end */}

                            </div>
                        </div>
                    </div>
                </>
            )
        })}
        
    </div>
</div>
        
        </>
      )
}

export default Samsung;