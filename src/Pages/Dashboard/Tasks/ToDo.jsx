import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { MdDelete, MdModeEdit } from "react-icons/md";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";



const ToDo = () => {
    const {user} = useContext(AuthContext)
    const { data: task, refetch } = useQuery({
        queryKey: ['task',user?.email],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/task?email=${user.email}`)
            console.log(task);
            return (res.data)

        }
    })
    const {
        register,
        handleSubmit,
      } = useForm()
      const onSubmit= (data) => {

       
const obj = {
  title: data.title,
  description: data.description,
  date: data.date,
  piority: data.piority
};

axios.put(`http://localhost:5000/task/${task._id}`, obj)
  .then(res => {
    console.log(res.data);
  })
  .catch(error => {
    console.error('Error updating task:', error);
  });
 
    }
    

    const handleDelete = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/task/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            })
                            refetch()
                        }
                    })
            }
        });
    }  
  
    return (
       

        <div className="bg-white w-1/3 h-auto p-4 text-black">
            <h2 className="text-center">TO DO List</h2>
            {
                task?.map((tas) => <div key={tas._id}> <p className="flex justify-between items-center text-xl my-2 p-2 rounded-lg bg-orange-600">{tas.title} <span className="flex items-center"><button onClick={() => handleDelete(tas)}><MdDelete /></button>
                 <button className="text-sm" onClick={() => document.getElementById('my_modal_1').showModal()}><MdModeEdit /></button>
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                    <form onSubmit={handleSubmit(() => onSubmit(tas._id))} >
    
    <div>
    <div className="form-control">
        <input type="text" {...register("title")} placeholder="Title" defaultValue={tas.title} className="input input-bordered" />
      </div>
      <div className="form-control my-2">
      <textarea {...register("description")} defaultValue={tas.description} className="h-32 textarea textarea-bordered" placeholder="Description"></textarea>
      </div>
      <div className="form-control my-2">
        <input type="datetime-local" {...register("date")} defaultValue={tas.date} placeholder="Deadline" className="input input-bordered" />
      </div>
      <div className="form-control p-2 my-2 rounded-lg border">
      <select {...register("piority")} defaultValue={tas.piority}>
      <option value="select piority">Select Piority</option>
      <option value="low">Low</option>
      <option value="moderate">Moderate</option>
      <option value="high">High</option>
      </select>

      </div>
      <div className="w-[max-content] mx-auto">
      <button className="btn bg-orange-700">Save</button>
      </div>
    </div>
  </form>
                        <div className="modal-action">
                            <form method="dialog">
                               
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
               </span> </p>  </div>)
            }
            
           
        </div>
    );
};

export default ToDo;