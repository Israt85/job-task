import { Link, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex text-white min-h-screen">
           <div className="bg-orange-700 p-6 w-60">
           <button className="btn w-full my-2"><Link to='/dashboard/tasks'>Task</Link></button>
           <button className="btn w-full"><Link to='/dashboard/previoustask'>See Previous Task</Link></button>
          <Link to='/'> <div className="divider divider-neutral">Home</div></Link>
           </div>
           <div className="bg-orange-400 p-4 w-full">
            <Outlet></Outlet>
           </div>
        </div>
    );
};

export default Dashboard;