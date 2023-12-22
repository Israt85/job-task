
import axios from "axios";
import { useForm } from "react-hook-form";
import ToDo from "./ToDo";
import Ongoing from "./Ongoing";
import Done from "./Done";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";


const Tasks = () => {
       const {user} = useContext(AuthContext)
   
    const {
        register,
        handleSubmit,
      } = useForm()
      const onSubmit= (data) => {
        
        console.log(data)
        const obj ={
             title: data.title,
            description : data.description,
            date: data.date,
            piority: data.piority,
            email: user.email
        }
        axios.post('http://localhost:5000/task', obj)
        .then(res => {
           if(res.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500
            });
           }
        })
        .catch(error => {
           console.error('Error creating task:', error);
        });
     
    }
    
    
    return (
        <div>
          <h2 className="text-white text-xl text-center ">Task Management</h2>
          <div className="bg-red my-20 flex gap-4">
<button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>+ Crate New Task</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box h-96 text-black">
    <form method="dialog">
    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
 
    <form onSubmit={handleSubmit(onSubmit)} >
    
      <div>
      <div className="form-control">
          <input type="text" {...register("title")} placeholder="Title" className="input input-bordered" />
        </div>
        <div className="form-control my-2">
        <textarea {...register("description")} className="h-32 textarea textarea-bordered" placeholder="Description"></textarea>
        </div>
        <div className="form-control my-2">
          <input type="datetime-local" {...register("date")}placeholder="Deadline" className="input input-bordered" />
        </div>
        <div className="form-control p-2 my-2 rounded-lg border">
        <select {...register("piority")}>
        <option value="select piority">Select Piority</option>
        <option value="low">Low</option>
        <option value="moderate">Moderate</option>
        <option value="high">High</option>
        </select>

        </div>
        <div className="w-[max-content] mx-auto">
        <button className="btn bg-orange-700">Submit</button>
        </div>
      </div>
    </form>
    
  </div>
</dialog>

<ToDo></ToDo>
<Ongoing></Ongoing>
<Done></Done>
        </div>
        </div>
    );
};

export default Tasks;