import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const ToDo = () => {
    const {data: task=[]} = useQuery({
        queryKey: ['task'],
        queryFn: async()=>{
           const res = await axios.get('http://localhost:5000/task')
            return (res.data)
           
        }
    })
    return (
        <div className="bg-white w-1/3 h-auto p-6 text-black">
            <h2 className="text-center">TO DO List</h2>
           {
            task.map(tas => <div key={tas._id}> <p className="text-xl my-2 p-2 rounded-lg bg-orange-600">{tas.title}</p>  </div>)
           }
        </div>
    );
};

export default ToDo;