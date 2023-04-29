import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import {ListingPage,DetailPage,SearchRSLT,PageNotFound,WatchList} from '../pages';

import React, { useState } from 'react'
export const AllRouters = () => {

  return (
<Routes>
<Route path="/" element={<ListingPage  pageTitle='CineBite' pageContent={'now_playing'}/>} />
<Route path="/movie/:ID" element={<DetailPage pageTitle='Movie Detail'/>} />
<Route path="/movie/popular" element={<ListingPage pageContent={'popular'} pageTitle='Most Popular Movie'/>} />
<Route path="/movie/top" element={<ListingPage  pageContent={'top_rated'} pageTitle='Top Rating Movies'/>} />
<Route path="/movie/upcoming" element={<ListingPage    pageContent={'upcoming'} pageTitle='Upcoming Movies'/>} />
<Route path="/search" element={<SearchRSLT   pageContent={'search/movie'}   pageTitle='Search Result For'/>} />


<Route path="/favourite"  element={<WatchList pageContent={'Watch List'} pageTitle='Favourites' />}/>

<Route path="*" element={<PageNotFound/>} />
</Routes>

  )
}



