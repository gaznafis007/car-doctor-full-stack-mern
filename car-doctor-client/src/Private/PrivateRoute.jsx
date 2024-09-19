/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()
    if(user?.uid){
        return children
    }
    if(loading){
        return <h1 className="text-center text-5xl text-red-500 font-sans font-bold animate-ping">loading</h1>
    }
    return <Navigate to ="/" state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;