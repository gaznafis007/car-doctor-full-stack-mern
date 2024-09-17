import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Bookings = () => {
    const {user} = useContext(AuthContext)
    const [bookings, setBookings] = useState([]);
    useEffect(() =>{
        fetch(`http://localhost:5000/bookings?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setBookings(data))
    },[])
    return (
        <div>
            <h2 className="text-center text-4xl text-red-500 font-bold">This is bookings list of {user?.displayName}</h2>
            <h2 className="text-center text-2xl text-blue-300 font-semibold">Total bookings: {bookings.length}</h2>
        </div>
    );
};

export default Bookings;