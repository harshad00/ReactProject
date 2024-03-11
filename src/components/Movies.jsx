import { useEffect, useState } from "react";
import Moviecard from "./Moviecard";
import Pagination from "./Pagination";

const Movies = ({ handleAddtoWatchlist, handleRemoveFromWatchlist, watchlist }) => {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPagenNo] = useState(1);

  const handlePrev = () => {
    if (pageNo === 1) {
      setPagenNo(pageNo);
    } else {
      setPagenNo(pageNo - 1);
    }
  };

  const handleNext = () => {
    setPagenNo(pageNo + 1);
  };

  const url =
    "https://ott-details.p.rapidapi.com/advancedsearch?start_year=1970&end_year=2020&min_imdb=6&max_imdb=7.8&genre=action&language=english&type=movie&sort=latest&page=1";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ce373d5341msh8fb7accbaa2a8b5p1f3c29jsn1f4c835f91a1",
      "X-RapidAPI-Host": "ott-details.p.rapidapi.com",
    },
  };

  const paginatedUrl = `${url}?page=${pageNo}`;

  // Fetch data on component mount
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(paginatedUrl, options);
        const result = await response.json();
        console.log(result.results);
        setMovies(result.results);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [pageNo]); // Empty dependency array ensures this effect runs only once on mount

  // Fetch data when pageNo changes
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch(paginatedUrl, options);
  //       const result = await response.json();
  //       console.log(result); // Log the entire result to inspect its structure

  //       // Update movies state by concatenating the new results
  //       setMovies((prevMovies) => [...prevMovies, ...result.results]);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }

  //   fetchData();
  // }, [pageNo]); // Include pageNo in the dependency array

  return (
    <div>
      <div className=" w-full text-center my-[1rem]">
     
        <h3 className="font-bold"> Trending Movies </h3>
      </div>
      <div className="flex gap-4 flex-wrap justify-center">
        {movies.map((movieobj) => (
          <Moviecard
            key={movieobj.imdbid}
            movieobj={movieobj}
            name={movieobj.title || "No Title"}
            poster_path={
              movieobj.imageurl ||
              "https://images.unsplash.com/photo-1536318533971-7a25565daefc?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            handleAddtoWatchlist={handleAddtoWatchlist}
            handleRemoveFromWatchlist={handleRemoveFromWatchlist}
            watchlist={watchlist}
          />
        ))}
      </div>

      <Pagination
        pageNo={pageNo}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
    </div>
  );
};

export default Movies;
