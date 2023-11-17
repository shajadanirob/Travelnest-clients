import toast from "react-hot-toast";


const SingleMybooking = ({booking}) => {
    const{_id ,image,ServiceName,price} =booking


    
  const handleDelete = id =>{
    console.log(id)
    fetch(`  https://y-ebon-seven.vercel.app/bookings/${id}`,{
        method:'DELETE'
    })
    .then(res => res.json())
    
    .then(data => {
        console.log(data)

        if(data.deletedCount >0){
            toast.success('Your booked in successfully delete');
             
        }
    } )
}




    return (
        <div>
 



<div className="flex items-center mb-4">
                <img className="h-16 w-16 object-contain rounded-lg mr-4" src={image}
                    alt="Product"/>
                <div className="flex-1">
                    <h2 className="text-lg font-bold"> {ServiceName}</h2>
                    <span className="text-gray-600">${price}</span>
                </div>
                <button onClick={()=>handleDelete(_id)}  className="text-gray-600 hover:text-red-500">
                    <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                        <path d="M19 13H5v-2h14v2z" />
                    </svg>
                </button>
            </div>













        </div>
    );
};

export default SingleMybooking;