import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";


export const Header = ({updatedTheme,theme}) => {
let [hidden,updateHidden] = useState([{stateName:'HiddenNav',values:false},{stateName:'search',values:false},{stateName:'HiddenNav',values:false}])
let navigate = useNavigate()
function redirectToSearc(e){

  e.preventDefault();
  let searchQuery  = e.target.searchHandler.value;
  navigate(`/search?squery=${searchQuery}`)
  e.target.reset()
}



  return (
    <header className="p-0 m-0">

<nav className="dark:bg-gray-900 bg-white border-b-2 border-slate-100 dark:border-0 mb-2  m-0">
  <div className="max-w-full flex flex-wrap items-center justify-between mx-auto p-4">
  <span className="flex items-center">
      <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Cinebite</span>
  </span>
  <div className="flex md:order-2 items-center">

  <button onClick={()=> updatedTheme(!theme)} id="theme-toggle" type="button" className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm py-[7px] px-2 border-gray-300 border mr-2">

    <svg id="theme-toggle-dark-icon" className={`${theme && 'hidden'} w-5 h-5`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
    </svg>

    <svg id="theme-toggle-light-icon" className={`${!theme && 'hidden'} w-5 h-5`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path>
    </svg>
</button>




    <button onClick={()=> {updateHidden(hidden.map((val) => 
    val.stateName == 'search' ? {...val,values:!val.values } : val  ))}} type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >
      <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
      <span className="sr-only">Search</span>
    </button>
    <div className="relative hidden md:block">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
        <span className="sr-only">Search icon</span>
      </div>
<form onSubmit={(e)=>redirectToSearc(e)} action="">
  
<input name="searchHandler" type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />

</form>
    </div>
    <button onClick={()=> {updateHidden(hidden.map((val) => 
    val.stateName == 'HiddenNav' ? {...val,values:!val.values } : val  ))}} data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
      <span className="sr-only">Open menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
    </button>
  </div>
    <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1`} id="navbar-search">
      <div className={`relative mt-5 ${!hidden[1].values ? 'hidden' : ''}`}>
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
        </div>
        <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
      </div>
      <ul className={`flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ${!hidden[0].values ? 'hidden' : ''} md:flex`}>
       
       
<li>
<NavLink to='/' className={`block py-2 pl-3 pr-4 md:mb-0 mb-2 text-lime-50 dark:bg-blue-700 md:dark:bg-transparent bg-[#1471f5] rounded nav-link md:bg-transparent md:text-gray-500 md:p-0 md:dark:text-gray-400`} end>Home</NavLink>
</li>

        <li>
          <NavLink to='/movie/popular' className="block py-2 pl-3 pr-4 md:mb-0 mb-2 text-lime-50 dark:bg-blue-700 md:dark:bg-transparent bg-[#1471f5] rounded nav-link md:bg-transparent md:text-gray-500 md:p-0 md:dark:text-gray-400" >Popular</NavLink>
        </li>

        <li>
          <NavLink to='/movie/top' className="block py-2 pl-3 pr-4 md:mb-0 mb-2 text-lime-50 dark:bg-blue-700 md:dark:bg-transparent bg-[#1471f5] rounded nav-link md:bg-transparent md:text-gray-500 md:p-0 md:dark:text-gray-400" >Top Rated</NavLink>
        </li>

        <li>
          <NavLink to='/movie/upcoming' className="block py-2 pl-3 pr-4 md:mb-0 mb-2 text-lime-50 dark:bg-blue-700 md:dark:bg-transparent bg-[#1471f5] rounded nav-link md:bg-transparent md:text-gray-500 md:p-0 md:dark:text-gray-400" >Upcoming</NavLink>
        </li>
       


        <li>
          <NavLink to='/favourite' className="block py-2 pl-3 pr-4 md:mb-0 mb-2 text-lime-50 dark:bg-blue-700 md:dark:bg-transparent bg-[#1471f5] rounded nav-link md:bg-transparent md:text-gray-500 md:p-0 md:dark:text-gray-400" >Watch List</NavLink>
        </li>
  
    
       
       
       
      </ul>
    </div>
  </div>
</nav>

  </header>
  )
}

