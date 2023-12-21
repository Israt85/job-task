import { FaUserTag } from "react-icons/fa";

const NewSec = () => {
    return (
        <div className="w-full h-60 my-10 border border-orange-700">
            <h2 className="flex items-center gap-2 text-xl mx-2"><FaUserTag/> See Who can use this website</h2>

            <div className="grid gap-6 p-6 grid-cols-5">
                <div className="border rounded-lg shadow-lg shadow-orange-700 p-4">Developer</div>
                <div className="border rounded-lg shadow-lg shadow-orange-700 p-2">Corporate Professional</div>
                <div className="border rounded-lg shadow-lg shadow-orange-700 p-4">Banker</div>
                <div className="border rounded-lg shadow-lg shadow-orange-700 p-4">Teacher</div>
                <div className="border rounded-lg shadow-lg shadow-orange-700 p-4">Student</div>
                <div className="border rounded-lg shadow-lg shadow-orange-700 p-4">Freelancer</div>
                <div className="border rounded-lg shadow-lg shadow-orange-700 p-4">HR Manager</div>
                
            </div>
        </div>
    );
};

export default NewSec;