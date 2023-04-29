import { Link } from "react-router-dom"


export const PageNotFound = () => {
document.title='Page Not Found'

  return (
    <main>
   <div className=" h-[52vh] flex items-center justify-center flex-col">
   <h1 className=" md:text-4xl text-2xl lg:text-[150px] font-bold dark:text-slate-300">404</h1>
   <Link to='/'>
   <span className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md block px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-20">Back To Home</span>
   </Link>
   </div>
  </main>
  )
}


