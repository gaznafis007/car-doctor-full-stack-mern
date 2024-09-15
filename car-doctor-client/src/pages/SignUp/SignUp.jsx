import { Link } from "react-router-dom"
import img from "../../assets/images/login/login.svg"

const SignUp = () => {
    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.userName.value;
        const email = form.email.value;
        const pass = form.password.value;
        const user = {
            name,
            email,
            pass
        }
        console.log(user)
    }
    return (
        <section className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <img src={img} className="py-6" alt="" />
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" name="userName" placeholder="name" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                    <Link  to="/login" className="label-text-alt link link-hover">Already have an account? Login </Link>
                </label>
            </div>
            <div className="form-control mt-6">
            <input type="submit" value="sign up" className="btn btn-error" />
            </div>
      </form>
    </div>
  </div>
</section>
    );
};

export default SignUp;