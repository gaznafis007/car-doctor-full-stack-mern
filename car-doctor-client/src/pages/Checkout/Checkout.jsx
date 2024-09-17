import { useLoaderData } from "react-router-dom";
import CheckoutBanner from "./CheckoutBanner/CHeckoutBanner";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";


const Checkout = () => {
    const service = useLoaderData()
    const {title, img, price, service_id} = service
    const {user} = useContext(AuthContext)
    const handleBooking = (event) =>{
        event.preventDefault();

        const form = event.target;
        const userName = form.name.value;
        const email = user?.uid ? user.email : form.email.value;
        const date = form.date.value;
        const number = form.number.value;
        const message = form.message.value;

        const booking = {
            userName,
            email,
            price,
            date,
            number,
            serviceImage: img,
            message,
            service_id
        }
        
        fetch("http://localhost:5000/bookings", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
                alert('Your booking is placed!')
                form.reset()
            }
        })
    }
    return (
        <section>
            <CheckoutBanner title = {title} img = {img} price = {price}></CheckoutBanner>
            <div className="my-12 bg-base-200 p-12 rounded-md">
                <form onSubmit={handleBooking}>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 justify-items-center">
                        <input type="text" name="name" placeholder="Type here" className="input input-bordered w-full" />
                        <input type="email" name="email" defaultValue={user?.email} placeholder="Type here" className="input input-bordered w-full" />
                        <input type="date" name="date" placeholder="Type here" className="input input-bordered w-full" />
                        <input type="tel" name="number" placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                    <textarea className="textarea textarea-bordered w-full my-6 py-4" placeholder="Instructions or your message" name="message"></textarea>
                    <input type="submit" value="checkout" className="btn btn-block btn-error text-white" />
                </form>
            </div>
        </section>
    );
};

export default Checkout;