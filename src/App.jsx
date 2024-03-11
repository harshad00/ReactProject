import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import Watchlist from "./components/Watchlist";

import {  BrowserRouter, Routes, Route, useFetcher } from "react-router-dom";

("react-router-dom");
function App() {

  const [watchlist, setWatchlist] = useState([]);
   
  let handleAddtoWatchlist = (moviObj) => {

    let newWatchList = [...watchlist, moviObj]
    localStorage.setItem('moviesApp', JSON.stringify(newWatchList))
    setWatchlist(newWatchList)
    console.log(newWatchList);
  }

  let handleRemoveFromWatchlist = (moviObj) => {

    let filteredWatchilist = watchlist.filter((movie) => {
      return movie.imdbid != moviObj.imdbid
    })
    
    setWatchlist(filteredWatchilist)
    localStorage.setItem('moviesApp', JSON.stringify(filteredWatchilist))
  }
 
  useEffect(()=>{
   let moviesFormLocalStorage = localStorage.getItem('moviesApp');
   if(!moviesFormLocalStorage){
    return 
   }
  setWatchlist(JSON.parse(moviesFormLocalStorage))
  }, [])


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies watchlist={watchlist}
                 handleAddtoWatchlist={handleAddtoWatchlist}
                 handleRemoveFromWatchlist={handleRemoveFromWatchlist} />
              </>
            }
          />
          <Route path="/Watchlist" element={<Watchlist watchlist={watchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} setWatchlist={setWatchlist} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
