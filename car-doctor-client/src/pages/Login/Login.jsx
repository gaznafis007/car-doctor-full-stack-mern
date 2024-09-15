import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
    const {login} = useContext(AuthContext)
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        
        const email = form.email.value;
        const pass = form.password.value;
        const user = {
            email,
            pass
        }
        console.log(user)
        login(email, pass)
        .then((res)=>{
            const user = res.user;
            console.log(user)
        })
        .catch((error)=>{
            const errorMessage = error.message;
            console.log(errorMessage)
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <img src={img} alt="" className="py-6" />
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
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
            <Link to ="/register" className="label-text-alt link link-hover">new to our site? Register now!</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <input type="submit" value="login" className="btn btn-error" />
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;