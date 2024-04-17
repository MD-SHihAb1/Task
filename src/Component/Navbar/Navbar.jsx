import { Link, NavLink } from "react-router-dom";
import Header from "../Header/Header";
import Started from "../Register/Started/Started";
import Apertment from "../../Apertment/Apertment";

import MySwiper from "../../Swiper/MySwiper";
import Animate from "../../Animate/Animate";
import { useContext } from "react";
import { AuthContext } from "../Provaider/AuthProvider";
import auth from "../../Firebase/firebase.config";
import Review from "../../Review/Review";



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
                                        <NavLink to="/"><li><a>Home</a></li></NavLink>
                                        <li>
                                        <a>Parent</a>
                                        </li>
                                        <li><a>Item 3</a></li>
                                    </ul>
                                    </div>
                                    
                                    <NavLink to="/"><a className="btn btn-ghost text-xl">UrbHome</a></NavLink>
                            </div>
                            <div className="navbar-center hidden lg:flex">
                                    <ul className="menu menu-horizontal px-1">
                                    <NavLink to="/"><li><a>Home</a></li></NavLink>
                                   
                                        
                                        <NavLink to="/house"><li><a>House</a></li></NavLink>
                                        <NavLink to="/order"><li><a>Order</a></li></NavLink>
                                        
                                    
                                    <NavLink to="login"><li><a>LOgin</a></li></NavLink>
                                    </ul>
                            </div>
                            
                            <div className="navbar-end">
                                {
                                    user ? <>
                                      <div>
                                       
                                       <div className="">
                                       <img src={user.photoURL} alt="" />
                                       </div>
                                    </div>
                                    <span className="mx-9"> {user.email} </span>
                                    <a onClick={handleLogOut} className="btn mx-9">Sing out</a>
                                    </>
                                    :
                                    ""
                                }
                                
                                  {
                                    user ? <>
                                    <div>
                                        <h3>User:{user.displayName}</h3>
                                        <img src={user.photoURL} alt="" />
                                    </div>
                                   
                                   <button>Profile</button>
                                    </>
                                    :
                                    ""
                                }
                                
                            </div>
                            </div>
                           
                        
        </div>
    );
};

export default Navbar;