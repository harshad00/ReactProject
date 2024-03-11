import React from "react";
import Watchlist from "./Watchlist";

function Moviecard({
  movieobj,
  poster_path,
  name,
  handleAddtoWatchlist,
  handleRemoveFromWatchlist,
  watchlist,
}) {
  function doesContain(movieobj) {
    for (let i = 0; i < watchlist.length; i++) {
      // console.log(watchlist.length);
      if (watchlist[i].imdbid == movieobj.imdbid) {
        return true;
      }
    }
    return false;
  }
  return (
    <div
      className=" mt-4 h-[20rem] w-[250px] bg-cover  bg-center rounded-xl flex flex-col items-end justify-between  hover:scale-105 duration-300 hover:cursor-pointer overflow-hidden"
      style={{ backgroundImage: `url(${poster_path} )` }}
    >
      {doesContain(movieobj) ? (
        <div
          onClick={() => handleRemoveFromWatchlist(movieobj)}
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg hover:bg-black/65  bg-black/35">
          &#10060;
        </div>
       ):(
        <div
          onClick={() => handleAddtoWatchlist(movieobj)}
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg hover:bg-black/65  bg-black/35">  
          &#128525;
        </div>
      )}
      <div className="bg-slate-800/60 flex  p-2 justify-center items-end font-bold  w-full text-white text-center ">
        {name}
      </div>
    </div>
  );
}

export default Moviecard;
