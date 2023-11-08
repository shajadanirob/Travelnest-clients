import { useState } from "react";
import UseAuth from "../../Hooks/UseAuth";
import SingleMyPending from "./SingleMyPending";

const MyPendingWork = () => {
    const{user} =UseAuth()
    const [pendings ,setPendings] = useState([])
    const url = `http://localhost:5000/pendings/?email=${user.email}`
    fetch(url,{credentials:'include'})
    .then(res => res.json())
    .then(data => setPendings(data))
  

    const handlePendingConfirm = id =>{
        fetch(`http://localhost:5000/pendings/${id}`,{
            method:'PATCH',
            headers:{
                'content-type' :'application/json'
            },
            body: JSON.stringify({status:'confirm'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount >0) {
               const remaining = pendings.filter(pending => pending._id !== id);
               const updated = pendings.find(pending => pending._id === id)
               updated.status = 'confirm'
               updated.status ='In Progress'
               updated.status ='Completed'
               const newPendings =[updated,...remaining]
               setPendings(newPendings)
            }
        })
    }




   
    return (
        <div>
           {
            pendings.length === 0 ? <p className="text-center flex items-center justify-center text-3xl font-semibold text-red-700">You have no pending service</p> : pendings.map(pending => <SingleMyPending 
                key={pending._id} 
                pending={pending} 
                handlePendingConfirm={handlePendingConfirm}
                ></SingleMyPending>)
           }
        </div>
    );
};

export default MyPendingWork;
// 