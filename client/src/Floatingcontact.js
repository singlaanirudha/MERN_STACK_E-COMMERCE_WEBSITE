import { NavLink } from "react-router-dom";


import './css/floatcont.css'

function Floatcont()
{

    return(
        <>
            <div className="floatcont">
                
                <NavLink  to='/Contactus' className="nav-link" >
                    <i title='CONTACT US' className="fa-solid fa-mobile-screen-button" style={{"fontSize":60, "color":"#273746"}}/> 
                </NavLink>
            
            </div>
        </>
    )
}

export default Floatcont;