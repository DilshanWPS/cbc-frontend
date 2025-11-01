import axios from "axios"
import { useEffect, useState } from "react"
import { MdAddToPhotos, MdOutlineModeEditOutline } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { FaTrashCan } from "react-icons/fa6";
import toast from "react-hot-toast";
import Loader from "../../components/loader";

export default function AdminProductsPage(){

    const [products,setProducts]=useState([])
    
    //To ensure about page loading or not
    const [loaded,setLoaded]=useState(false)

    const navigate=useNavigate()

    useEffect(
        ()=>{
            if(!loaded){

                axios.get(import.meta.env.VITE_BACKEND_URL+"/api/product").then(
                    (response)=>{
                        console.log(response.data)
                        setProducts(response.data) 
                        setLoaded(true)

                    }  
                )
            }

        },
        [loaded ]
    )

    async function deleteProduct(id){
        const token=localStorage.getItem("token")
        if(token==null){
            toast.error("Please login to delete product")
            return
        }

        try{
            await axios.delete(import.meta.env.VITE_BACKEND_URL+"/api/product/"+id,
            {
                headers:{
                    Authorization:token
                }
            }
            
        )
        setLoaded(false)
        toast.success("Product deleted successfully")
        }catch(error){
            console.log(error)
            toast.error("Error deleting product")
            return

        }
    }

    return(
        <div className="w-full h-full rounded-lg relative">

            <Link to={"/admin/addProduct"}  className="bg-white text-blue-400 p-4 text-4xl rounded-full cursor-pointer hover:bg-white hover:text-blue-700 absolute right-5 bottom-5">
                <MdAddToPhotos />
            </Link>

            {loaded&&<table className="w-full  rounded-lg">

                <thead>

                    <tr>
                        <th className="p-2">Product ID</th>
                        <th className="p-2">Name</th>
                        <th className="p-2">Price</th>
                        <th className="p-2">Labled Price</th>
                        <th className="p-2">Stock</th>
                    </tr>

                </thead>

                <tbody>
                    {
                        products.map(
                            (product,index)=>{
                                console.log("mapping "+product.productId)

                                return(
                                    <tr key={index} className="border-b-2 text-center cursor-pointer hover:bg-gray-400 hover:text-white">
                                        <td className="p-2">{product.productId}</td>
                                        <td className="p-2">{product.name}</td>
                                        <td className="p-2">{product.price}</td>
                                        <td className="p-2">{product.labledPrice}</td>
                                        <td className="p-2">{product.stock}</td>
                                        <td className="p-2">
                                            <div className="w-full h-ful flex justify-center">
                                                <FaTrashCan 
                                                    onClick={
                                                        ()=>{
                                                            deleteProduct(product.productId)
                                                        }
                                                    }
                                                    className="text-[25px] m-[10px] hover:text-red-300" />
                                                <MdOutlineModeEditOutline
                                                    onClick={
                                                        ()=>{
                                                            //To load edit product form
                                                            navigate("/admin/updateProduct",{
                                                                state:product
                                                            }

                                                            )
                                                        }
                                                    }
                                                className="text-[25px] m-[10px] hover:text-blue-300" />
                                                
                                                

                                            </div>
                                        </td>
                                    </tr>
                                )
                                

                            }
                        )
                    }
                    
                </tbody>

            </table>}
            {
                !loaded&&
                <Loader/>
            }

        </div>
    )
}