import axios from "axios"
import { useEffect, useState } from "react"
import { MdAddToPhotos } from "react-icons/md";
import { Link } from "react-router-dom";

export default function AdminProductsPage(){

    const [products,setProducts]=useState([])

    useEffect(
        ()=>{
            axios.get(import.meta.env.VITE_BACKEND_URL+"/api/product").then(
                (response)=>{
                    console.log(response.data)
                    setProducts(response.data) 

                }  
            )

        },
        []
    )

    return(
        <div className="w-full h-full rounded-lg relative">

            <Link to={"/admin/addProduct"}  className="bg-white text-blue-400 p-4 text-4xl rounded-full cursor-pointer hover:bg-white hover:text-blue-700 absolute right-5 bottom-5">
                <MdAddToPhotos />
            </Link>

            <table className="w-full  rounded-lg">

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
                                    <tr key={index} className="border-b-2 text-center cursor-pointer hover:bg-gray-700 hover:text-white">
                                        <td className="p-2">{product.productId}</td>
                                        <td className="p-2">{product.name}</td>
                                        <td className="p-2">{product.price}</td>
                                        <td className="p-2">{product.labledPrice}</td>
                                        <td className="p-2">{product.stock}</td>
                                    </tr>
                                )
                                

                            }
                        )
                    }
                    
                </tbody>

            </table>

        </div>
    )
}