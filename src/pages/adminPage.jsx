import { Link, Route, Routes } from "react-router-dom";
import { FaUsers } from 'react-icons/fa';
import { MdOutlineWarehouse } from "react-icons/md";
import { GiShoppingCart } from "react-icons/gi";
import AdminProductsPage from "./admin/product";
import AddProductForm from "./admin/addProductForm";
import UpdateProductForm from "./admin/updateProduct";

export default function AdminPage(){
    return(
        <div className="w-full h-screen bg-gray-200 flex p-2"  >

            <div className="h-full w-[300px]">
                <Link to="/admin/users" className=" flex items-center p-2  m-[5px]"><FaUsers className="mr-2"/> Users</Link>
                <Link to="/admin/products" className="flex items-center p-2  m-[5px]"><MdOutlineWarehouse className="mr-2"/> Products</Link>
                <Link to="/admin/orders" className="flex items-center p-2 m-[5px]" ><GiShoppingCart className="mr-2"/>Orders</Link>
            </div>

            <div className="h-full bg-white w-[calc(100vw-300px)]  rounded-lg">
                <Routes path="/*">
                    <Route path="/users" element={<h1>User</h1>}/>
                    <Route path="/products" element={<AdminProductsPage/>}/>
                    <Route path="/orders" element={<h1>Orders</h1>}/>
                    <Route path="/addProduct" element={<AddProductForm/>}/>
                    <Route path="/updateProduct" element={<UpdateProductForm/>}/>


                </Routes>
            </div>
        </div>
    )

}