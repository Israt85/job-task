const Tasks = () => {
    return (
        <div className="bg-red">
<button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>+ Crate New Task</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box h-96 text-black">
  
    <form method="dialog">
    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      <div>
      <div className="form-control">
          <input type="text" placeholder="Title" className="input input-bordered" />
        </div>
        <div className="form-control my-2">
        <textarea className="h-32 textarea textarea-bordered" placeholder="Description"></textarea>
        </div>
        <div className="form-control my-2">
          <input type="datetime-local" placeholder="Deadline" className="input input-bordered" />
        </div>
        <div className="form-control p-2 my-2 rounded-lg border">
        <select>
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
        </div>
    );
};

export default Tasks;