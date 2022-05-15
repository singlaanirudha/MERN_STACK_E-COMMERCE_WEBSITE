// import { NavLink } from 'react-router-dom';

import './css/home.css'
import './js_files/Home_counter.js' 


import To_top from './To_top';
import Contact from './Floatingcontact';

import './js_files/totop_js.js' 


import apparel_header from './imgs/slider_heading.png'
import apparel_catagory_1 from './imgs/a1.jpg'
import apparel_catagory_2 from './imgs/a2.jpg'
import apparel_catagory_3 from './imgs/a3.jpg'
import apparel_catagory_4 from './imgs/a4.jpg'
import apparel_catagory_5 from './imgs/a5.jpg'
import apparel_catagory_6 from './imgs/a6.jpg'
import apparel_banner from './imgs/apparel_banner_img.jpg'

import gadget_img1 from './imgs/g_banner_1.png'
import gadget_img2 from './imgs/g_banner_2.png'
import gadget_img3 from './imgs/g_banner_3.png'
import gadget_img4 from './imgs/gs_1.jpg'
import gadget_img5 from './imgs/gs_2.jpg'
import gadget_img6 from './imgs/gs_3.jpg'
import gadget_img7 from './imgs/gadget_counter.jpg'

import gadget_img8 from './imgs/apple.png'
import gadget_img9 from './imgs/samsung.png'
import gadget_img10 from './imgs/oneplus.png'
import gadget_img11 from './imgs/mi.png'
import gadget_img12 from './imgs/nokia.png'
import { NavLink } from 'react-router-dom';



