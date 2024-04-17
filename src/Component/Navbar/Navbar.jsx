import { Link, NavLink } from "react-router-dom";
import Header from "../Header/Header";
import Started from "../Register/Started/Started";
import Apertment from "../../Apertment/Apertment";

import MySwiper from "../../Swiper/MySwiper";
import Animate from "../../Animate/Animate";
import { useContext } from "react";
import { AuthContext } from "../Provaider/AuthProvider";
import auth from "../../Firebase/firebase.config";



const Navbar = () => {


        const {user, logOut } = useContext(AuthContext);


    const handleLogOut = () =>{
        logOut(auth)
        .then(() => console.log('user logged Out Successfully'))
        .catch(error => console.error(error))
    }
    
      


    return (
        <div>
                <div className="navbar bg-base-100">
                            <div className="navbar-start">
                                    <div className="dropdown">
                                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                    </div>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                        <NavLink to="home"><li><a>Home</a></li></NavLink>
                                        <li>
                                        <a>Parent</a>
                                        <ul className="p-2">
                                            <li><a>Submenu 1</a></li>
                                            <li><a>Submenu 2</a></li>
                                        </ul>
                                        </li>
                                        <li><a>Item 3</a></li>
                                    </ul>
                                    </div>
                                    <a className="btn btn-ghost text-xl">UrbHome</a>
                            </div>
                            <div className="navbar-center hidden lg:flex">
                                    <ul className="menu menu-horizontal px-1">
                                    <NavLink to="home"><li><a>Home</a></li></NavLink>
                                    <li>
                                        <details>
                                        <summary>Parent</summary>
                                        <ul className="p-2">
                                            <li><a>Submenu 1</a></li>
                                            <li><a>Submenu 2</a></li>
                                        </ul>
                                        </details>
                                    </li>
                                    <NavLink to="login"><li><a>LOgin</a></li></NavLink>
                                    </ul>
                            </div>
                            <div className="navbar-end">
                                <a className="btn">Button</a>
                            </div>
                            <div className="navbar-end">
                                {
                                    user ? <>
                                    <span> {user.email} </span>
                                    <a onClick={handleLogOut} className="btn">Sing out</a>
                                    </>
                                    :
                                    ""
                                }
                                <a className="btn">ssss</a>
                            </div>
                            </div>
                           
                            <br /><Header></Header>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <Animate></Animate>
                            <br />
                            <br />
                            <br />
                            <MySwiper></MySwiper>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /><br />
                            <Started></Started>
                            <br />

                           <div className="max-w-6xl mx-auto">
                           <Apertment></Apertment>
                           </div>
        </div>
    );
};

export default Navbar;