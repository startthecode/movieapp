import { useEffect } from "react";
import { Cards } from "../components"
import { UseFatch } from "../hooks/UseFatch"

export const ListingPage = ({pageTitle,pageContent}) => {
let {api} = UseFatch(`https://api.themoviedb.org/3/movie/${pageContent}?api_key=${process.env.REACT_APP_API_KEY}`);


useEffect(() =>{ document.title = pageTitle},[pageTitle])

    return (
    <main>
<h1 className="text-3xl font-bold capitalize text-gray-800 mt-10 mb-8 px-3 dark:text-gray-100">{pageTitle}</h1>
<div className="flex flex-wrap pr-2 max-[600px]:px-0">
  {api && api.map((movieDetail,index) =>(

<Cards key={index} movieDetail={movieDetail} />
  ))}
</div>
  </main>
  )
}

