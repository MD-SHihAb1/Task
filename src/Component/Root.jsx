import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";


const Root = () => {
    return (
        <div>
           
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;