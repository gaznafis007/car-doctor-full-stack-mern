/* eslint-disable react/prop-types */
const CheckoutBanner = ({img, title, price}) => {
  return (
    <>
      <div className="carousel w-full h-72">
        <div  className="carousel-item rounded-md w-full relative">
          <img
            src={img}
            className="rounded-md w-full object-cover"
          />
          <div className="absolute h-full bg-gradient-to-r from-[#151515] to-[rgba(255,255,255, 0.1)]">
              <div className="relative left-24 top-1/4 lg:w-1/2 ">
                <h2 className="text-5xl font-bold text-white">
                  {title}
                </h2>
                <h3 className="text-4xl font-semibold text-white my-4">
                    ${price}
                </h3>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutBanner;
