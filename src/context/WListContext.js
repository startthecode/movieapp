import { createContext, useContext, useReducer } from "react"
import wtreducer from "../reducer/wtreducer"



let initialWatchList = {
    watchListMovie :JSON.parse(localStorage.getItem('favourites')) || [],
  
}

const WatchListProvider = createContext(initialWatchList)
export const WatchListContext = ({children}) => {
let [presentWList,updateWList] = useReducer(wtreducer,initialWatchList)


function addToWatchList(movie){
let updatedList = [...presentWList.watchListMovie,movie];
localStorage.setItem('favourites',JSON.stringify(updatedList))
updateWList({
    type:'updateWathcList',
    payload:{
        addthisMovie: updatedList
    }
})

}


function removeFromWatchList(movie){
    let updatedList = presentWList.watchListMovie.filter(val => val.id !== movie.id);
localStorage.setItem('favourites',JSON.stringify(updatedList))
    
    updateWList({
        type:'updateWathcList',
        payload:{
            addthisMovie: updatedList
        }
    })
    
    }



    let value = {
        watchListMovie :presentWList.watchListMovie,
        addToWatchList,
        removeFromWatchList
    }

  
    return (
        <WatchListProvider.Provider value={value}>
{children}

        </WatchListProvider.Provider>
    
  )
}



export const WatchLists = () => useContext(WatchListProvider)
