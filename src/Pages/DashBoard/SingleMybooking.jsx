const SingleMybooking = ({booking}) => {
    const{image,ServiceName,price} =booking
    return (
        <div>

<div className="container mx-auto px-4 py-8">
    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <h1 className="text-2xl font-bold my-4">Shopping Cart</h1>
        <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
      Checkout
    </button>
    </div>
    <div className="mt-8">
        <div className="flex flex-col md:flex-row border-b border-gray-400 py-4">
            <div className="flex-shrink-0">
                <img src={image} alt="Product image" className="w-32 h-32 object-cover"/>
            </div>
            <div className="mt-4 md:mt-0 md:ml-6">
                <h2 className="text-lg font-bold">{ServiceName}</h2>
                <div className="mt-4 flex items-center">
                    <span className="mr-2 text-gray-600">Price:</span>
                    <span className="ml-auto font-bold">${price}</span>
                </div>
            </div>
        </div>
       
    </div>
  
</div>









        </div>
    );
};

export default SingleMybooking;