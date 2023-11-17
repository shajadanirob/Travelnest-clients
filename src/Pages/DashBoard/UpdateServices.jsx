import Swal from "sweetalert2";
import UseAuth from "../../Hooks/UseAuth";
import { useLoaderData } from "react-router-dom";


const UpdateServices = () => {
  const lodar = useLoaderData()
    console.log(lodar._id)
  const{user} = UseAuth()
  const handleUpdate = event =>{
      event.preventDefault()
      const form = event.target;
      const userName = form.name.value;
      const userEmail = form.email.value;
      const ServiceName = form.ServiceName.value;
      const price = form.price.value;
      const servicesArea = form.area.value;
      const serviceDescription = form.description.value;
      const image = form.img.value
      console.log(userName,userEmail,ServiceName,price,servicesArea,serviceDescription,image)


      const updatedProduct ={userName,userEmail,ServiceName,price,serviceDescription,image,servicesArea}


      fetch(`https://y-ebon-seven.vercel.app/update/${lodar._id} `, {
        method: "PUT",
        headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(updatedProduct)
      })
        .then((res) => res.json())
        .then((data) => {
          if(data.modifiedCount > 0){
              Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Your product update successFully',
                  showConfirmButton: false,
                  timer: 1500
                })
          }
          console.log(data);
          form.reset()
        });
    };


    return (
      <div className="bg-white border border-4 rounded-lg shadow relative w-full ">

      <div className="flex items-start justify-between p-5 border-b rounded-t">
          <h3 className="text-3l  font-semibold">
              Updated a Services
          </h3>
      </div>
  
      <div className="p-6 space-y-6">
          <form onSubmit={handleUpdate}>
              <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                      <label for="product-name" className="text-sm font-medium text-gray-900 block mb-2"> Your name</label>
                      <input type="text" defaultValue={lodar?.userName
  } name="name" id="product-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"  required=""/>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                      <label for="product-name" className="text-sm font-medium text-gray-900 block mb-2">Service Name</label>
                      <input type="text" name="ServiceName" id="product-name"  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Service Name" required/>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                      <label for="product-name" className="text-sm font-medium text-gray-900 block mb-2">Your email</label>
                      <input type="email" defaultValue={lodar?.userEmail} name="email" id="product-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"  required/>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                      <label for="category" className="text-sm font-medium text-gray-900 block mb-2"> Service Area</label>
                      <input type="text" name="area" id="category" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Service Area" required/>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                      <label for="brand" className="text-sm font-medium text-gray-900 block mb-2">Photo Url</label>
                      <input type="text" name="img" id="brand" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="photo url" required/>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                      <label for="price" className="text-sm font-medium text-gray-900 block mb-2">Price</label>
                      <input type="number" name="price" id="price" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="$2300" required/>
                  </div>
                  <div className="col-span-full">
                      <label for="product-details" className="text-sm font-medium text-gray-900 block mb-2">Description</label>
                      <textarea id="product-details" rows="6" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4" placeholder="Description" name="description" required></textarea>
                  </div>
              </div>
              <div className="p-6 border-t border-gray-200 rounded-b flex items-center justify-center">
          <button className="inline-flex text-white bg-[#5c98f2] border-0  focus:outline-none hover:bg-[5c98f2] rounded-full py-2 px-6 text-lg" type="submit">Update Services</button>
      </div>
          </form>
        
      </div>
  
  </div>
    );
};

export default UpdateServices;