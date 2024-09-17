import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";

const Banner = () => {
  const bannerImages = [img1, img2, img3, img4, img5, img6];
  return (
    <>
      <div className="carousel w-full h-3/5 rounded-md">
        {bannerImages.map((bannerImage, idx) => (
          <div
            key={idx}
            id={`slide${idx}`}
            className="carousel-item relative w-full"
          >
            <img src={bannerImage} className="w-full rounded-md" />
            <div className="absolute h-full bg-gradient-to-r from-[#151515] to-[rgba(255,255,255, 0.4)]">
              <div className="relative left-24 top-1/3 lg:w-1/2 ">
                <h2 className="text-6xl font-bold text-white">
                  Affordable Price for car servicing
                </h2>
                <p className="py-12 text-slate-300">
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div className="flex gap-4 flex-row">
                  <div className="btn btn-error text-white">Discover More</div>
                  <div className="btn btn-error btn-outline">
                    Latest Projects
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute left-5 right-5 bottom-24 flex gap-4 -translate-y-1/2 transform justify-end">
              <a
                href={
                  idx === 0
                    ? `#slide${bannerImages.length - 1}`
                    : `#slide${idx - 1}`
                }
                className="btn btn-circle bg-slate-300 opacity-70"
              >
                ❮
              </a>
              <a
                href={
                  idx === bannerImages.length - 1
                    ? `#slide0`
                    : `#slide${idx + 1}`
                }
                className="btn btn-circle btn-error text-white"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
        {/* <div id="slide2" className="carousel-item relative w-full">
                        <img
                        src={img2}
                        className="w-full rounded-md" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img
                        src={img3}
                        className="w-full rounded-md" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full rounded-md">
                        <img
                        src={img4}
                        className="w-full rounded-md" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide5" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide5" className="carousel-item relative w-full rounded-md">
                        <img
                        src={img5}
                        className="w-full rounded-md" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide6" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide6" className="carousel-item relative w-full rounded-md">
                        <img
                        src={img6}
                        className="w-full rounded-md" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide5" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div> */}
      </div>
    </>
  );
};

export default Banner;
