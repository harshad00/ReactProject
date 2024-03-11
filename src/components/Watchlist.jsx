import React, { useEffect, useState } from "react";

const Watchlist = ({ watchlist,handleRemoveFromWatchlist, setWatchlist }) => {
  const [search, setSearch] = useState("");
  const [genreList, setGenresList] = useState(['All Genres']);
  const [currGenre, setCurrGenre] = useState('All Genres');

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let handleFilter = (genre) =>{
setCurrGenre(genre);

  }

  let sortIncreasing = () => {
      let sortedIncreasing =   watchlist.sort((movieA, movieB)=>{
       return movieA.imdbrating - movieB.imdbrating;
    })

    setWatchlist([...sortedIncreasing])
  };

  let sortDecreasing = () => {
    let sortedDecreasing = watchlist.sort((movieA, movieB)=>{
      return   movieB.imdbrating - movieA.imdbrating;
    })
    setWatchlist([...sortedDecreasing])
  };
useEffect(() => {
  let temp = watchlist.map((movieobj)=>{
    return movieobj.genre[1]
  })
   temp = new Set(temp);
  setGenresList(['All Genres' , ...temp]);
  console.log(temp);
},[watchlist])


  return (
    <>
      <div className="flex justify-center flex-row m-4">
       
        {genreList.map((genre)=>{ 
          return <div onClick={()=> handleFilter(genre)} className={ currGenre === genre ? 
          " bg-blue-400 flex justify-center items-center w-[9rem] text-white h-[2rem] rounded-[20px] m-2 cursor-pointer": ' bg-gray-400/70 flex cursor-pointer justify-center items-center w-[9rem] text-white h-[2rem] rounded-[20px] m-2'}>
          {genre}
        </div>})}
       
      
      </div>

      <div className=" flex justify-center my-4">
        <input
          className=" overflow-hidden rounded-sm h-[3rem] w-[18rem] bg-gray-200 outline-none px-2"
          onChange={handleSearch}
          value={search}
          placeholder="Search For movies"
          type="text"
        />
      </div>

      <div className=" bg-gray-300 m-8">
        <table className=" w-full  text-center">
          <thead className=" border-b-2">
            <tr>
              <th>Name</th>
              <th className="flex gap-[7px] justify-center">
                <div className="cursor-pointer" onClick={sortIncreasing}><i className="fa-solid fa-up-long"></i></div>
                <div>Ratings</div>
                <div className=" cursor-pointer" onClick={sortDecreasing}><i className="fa-solid fa-down-long"></i></div>
              </th>
              <th>Released Year</th>
              <th>Genre</th>
            </tr>
          </thead>

          <tbody>
            {watchlist.filter((movieobj)=>
            {
              if(currGenre == "All Genres" ){
                return true
              }else{
                return movieobj.genre[1] == currGenre;
              }

            }).filter((movieobj) => {
                return movieobj.title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((movieobj) => {
                return (
                  <tr className=" border-black ">
                    <td className="flex items-center">
                      <img
                        className=" p-[.5rem] rounded-[10px] w-[10rem] h-[5rem]"
                        src={`${movieobj.imageurl}`}
                        alt=""
                      />
                      <div className="ml-[3rem]"> {movieobj.title}</div>
                    </td>
                    <td>{movieobj.imdbrating}</td>
                    <td>{movieobj.released}</td>
                    <td> {movieobj.genre[1]}</td>
                    <td>
                      {" "}
                      <button onClick={()=>handleRemoveFromWatchlist(movieobj)} className=" text-red-400"> Delete</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Watchlist;
