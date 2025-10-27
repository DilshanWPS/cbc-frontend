import { useState } from "react";

export default function TestingPage(){

    const [number,setNumber]=useState(0  )


    function increment(){
        let newValue1=number+1;
        setNumber(newValue1)
        
    }

    function decrement(){
        let newValue2=number-1;
        setNumber(newValue2)

        
    }


    return(
        <div className="w-full bg-amber-300 h-screen flex flex-col justify-center items-center">
            <span className="text-3xl font-bold">{number}</span>
            <div className="w-full flex justify-center">
                <button onClick={increment} className="bg-blue-500 text-white p-2 rounded-lg w-[60px] cursor-pointer">+</button>
                <button onClick={decrement} className="bg-blue-500 text-white p-2 rounded-lg w-[60px] cursor-pointer">-</button>

            </div>
        </div>
    )
}