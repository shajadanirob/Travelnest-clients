import Swal from "sweetalert2";
import UseAuth from "../../Hooks/UseAuth";



const AddServices = () => {
    const{user} = UseAuth()
    const handleSubmit = event =>{
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
        const services ={userName,userEmail,ServiceName,price,serviceDescription,image,servicesArea}
      
        fetch("http://localhost:5000/services", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(services),
          })
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            if(data.insertedId){
              Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Your product update successFully',
                  showConfirmButton: false,
                  timer: 1500
                })
                form.reset()
          }
          });
        };
      
      




    return (
        <div className="bg-white border border-4 rounded-lg shadow relative w-full ">

    <div className="flex items-start justify-between p-5 border-b rounded-t">
        <h3 className="text-3l  font-semibold">
            Add Product
        </h3>
    </div>

    <div className="p-6 space-y-6">
        <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
                    <label for="product-name" className="text-sm font-medium text-gray-900 block mb-2"> Your name</label>
                    <input type="text" defaultValue={user?.displayName
} name="name" id="product-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"  required=""/>
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label for="product-name" className="text-sm font-medium text-gray-900 block mb-2">Service Name</label>
                    <input type="text" name="ServiceName" id="product-name"  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Service Name”" required=""/>
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label for="product-name" className="text-sm font-medium text-gray-900 block mb-2">Your email</label>
                    <input type="email" defaultValue={user?.email} name="email" id="product-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" required/>
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label for="category" className="text-sm font-medium text-gray-900 block mb-2"> Service Area</label>
                    <input type="text" name="area" id="category" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Service Area" required=""/>
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label for="brand" className="text-sm font-medium text-gray-900 block mb-2">Photo Url</label>
                    <input type="text" name="img" id="brand" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="photo url" required=""/>
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label for="price" className="text-sm font-medium text-gray-900 block mb-2">Price</label>
                    <input type="number" name="price" id="price" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="$2300" required=""/>
                </div>
                <div className="col-span-full">
                    <label for="product-details" className="text-sm font-medium text-gray-900 block mb-2">Description</label>
                    <textarea id="product-details" rows="6" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4" placeholder="Description" name="description"></textarea>
                </div>
            </div>
            <div className="p-6 border-t border-gray-200 rounded-b flex items-center justify-center">
        <button className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">Add Services</button>
    </div>
        </form>
      
    </div>

</div>
    );
};

export default AddServices;