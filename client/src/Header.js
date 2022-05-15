// HEADER TEMPLATE
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Navbar from './Navbar.js'

import Home from './Home';
import Pnf from './Pagenotfound';
import Abtus from './Abtus';
import Puc from './Pageunderconst';
import Contact from './Contactus';
import Signup from './Signup';       //create a new account
import Signin from './Signin';       //login to your account
import Profile from './Profile';       //Profile page
import Samsungshop from './Samsungshop'
import Admin from './Admin';
import Cart from './Cart';



function Header()
{
    return(
        <>
       <Router>
            <Navbar></Navbar>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/signup' element={<Signup />}></Route>
                    <Route path='/signin' element={<Signin />}></Route>
                    <Route path='*' element={<Pnf />}></Route>
                    <Route path='/AboutUs' element={<Abtus />}></Route>
                    <Route path='/Pageunderconstruction' element={<Puc />}></Route>
                    <Route path='/Contactus' element={<Contact />}></Route>
                    <Route path='/MyProfile' element={<Profile />}></Route>
                    <Route path='/SamsungShop' element={<Samsungshop />}></Route>
                    <Route path='/Admin' element={<Admin />}></Route>
                    <Route path='/MyCart' element={<Cart />}></Route>
                </Routes>
        </Router>
        </>
    )
}

export default Header;


