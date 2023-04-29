import { useParams,useSearchParams } from "react-router-dom";
import { UseFatch } from "../hooks/UseFatch";
import { Cards } from "../components"
import { useEffect } from "react";


export const SearchRSLT = ({pageContent,watchList,updateWatchlist}) => {
  let [serachQuery] = useSearchParams();
  let searchPera = serachQuery.get('squery')
  let {api} = UseFatch(`https://api.themoviedb.org/3/${pageContent}?api_key=${process.env.REACT_APP_API_KEY}&query=${searchPera}`);

useEffect(()=>{
  document.title= searchPera
},[searchPera])


  return (
  <main>
  <h1 className="text-gray-900 dark:text-white py-10 text-2xl">{api.length > 0 ? `Search result for ${searchPera}..` : `No reslt found for ${searchPera}`} </h1>
    <div className="flex flex-wrap pr-2 max-[600px]:px-0">
      {api && api.map((movieDetail,index) =>(
    
    <Cards key={index} movieDetail={movieDetail} watchList={watchList} updateWatchlist={updateWatchlist}/>
      ))}
    </div>
      </main>
  )
}


