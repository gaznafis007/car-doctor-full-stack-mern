import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import axios from "axios"
import BookingRow from "./BookingRow/BookingRow";
import useAxios from "../../hooks/useAxios";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const axiosSecure = useAxios()
  useEffect(() => {
    // fetch(`http://localhost:5000/bookings?email=${user?.email}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data)
    //     setBookings(data)
    //   });
    axiosSecure.get(`/bookings?email=${user?.email}`)
    .then(res => setBookings(res.data))
  }, [user?.email]);

  const handleBookingDelete = id =>{
    // console.log(id)
    // fetch(`http://localhost:5000/bookings/${id}`, {
    //   method: 'DELETE'
    // })
    // .then(res => res.json())
    // .then(data =>{
    //   console.log(data);
    //   
    //   }
    // })
    const url = `http://localhost:5000/bookings/${id}`
    axios.delete(url, {withCredentials: true})
    .then (res => {
      if(res.data.acknowledged){
        const remaining = bookings.filter(booking => booking._id !== id);
        setBookings(remaining)
  }
    })
  }
  const handleBookingStatus = id =>{
    fetch(`http://localhost:5000/bookings/${id}`,{
      method: 'PUT',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify({status: "confirmed"})
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      const updatedBooking = bookings.find(booking => booking._id == id);
      const updatedBookings = bookings.filter(booking =>booking._id !== id);

      updatedBooking.status = "confirmed"
      updatedBookings.push(updatedBooking);
      console.log(updatedBookings)
      setBookings(updatedBookings)

    })
    
  }
  return (
    <section>
      <h2 className="text-center text-4xl text-red-500 font-bold">
        This is bookings list of {user?.displayName}
      </h2>
      <h2 className="text-center text-2xl text-blue-300 font-semibold">
        Total bookings: {bookings.length}
      </h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                Delete Booking
              </th>
              <th>Service</th>
              <th>User Info</th>
              <th>Booking date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              bookings.map(booking => <BookingRow key={booking._id} booking={booking} handleBookingDelete={handleBookingDelete} handleBookingStatus={handleBookingStatus}></BookingRow>)
            }
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Bookings;
