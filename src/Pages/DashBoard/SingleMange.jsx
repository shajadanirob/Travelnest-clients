import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SingleMange = ({service,handleDelete}) => {
    
    const{_id,image,userName,userEmail} =service
  



    return (
        <tr>
        <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10">
                    <img className="h-10 w-10 rounded-full" src={image} alt=""/>
                </div>
                <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                       {userName}
                    </div>
                </div>
            </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">Regional Paradigm Technician</div>
            <div className="text-sm text-gray-500">Optimization</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {userEmail}
        </td>
        <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
            <Link to={`/TravelNest/update/${_id}`} className="text-indigo-600 hover:text-indigo-900">Edit</Link>
            <button onClick={() => handleDelete(_id)} className="ml-2 text-red-600 hover:text-red-900">Delete</button>
        </td>
    </tr>
    );
};

export default SingleMange;