function Home()
{
    return(
        <>
            {/* apparel start */}

            <div className="container-fluid slider_bg p-0"  id='pagetop'>
                    <div className="row p-5">
                        <div className="col-md-6 mx-auto text-center">
                            
                            <img src={ apparel_header } alt="" className='heading_img mb-3' />
                             <br />   
                            <button type="button" className="btn slider_btn me-3">SHOP MEN</button>
                            <button type="button" className="btn slider_btn ms-3">SHOP WOMEN</button>

                        </div>
                    </div>
            </div>

            <div className="container-fluid my-5">
                <div className="row d-flex flex-nowrap apparels pt-4">
                    
                    <div className="apparel_1 p-0 m-2 text-center">
                        <img src={ apparel_catagory_1 } alt="" className="apparal_catagory_img" />

                        <h5><b>WINDCHEATERS</b></h5>
                        <button type="button" className="btn my-1 shop_btn_1">SHOP MEN</button> <br />
                        <button type="button" className="btn shop_btn_1">SHOP WOMEN</button>
                    </div>

                    <div className="apparel_1 p-0 m-2 text-center">
                        <img src={ apparel_catagory_2 } alt="" className="apparal_catagory_img" />

                        <h5><b>BOMBER</b></h5>
                        <button type="button" className="btn my-1 shop_btn_1">SHOP MEN</button><br />
                        <button type="button" className="btn shop_btn_1">SHOP WOMEN</button>
                    </div>

                    <div className="apparel_1 p-0 m-2 text-center">
                        <img src={ apparel_catagory_3 } alt="" className="apparal_catagory_img" />

                        <h5><b>T-SHIRT</b></h5>
                        <button type="button" className="btn my-1 shop_btn_1">SHOP MEN</button><br />
                        <button type="button" className="btn shop_btn_1">SHOP WOMEN</button>
                    </div>

                    <div className="apparel_1 p-0 m-2 text-center">
                        <img src={ apparel_catagory_4 } alt="" className="apparal_catagory_img" />

                        <h5><b>HOODIES</b></h5>
                        <button type="button" className="btn my-1 shop_btn_1">SHOP MEN</button><br />
                        <button type="button" className="btn shop_btn_1">SHOP WOMEN</button>
                    </div>

                    <div className="apparel_1 p-0 m-2 text-center">
                        <img src={ apparel_catagory_5 } alt="" className="apparal_catagory_img" />

                        <h5><b>SHIRTS</b></h5>
                        <button type="button" className="btn my-1 shop_btn_1">SHOP MEN</button><br />
                        <button type="button" className="btn shop_btn_1">SHOP WOMEN</button>
                    </div>

                    <div className="apparel_1 p-0 m-2 text-center">
                        <img src={ apparel_catagory_6 } alt="" className="apparal_catagory_img" />

                        <h5><b>GILETS</b></h5>
                        <button type="button" className="btn my-1 shop_btn_1">SHOP MEN</button><br />
                        <button type="button" className="btn shop_btn_1">SHOP WOMEN</button>
                    </div>

                </div>
            </div>

            <div className="container-fluid apparel_banner">
                <div className="row">
                    <div className="col-md-5 mx-auto text-center pt-5">
                        <img src={ apparel_banner } alt="" className="apparel_banner_text mb-4" />
                        <button type="button" className="btn my-1 m-2 btn-light">SHOP MEN</button>
                        <button type="button" className="btn my-1 m-2 btn-light">SHOP MEN</button>
                    </div>
                </div>
            </div>
                
            {/* apparel end */}

{/* -------------------------------------------------------------------------------- */}

            {/* gadget catagory start */}

            <center>
                <h1 class="mt-5 g_store_heading">GADGET STORE</h1>
            </center>

            <div className="container-fluid gadget_bg mt-5 p-0">
                <div className="row py-5">
                    
                    <div className="col-lg-3 offset-lg-1 p-0">
                        
                        <a href="#" className="d-flex align-items-center gadget_1 p-2">
                            <img src={ gadget_img1 } alt="" className="g_1_size" />
                            <div className="py-4 ms-4 px-2">
                                <h5>Next Gen <b>Video</b> with <b>360 Cam</b> </h5>
                                <h6> <u>Shop now</u> <i className="fa-solid fa-angle-right"></i></h6>
                            </div>				
                        </a>

                        <a href="#" className="d-flex align-items-center gadget_2 p-2">
                            <img src={ gadget_img2 } alt="" className="g_1_size" />
                            <div className="py-4 ms-4 px-2">
                                <h5> Catch Big <b>Deal</b> on <b>Earbuds</b> </h5>
                                <h6> <u>Shop now</u> <i className="fa-solid fa-angle-right"></i></h6>
                            </div>				
                        </a>

                        <a href="#" className="d-flex align-items-center gadget_3 p-2">
                            <img src={ gadget_img3 } alt="" className="g_1_size" />
                            <div className="py-4 ms-4 px-2">
                                <h5> Top Rated <b>Gadget</b> are on <b>Sale</b> </h5>
                                <h6> <u>Shop now</u> <i className="fa-solid fa-angle-right"></i></h6>
                            </div>				
                        </a>

                    </div>

                    <div className="col-lg-6 offset-lg-1">
                        
                        <div id="gadget_carousel" className="carousel slide" data-bs-ride="carousel">
                        
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#gadget_carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#gadget_carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#gadget_carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        
                        <div className="carousel-inner">
                            
                            <div className="carousel-item active gadget_car_dmns">
                            <div className="gadget_car_text mx-auto mt-3">
                                
                                <div className="container-fluid">
                                    <div className="row pt-5">
                                        <div className="col-md-5 offset-md-1 pt-5">
                                            <h2>Check our huge</h2>
                                            <h1><b>Smartphones</b></h1>
                                            <h4>& Accessories collection</h4>
                                            <button type="button" className="btn mt-3 gadget_car_button">Shop Now</button>
                                        </div>
                                        <div className="col-md-5 offset-md-1 mt-4 p-0">
                                            <img src={ gadget_img4 } alt="" className="g_2_size" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            </div>
                        
                            <div className="carousel-item gadget_car_dmns">
                            <div className="gadget_car_text mx-auto mt-3">
                                
                                <div className="container-fluid">
                                    <div className="row pt-5">
                                        <div className="col-md-5 offset-md-1 pt-5">
                                            <h2>Explore the best</h2>
                                            <h1><b>VR Collection</b></h1>
                                            <h4>on the market</h4>
                                            <button type="button" className="btn mt-3 gadget_car_button">Shop Now</button>
                                        </div>
                                        <div className="col-md-5 offset-md-1 mt-4 p-0">
                                            <img src={ gadget_img5 } alt="" className="g_2_size" />
                                        </div>
                                    </div>
                                </div>

                            </div>	
                            </div>
                        
                            <div className="carousel-item gadget_car_dmns">
                            <div className="gadget_car_text mx-auto mt-3 pt-5">
                                
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-5 offset-md-1 pt-5">
                                            <h5>World of music with</h5>
                                            <h1><b>Headphones</b></h1>
                                            <h4>Choose between top brands</h4>
                                            <button type="button" className="btn mt-3 gadget_car_button">Shop Now</button>
                                        </div>
                                        <div className="col-md-5 offset-md-1 mt-4 p-0">
                                            <img src={ gadget_img6 } alt="" className="g_2_size" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            </div>
                        
                        </div>
                        
                        </div>

                    </div>

                </div>
            </div>

            <h1 className="shop_by_catagory mx-auto text-center mt-5">SHOP BY BRAND</h1>

            <div className="container-fluid mt-5 p-0 shop_by_brand_cont">
                <div className="row d-flex flex-nowrap">
                    <div className="col-md-2 mx-auto text-center mob_brand_div">
                        <img src={ gadget_img8 } alt="" className="mob_brand_div_img" /> <br />
                        <button type="button" className="btn gadget_counter_btn"> Shop Now <i className="fa-solid fa-angle-right"></i></button>
                    </div>
                    
                    <div className="col-md-2 mx-auto text-center mob_brand_div">
                        <img src={ gadget_img9 } alt="" className="mob_brand_div_img" /> <br />

                        <NavLink to='/Samsungshop' className='nav-link'>
                            <button type="button" className="btn gadget_counter_btn">
                                    Shop Now <i className="fa-solid fa-angle-right"></i>
                            </button>
                        </NavLink>

                    </div>
                    
                    <div className="col-md-2 mx-auto text-center mob_brand_div">
                        <img src={ gadget_img10 } alt="" className="mob_brand_div_img" /> <br />
                        <button type="button" className="btn gadget_counter_btn"> Shop Now <i className="fa-solid fa-angle-right"></i></button>
                    </div>
                    
                    <div className="col-md-2 mx-auto text-center mob_brand_div">
                        <img src={ gadget_img11 } alt="" className="mob_brand_div_img" /> <br />
                        <button type="button" className="btn gadget_counter_btn"> Shop Now <i className="fa-solid fa-angle-right"></i></button>
                    </div>
                    
                    <div className="col-md-2 mx-auto text-center mob_brand_div">
                        <img src={ gadget_img12 } alt="" className="mob_brand_div_img" /> <br />
                        <button type="button" className="btn gadget_counter_btn"> Shop Now <i className="fa-solid fa-angle-right"></i></button>
                    </div>
                </div>
            </div>

            <div className="container-fluid p-5">
                <div className="row p-4 gadget_counter_bg">
                    
                    <div className="col-md-4 offset-md-1 pt-5">
                        <h4 className="mt-2">All New</h4>
                        <h4><b>Last Gen iPad Pro</b></h4>
                        <h5>at discounted price. Hurry up!</h5>
                        <h2> <p id="timer"></p> </h2>
                        <button type="button" className="btn gadget_counter_btn">View Offer <i className="fa-solid fa-angle-right"></i></button>
                    </div>

                    <div className="col-md-5 offset-md-1">
                        <img src={ gadget_img7 } alt="" className='gadget_counter_img' />
                    </div>

                </div>
            </div>

            {/* gadget catagory end */}

            {/* additional details start */}

            <div className='container-fluid p-0' style={{"overflowX":"hidden"}}>
                <div className='row p-0'>
                    <div className='col-md-6 py-5 text-center add_info_1'>
                        <i class="fa-solid mb-3 fa-pen-to-square"></i>
                        <h3><b>Read the blog</b></h3>
                        <h6>Latest store, fashion news and trends</h6>
                    </div>
                    
                    <div className='col-md-6 py-5 text-center add_info_2'>
                        <i class="fa-brands mb-3 fa-instagram"></i>
                        <h3><b>Read the blog</b></h3>
                        <h6>Latest store, fashion news and trends</h6>
                    </div>
                </div>
            </div>

            {/* additional details end */}

          <To_top></To_top>
          <Contact></Contact>

        </>
    )
}

export default Home;

