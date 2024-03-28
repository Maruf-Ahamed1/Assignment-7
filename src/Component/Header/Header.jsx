import { FaRegUserCircle } from "react-icons/fa";


const Header = () => {
    return (
        <div className="navbar bg-base-100 mt-8 lg:pl-32 lg:pr-32">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a href="#">Home</a></li>
                <li><a href="#">Recipes</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Search</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-4xl  text-[#150B2B] font-bold">Recipe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl">
            <li><a href="#">Home</a></li>
            <li><a href="#">Recipes</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Search</a></li>
          </ul>
        </div>
        <div className='navbar-end gap-4'>
              <label className="input input-bordered flex items-center gap-2  border-2 border-purple-300 rounded-xl">
                <input type="text" className="grow" placeholder="Search" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
              </label>
              <button className="text-4xl p-2 bg-green-400 rounded-3xl"><FaRegUserCircle /></button>
        </div>
      </div>
    );
};

export default Header;