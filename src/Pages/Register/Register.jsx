// import toast from "react-hot-toast";
import { Link,  useNavigate } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import toast from "react-hot-toast";


const Register = () => {
    const { createUser,handleUpdateProfile } = UseAuth()
    const navigate = useNavigate()



    const handleRegister = e => {
        e.preventDefault()
        const name = e.target.name.value
        const photoURL = e.target.photoURL.value
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name,  photoURL, email, password)
        if (password.length < 6) {
            toast.error('Password must be at least 6 characters');
            return;
        }
        else if(!/[A-Z]/.test(password)){
            toast.error('please provide a oneuppercase')
            return;
          }
          else if(!/[@#$%^&*]/.test(password)){
            toast.error('dont have a special character')
          }
          

        createUser(email,password)
        .then(result => {
            handleUpdateProfile(name,photoURL)
            .then(() =>{
                toast.success('Successfully created!');
                navigate('/')
                console.log(result)
            })
            
           
        })
        .catch(error => {
            toast.error(error.message)
        })



    }





    return (
        <section className="py-26 bg-white">
            <div className="container px-4 mx-auto">
                <div className="max-w-lg mx-auto">
                    <div className="text-center mb-8">
                        <a className="inline-block mx-auto mb-6" href="#">
                            <img src="nigodo-assets/logo-icon-nigodo.svg" alt="" />
                        </a>


                        <div>
                            <div className="flex justify-center items-center">
                            <img className="w-[260px]" src="https://i.ibb.co/MgtkWyD/1519798591013.jpg" alt="" />
                            </div>
                        </div>


                        <h2 className="text-3xl md:text-4xl font-extrabold mt-8">Sign Up Now</h2>

                    </div>
                    <form onSubmit={handleRegister}>


                        <div className="mb-6">
                            <label className="block mb-2 font-extrabold" >Name</label>
                            <input className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-gray-400 bg-white shadow border-2 border-indigo-900 rounded" type="name" placeholder="name" name="name" required />
                        </div>


                        <div className="mb-6">
                            <label className="block mb-2 font-extrabold" >photoURL</label>
                            <input className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-gray-400 bg-white shadow border-2 border-indigo-900 rounded" type="photoURL" placeholder="PhotoUrl" name="photoURL" required />
                        </div>


                

                        <div className="mb-6">
                            <label className="block mb-2 font-extrabold" >Email</label>
                            <input className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-gray-400 bg-white shadow border-2 border-indigo-900 rounded" type="email" placeholder="email"
                                name="email" required />
                        </div>




                        <div className="mb-6">
                            <label className="block mb-2 font-extrabold" >Password</label>
                            <input className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-gray-400 bg-white shadow border-2 border-indigo-900 rounded" type="password"
                                name="password"

                                placeholder="**********" required />
                        </div>
                        <div className="flex flex-wrap -mx-4 mb-6 items-center justify-between">
                            <div className="w-full lg:w-auto px-4 mb-4 lg:mb-0">
                            </div>
                        </div>
                        <button className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-[#8696a0]  border-3 border-indigo-900 shadow rounded transition duration-200">Register Now</button>



                      



                        <p className="text-center font-extrabold">You have an account? <Link className="text-red-500 hover:underline" to='/TravelNest/login'>Sign in</Link></p>

                    </form>
                </div>
            </div>
        </section>
    );
};

export default Register;