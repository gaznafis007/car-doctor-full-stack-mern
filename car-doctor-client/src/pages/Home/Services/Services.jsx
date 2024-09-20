import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxios from "../../../hooks/useAxios";



const Services = () => {
  const [services, setServices] = useState([]);
  const axiosSecure = useAxios()
  useEffect(()=>{
    // fetch('http://localhost:5000/services')
    // .then(res=> res.json())
    // .then(data=> setServices(data))
    axiosSecure.get('/services')
    .then(res=>setServices(res.data))
  },[])

    return (
        <section className="my-6 lg:mx-6">
            <h1 className="text-lg text-red-500 font-bold text-center">Service</h1>
            <h1 className="text-5xl text-center font-bold">Our Service Area</h1>
            <p className="py-6 font-thin text-center">The majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.</p>

            <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        services.map(service=>(
                            
                            <div key={service._id} className="card bg-base-100 w-96 shadow-xl">
                            <figure className="px-10 pt-10">
                              <img
                                src={service.img}
                                alt={service.title}
                                className="rounded-xl" />
                            </figure>
                            <div className="card-body">
                              <h2 className="card-title">{service.title}</h2>
                              <div className="flex flex-row justify-end w-full mx-auto">
                              <p className="font-semibold text-red-500">Price: ${service.price}</p>
                                <Link to={`/checkout/${service._id}`} className="text-red-500 font-bold">❯</Link>
                              </div>
                            </div>
                          </div>
                            
                        ))
                    }
            </div>
        </section>
    );
};

export default Services;