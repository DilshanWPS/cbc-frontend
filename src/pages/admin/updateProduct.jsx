import axios from "axios";
import { use, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function UpdateProductForm(){

    const locationData=useLocation();
    const navigate=useNavigate()
    console.log(locationData)
    if(locationData.state==null){
        toast.error("Please select a product to edit")
        window.location.href="/admin/products"


    }


    const [productId,setProductId]=useState(locationData.state.productId);
    const [productName,setProductName]=useState(locationData.state.name);
    const [alternativeProductNames,setAlternativeProductNames]=useState(locationData.state.altNames.join(","));
    const [productPrice,setProductPrice]=useState(locationData.state.price);
    const [productLabelPrice,setProductLabelPrice]=useState(locationData.state.labledPrice);
    const [productDescription,setProductDescription]=useState(locationData.state.description);
    const [productStockQuentity,setProductStockQuentity]=useState(locationData.state.stock);
    const [images,setImages]=useState([]);
   

    async function handleSubmit(){



        const promisesArray=[]

        for(let i=0; i<images.length;i++){

            const promise=media(images[i])
            promisesArray[i]=promise  

        }

        try{

        

            //To run all the promises in one time
            let result= await Promise.all(promisesArray)
            console.log(result)

            if(images.length==0){
                result=locationData.state.images
            }

            const alternativeNamesInArray=alternativeProductNames.split(",")
            const product={
                name:productName,
                altNames:alternativeNamesInArray,
                price:productPrice,
                labledPrice:productLabelPrice,
                description:productDescription,
                stock:productStockQuentity,
                images:result,
            }

            //To get the users token from the local storage
            const token=localStorage.getItem("token")

            await axios.put( import.meta.env.VITE_BACKEND_URL+"/api/product/"+productId,product,
                {
                    headers:{
                        "Authorization":token
                    }
                }
            )
            toast.success("Product updated successfully...");
            navigate("/admin/products");
        

        }catch(error){
            console.log(error)

            toast.error("Product updating failed..")
        }
          

    }

    return(
        <div className="w-full h-full rounded-lg bg-blue-200 flex justify-center items-center">
            <div className="w-[500px] h-[600px] bg-blue-200 rounded-lg shadow-lg flex flex-col items-center ">
                <h1 className="text-3xl font-bold text-gray-700 m-2.5">Update Product</h1>
                
                <input 
                    disabled
                    value={productId}
                    onChange={
                        (e)=>{
                            setProductId(e.target.value)
                            

                        }
                    }
                    className="w-[400px] h-[50px] border border-black rounded-xl text-center m-[5px]" placeholder="Product ID" />
                
                <input 
                value={productName}
                onChange={
                    (e)=>{
                        setProductName(e.target.value)

                    }
                }
                className="w-[400px] h-[50px] border border-black rounded-xl text-center m-[5px]" placeholder="Product Name" />
                
                <input 
                value={alternativeProductNames}
                onChange={
                    (e)=>{
                        setAlternativeProductNames(e.target.value)

                    }
                }
                className="w-[400px] h-[50px] border border-black rounded-xl text-center m-[5px]" placeholder="Alternative Names" />
                
                <input 
                value={productPrice}
                    onChange={
                        (e)=>{
                            setProductPrice(e.target.value)
                            

                        }
                    }
                type="number"
                className="w-[400px] h-[50px] border border-black rounded-xl text-center m-[5px]" placeholder="Price" />
                
                <input 
                value={productLabelPrice}
                    onChange={
                        (e)=>{
                            setProductLabelPrice(e.target.value)
                            

                        }
                    }
                type="number"
                className="w-[400px] h-[50px] border border-black rounded-xl text-center m-[5px]" placeholder="Label Price" />
                
                <textarea 
                value={productDescription}
                    onChange={
                        (e)=>{
                            setProductDescription(e.target.value)
                            

                        }
                    }
                className="w-[400px] h-[50px] border border-black rounded-xl text-center m-[5px]" placeholder="Description" />
                
                <input
                    type="file"
                    onChange={
                        (e)=>{
                            setImages(e.target.files)

                        }

                    }
                    //To give the opportunity to submit multiple files
                    multiple
                    className="w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]"
                    placeholder="Product Images"
                
                />

                <input 
                value={productStockQuentity}
                    onChange={
                        (e)=>{
                            setProductStockQuentity(e.target.value)
                            

                        }
                    }
                type="number"
                
                className="w-[400px] h-[50px] border border-black rounded-xl text-center m-[5px]" placeholder="Stock Quentity" />
                
                <div className="w-[400px] h-[100px] flex justify-between items-center rounded-lg">
                    <Link to={"/admin/products"} className="bg-red-500 text-white w-[180px] text-center p-[10px] rounded-lg  hover:bg-red-600 cursor-pointer">Cancel</Link>
                    <button onClick={handleSubmit} className="bg-green-600 text-white w-[180px] text-center p-[10px] rounded-lg ml-[10px] hover:bg-red-600 cursor-pointer">Update Product</button>
                </div>
            </div>   
        </div>
    )
}

