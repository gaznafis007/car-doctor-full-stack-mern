import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <h1 className="text-5xl text-center text-blue-600">Navbar</h1>
            <Outlet/>           
            <h1 className="text-5xl text-center text-indigo-600">Footer</h1>
        </div>
    );
};

export default Main;