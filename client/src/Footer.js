// FOOTER PAGE  

import './css/footer.css'

function Footer()
{
    return(
        <>
            <div className="container-fluid pt-4 footer me-0">
                <div className="row">
                    
                    <div className="col-md-2 mx-auto text-start">
                        
                        <h3>cool stuff</h3>
                        <ul>
                            <li> <a href="#"> blog </a> </li>
                            <li> <a href="#"> collaborations </a> </li>
                            <li> <a href="#"> mixtape </a> </li>
                            <li> <a href="#"> new arrival </a> </li>
                            <li> <a href="#"> hats & caps </a> </li>
                            <li> <a href="#"> clothing </a> </li>
                            <li> <a href="#"> eyewear </a> </li>
                            <li> <a href="#"> accessories </a> </li>
                            <li> <a href="#"> the jungle </a> </li>
                            <li> <a href="#"> wallets </a> </li>
                            <li> <a href="#"> sling bags </a> </li>
                            <li> <a href="#"> face mask </a> </li>
                            <li> <a href="#"> skateboard </a> </li>
                            <li> <a href="#"> about us </a> </li>
                        </ul>

                    </div>

                    <div className="col-md-2 mx-auto text-start">
                        
                        <h3>boring stuff</h3>
                        <ul>
                            <li> <a href="#"> track order </a> </li>
                            <li> <a href="#"> returns </a> </li>
                            <li> <a href="#"> rewards </a> </li>
                            <li> <a href="#"> support </a> </li>
                            <li> <a href="#"> FAQs </a> </li>
                            <li> <a href="#"> privacy policy </a> </li>
                            <li> <a href="#"> terms & condition </a> </li>
                            <li> <a href="#"> coupon </a> </li>
                        </ul>

                    </div>

                    <div className="col-md-2 mx-auto text-start">
                        
                        <h3>reach out to us</h3> <br />
                        <h6>Email: hello@abcd.com</h6>
                        <h6>Timing: <br /> 11am to 6pm Mon - Sat</h6> <br />
                        <h3>
                            <a href="#" title="INSTAGRAM"> <i className="fa-brands fa-instagram"></i> </a>
                            <a href="#" title="FACEBOOK"> <i className="fa-brands fa-facebook"></i> </a>
                            <a href="#" title="YOU TUBE"> <i className="fa-brands fa-youtube"></i> </a>
                        </h3>

                    </div>

                    <div className="col-md-2 mx-auto text-start">
                        
                        <h3>community exclusive</h3>

                        <form>
                            <div className="input-group my-4">
                            <input type="email" className="form-control w-100" placeholder="email address" /> 
                            </div>

                            <button type="submit" className="btn w-100 subs_btn"> subscribe. <i className="fa-solid fa-arrow-right-to-bracket"></i> </button>
                        </form>

                    </div>

                </div>

                <div className="row footer_2 mt-5">
                    <div className="col-md-7 text-center pt-3 mx-auto">
                        <h6>© 2022, XYZ® - Headwear, T-shirts, Sunglasses, Wallets, Face Masks, Caps. Skateboards</h6>
                        <h5>
                            <a href="#" title="VISA"> <i className="fa-brands fa-cc-visa"></i> </a>
                            <a href="#" title="MASTERCARD"> <i className="fa-brands fa-cc-mastercard"></i> </a>
                            <a href="#" title="AMERICAN EXPRESS"> <i className="fa-brands fa-cc-amex"></i> </a>
                            <a href="#" title="DINER CLUB"> <i className="fa-brands fa-cc-diners-club"></i> </a>
                            <a href="#" title="APPLE PAY"> <i className="fa-brands fa-apple-pay"></i> </a>
                            <a href="#" title="CASH ON DELIVERY"> <i className="fa-regular fa-money-bill-1"></i> </a>
                            <a href="#" title="AMAZON PAY"> <i className="fa-brands fa-amazon-pay"></i> </a>
                            <a href="#" title="PAYPAL"> <i className="fa-brands fa-cc-paypal"></i> </a>
                            <a href="#" title="GOOGLE PAY"> <i className="fa-brands fa-google-pay"></i> </a>
                            <a href="#" title="DISCOVER"> <i className="fa-brands fa-cc-discover"></i> </a>
                        </h5>

                    </div>
                </div>

                <div className='footer_2 row text-center' style={{"borderTop":"0.5px solid #B3B6B7"}}>
                    <h6>Designed & Developed by Anirudha Singla. <i class="fa-solid fa-hand-peace"></i></h6>
                </div>
                
            </div>

        </>
    )
}

export default Footer;