
const Navbar = () => {
    return (
        <div>
         <div className="navbar bg-orange-700 text-white">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">SCC</a>
  </div>
  <div className="flex gap-20">
   <div className="flex gap-4 list-none">
    <li>Home</li>
    <li>Home</li>
    <li>Home</li>
    <li>Home</li>
   </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default Navbar;