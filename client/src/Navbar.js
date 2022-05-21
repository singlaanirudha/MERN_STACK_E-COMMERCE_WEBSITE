import Logout from './Logout';

import { useState, useEffect } from 'react';
import {NavLink} from 'react-router-dom'; //for linking

// import { userContext } from './Header';

import './css/header.css'

import nav_img_1 from './imgs/nav_1.png'
import nav_img_2 from './imgs/nav_2.png'
import nav_img_3 from './imgs/nav_3.png'
import nav_img_4 from './imgs/nav_4.png'


function Navbar()
{
    const[profile, setprofile]= useState({});

    const profilename = async()=> {
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
            setprofile(data);
            if(!res.status=== 200)
            {
                const error= new Error(res.error);
                throw error;
            }
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        profilename();
    },
[]);

    return(
        <>
            <nav className="navbar navbar-expand-lg w-100 nav_bg p-0 navbar_position">
            <div className="container-fluid">

            <NavLink  to='/' className="nav-link" >
               <i title='HOME' className="fa-regular fa-sun mx-auto logo" />
            </NavLink>

            {/* navbar responsive toggler */}
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#nav_toggler" style={{"order": -1}}>
                <i onclick="openNav()" className="fa-solid fa-bars-staggered nav_togg"></i>
            </button>

            {/* Navbar links --------------------------------------------------- */}

            <div className="collapse navbar-collapse">
                                            
                            <ul className="navbar-nav">
                                <li className="nav-item full_nav">
                                    <a className="nav-link nav_text dropdown-toggle" href="#"> SHOP </a>

                                        <div className="full_dropdown py-4" style={{"background": "linear-gradient(to bottom right, #ffdef2, #e6f0ff)"}}>
                                                
                                            <div className="container-fluid">
                                                    
                                                <div className="row pb-4">
                                                    <div className="col-md-3 ">

                                                        <h2>MENS FASHION</h2>
                                                        <ul>
                                                        <li>T-shirt</li>
                                                        <li>Jackets</li>
                                                        <li>Shirts</li>
                                                        <li>Jeans</li>
                                                        <li>Trousers</li>
                                                        <li>Shorts</li>
                                                        <li>Inner Wear</li>
                                                        <li>Socks</li>
                                                        <li>Caps & Hats</li>
                                                        <li>Accessories</li>
                                                        </ul>

                                                    </div>

                                                    <div className="col-md-3 ">
                                                    
                                                    <h2>WOMEN FASHION</h2>
                                                        <ul>
                                                        <li>Clothing</li>
                                                        <li>Footwear</li>
                                                        <li>Beauty</li>
                                                        <li>Jewellery</li>
                                                        <li>Watches</li>
                                                        <li>Handbags</li>
                                                        <li>Travel Luggage & Backpacks</li>
                                                        <li>Sunglasses</li>
                                                        <li>Watches</li>
                                                        <li>Skincare</li>
                                                        </ul>

                                                    </div>

                                                    <div className="col-md-3 ">
                                                        
                                                        <h2>KIDS FASHION</h2>
                                                        <ul>
                                                        <li>Dresses</li>
                                                        <li>T-shirt</li>
                                                        <li>Jeans</li>
                                                        <li>Joggers</li>
                                                        <li>Shorts</li>
                                                        <li>Shirts</li>
                                                        <li>Tops</li>
                                                        <li>Tights</li>
                                                        <li>Footwear</li>
                                                        <li>Watches</li>
                                                        <li>Bags</li>
                                                        <li>Healthcare</li>
                                                        </ul>

                                                    </div>

                                                    <div className="col-md-3 ">
                                                        
                                                        <h2>ELECTRONICS</h2>
                                                        <ul>
                                                        <li>Mobile & Tablets</li>
                                                        <li>Headphones</li>
                                                        <li>Laptops</li>
                                                        <li>Cameras</li>
                                                        <li>Earphones</li>
                                                        <li>Smart Watches</li>
                                                        <li>Computers</li>
                                                        <li>VR</li>
                                                        <li>Health Tracker</li>
                                                        <li>TV</li>
                                                        <li>Music System</li>
                                                        <li>Home Theatre</li>
                                                        </ul>

                                                    </div>
                                                </div>

                                            <div className="row">
                                                    
                                                <div className="col-md-10 text-center mx-auto" style={{"borderTop": "1px solid black"}}>
                                                        
                                                    <img src={ nav_img_1 } alt="" className="nav_img_size" />
                                                    <img src={ nav_img_2 } alt="" className="nav_img_size" />
                                                    <img src={ nav_img_3 } alt="" className="nav_img_size" />
                                                    <img src={ nav_img_4 } alt="" className="nav_img_size" />

                                                </div>

                                            </div>
                                                
                                    </div>

                            </div>

                                </li>
                                            
                                <li className="nav-item dropdown">
                                                <a className="nav-link nav_text dropdown-toggle" href="#" data-bs-toggle="dropdown"> ARTICLES </a>

                                                <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">TRAINING</a></li>
                                                <li><a className="dropdown-item" href="#">COMPETEITION</a></li>
                                                <li><a className="dropdown-item" href="#">NUTRITION</a></li>
                                                <li><a className="dropdown-item" href="#">HEALTH & SCIENCE</a></li>
                                                <li><a className="dropdown-item" href="#">THE FIT LIFE</a></li>
                                                <li><a className="dropdown-item" href="#">TOOLS & CALCULATOR</a></li>
                                                </ul>
                                </li>
                                            
                                <li className="nav-item">
                                    <NavLink  to='/AboutUs' className="nav-link nav_text" > ABOUT US </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink  to='/Pageunderconstruction' className="nav-link nav_text" > COMMUNITY </NavLink>
                                </li>
                            </ul>

                            <div className="offset-md-1 search_width">
                                <form>
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search" />
                                            <div className="input-group-text"> <i className="fa-solid fa-magnifying-glass"></i> </div>
                                    </div>
                                </form> 
                            </div>
                                        
            </div>  

            {/* ----------------------------------------------------------------- */}

                {/* profile and cart buttons */}

                    <i title="PROFILE" className="fa-regular fa-user icons dropdown" id="profiledropdown" data-bs-toggle="dropdown" type="button" />

                    <ul class="dropdown-menu dropdown-menu-end text-center" aria-labelledby="profiledropdown">

                        <li><h5>Hello,</h5><h4><u>{profile.username}</u></h4></li>
 
                        <NavLink  to='/MyProfile' className="nav-link" >
                            <li className="dropdown-item">
                                <h5> MY ACCOUNT <i class="fa-solid fa-address-card ms-1"></i> </h5></li>
                        </NavLink>

                        <NavLink  to='/signin' className="nav-link" >
                            <li className="dropdown-item">
                                <h5> SIGN UP/ LOGIN <i class="fa-solid fa-arrow-right-to-bracket ms-1"></i> </h5></li>
                        </NavLink>

                        <li>
                            <Logout></Logout>
                        </li>
 
                    </ul>

                <NavLink to='/MyCart' className='nav-link'>
                    <i title="CART" className="fa-solid fa-cart-shopping icons"></i>
                </NavLink>

            </div>
            </nav>

            {/* responsive navbar start -------------------------------------- */}

            <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="nav_toggler" style={{"background": "linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)"}}>

            <div className="offcanvas-header">
                <button data-bs-dismiss="offcanvas" className='resp_nav_x'> <i style={{"fontSize": 40}} className="fa-solid fa-x"></i> </button>
            </div>

            <div className="offcanvas-body">

            {/* <!-- accordian start --> */}

                <div className="accordion accordion-flush" id="nav_accordian">

                <div className="accordion-item">
                    
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne">
                        <h1>SHOP</h1>
                    </button>
                    </h2>
                    
                    <div id="flush-collapseOne" className="accordion-collapse collapse p-2 nav_acc_text" data-bs-parent="#nav_accordian">
                    
                    <ul>
                        <li> <a href="#"> Wallets </a> </li>
                        <li> <a href="#"> Shorts </a> </li>
                        <li> <a href="#"> Face mask </a> </li>
                        <li> <a href="#"> New arrival </a> </li>
                        <li> <a href="#"> Clothing </a> </li>
                        <li> <a href="#"> Hats & Caps </a> </li>
                        <li> <a href="#"> Eyewear </a> </li>
                        <li> <a href="#"> Belts </a> </li>
                        <li> <a href="#"> Accessories </a></li>
                        <li> <a href="#"> Collaborations </a></li>
                    </ul>

                    </div>
                
                </div>

                <div className="accordion-item">
                    
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed mt-1" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo">
                        <h1>ARTICLES</h1>
                    </button>
                    </h2>
                    
                    <div id="flush-collapseTwo" className="accordion-collapse collapse p-2 nav_acc_text" data-bs-parent="#nav_accordian">
                    
                    <ul>
                        <li> <a href="#"> Training </a> </li>
                        <li> <a href="#"> Competition </a> </li>
                        <li> <a href="#"> Nutrition </a></li>
                        <li> <a href="#"> Health & Science </a> </li>
                        <li> <a href="#"> The Fit Life </a> </li>
                        <li> <a href="#"> Tools & Calculator </a> </li>
                    </ul>

                    </div>
                
                </div>
            <button className="accordion-button collapsed mt-1" type="button">
                <NavLink  to='/AboutUs' className="nav-link" >
                    <h1 style={{"color":"black"}}>ABOUT US </h1>
                </NavLink>
            </button>

            <button className="accordion-button collapsed mt-1" type="button">
                <NavLink  to='/Pageunderconstruction' className="nav-link" >
                    <h1 style={{"color":"black"}}>COMMUNITY </h1>
                </NavLink>
            </button>

                </div>

            {/* <!-- accordian end --> */}



            {/* <!-- search start --> */}

            <div className="my-4 w-100 search_width">
            <form>
                <div className="input-group">
                <input type="text" className="form-control" placeholder="Search" />
                <div className="input-group-text"> <i className="fa-solid fa-magnifying-glass"></i> </div>
                </div>
            </form> 
            </div>    

            {/* <!-- search start --> */}


            {/* <!-- accordian 2 start --> */}

                <div className="accordion accordion-flush" id="nav_accordian_2">

                <div className="accordion-item">
                    
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne_2">
                        <h6>Need Help?</h6>
                    </button>
                    </h2>
                    
                    <div id="flush-collapseOne_2" className="accordion-collapse collapse p-2 nav_acc_text" data-bs-parent="#nav_accordian_2">
                    
                    <ul>
                        <li> <a href="#"> log in </a> </li>
                        <li> <a href="#"> track order </a> </li>
                        <li> <a href="#"> returns </a> </li>
                        <li> <a href="#"> rewards </a> </li>
                        <li> <a href="#"> support </a> </li>
                        
                        <li>
                        <NavLink  to='/Contactus' className="nav-link" >contact us </NavLink></li>
                    </ul>

                    </div>
                
                </div>

                <div className="accordion-item">
                    
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed mt-1" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo_2">
                        <h6>Order & Shipping</h6>
                    </button>
                    </h2>
                    
                    <div id="flush-collapseTwo_2" className="accordion-collapse collapse p-2 nav_acc_text" data-bs-parent="#nav_accordian_2">
                    
                    <ul>
                        <li> <a href="#"> track Order </a></li>
                        <li> <a href="#"> order Status </a></li>
                        <li> <a href="#"> cancel Order </a></li>
                        <li> <a href="#"> return Order </a></li>
                    </ul>

                    </div>
                
                </div>

                </div>

            {/* <!-- accordian 2 end --> */}


            {/* <!-- social start --> */}

            <div className="mt-3">
            <h6>Connect with Us</h6>
            <h1>
                <i title="facebook" className="fa-brands fa-facebook-square mx-2"></i>
                <i title="twitter" className="fa-brands fa-twitter-square mx-2"></i>
                <i title="instagram" className="fa-brands fa-instagram-square mx-2"></i>
                <i title="youtube" className="fa-brands fa-youtube-square mx-2"></i>
            </h1>
            </div>

            {/* <!-- social end --> */}

            </div>

            </div>

            {/* responsive navbar end */}

        </>
    )
}

export default Navbar;




