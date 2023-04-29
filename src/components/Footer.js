import { Link,NavLink } from "react-router-dom";

export const Footer = () => {
  return (

<footer className="bg-white  shadow dark:bg-gray-900 mt-32 mb-0 mx-0">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <span  className="flex items-center mb-4 sm:mb-0">
                <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Cinebite</span>
            </span>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                     <NavLink to='/' className="mr-4 hover:underline md:mr-6" end>Home</NavLink>
                </li>
                <li>
                        <NavLink to='/movie/popular' className="mr-4 hover:underline md:mr-6" >Popular</NavLink>
                </li>
                <li>
                    <NavLink to='/movie/top' className="mr-4 hover:underline md:mr-6" >Top Rated</NavLink>
                </li>
                <li>
                   <NavLink to='/movie/upcoming' className="mr-4 hover:underline md:mr-6" >Upcoming</NavLink>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a className="hover:underline">Cinebite™</a>. All Rights Reserved.</span>
    </div>
</footer>


  )
}

