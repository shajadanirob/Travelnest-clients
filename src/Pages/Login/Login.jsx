
import { Link,  useLocation,  useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import UseAuth from "../../Hooks/UseAuth";

const Login = () => {
    const { signIn,googleLogin } = UseAuth();
    const location = useLocation();
    const navigate = useNavigate()


const handleLogin = e =>{
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password)
    .then(res => {
      toast.success('User logged in successfully');
      navigate(location.state? location.state :'/')
  })
  .catch(error => {
      toast.error(error.message)
  })

}


const handleGooglelogin = e =>{
    e.preventDefault()
  
    googleLogin()
    .then(res => {
        console.log(res.user)
        toast.success('User logged in successfully')
        navigate('/')
    })
    .catch(error =>{
        console.log(error)
    })
}






    return (
        <section className="py-26 bg-white">
  <div className="container px-4 mx-auto">
    <div className="max-w-lg mx-auto">
      <div className="text-center mb-8">
        <a className="inline-block mx-auto mb-6" href="#">
          <img src="nigodo-assets/logo-icon-nigodo.svg" alt=""/>
        </a>
        

       <div>
       <div className="flex justify-center items-center">
       <img className="w-[260px]" src="https://i.ibb.co/MgtkWyD/1519798591013.jpg" alt="" />
        </div>
       </div>


        <h2 className="text-3xl md:text-4xl font-extrabold mt-8">Sign in</h2>
       
          </div>
      <form onSubmit={handleLogin}>
        <div className="mb-6">
          <label className="block mb-2 font-extrabold" >Email</label>
          <input className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded" type="email" placeholder="email" name="email"/>
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-extrabold" for="">Password</label>
          <input className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded" type="password" placeholder="**********" name="password"/>
        </div>
        <div className="flex flex-wrap -mx-4 mb-6 items-center justify-between">
          <div className="w-full lg:w-auto px-4 mb-4 lg:mb-0">
            <label for="">
              <input type="checkbox"/>
              <span className="ml-1 font-extrabold">Remember me</span>
            </label>
          </div>
          <div className="w-full lg:w-auto px-4"><a className="inline-block font-extrabold hover:underline" href="#">Forgot your password?</a></div>
        </div>
        <button className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-[#8696a0]  border-3 border-indigo-900 shadow rounded transition duration-200">Sign in</button>

        </form>

        <div className="my-2">
        <div>
            <button
            onClick={handleGooglelogin}
               className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
               <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-6 h-6" alt=""/>
               <span className="dark:text-gray-300">
                   Login with Google
               </span>
            </button>
        </div>
    </div>




        <p className="text-center font-extrabold">Don&rsquo;t have an account? <Link to='/TravelNest/register' className="text-red-500 hover:underline" href="#">Sign up</Link></p>

     
    </div>
  </div>
</section>
    );
};

export default Login;