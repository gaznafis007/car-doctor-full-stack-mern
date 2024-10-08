import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg"
import useAuth from "../../hooks/useAuth";


const Navbar = () => {
  const auth = useAuth()
  const {user, logOut} = auth
  const handleLogOut = () =>{
    logOut()
    .then(() => alert('Your are logged out!'))
    .catch((error) =>{
      const message = error.message;
      alert(message)
    })
  }
  const navItems = <>
    <li>
    <Link to="/"> Home </Link>
    </li>
    <li>
    <Link> About </Link>
    </li>
    <li>
    <Link> Services </Link>
    </li>
    {
      user?.uid ? <li>
      <Link to="/bookings"> Bookings </Link>
      </li> : ''
    }
    <li>
    <Link> Blog </Link>
    </li>
    <li>
    <Link> Contact </Link>
    </li>
  </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {navItems}
      </ul>
    </div>
    <Link to="/" className="hover:bg-slate-300 rounded-lg p-2 text-xl">
      <img src={logo} alt="" />
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navItems}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user?.uid ? 
      <>
      <span className="mr-2 font-semibold">{user?.displayName}</span>
      <button className="btn btn-outline btn-error" onClick={handleLogOut}>Log out</button>
      </> 
      :
      <>
        <Link className="mr-3 text-red-500" to="/login">Login</Link>
        <Link className="text-red-500" to="/register">Register</Link>
      </>
    }
  </div>
</div>
    );
};

export default Navbar;