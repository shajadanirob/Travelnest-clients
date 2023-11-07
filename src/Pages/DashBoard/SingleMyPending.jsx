import React from 'react';

const SingleMyPending = ({pending,handlePendingConfirm}) => {
    const{_id,ServiceName,image,userEmail,date,status} =pending;
   
  



    return (
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
     
    <tr>
        <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10">
                    <img className="h-10 w-10 rounded-full" src={image} alt=""/>
                </div>
                <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                       {ServiceName}
                    </div>
                    <div className="text-sm text-gray-500">
                      {userEmail}
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


   
{/* { 
        status ==='confrim' ? <span className=" text-primary font-bold">Confiremd</span> :
        <button onClick={()=>handlePendingConfrim(_id)} className="btn btn-ghost btn-xs"> Please Confrim</button>} */}
       {/* {
        status === 'confirm' ? <span className=" text-primary font-bold">Confiremd</span> :
       
        <div className="dropdown dropdown-bottom">
        <button tabIndex={0} className="btn m-1">Pending</button>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
        
          <li><button onClick={()=>handlePendingConfirm(_id)}>Completed</button></li>
          <li><button onClick={()=>handlePendingConfirm(_id)}>  In Progress</button></li>
        </ul>
      </div>
      
       }  */}

{
  status === 'confirm'  ? 
    <span className="text-primary font-bold">Confirmed</span>
     :
    
    <div className="dropdown dropdown-bottom">
      <button tabIndex={0} className="btn m-1">
        Pending
      </button>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    
          <li>
          <button onClick={() => handlePendingConfirm(_id)}>
          In Progress
          </button>
        </li>
    
            <li>
          <button onClick={() => handlePendingConfirm(_id)}>
          Completed
          </button>
        </li>
        
      </ul>
    </div>
  
}

        </td>
    </tr>



    </tbody>
</table>
   </div>
    );
};

export default SingleMyPending;