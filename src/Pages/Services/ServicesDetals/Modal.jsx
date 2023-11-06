import { useLoaderData } from "react-router-dom";
import UseAuth from "../../../Hooks/UseAuth";


const Modal = () => {
    const loder = useLoaderData()
    const{_id,userName,userEmail,ServiceName,price,serviceDescription,image,servicesArea} = loder;
    const{user} = UseAuth()
    console.log(user.email)


    const handleSubmit = event =>{
        event.preventDefault()
        const form = event.target;
        const ServiceName = form.ServiceName.value
        const image = form.image.value;
        const ServicesEmail = form.ServicesEmail.value;
        const userEmail = form.userEmail.value;
        const date = form.date.value;
        const address = form.address.value;
        const price = form.price.value;
        console.log(ServiceName,image,ServicesEmail,userEmail,date,address,price)
    
        const bookings ={
            ServiceName,image,ServicesEmail,userEmail,date,address,price
        }
        console.log(bookings)
        fetch('http://localhost:5000/bookings',{
          method:'POST',
          headers:{
            'content-type': 'application/json'
          },
          body: JSON.stringify(bookings)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
        })
    }
    










    return (
        <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
        <div className=" flex items-center">
    <div className="w-full">
        <h2 className="text-center text-blue-400 font-bold text-2xl uppercase mb-10">Book Now</h2>
        <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
            <form onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label for="name" className="block mb-2 font-bold text-gray-600">Service Name</label>
                    <input type="text" id="ServiceName" name="userName" defaultValue={ServiceName} className="border border-gray-300 shadow p-3 w-full rounded mb-"/>
                </div>
                <div className="mb-5">
                    <label for="name" className="block mb-2 font-bold text-gray-600">service Image</label>
                    <input type="text" id="name" name="image" defaultValue={image} className="border border-gray-300 shadow p-3 w-full rounded mb-"/>
                </div>

                <div className="mb-5">
                    <label  className="block mb-2 font-bold text-gray-600">services email</label>
                    <input type="text" defaultValue={userEmail} id="twitter" name="ServicesEmail" placeholder="Put in your fullname." className="border border-gray-300 shadow p-3 w-full rounded mb-"/>
                </div>
                <div className="mb-5">
                    <label className="block mb-2 font-bold text-gray-600">user email</label>
                    <input type="text" defaultValue={user.email} id="twitter" name="userEmail" placeholder="Put in your fullname." className="border border-gray-300 shadow p-3 w-full rounded mb-"/>
                </div>
                <div className="mb-5">
                    <label for="twitter" className="block mb-2 font-bold text-gray-600">Date</label>
                    <input type="date" name="date" placeholder="Put in your fullname." className="border border-gray-300 shadow p-3 w-full rounded mb-"/>
                </div>
                <div className="mb-5">
                    <label  className="block mb-2 font-bold text-gray-600">Address</label>
                    <input type="text"  id="twitter" name="address" placeholder="Put in your fullname." className="border border-gray-300 shadow p-3 w-full rounded mb-"/>
                </div>
                <div className="mb-5">
                    <label  className="block mb-2 font-bold text-gray-600">Price</label>
                    <input type="text" defaultValue={price}  id="twitter" name="price" placeholder="Put in your fullname." className="border border-gray-300 shadow p-3 w-full rounded mb-"/>
                </div>

                <button className="block w-full bg-[#E5AE49] text-white font-bold p-4 rounded-lg">Book Now</button>
            </form>
        </div>
    </div>
</div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn bg-[#E5AE49] text-white ">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    );
};

export default Modal;