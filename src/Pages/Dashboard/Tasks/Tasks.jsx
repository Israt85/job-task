
import axios from "axios";
import { useForm } from "react-hook-form";
import ToDo from "./ToDo";
import Ongoing from "./Ongoing";
import Done from "./Done";

const Tasks = () => {
   
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
            piority: data.piority
        }
        axios.post('http://localhost:5000/task', obj)
        .then(res => {
           console.log(res.data);
        })
        .catch(error => {
           console.error('Error creating task:', error);
        });
     
    }

    return (
        <div className="bg-red flex gap-10">
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
    );
};

export default Tasks;