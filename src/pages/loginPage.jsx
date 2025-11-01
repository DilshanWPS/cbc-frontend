import { useState } from "react";
import axios from 'axios';
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";


export default function LoginPage(){

    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [loading,setloading]=useState(false)
    const navigate=useNavigate();

    console.log("Backend URL:", import.meta.env.VITE_BACKEND_URL);

    function handleLogin(){
        setloading(true)
        console.log("login button clicked");
        console.log("User Email is : ",email);
        console.log("User Password is : ",password);

        axios.post(import.meta.env.VITE_BACKEND_URL + "/api/user/login",{
            email:email,
            password:password
        }).then(
            (response)=>{
                console.log("login successfull",response.data);
                toast.success("Login successfull");
                localStorage.setItem("token",response.data.token);

                const user=response.data.user;

                if(user.role=="admin"){
                    //go to the admin page
                    navigate("/admin")

                }else{
                    //go to the homepage
                   navigate("/")
                }
                setloading(false)


            }
        ).catch(
            (error)=>{
                console.log("Login failed",error.response.data);
                toast.error(error.response.data.message ||"Login failed");
                setloading(false)
            }
           
        )
    }

    return(
        <div className="flex bg-red-900 w-full h-screen bg-[url(/login-bg.jpg)] bg-cover bg-center">
            <div className=" w-[50%] h-full">

            </div>

            <div className=" w-[50%] h-full flex justify-center items-center ">

                <div className="w-[450px] h-[600px] backdrop-blur-2xl shadow-xl rounded-xl flex flex-col justify-center items-center">

                    <input onChange={
                        (e)=>{
                            console.log("Email Changed..");
                            console.log(e.target.value);
                            setEmail(e.target.value);

                        }
                    } className="w-[400px] h-[50px] border border-black rounded-xl text-center m-[5px]" type="email" placeholder="Email" />
                    
                    <input onChange={
                        (e)=>{
                            console.log("Password Changed..");
                            console.log(e.target.value);
                            setPassword(e.target.value);

                        }
                    }
                    className="w-[400px] h-[50px] border border-black rounded-xl text-center m-[5px]" type="password" placeholder="Password" />

                    <button 
                        onClick={handleLogin} 
                        className="w-[400px] h-[50px] rounded-xl bg-green-500 text-white m-[5px] cursor-pointer">
                        {
                            loading?"Loading":"Login"
                        }
                    </button>
                    <p className="text-gray-600 text-center m-[10px]">
                        Don't have an account yet?
                        &nbsp;
                        
                        <span className="text-green-500 cursor-pointer hover:text-shadow-green-950">
                            <Link to={"/register"}>
                                Register Now
                            </Link> 
                        </span>
                    </p>
                </div>
 
            </div>

        </div>
    )
}