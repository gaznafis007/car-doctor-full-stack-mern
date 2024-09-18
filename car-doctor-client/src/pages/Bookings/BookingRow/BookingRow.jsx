/* eslint-disable react/prop-types */
const BookingRow = ({ booking, handleBookingDelete, handleBookingStatus }) => {
  const { date, email, serviceImage, serviceName, price, userName, message } =
    booking;
  return (
    <>
      <tr>
        <th>
          <button  onClick={() => handleBookingDelete(booking._id)} className="btn btn-circle btn-outline btn-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img src={serviceImage} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{serviceName}</div>
              <div className="text-sm opacity-50">{message}</div>
            </div>
          </div>
        </td>
        <td>
          {userName}
          <br />
          <span className="badge badge-ghost badge-sm">{email}</span>
        </td>
        <td>{date}</td>
        <th>
          <button className="btn btn-ghost btn-xs">${price}</button>
        </th>
        <td>
          {
            ! booking.status ? 
            <button onClick={() => handleBookingStatus(booking._id)} className="btn btn-outline btn-error btn-xs">pending</button>
            :
            <span className="text-green-400 text-lg">confirmed</span>
          }
        </td>
      </tr>
    </>
  );
};

export default BookingRow;
