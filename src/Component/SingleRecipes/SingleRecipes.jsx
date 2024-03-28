import { ImClock } from "react-icons/im";
import { ImFire } from "react-icons/im";


const SingleRecipes = ({recipeProps,handleCart}) => {
    const {recipe_id,recipe_name,short_description,ingredients,recipe_image,preparing_time,calories}=recipeProps
    // console.log(handleCart)
    return (
        <div>
                  <div className="card lg:w-96 sm:w-80 bg-base-100 shadow-xl ">
                    <figure><img src={recipe_image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{recipe_name}</h2>
                        <p className="description">{short_description}</p>

                        <div className="card-ingredients border-t-2 border-yellow-500">
                            
                            {
                                ingredients.map(i=><li key={i}> {i} </li>)
                            }
                            
                                                
                        </div>
                        <div className="flex border-t-2 border-yellow-500">
                            <p className="flex items-center text-xl"><ImClock /> {preparing_time}minutes</p>
                            <p className="flex items-center text-xl"><ImFire />{calories} calories</p>
                        </div>
                        <div className="card-actions">

                        <button onClick={()=> handleCart (recipeProps) }  className="btn btn-success rounded-3xl font-bold">Want to Cook</button>
                       
                        </div>
                    </div>
                    </div>
        </div>
    );
};

export default SingleRecipes;