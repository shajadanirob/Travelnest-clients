import { useEffect, useState } from "react";
import SingleMange from "./SingleMange";
import Swal from "sweetalert2";


const ManageService = () => {
    const [services,setServices] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res =>res.json())
        .then(data => setServices(data))
    },[])
    
    
    const handleDelete = id =>{
        console.log(id)
        fetch(`http://localhost:5000/delete/${id} `,{
            method:'DELETE'
        })
        .then(res => res.json())
        
        .then(data => {
            console.log(data)
    
            if(data.deletedCount >0){
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                  setServices(services.filter(data => data._id !== services._id))
                 
            }
        } )
    }
    return (
        <div>
            <div>
      <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
    <thead className="bg-gray-50">
        <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
            </th>
        </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
     
{
    services.map(service => <SingleMange key={service._id} service={service} handleDelete={handleDelete}></SingleMange>)
}



    </tbody>
</table>


      </div>
        </div>
    );
};

export default ManageService;