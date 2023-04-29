import { useEffect } from "react";
import { WatchListCard } from "../components"
import { UseFatch } from "../hooks/UseFatch"
import { WatchLists} from "../context/WListContext";

export const WatchList = ({pageTitle,pageContent}) => {
let {watchListMovie} = WatchLists()
console.log(WatchLists())

useEffect(() =>{ document.title = pageTitle},[pageTitle])

    return (
    <main>
<h1 className="text-3xl font-bold capitalize text-gray-800 mt-10 mb-8 px-3 dark:text-gray-100">{pageTitle}</h1>
<div className="flex flex-wrap pr-2 max-[600px]:px-0">
  {watchListMovie.length > 0 ? watchListMovie.map((movieDetail,index) =>(

<WatchListCard key={index} movieDetail={movieDetail} />
  )): <h3 className="text-white px-10">No favourite</h3>}
</div>
  </main>

  )
}

