
import './App.css'
import Header from './Component/Header/Header'
import Body from './Component/Body/Body'
import Footer from './Component/Footer/Footer'
import { useEffect, useState } from "react";
import SingleRecipes from "./Component/SingleRecipes/SingleRecipes";
import toast, { Toaster } from 'react-hot-toast';




function App() {

  const [recipes, setRecipes] = useState([])
  const [cart, setCart] = useState([])




  useEffect(() => {
    fetch('./fake.json')
      .then(res => res.json())
      .then(data => setRecipes(data))
  }, [])




  const notify = () => toast('Already Existed.');
  


  const handleCart = (p) => {
    console.log(p)
    const isExist=cart.find(Element => Element.recipe_id == p.recipe_id)
    if(!isExist){
      setCart([...cart,p])
    }
    else{
      notify ();
    }
  };

// _______________________________________________//

const handleDeleted = (id) =>{
  // console.log(id)
  const newCart = cart.filter(item => item.recipe_id !=id)
  // console.log(newCart)
  setCart(newCart)
}
// _________________________________________________//



  // ________________Start Return____________________//
  return (
    <>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
      
      {/* _____________________________________ */}



      <div className="grid lg:grid-cols-2 sm:grid-cols-1 lg:p-24 w-full justify-between lg:gap-60 mx-auto lg:ml-20">
        {/* card section */}
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 w-11/12  justify-around mx-auto lg:gap-x-60 gap-y-20">
          {
            recipes.map(RP => <SingleRecipes key={recipes.id} recipeProps={RP} handleCart={handleCart}  ></SingleRecipes>)
          }
        </div>



        {/*  table section*/}
        <div className="mt-8 md:container md:mx-auto lg:mx-auto  lg:w-96 gap-60 lg:ml-0 ">
          <div className="overflow-x-auto">
            <div className="lg:w-96 border-2 border-purple-50 shadow-lg mb-4 rounded-xl w-72 mx-auto">
              <h2 className="card-title flex items-center justify-center pb-2">Want to Cook : {cart.length} </h2>
            </div>

            <div className="w-full justify-around text-orange-300 mx-auto">
              <div className="overflow-x-auto text-orange-300 mx-auto">
                <table className="justify-around text-cyan-600  lg:w-96 mx-auto text-xl">
                  {/* head */}
                  <div className='lg:w-96  justify-around flex'>
                    <thead>

                      <tr className='justify-around text-xl flex gap-x-20  mb-2   mx-auto'>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                      </tr>
                     <hr />

                    </thead>
                  </div>





                  {/* row___ 1 */}

                  <div className="">
                    {
                      cart.map((item,index ) => (
                        <div className="cart-info flex justify-around lg:w-96  my-5 bg-gray-300 h-16 items-center mx-auto"  key={item.recipe_id}>
                          <p>{index+1}</p>
                          <h1>{item.recipe_name}</h1>
                          <p>{item.preparing_time} </p>
                          <p>{item.calories}</p>
                          <button onClick={()=> handleDeleted(item.recipe_id)} className="btn btn-success w-20   rounded-3xl">Preparing</button>
                        </div>
                      ))
                    }
                  </div>





                </table>
              </div>
            </div>
          </div>
        </div>
      </div>




      <Toaster
  position="top-center"
  reverseOrder={false}
/>



      {/* ------------------------------------- */}

    </>
  )
}

export default App
