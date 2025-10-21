import './App.css'
import Header from './components/header'
import ProductCard from './components/product-card'

function App() {

  return (
    <>

    <div className="w-full h-screen bg-orange-950">
      <div className="w-full h-screen bg-green-300 flex flex-col justify-center items-center" >
        <div className="w-[90px] h-[90px] bg-red-600"></div>
        <div className="w-[90px] h-[90px] bg-blue-600 fixed right-[50px] bottom-[50px]"> </div>
        <div className="w-[90px] h-[90px] bg-yellow-300 absolute right-[50px] bottom-[50px]"></div>
      </div>
    </div>
    </>
  )
}



export default App
