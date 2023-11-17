import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SingleMange = ({service,handleDelete}) => {
    
    const{_id,image,userName,userEmail,ServiceName} =service
  



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
            <div className="text-sm text-gray-900">{ServiceName}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {userEmail}
        </td>
        <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
            <Link to={`/TravelNest/update/${_id}`} className="inline-flex text-white bg-[#5c98f2] border-0  focus:outline-none hover:bg-[5c98f2] rounded-full py-2 px-6 text-lg">Edit</Link>
            <button onClick={() => handleDelete(_id)} className="inline-flex text-white bg-[#5c98f2] border-0  focus:outline-none hover:bg-[5c98f2] rounded-full py-2 px-6 text-lg">Delete</button>
        </td>
    </tr>




    
    );
};

export default SingleMange;