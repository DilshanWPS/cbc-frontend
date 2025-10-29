import { Link } from "react-router-dom";

export default function AddProductForm(){
    return(
        <div className="w-full h-full rounded-lg bg-blue-200 flex justify-center items-center">
            <div className="w-[500px] h-[600px] bg-blue-200 rounded-lg shadow-lg flex flex-col items-center ">
                <h1 className="text-3xl font-bold text-gray-700 m-2.5">Add Product</h1>
                <input className="w-[400px] h-[50px] border border-black rounded-xl text-center m-[5px]" placeholder="Product ID" />
                <input className="w-[400px] h-[50px] border border-black rounded-xl text-center m-[5px]" placeholder="Product Name" />
                <input className="w-[400px] h-[50px] border border-black rounded-xl text-center m-[5px]" placeholder="Alternative Names" />
                <input className="w-[400px] h-[50px] border border-black rounded-xl text-center m-[5px]" placeholder="Price" />
                <input className="w-[400px] h-[50px] border border-black rounded-xl text-center m-[5px]" placeholder="Label Price" />
                <textarea className="w-[400px] h-[50px] border border-black rounded-xl text-center m-[5px]" placeholder="Description" />
                <input className="w-[400px] h-[50px] border border-black rounded-xl text-center m-[5px]" placeholder="Stock Quentity" />
                <div className="w-[400px] h-[100px] flex justify-between items-center rounded-lg">
                    <Link to={"/admin/products"} className="bg-red-500 text-white w-[180px] text-center p-[10px] rounded-lg  hover:bg-red-600 cursor-pointer">Cancel</Link>
                    <button className="bg-green-600 text-white w-[180px] text-center p-[10px] rounded-lg ml-[10px] hover:bg-red-600 cursor-pointer">Add Product</button>


                </div>





            </div>
            
        </div>
    )
}

// productId,
// name,

// altNames,

// price,

// labledPrice,

// description,

// images,

// stock
