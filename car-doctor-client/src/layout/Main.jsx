import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";

const Main = () => {
    return (
        <div className="max-w-screen-2xl mx-auto">
            <Navbar/>
            <Outlet/>           
            <Footer/>
        </div>
    );
};

export default Main;