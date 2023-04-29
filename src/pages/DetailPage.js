import { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const DetailPage = () => {
let {ID: movieID} = useParams('id')
let [movieDetail,updateMovieDetail] = useState([]);
let navigate = useNavigate()
useEffect(()=>{


  let fetchingAPI = async ()=>{
    let movieURL = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${process.env.REACT_APP_API_KEY}`
    let fetching = await fetch(movieURL);
  let converINJson = await fetching.json();
  if(converINJson.success == false){
    navigate('*')
  }
  updateMovieDetail(converINJson)
}
fetchingAPI()

  
  },[movieID])
  
useEffect(()=>{
  document.title=movieDetail.original_title
},[movieDetail])

let {poster_path,budget,adult,release_date,runtime,status,original_title,vote_average,vote_count,genres,spoken_languages,overview} = movieDetail;
let moviePoster = `https://image.tmdb.org/t/p/original/${poster_path}`

 
  return (
  
  )
}


