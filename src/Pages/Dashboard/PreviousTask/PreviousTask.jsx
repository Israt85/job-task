import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";


const PreviousTask = () => {
    const {user} = useContext(AuthContext)
    const { data: task, refetch } = useQuery({
        queryKey: ['task',user?.email],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/task?email=${user.email}`)
            console.log(task);
            return (res.data)

        }
    })
    return (
        <div>
            <h2 className="text-2xl text-center py-2 font-bold">My Previous Works</h2>
            <div className="grid grid-cols-3 gap-2">
            {
                task?.map((task )=> <div className="" key={task._id}> <div className="hero border-2 h-60 w-60">
                <div className=" text-center">
                  <div className="">
                    <h1 className="text-xl font-bold">{task.title}</h1>
                    <p className="py-6">{task.description}</p>
                    <button className="btn bg-orange-400">{task.piority}</button>
                  </div>
                </div>
              </div> </div>)
            }
        </div>
        </div>
    );
};

export default PreviousTask;