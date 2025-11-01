// import { useState } from "react";

import { createClient } from "@supabase/supabase-js"
import { useState } from "react"
import toast from "react-hot-toast"
import mediaUpload from "../utills/mediaUpload"

// export default function TestingPage(){

//     const [number,setNumber]=useState(0  )


//     function increment(){
//         let newValue1=number+1;
//         setNumber(newValue1)
        
//     }

//     function decrement(){
//         let newValue2=number-1;
//         setNumber(newValue2)

        
//     }


//     return(
//         <div className="w-full bg-amber-300 h-screen flex flex-col justify-center items-center">
//             <span className="text-3xl font-bold">{number}</span>
//             <div className="w-full flex justify-center">
//                 <button onClick={increment} className="bg-blue-500 text-white p-2 rounded-lg w-[60px] cursor-pointer">+</button>
//                 <button onClick={decrement} className="bg-blue-500 text-white p-2 rounded-lg w-[60px] cursor-pointer">-</button>

//             </div>
//         </div>
//     )
// }

export default function TestingPage(){

    const [file,setFile]=useState(null)

    function handleUpload(){
        mediaUpload(file).then(
            (url)=>{
                console.log(url)
                toast.success("File uploaded successfully")


            }
        ).catch(
            (error)=>{
                console.log(error)
                toast.error("File upload failed")

            }
        )

    }
    
    return(
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <input 
                type="file"
                onChange={
                    (e)=>{
                        setFile(e.target.files[0])

                    }
                }
            />

            <button 
                onClick={handleUpload} 
                className="bg-gray-700 text-white p-2 rounded-lg">Upload

            </button>

        </div>
    )
}