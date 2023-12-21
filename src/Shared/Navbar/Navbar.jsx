import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const Navbar = () => {
  const {user,userlogout} = useContext(AuthContext)
  const handlelogout = ()=>{
    userlogout()
  }
    return (
        <div>
         <div className="navbar bg-orange-700 text-white">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">SCC</a>
  </div>
  <div className="flex gap-20">
   <div className="flex gap-4 list-none">
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/about'>About</Link></li>
    <li><Link to='/contact'>Contact</Link></li>
    <li><Link to='/blog'>Blog</Link></li>
   </div>
   {
    user?  <div className="dropdown dropdown-end">
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full">
        <img src={user.photoURL}/>
      </div>
    </div>
    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 text-black rounded-box w-52">
      <li>
        <a className="justify-between">
          Profile
        </a>
      </li>
      <li><Link to='/dashboard'><a>Dashboard</a></Link></li>
      <li><a onClick={handlelogout}>Logout</a></li>
    </ul>
  </div> : ""
   }
  </div>
</div>
        </div>
    );
};

export default Navbar;