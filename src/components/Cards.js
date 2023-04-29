import { useParams,useSearchParams,useLocation,Link } from "react-router-dom"
import { WatchLists } from "../context/WListContext";
import { useEffect, useState } from "react";

export const Cards = ({movieDetail}) => {
let {backdrop_path ,original_title,overview,id,vote_average} = movieDetail ;
let posterURL = 'https://image.tmdb.org/t/p/original'
let movie_poster = backdrop_path ? `${posterURL+backdrop_path}` : 'https://m.media-amazon.com/images/M/MV5BMTU2NTA3MTEzN15BMl5BanBnXkFtZTYwOTkwNzg2._V1_FMjpg_UX1000_.jpg';
let [inWlist,convertinWlist] = useState(true)
let {watchListMovie, addToWatchList,removeFromWatchList} = WatchLists()


useEffect(()=>{
let wlistchecker = watchListMovie.find(val => val.id == movieDetail.id)

wlistchecker ? convertinWlist(true) : convertinWlist(false) 

},[watchListMovie,id])

function watchlistHandler(movieID){
    addToWatchList(movieDetail)
}

function watchlistRemoveHandler(movieID){
    removeFromWatchList(movieDetail)
}


return (


   <>
   


  <div className=" lg:basis-3/12 md:basis-4/12 sm:basis-6/12 min-[480px]:basis-6/12 max-[400px]:basis-12/12 px-2 max-[600px]:px-1 mb-3 sm:mb-5">
  <div className="w-full ml-0 p-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-600">
    <span >
        <img className="rounded-t-lg w-full h-60 object-cover object-top" src={movie_poster} alt="product image" />
    </span>
    <div className="px-2 pb-5 mt-5">
        <span >
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{original_title}</h5>

            <p className="text-gray-600 dark:text-slate-400 mt-3">{overview}</p>
        </span>
        <div className="flex items-center mt-2.5 mb-5">
            <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{vote_average}</span>
        </div>
        <div className="center mt-10">
           

{
    inWlist ?  (
    
    <span onClick={() => watchlistRemoveHandler(id)}  className="text-white bg-gray-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm block px-5 cursor-pointer py-2.5 text-center dark:bg-gray-700 dark:hover:bg-blue-700 dark:focus:ring-blue-800" disabled>- Remove</span>
    
    ) 
    
    : 
    
    (

        <span onClick={() => watchlistHandler(id)}  className="text-white bg-gray-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm block px-5 cursor-pointer py-2.5 text-center dark:bg-gray-700 dark:hover:bg-blue-700 dark:focus:ring-blue-800" disabled>+ Watch LIst</span>
    )
}

           
            <Link to={`/movie/${id}`}   className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm block px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3">Overview</Link>
        </div>
    </div>
</div>

  </div>



   </>
  )
}


