import axios from "axios";
import { useEffect } from "react";
import UseAuth from "./UseAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL:'http://localhost:5000',
    withCredentials:true
});


const UserAxiosSecure = () => {
    const{logOut} = UseAuth()
    const navigate = useNavigate()

        useEffect(() =>{
            axiosSecure.interceptors.response.use(res =>{
                return res;
            },error =>{
                console.log('error tacked interceptor',error.response)
                if(error.response.status === 401 ||error.response.status === 403){
                    console.log('logged user')
                    logOut()
                    .then(result =>{
                        console.log(result)
                        navigate('/TravelNest/login')
                    })
                    .catch(error =>{
                        console.log(error)
                    })
                }
            })

        },[])
    return axiosSecure
       
   
};

export default UserAxiosSecure;