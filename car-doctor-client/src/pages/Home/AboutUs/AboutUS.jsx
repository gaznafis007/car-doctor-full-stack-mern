import person from "../../../assets/images/about_us/person.jpg"
import parts from "../../../assets/images/about_us/parts.jpg"

const AboutUS = () => {
    return (
        <>
                <section className="hero mx-auto py-8">
                    <div className="hero-content flex-col lg:flex-row gap-48">
                        <div className="lg:w-1/2 relative">
                        <img
                        src={person}
                        className="max-w-sm rounded-lg shadow-2xl" />
                        <img src={parts} className="object-cover absolute left-1/2 -bottom-6 w-2/3 border-8 rounded-lg border-white" />
                        </div>
                        <div className="lg:ml-4">
                        <h1 className="text-red-500 text-lg font-bold">
                            About us
                        </h1>
                        <h2 className="text-5xl font-bold my-4 w-1/2">We are qualified & of experience in this field</h2>
                        <p className="py-6 lg:w-2/3">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. 
                        </p>
                        <p className="pb-6 lg:w-2/3">
                            the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  
                        </p>
                        <button className="btn btn-error">Get more info</button>
                        </div>
                    </div>
                </section>
        </>
    );
};

export default AboutUS;